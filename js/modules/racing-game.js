// js/modules/racing-game.js
// Engine Game "Đua xe kiến thức" - Vượt Chướng Ngại Vật - Bài 8 KHTN 7

import { sound } from "./audio.js";

export class RacingGame {
    constructor(canvasId) {
      this.canvas = document.getElementById(canvasId);
      this.ctx = this.canvas ? this.canvas.getContext("2d") : null;
      this.trackLength = 1000;
      this.mode = "vs_ai"; // 'vs_ai', 'pvp', 'online'
      this.aiDifficulty = "medium";
      this.onlineRole = "host"; // 'host' (lane 1) hoặc 'guest' (lane 2)
      this.onlineSync = null;

      // 4 Chướng ngại vật / Trạm kiểm soát dọc đường đua 1000m
      this.obstacles = [
        { id: 1, dist: 200, title: "Trạm 1: Giới hạn tốc độ đô thị (200m)", shortName: "Trạm 1", badge: "🚧 200m: 50 km/h", p1Cleared: false, p2Cleared: false },
        { id: 2, dist: 450, title: "Trạm 2: Máy bắn tốc độ CSGT (450m)", shortName: "Trạm 2", badge: "📷 450m: Radar CSGT", p1Cleared: false, p2Cleared: false },
        { id: 3, dist: 700, title: "Trạm 3: Cổng quang điện đo thời gian (700m)", shortName: "Trạm 3", badge: "⏱️ 700m: Quang điện", p1Cleared: false, p2Cleared: false },
        { id: 4, dist: 880, title: "Trạm 4: Thử thách bứt phá cự ly (880m)", shortName: "Trạm 4", badge: "⚡ 880m: Về đích", p1Cleared: false, p2Cleared: false }
      ];

      this.player1 = {
        name: "Học sinh 1",
        color: "#F97316",
        pos: 0,
        visualPos: 0,
        speed: 0,
        cruiseSpeed: 18,
        isBlocked: false,
        currentObstacleIdx: 0,
        score: 0,
        streak: 0,
        nitro: 0,
        smoke: 0
      };

      this.player2 = {
        name: "Bot AI KHTN",
        color: "#2563EB",
        pos: 0,
        visualPos: 0,
        speed: 0,
        cruiseSpeed: 16,
        isBlocked: false,
        currentObstacleIdx: 0,
        aiSolveTimer: 0,
        score: 0,
        streak: 0,
        nitro: 0,
        smoke: 0
      };

      this.isRunning = false;
      this.isFinished = false;
      this.winner = null;
      this.lastTime = 0;
      this.animId = null;

      // Callbacks
      this.onFinishCallback = null;
      this.onProgressUpdate = null;
      this.onReachObstacle = null;
      this.onAiClearedObstacle = null;

      this.resizeCanvas();
      window.addEventListener("resize", () => this.resizeCanvas());
    }

    resizeCanvas() {
      if (!this.canvas) return;
      const rect = this.canvas.parentElement.getBoundingClientRect();
      this.canvas.width = Math.max(500, rect.width || 650);
      this.canvas.height = 240;
      this.render();
    }

    setMode(mode, aiDifficulty = "medium", p1Name = "Học sinh", p2Name = "Bot AI", onlineRole = "host") {
      this.mode = mode;
      this.aiDifficulty = aiDifficulty;
      this.onlineRole = onlineRole;

      if (mode === "online") {
        if (onlineRole === "host") {
          this.player1.name = p1Name;
          this.player2.name = p2Name || "Người chơi 2 (Online)";
        } else {
          this.player1.name = p2Name || "Chủ phòng (Online)";
          this.player2.name = p1Name;
        }
      } else if (mode === "pvp") {
        this.player1.name = p1Name || "Người chơi 1 (Cam)";
        this.player2.name = p2Name || "Người chơi 2 (Xanh)";
      } else {
        this.player1.name = p1Name;
        this.player2.name = `Bot AI (${this.getDifficultyLabel(aiDifficulty)})`;
      }
      this.reset();
    }

    getDifficultyLabel(diff) {
      if (diff === "easy") return "Dễ";
      if (diff === "hard") return "Chuyên gia";
      return "Vừa";
    }

    getAiBaseSpeed() {
      if (this.mode === "pvp" || this.mode === "online") return 18;
      if (this.aiDifficulty === "easy") return 12;
      if (this.aiDifficulty === "hard") return 21;
      return 16;
    }

    getAiSolveDelay() {
      if (this.aiDifficulty === "easy") return 5.5;
      if (this.aiDifficulty === "hard") return 2.3;
      return 3.8;
    }

    reset() {
      this.obstacles.forEach(obs => {
        obs.p1Cleared = false;
        obs.p2Cleared = false;
      });

      this.player1.pos = 0;
      this.player1.visualPos = 0;
      this.player1.speed = 0;
      this.player1.cruiseSpeed = 18;
      this.player1.isBlocked = false;
      this.player1.currentObstacleIdx = 0;
      this.player1.score = 0;
      this.player1.streak = 0;
      this.player1.nitro = 0;
      this.player1.smoke = 0;

      this.player2.pos = 0;
      this.player2.visualPos = 0;
      this.player2.speed = 0;
      this.player2.cruiseSpeed = this.getAiBaseSpeed();
      this.player2.isBlocked = false;
      this.player2.currentObstacleIdx = 0;
      this.player2.aiSolveTimer = 0;
      this.player2.score = 0;
      this.player2.streak = 0;
      this.player2.nitro = 0;
      this.player2.smoke = 0;

      this.isRunning = false;
      this.isFinished = false;
      this.winner = null;
      this.lastTime = performance.now();

      if (this.animId) cancelAnimationFrame(this.animId);
      this.render();
    }

    start() {
      this.reset();
      this.isRunning = true;
      this.player1.speed = 10;
      this.player2.speed = 10;
      this.lastTime = performance.now();
      sound.playBoost();
      this.loop(this.lastTime);
    }

    stop() {
      this.isRunning = false;
      if (this.animId) cancelAnimationFrame(this.animId);
    }

    handleAnswer(playerNumber, isCorrect, level = "nhan_biet") {
      if (!this.isRunning || this.isFinished) return null;
      const p = playerNumber === 1 ? this.player1 : this.player2;
      const boostMap = { nhan_biet: 80, thong_hieu: 120, van_dung: 180 };
      const currentObs = this.obstacles[p.currentObstacleIdx];

      if (isCorrect) {
        p.streak += 1;
        sound.playCorrect();
        sound.playBoost();
        const mult = 1 + (p.streak - 1) * 0.2;
        const scoreGain = Math.round((boostMap[level] || 100) * mult);
        p.score += scoreGain;

        if (p.isBlocked && currentObs) {
          // Mở chướng ngại vật thành công!
          if (playerNumber === 1) currentObs.p1Cleared = true;
          else currentObs.p2Cleared = true;
          p.isBlocked = false;
          p.currentObstacleIdx++;
          p.nitro = 75; // Phụt lửa nitro
          p.speed = 30; // 108 km/h bứt tốc
          p.pos = Math.min(this.trackLength, p.pos + 5);

          // Nếu đang chơi Online, gửi thông báo mở rào sang đối thủ
          if (this.mode === "online" && this.onlineSync) {
            this.onlineSync.send({
              type: "OBSTACLE_CLEARED",
              playerNum: playerNumber,
              obsId: currentObs.id
            });
          }

          this.checkFinish();
          return { success: true, isObstacleCleared: true, obstacle: currentObs, scoreGain, streak: p.streak, pos: p.pos, speed: p.speed };
        } else {
          // Trả lời bonus khi xe đang chạy
          p.nitro = 45;
          p.speed = Math.min(35, p.speed + 8);
          p.pos = Math.min(this.trackLength, p.pos + 15);
          this.checkFinish();
          return { success: true, isObstacleCleared: false, obstacle: null, scoreGain, streak: p.streak, pos: p.pos, speed: p.speed };
        }
      } else {
        p.streak = 0;
        sound.playWrong();
        p.smoke = 50;
        if (p.isBlocked) {
          return { success: false, isObstacleCleared: false, obstacle: currentObs, scoreGain: 0, streak: 0, pos: p.pos, speed: 0 };
        } else {
          p.speed = Math.max(8, p.speed - 6);
          return { success: false, isObstacleCleared: false, obstacle: null, scoreGain: 0, streak: 0, pos: p.pos, speed: p.speed };
        }
      }
    }

    checkFinish() {
      if (this.isFinished) return;
      if (this.player1.pos >= this.trackLength) {
        this.isFinished = true;
        this.winner = this.player1;
        this.stop();
        sound.playWin();
        if (this.mode === "online" && this.onlineSync) {
          this.onlineSync.send({ type: "FINISH_RACE", winnerNum: 1 });
        }
        if (this.onFinishCallback) this.onFinishCallback(this.winner, this.player1, this.player2);
      } else if (this.player2.pos >= this.trackLength) {
        this.isFinished = true;
        this.winner = this.player2;
        this.stop();
        if (this.mode === "vs_ai") sound.playWrong(); else sound.playWin();
        if (this.mode === "online" && this.onlineSync) {
          this.onlineSync.send({ type: "FINISH_RACE", winnerNum: 2 });
        }
        if (this.onFinishCallback) this.onFinishCallback(this.winner, this.player1, this.player2);
      }
    }

    loop(currentTime) {
      if (!this.isRunning) return;
      const dt = Math.min((currentTime - this.lastTime) / 1000, 0.08);
      this.lastTime = currentTime;

      // 1. Cập nhật Player 1
      if (this.mode !== "online" || this.onlineRole === "host") {
        const obs1 = this.obstacles[this.player1.currentObstacleIdx];
        if (obs1 && !obs1.p1Cleared) {
          if (this.player1.pos >= obs1.dist) {
            this.player1.pos = obs1.dist;
            this.player1.speed = 0;
            if (!this.player1.isBlocked) {
              this.player1.isBlocked = true;
              sound.playBrake();
              if (this.onReachObstacle) this.onReachObstacle(1, obs1);
            }
          } else {
            const target = this.player1.nitro > 0 ? 32 : this.player1.cruiseSpeed;
            this.player1.speed += (target - this.player1.speed) * 0.12;
            this.player1.pos = Math.min(obs1.dist, this.player1.pos + this.player1.speed * dt);
            if (this.player1.pos >= obs1.dist) {
              this.player1.pos = obs1.dist;
              this.player1.speed = 0;
              this.player1.isBlocked = true;
              sound.playBrake();
              if (this.onReachObstacle) this.onReachObstacle(1, obs1);
            }
          }
        } else {
          this.player1.isBlocked = false;
          const target = this.player1.nitro > 0 ? 32 : this.player1.cruiseSpeed;
          this.player1.speed += (target - this.player1.speed) * 0.1;
          this.player1.pos = Math.min(this.trackLength, this.player1.pos + this.player1.speed * dt);
        }

        // Broadcast to guest if online
        if (this.mode === "online" && this.onlineSync) {
          this.onlineSync.send({
            type: "CAR_SYNC",
            playerNum: 1,
            pos: this.player1.pos,
            speed: this.player1.speed,
            nitro: this.player1.nitro,
            isBlocked: this.player1.isBlocked
          });
        }
      }

      // 2. Cập nhật Player 2
      if (this.mode === "vs_ai") {
        const obs2 = this.obstacles[this.player2.currentObstacleIdx];
        if (obs2 && !obs2.p2Cleared) {
          if (this.player2.pos >= obs2.dist) {
            this.player2.pos = obs2.dist;
            this.player2.speed = 0;
            if (!this.player2.isBlocked) {
              this.player2.isBlocked = true;
              this.player2.aiSolveTimer = this.getAiSolveDelay();
              sound.playBrake();
              if (this.onReachObstacle) this.onReachObstacle(2, obs2);
            } else {
              this.player2.aiSolveTimer -= dt;
              if (this.player2.aiSolveTimer <= 0) {
                obs2.p2Cleared = true;
                this.player2.isBlocked = false;
                this.player2.currentObstacleIdx++;
                this.player2.nitro = 50;
                this.player2.speed = this.player2.cruiseSpeed * 1.5;
                if (this.onAiClearedObstacle) this.onAiClearedObstacle(obs2);
              }
            }
          } else {
            const variance = Math.sin(currentTime / 800) * 1.5;
            const target = (this.player2.nitro > 0 ? this.player2.cruiseSpeed * 1.5 : this.player2.cruiseSpeed) + variance;
            this.player2.speed += (target - this.player2.speed) * 0.1;
            this.player2.pos = Math.min(obs2.dist, this.player2.pos + this.player2.speed * dt);
            if (this.player2.pos >= obs2.dist) {
              this.player2.pos = obs2.dist;
              this.player2.speed = 0;
              this.player2.isBlocked = true;
              this.player2.aiSolveTimer = this.getAiSolveDelay();
              sound.playBrake();
              if (this.onReachObstacle) this.onReachObstacle(2, obs2);
            }
          }
        } else {
          this.player2.isBlocked = false;
          const variance = Math.sin(currentTime / 800) * 1.5;
          const target = (this.player2.nitro > 0 ? this.player2.cruiseSpeed * 1.5 : this.player2.cruiseSpeed) + variance;
          this.player2.speed += (target - this.player2.speed) * 0.1;
          this.player2.pos = Math.min(this.trackLength, this.player2.pos + this.player2.speed * dt);
        }
      } else if (this.mode === "pvp") {
        // PvP Cùng máy: Player 2 tự động chạy và dừng trước rào chắn
        const obs2 = this.obstacles[this.player2.currentObstacleIdx];
        if (obs2 && !obs2.p2Cleared) {
          if (this.player2.pos >= obs2.dist) {
            this.player2.pos = obs2.dist;
            this.player2.speed = 0;
            if (!this.player2.isBlocked) {
              this.player2.isBlocked = true;
              sound.playBrake();
              if (this.onReachObstacle) this.onReachObstacle(2, obs2);
            }
          } else {
            const target = this.player2.nitro > 0 ? 32 : this.player2.cruiseSpeed;
            this.player2.speed += (target - this.player2.speed) * 0.1;
            this.player2.pos = Math.min(obs2.dist, this.player2.pos + this.player2.speed * dt);
            if (this.player2.pos >= obs2.dist) {
              this.player2.pos = obs2.dist;
              this.player2.speed = 0;
              this.player2.isBlocked = true;
              sound.playBrake();
              if (this.onReachObstacle) this.onReachObstacle(2, obs2);
            }
          }
        } else {
          this.player2.isBlocked = false;
          const target = this.player2.nitro > 0 ? 32 : this.player2.cruiseSpeed;
          this.player2.speed += (target - this.player2.speed) * 0.1;
          this.player2.pos = Math.min(this.trackLength, this.player2.pos + this.player2.speed * dt);
        }
      } else if (this.mode === "online" && this.onlineRole === "guest") {
        // Guest mode online: Player 2 drives locally
        const obs2 = this.obstacles[this.player2.currentObstacleIdx];
        if (obs2 && !obs2.p2Cleared) {
          if (this.player2.pos >= obs2.dist) {
            this.player2.pos = obs2.dist;
            this.player2.speed = 0;
            if (!this.player2.isBlocked) {
              this.player2.isBlocked = true;
              sound.playBrake();
              if (this.onReachObstacle) this.onReachObstacle(2, obs2);
            }
          } else {
            const target = this.player2.nitro > 0 ? 32 : this.player2.cruiseSpeed;
            this.player2.speed += (target - this.player2.speed) * 0.1;
            this.player2.pos = Math.min(obs2.dist, this.player2.pos + this.player2.speed * dt);
            if (this.player2.pos >= obs2.dist) {
              this.player2.pos = obs2.dist;
              this.player2.speed = 0;
              this.player2.isBlocked = true;
              sound.playBrake();
              if (this.onReachObstacle) this.onReachObstacle(2, obs2);
            }
          }
        } else {
          this.player2.isBlocked = false;
          const target = this.player2.nitro > 0 ? 32 : this.player2.cruiseSpeed;
          this.player2.speed += (target - this.player2.speed) * 0.1;
          this.player2.pos = Math.min(this.trackLength, this.player2.pos + this.player2.speed * dt);
        }

        // Broadcast to host
        if (this.onlineSync) {
          this.onlineSync.send({
            type: "CAR_SYNC",
            playerNum: 2,
            pos: this.player2.pos,
            speed: this.player2.speed,
            nitro: this.player2.nitro,
            isBlocked: this.player2.isBlocked
          });
        }
      }

      // Smooth visual positions
      this.player1.visualPos += (this.player1.pos - this.player1.visualPos) * 0.25;
      this.player2.visualPos += (this.player2.pos - this.player2.visualPos) * 0.25;

      if (this.player1.nitro > 0) this.player1.nitro--;
      if (this.player2.nitro > 0) this.player2.nitro--;
      if (this.player1.smoke > 0) this.player1.smoke--;
      if (this.player2.smoke > 0) this.player2.smoke--;

      if (this.onProgressUpdate) {
        this.onProgressUpdate(this.player1, this.player2, this.trackLength, this.obstacles);
      }

      this.checkFinish();
      this.render();

      if (this.isRunning && !this.isFinished) {
        this.animId = requestAnimationFrame(t => this.loop(t));
      }
    }

    render() {
      if (!this.ctx || !this.canvas) return;
      const { width, height } = this.canvas;
      const ctx = this.ctx;

      // 1. Mặt đường nhựa thể thao
      ctx.fillStyle = "#0F172A";
      ctx.fillRect(0, 0, width, height);

      // Cỏ / Lề đường hai bên với vạch ca-rô thể thao
      const curbH = 14;
      for (let x = 0; x < width; x += 24) {
        ctx.fillStyle = (Math.floor(x / 24) % 2 === 0) ? "#DC2626" : "#F8FAFC";
        ctx.fillRect(x, 0, 24, curbH);
        ctx.fillRect(x, height - curbH, 24, curbH);
      }

      // Vạch phân làn đôi giữa đường (Màu vàng với mắt phản quang)
      const midY = height / 2;
      ctx.strokeStyle = "#FACC15";
      ctx.lineWidth = 2.5;
      ctx.setLineDash([20, 14]);
      ctx.beginPath();
      ctx.moveTo(0, midY - 2);
      ctx.lineTo(width, midY - 2);
      ctx.moveTo(0, midY + 2);
      ctx.lineTo(width, midY + 2);
      ctx.stroke();
      ctx.setLineDash([]);

      const margin = 75;
      const playableWidth = width - margin * 2;

      // 2. Mốc khoảng cách cự ly trên đường
      [0, 200, 400, 600, 800, 1000].forEach(m => {
        const x = margin + (m / this.trackLength) * playableWidth;
        ctx.strokeStyle = "rgba(255, 255, 255, 0.15)";
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(x, curbH);
        ctx.lineTo(x, height - curbH);
        ctx.stroke();

        ctx.fillStyle = "rgba(255, 255, 255, 0.5)";
        ctx.font = "bold 9px sans-serif";
        ctx.textAlign = "center";
        ctx.fillText(`${m}m`, x, height - curbH - 3);
      });

      // 3. Vẽ 4 Chướng ngại vật (Trạm kiểm soát & Barie chắn đường)
      this.obstacles.forEach(obs => {
        const obsX = margin + (obs.dist / this.trackLength) * playableWidth;

        // Cột gantry kim loại hai bên
        ctx.fillStyle = "#475569";
        ctx.fillRect(obsX - 3, curbH, 6, height - curbH * 2);

        // Khung biển báo trên cao
        ctx.fillStyle = "rgba(15, 23, 42, 0.9)";
        ctx.strokeStyle = "#94A3B8";
        ctx.lineWidth = 1;
        if (ctx.roundRect) ctx.roundRect(obsX - 48, 16, 96, 16, 4);
        else ctx.fillRect(obsX - 48, 16, 96, 16);
        ctx.fill();
        ctx.stroke();

        ctx.fillStyle = "#F8FAFC";
        ctx.font = "bold 8.5px sans-serif";
        ctx.textAlign = "center";
        ctx.fillText(obs.badge, obsX, 28);

        // Barie Làn 1 (Trên: curbH -> midY)
        this.drawBarrier(obsX, midY / 2 + 7, obs.p1Cleared, true);

        // Barie Làn 2 (Dưới: midY -> height - curbH)
        this.drawBarrier(obsX, midY + (height - midY) / 2 - 7, obs.p2Cleared, false);
      });

      // 4. Vạch đích ca-rô 1000m
      const finishX = margin + playableWidth;
      const checkSize = 10;
      for (let r = 0; r < Math.ceil((height - curbH * 2) / checkSize); r++) {
        for (let c = 0; c < 2; c++) {
          ctx.fillStyle = (r + c) % 2 === 0 ? "#FFFFFF" : "#000000";
          ctx.fillRect(finishX + c * checkSize, curbH + r * checkSize, checkSize, checkSize);
        }
      }
      ctx.fillStyle = "#FACC15";
      ctx.font = "bold 10px sans-serif";
      ctx.textAlign = "center";
      ctx.fillText("🏁 ĐÍCH", finishX + 10, curbH + 12);

      // 5. Xe Người chơi 1 (Làn 1 - Cam)
      const p1X = margin + (this.player1.visualPos / this.trackLength) * playableWidth;
      const p1Y = midY / 2 + 7;
      this.drawCar(p1X, p1Y, this.player1, 1);

      // 6. Xe Người chơi 2 (Làn 2 - Xanh)
      const p2X = margin + (this.player2.visualPos / this.trackLength) * playableWidth;
      const p2Y = midY + (height - midY) / 2 - 7;
      this.drawCar(p2X, p2Y, this.player2, 2);
    }

    drawBarrier(x, y, isCleared, isTopLane) {
      const ctx = this.ctx;
      ctx.save();
      ctx.translate(x, y);

      if (isCleared) {
        ctx.strokeStyle = "#22C55E";
        ctx.lineWidth = 4;
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(isTopLane ? -18 : 18, isTopLane ? -32 : 32);
        ctx.stroke();

        ctx.shadowColor = "#22C55E";
        ctx.shadowBlur = 8;
        ctx.fillStyle = "#22C55E";
        ctx.beginPath();
        ctx.arc(0, 0, 5, 0, Math.PI * 2);
        ctx.fill();
      } else {
        const barH = 50;
        const topY = -barH / 2;
        ctx.fillStyle = "#EAB308";
        ctx.fillRect(-3, topY, 6, barH);

        ctx.fillStyle = "#0F172A";
        for (let s = topY; s < barH / 2; s += 10) {
          ctx.fillRect(-3, s, 6, 5);
        }

        const pulse = (Date.now() % 600 < 300);
        ctx.shadowColor = pulse ? "#EF4444" : "#7F1D1D";
        ctx.shadowBlur = pulse ? 12 : 3;
        ctx.fillStyle = pulse ? "#EF4444" : "#991B1B";
        ctx.beginPath();
        ctx.arc(0, 0, 6, 0, Math.PI * 2);
        ctx.fill();

        ctx.shadowBlur = 0;
        ctx.fillStyle = "#EF4444";
        ctx.font = "bold 8px sans-serif";
        ctx.textAlign = "center";
        ctx.fillText("STOP", 0, isTopLane ? topY - 3 : barH / 2 + 10);
      }

      ctx.restore();
    }

    drawCar(x, y, p, playerNum) {
      const ctx = this.ctx;
      const w = 54;
      const h = 24;
      ctx.save();
      ctx.translate(x, y);

      if (p.smoke > 0) {
        ctx.fillStyle = "rgba(71, 85, 105, 0.7)";
        for (let i = 0; i < 4; i++) {
          const sx = -w / 2 - 10 - i * 8 - (Date.now() % 20);
          const sy = (Math.sin(Date.now() / 80 + i) * 6);
          const r = 6 + i * 2.5;
          ctx.beginPath();
          ctx.arc(sx, sy, r, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      if (p.nitro > 0) {
        const flameLen = 16 + (p.nitro % 8) * 2;
        ctx.fillStyle = "#38BDF8";
        ctx.beginPath();
        ctx.moveTo(-w / 2, -5);
        ctx.lineTo(-w / 2 - flameLen, 0);
        ctx.lineTo(-w / 2, 5);
        ctx.fill();

        ctx.fillStyle = "#FFFFFF";
        ctx.beginPath();
        ctx.moveTo(-w / 2, -2.5);
        ctx.lineTo(-w / 2 - flameLen * 0.6, 0);
        ctx.lineTo(-w / 2, 2.5);
        ctx.fill();
      }

      ctx.fillStyle = "#0F172A";
      ctx.fillRect(w / 2 - 15, -h / 2 - 3, 11, 5);
      ctx.fillRect(w / 2 - 15, h / 2 - 2, 11, 5);
      ctx.fillRect(-w / 2 + 5, -h / 2 - 3, 11, 5);
      ctx.fillRect(-w / 2 + 5, h / 2 - 2, 11, 5);

      ctx.fillStyle = p.color;
      ctx.beginPath();
      if (ctx.roundRect) ctx.roundRect(-w / 2, -h / 2, w, h, 6);
      else ctx.fillRect(-w / 2, -h / 2, w, h);
      ctx.fill();

      ctx.fillStyle = "#1E293B";
      ctx.fillRect(-w / 2 - 3, -h / 2 + 2, 4, h - 4);

      ctx.fillStyle = "#0F172A";
      ctx.fillRect(0, -h / 2 + 4, 14, h - 8);

      ctx.fillStyle = "#FACC15";
      ctx.beginPath();
      ctx.arc(6, 0, 4, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillStyle = "#FEF08A";
      ctx.fillRect(w / 2 - 2, -h / 2 + 3, 3, 4);
      ctx.fillRect(w / 2 - 2, h / 2 - 7, 3, 4);

      if (p.isBlocked) {
        ctx.shadowColor = "#EF4444";
        ctx.shadowBlur = 10;
        ctx.fillStyle = "#EF4444";
        ctx.fillRect(-w / 2, -h / 2 + 3, 3, 4);
        ctx.fillRect(-w / 2, h / 2 - 7, 3, 4);
        ctx.shadowBlur = 0;
      }

      ctx.fillStyle = "#FFFFFF";
      ctx.font = "bold 9.5px sans-serif";
      ctx.textAlign = "center";
      const speedKmh = Math.round(p.speed * 3.6);
      const statusText = p.isBlocked ? "🚨 DỪNG (Rào chắn)" : `${speedKmh} km/h`;
      ctx.fillText(`${p.name} [${statusText}]`, 0, -h / 2 - 6);

      ctx.restore();
    }
  }


  // ==========================================
  // 6. QUIZ ENGINE (CHẤM THI 5 DẠNG BÀI)
  // ==========================================
