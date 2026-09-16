// js/app.js
// Bộ điều phối chính của ứng dụng Bài 8: Tốc độ chuyển động (KHTN 7 KNTT)

import { THEORY_DATA } from "./data/theory.js";
import { QUESTIONS_BANK } from "./data/questions.js";
import { sound } from "./modules/audio.js";
import { PhysicsCalc } from "./modules/physics-calc.js";
import { RacingGame } from "./modules/racing-game.js";
import { QuizEngine } from "./modules/quiz-engine.js";
import { auth } from "./modules/auth-lms.js";

class AppController {
  constructor() {
    this.quiz = new QuizEngine();
    this.raceGame = null;
    this.activeTab = "tab-theory";
    this.calcMode = "speed"; // "speed", "dist", "time", "convert"

    // Trạng thái câu hỏi trong Game Đua xe
    this.gameQuestions = [];
    this.gameQIndex = 0;
    this.gameCurrentTurn = 1; // 1: P1, 2: P2 (trong chế độ PvP)
    this.matchingSelectedLeft = null;
    this.matchingUserPairs = {};

    // Khởi động
    document.addEventListener("DOMContentLoaded", () => this.init());
  }

  init() {
    this.initLucide();
    this.initAudioToggle();
    this.initTabs();
    this.initAuthUI();
    this.renderTheory();
    this.initCalculator();
    this.initRacingGame();
    this.initPracticeQuiz();
    this.renderLMSTable();

    // Phơi ra window để gọi từ các sự kiện onclick trên HTML
    window.app = this;
  }

  initLucide() {
    if (window.lucide) {
      window.lucide.createIcons();
    }
  }

  // ==========================================
  // ÂM THANH
  // ==========================================
  initAudioToggle() {
    const btn = document.getElementById("btn-sound-toggle");
    const icon = document.getElementById("sound-icon");
    if (!btn) return;

    btn.addEventListener("click", () => {
      const isMuted = sound.toggleMute();
      if (isMuted) {
        icon.setAttribute("data-lucide", "volume-x");
        icon.classList.add("text-red-500");
      } else {
        icon.setAttribute("data-lucide", "volume-2");
        icon.classList.remove("text-red-500");
        sound.playClick();
      }
      this.initLucide();
    });
  }

  // ==========================================
  // ĐIỀU HƯỚNG TABS
  // ==========================================
  initTabs() {
    const tabButtons = document.querySelectorAll(".nav-tab");
    tabButtons.forEach(btn => {
      btn.addEventListener("click", () => {
        sound.playClick();
        const targetTabId = btn.dataset.tab;
        this.switchTab(targetTabId);
      });
    });
  }

  switchTab(tabId) {
    this.activeTab = tabId;

    // Cập nhật giao diện tab buttons
    document.querySelectorAll(".nav-tab").forEach(btn => {
      if (btn.dataset.tab === tabId) {
        btn.classList.add("active", "border-orange-500", "text-orange-600");
        btn.classList.remove("border-transparent", "text-slate-600");
      } else {
        btn.classList.remove("active", "border-orange-500", "text-orange-600");
        btn.classList.add("border-transparent", "text-slate-600");
      }
    });

    // Ẩn hiện tab panes
    document.querySelectorAll(".tab-pane").forEach(pane => {
      if (pane.id === tabId) {
        pane.classList.remove("hidden");
      } else {
        pane.classList.add("hidden");
      }
    });

    // Kích hoạt lại resize canvas nếu chuyển sang tab đua xe
    if (tabId === "tab-game" && this.raceGame) {
      setTimeout(() => this.raceGame.resizeCanvas(), 50);
    }

    if (tabId === "tab-lms") {
      this.renderLMSTable();
    }

    this.initLucide();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  // ==========================================
  // QUẢN LÝ ĐĂNG NHẬP (AUTH & LMS)
  // ==========================================
  initAuthUI() {
    this.updateUserBadge();

    // Form Học sinh
    const formStudent = document.getElementById("form-student-login");
    if (formStudent) {
      formStudent.addEventListener("submit", (e) => {
        e.preventDefault();
        const name = document.getElementById("input-student-name").value;
        const cls = document.getElementById("input-student-class").value;
        const res = auth.loginStudent(name, cls);
        if (res.success) {
          sound.playCorrect();
          this.closeAuthModal();
          this.updateUserBadge();
          this.renderLMSTable();
        }
      });
    }

    // Form Giáo viên
    const formTeacher = document.getElementById("form-teacher-login");
    if (formTeacher) {
      formTeacher.addEventListener("submit", (e) => {
        e.preventDefault();
        const code = document.getElementById("input-teacher-code").value;
        const res = auth.loginTeacher(code);
        if (res.success) {
          sound.playCorrect();
          this.closeAuthModal();
          this.updateUserBadge();
          this.renderLMSTable();
          alert("Xác thực Giáo viên thành công! Bạn có toàn quyền xem thống kê phân tích.");
        } else {
          sound.playWrong();
          alert(res.message);
        }
      });
    }

    // Nút mở form giáo viên từ Tab LMS
    const btnTeacher = document.getElementById("btn-open-teacher-login");
    if (btnTeacher) {
      btnTeacher.addEventListener("click", () => {
        this.openAuthModal();
        this.switchAuthMode("teacher");
      });
    }

    // Nút xuất file CSV
    const btnExport = document.getElementById("btn-export-csv");
    if (btnExport) {
      btnExport.addEventListener("click", () => {
        sound.playClick();
        auth.exportCSV();
      });
    }

    // Nút xóa lịch sử thi
    const btnClear = document.getElementById("btn-clear-history");
    if (btnClear) {
      btnClear.addEventListener("click", () => {
        if (confirm("Bạn có chắc chắn muốn đặt lại toàn bộ kết quả thi đua xe?")) {
          sound.playClick();
          auth.clearAllRecords();
          this.renderLMSTable();
        }
      });
    }
  }

  updateUserBadge() {
    const user = auth.currentUser;
    const nameEl = document.getElementById("user-display-name");
    const roleEl = document.getElementById("user-display-role");
    const initialEl = document.getElementById("user-avatar-initial");

    if (user) {
      nameEl.textContent = user.name;
      roleEl.textContent = user.role === "teacher" ? "Giáo viên KHTN 7" : `Học sinh (${user.className || '7A'})`;
      initialEl.textContent = user.name.charAt(0).toUpperCase();
      initialEl.className = user.role === "teacher" 
        ? "w-7 h-7 rounded-lg bg-blue-700 text-white flex items-center justify-center font-bold text-xs"
        : "w-7 h-7 rounded-lg bg-orange-500 text-white flex items-center justify-center font-bold text-xs";
    } else {
      nameEl.textContent = "Học sinh";
      roleEl.textContent = "Chưa đăng nhập";
      initialEl.textContent = "H";
    }
  }

  openAuthModal() {
    document.getElementById("auth-modal").classList.remove("hidden");
  }

  closeAuthModal() {
    document.getElementById("auth-modal").classList.add("hidden");
  }

  switchAuthMode(mode) {
    const studentForm = document.getElementById("form-student-login");
    const teacherForm = document.getElementById("form-teacher-login");
    const title = document.getElementById("auth-modal-title");

    if (mode === "teacher") {
      studentForm.classList.add("hidden");
      teacherForm.classList.remove("hidden");
      title.textContent = "Cổng Quản trị Giáo viên";
    } else {
      teacherForm.classList.add("hidden");
      studentForm.classList.remove("hidden");
      title.textContent = "Đăng nhập Học sinh";
    }
    this.initLucide();
  }

  renderLMSTable() {
    const user = auth.currentUser;
    const isTeacher = user && user.role === "teacher";

    // Cập nhật tiêu đề & badge trong tab LMS
    const roleBadge = document.getElementById("lms-role-badge");
    const userTitle = document.getElementById("lms-user-title");
    const teacherPanel = document.getElementById("teacher-analytics-panel");

    if (roleBadge && userTitle) {
      if (isTeacher) {
        roleBadge.textContent = "Giáo viên";
        roleBadge.className = "px-2.5 py-0.5 rounded-full text-xs font-extrabold bg-blue-100 text-blue-700";
        userTitle.textContent = "Bảng Quản trị & Phân tích Đánh giá KHTN 7";
        if (teacherPanel) teacherPanel.classList.remove("hidden");
      } else {
        roleBadge.textContent = "Học sinh";
        roleBadge.className = "px-2.5 py-0.5 rounded-full text-xs font-extrabold bg-orange-100 text-orange-700";
        userTitle.textContent = `Hồ sơ Học tập: ${user?.name || 'Học sinh'}`;
        if (teacherPanel) teacherPanel.classList.add("hidden");
      }
    }

    // Cập nhật các chỉ số phân tích nếu là giáo viên
    if (isTeacher) {
      const stats = auth.getTeacherAnalytics();
      document.getElementById("stat-total-students").textContent = stats.totalStudents;
      document.getElementById("stat-total-exams").textContent = stats.totalExams;
      document.getElementById("stat-avg-score").textContent = stats.avgScore;
      document.getElementById("stat-avg-accuracy").textContent = `${stats.avgAccuracy}%`;

      document.getElementById("type-acc-mcq").textContent = `${stats.typeAccuracies.mcq}%`;
      document.getElementById("type-acc-tf").textContent = `${stats.typeAccuracies.true_false}%`;
      document.getElementById("type-acc-fib").textContent = `${stats.typeAccuracies.fill_in_blank}%`;
      document.getElementById("type-acc-mat").textContent = `${stats.typeAccuracies.matching}%`;
      document.getElementById("type-acc-sa").textContent = `${stats.typeAccuracies.short_answer}%`;
    }

    // Hiển thị danh sách kết quả làm bài
    const records = auth.getAllRecords();
    const tbody = document.getElementById("lms-records-tbody");
    if (!tbody) return;

    if (records.length === 0) {
      tbody.innerHTML = `<tr><td colspan="7" class="p-6 text-center text-slate-400">Chưa có kết quả làm bài nào.</td></tr>`;
      return;
    }

    tbody.innerHTML = records.map(r => `
      <tr class="hover:bg-slate-50 transition">
        <td class="p-3 font-bold text-slate-800">${r.studentName}</td>
        <td class="p-3 text-slate-600">${r.className}</td>
        <td class="p-3 text-slate-500 font-mono text-[11px]">${r.date}</td>
        <td class="p-3 font-semibold text-orange-600">${r.gameMode}</td>
        <td class="p-3 text-right font-bold text-slate-900">${r.score}</td>
        <td class="p-3 text-right">
          <span class="px-2 py-0.5 rounded-full font-bold text-[11px] ${r.accuracy >= 80 ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'}">
            ${r.accuracy}%
          </span>
        </td>
        <td class="p-3 text-right text-slate-500">${r.duration}</td>
      </tr>
    `).join("");
  }

  // ==========================================
  // TAB 1: HIỂN THỊ LÝ THUYẾT SGK KNTT
  // ==========================================
  renderTheory() {
    const container = document.getElementById("theory-sections-container");
    if (!container) return;

    container.innerHTML = THEORY_DATA.sections.map(sec => `
      <div class="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm hover:border-orange-300 transition">
        <div class="flex items-center justify-between pb-3 border-b border-slate-100 mb-4">
          <div class="flex items-center gap-2.5">
            <div class="w-8 h-8 rounded-lg bg-orange-100 text-orange-600 flex items-center justify-center">
              <i data-lucide="${sec.icon}" class="w-4 h-4"></i>
            </div>
            <h3 class="font-extrabold text-slate-900 text-base sm:text-lg">${sec.title}</h3>
          </div>
          <span class="px-2.5 py-0.5 text-xs font-bold rounded-full bg-slate-100 text-slate-700">${sec.badge}</span>
        </div>
        <div class="text-sm text-slate-700 leading-relaxed space-y-3">
          ${sec.content}
        </div>
      </div>
    `).join("");

    this.initLucide();
  }

  // ==========================================
  // TAB 2: MÁY TÍNH & MÔ PHỎNG VẬT LÝ
  // ==========================================
  initCalculator() {
    const btnSpeed = document.getElementById("btn-calc-speed");
    const btnDist = document.getElementById("btn-calc-dist");
    const btnTime = document.getElementById("btn-calc-time");
    const btnConvert = document.getElementById("btn-calc-convert");

    const buttons = [btnSpeed, btnDist, btnTime, btnConvert];
    const updateActiveButton = (activeBtn) => {
      buttons.forEach(b => {
        if (b === activeBtn) {
          b.className = "px-4 py-2 rounded-xl text-sm font-bold bg-orange-500 text-white shadow-sm transition";
        } else {
          b.className = "px-4 py-2 rounded-xl text-sm font-bold bg-slate-100 text-slate-700 hover:bg-slate-200 transition";
        }
      });
    };

    if (btnSpeed) {
      btnSpeed.addEventListener("click", () => {
        sound.playClick();
        this.calcMode = "speed";
        updateActiveButton(btnSpeed);
        this.renderCalcInputs();
        this.executeCalculation();
      });
    }
    if (btnDist) {
      btnDist.addEventListener("click", () => {
        sound.playClick();
        this.calcMode = "dist";
        updateActiveButton(btnDist);
        this.renderCalcInputs();
        this.executeCalculation();
      });
    }
    if (btnTime) {
      btnTime.addEventListener("click", () => {
        sound.playClick();
        this.calcMode = "time";
        updateActiveButton(btnTime);
        this.renderCalcInputs();
        this.executeCalculation();
      });
    }
    if (btnConvert) {
      btnConvert.addEventListener("click", () => {
        sound.playClick();
        this.calcMode = "convert";
        updateActiveButton(btnConvert);
        this.renderCalcInputs();
        this.executeCalculation();
      });
    }

    this.renderCalcInputs();
    this.executeCalculation();
  }

  renderCalcInputs() {
    const container = document.getElementById("calc-inputs-container");
    if (!container) return;

    if (this.calcMode === "speed") {
      container.innerHTML = `
        <div>
          <label class="block text-xs font-bold text-slate-700 mb-1">Quãng đường đã đi (s):</label>
          <div class="flex gap-2">
            <input type="number" id="calc-s-val" value="100" min="0" step="any" class="flex-1 px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-orange-500">
            <select id="calc-s-unit" class="px-3 py-2.5 rounded-xl border border-slate-200 text-xs font-bold bg-slate-50">
              <option value="m">mét (m)</option>
              <option value="km">kilômét (km)</option>
            </select>
          </div>
        </div>
        <div>
          <label class="block text-xs font-bold text-slate-700 mb-1">Thời gian đi (t):</label>
          <div class="flex gap-2">
            <input type="number" id="calc-t-val" value="10" min="0.01" step="any" class="flex-1 px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-orange-500">
            <select id="calc-t-unit" class="px-3 py-2.5 rounded-xl border border-slate-200 text-xs font-bold bg-slate-50">
              <option value="s">giây (s)</option>
              <option value="min">phút</option>
              <option value="h">giờ (h)</option>
            </select>
          </div>
        </div>
      `;
    } else if (this.calcMode === "dist") {
      container.innerHTML = `
        <div>
          <label class="block text-xs font-bold text-slate-700 mb-1">Tốc độ chuyển động (v):</label>
          <div class="flex gap-2">
            <input type="number" id="calc-v-val" value="54" min="0" step="any" class="flex-1 px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-orange-500">
            <select id="calc-v-unit" class="px-3 py-2.5 rounded-xl border border-slate-200 text-xs font-bold bg-slate-50">
              <option value="kmh">km/h</option>
              <option value="ms">m/s</option>
            </select>
          </div>
        </div>
        <div>
          <label class="block text-xs font-bold text-slate-700 mb-1">Thời gian chuyển động (t):</label>
          <div class="flex gap-2">
            <input type="number" id="calc-t-val" value="2" min="0.01" step="any" class="flex-1 px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-orange-500">
            <select id="calc-t-unit" class="px-3 py-2.5 rounded-xl border border-slate-200 text-xs font-bold bg-slate-50">
              <option value="h">giờ (h)</option>
              <option value="min">phút</option>
              <option value="s">giây (s)</option>
            </select>
          </div>
        </div>
      `;
    } else if (this.calcMode === "time") {
      container.innerHTML = `
        <div>
          <label class="block text-xs font-bold text-slate-700 mb-1">Quãng đường cần đi (s):</label>
          <div class="flex gap-2">
            <input type="number" id="calc-s-val" value="120" min="0" step="any" class="flex-1 px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-orange-500">
            <select id="calc-s-unit" class="px-3 py-2.5 rounded-xl border border-slate-200 text-xs font-bold bg-slate-50">
              <option value="km">kilômét (km)</option>
              <option value="m">mét (m)</option>
            </select>
          </div>
        </div>
        <div>
          <label class="block text-xs font-bold text-slate-700 mb-1">Tốc độ di chuyển (v):</label>
          <div class="flex gap-2">
            <input type="number" id="calc-v-val" value="60" min="0.01" step="any" class="flex-1 px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-orange-500">
            <select id="calc-v-unit" class="px-3 py-2.5 rounded-xl border border-slate-200 text-xs font-bold bg-slate-50">
              <option value="kmh">km/h</option>
              <option value="ms">m/s</option>
            </select>
          </div>
        </div>
      `;
    } else if (this.calcMode === "convert") {
      container.innerHTML = `
        <div>
          <label class="block text-xs font-bold text-slate-700 mb-1">Nhập giá trị tốc độ cần đổi:</label>
          <div class="flex gap-2">
            <input type="number" id="calc-convert-val" value="36" step="any" class="flex-1 px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-orange-500">
            <select id="calc-convert-from" class="px-3 py-2.5 rounded-xl border border-slate-200 text-xs font-bold bg-slate-50">
              <option value="kmh">km/h ➔ m/s</option>
              <option value="ms">m/s ➔ km/h</option>
            </select>
          </div>
        </div>
      `;
    }

    // Thêm listener cho các inputs
    container.querySelectorAll("input, select").forEach(el => {
      el.addEventListener("input", () => this.executeCalculation());
    });
  }

  executeCalculation() {
    try {
      const primaryEl = document.getElementById("calc-result-primary");
      const unitEl = document.getElementById("calc-result-unit");
      const secondaryEl = document.getElementById("calc-result-secondary");
      const formulaEl = document.getElementById("calc-formula-desc");
      let speedForWorldComparison = 0;

      if (this.calcMode === "speed") {
        const s = parseFloat(document.getElementById("calc-s-val")?.value || 0);
        const sUnit = document.getElementById("calc-s-unit")?.value || "m";
        const t = parseFloat(document.getElementById("calc-t-val")?.value || 1);
        const tUnit = document.getElementById("calc-t-unit")?.value || "s";

        const res = PhysicsCalc.calculateSpeed(s, sUnit, t, tUnit);
        primaryEl.textContent = res.vMs;
        unitEl.textContent = "m/s";
        secondaryEl.textContent = `Tương đương: ${res.vKmh} km/h`;
        formulaEl.innerHTML = `Áp dụng công thức: <strong>v = s / t</strong> = ${res.sInMeters}m / ${res.tInSeconds}s = <strong>${res.vMs} m/s</strong>`;
        speedForWorldComparison = res.vMs;
      } else if (this.calcMode === "dist") {
        const v = parseFloat(document.getElementById("calc-v-val")?.value || 0);
        const vUnit = document.getElementById("calc-v-unit")?.value || "kmh";
        const t = parseFloat(document.getElementById("calc-t-val")?.value || 1);
        const tUnit = document.getElementById("calc-t-unit")?.value || "h";

        const res = PhysicsCalc.calculateDistance(v, vUnit, t, tUnit);
        primaryEl.textContent = res.sKm;
        unitEl.textContent = "km";
        secondaryEl.textContent = `Tương đương: ${res.sMeters} mét (m)`;
        formulaEl.innerHTML = `Áp dụng công thức: <strong>s = v · t</strong> = <strong>${res.sKm} km</strong>`;
        speedForWorldComparison = vUnit === "ms" ? v : v / 3.6;
      } else if (this.calcMode === "time") {
        const s = parseFloat(document.getElementById("calc-s-val")?.value || 0);
        const sUnit = document.getElementById("calc-s-unit")?.value || "km";
        const v = parseFloat(document.getElementById("calc-v-val")?.value || 1);
        const vUnit = document.getElementById("calc-v-unit")?.value || "kmh";

        const res = PhysicsCalc.calculateTime(s, sUnit, v, vUnit);
        primaryEl.textContent = res.tHours;
        unitEl.textContent = "giờ";
        secondaryEl.textContent = `Tương đương: ${res.tMinutes} phút (${res.tSeconds} giây)`;
        formulaEl.innerHTML = `Áp dụng công thức: <strong>t = s / v</strong> = <strong>${res.tHours} giờ</strong>`;
        speedForWorldComparison = vUnit === "ms" ? v : v / 3.6;
      } else if (this.calcMode === "convert") {
        const val = parseFloat(document.getElementById("calc-convert-val")?.value || 0);
        const from = document.getElementById("calc-convert-from")?.value || "kmh";
        const res = PhysicsCalc.convertUnit(val, from);

        primaryEl.textContent = res.to.split(" ")[0];
        unitEl.textContent = res.to.split(" ")[1];
        secondaryEl.textContent = `Từ: ${res.from}`;
        formulaEl.innerHTML = `Quy tắc quy đổi: <strong>${res.formula}</strong>`;
        speedForWorldComparison = from === "ms" ? val : val / 3.6;
      }

      this.renderWorldComparisons(speedForWorldComparison);
    } catch (e) {
      console.warn("Lỗi tính toán:", e);
    }
  }

  renderWorldComparisons(speedMs) {
    const listEl = document.getElementById("calc-comparison-list");
    if (!listEl) return;

    if (speedMs <= 0) {
      listEl.innerHTML = `<p class="text-slate-400">Nhập thông số để so sánh với các đối tượng trong SGK.</p>`;
      return;
    }

    const comps = PhysicsCalc.compareWithWorld(speedMs);
    listEl.innerHTML = comps.slice(0, 5).map(c => `
      <div class="flex items-center justify-between p-2 rounded-lg bg-white border border-slate-200">
        <div class="flex items-center gap-2">
          <span>${c.icon}</span>
          <span class="font-bold text-slate-800">${c.name}</span>
          <span class="text-slate-400 text-[10px]">(${c.speedMs} m/s)</span>
        </div>
        <span class="font-bold ${c.ratio >= 1 ? 'text-orange-600' : 'text-blue-600'}">${c.text}</span>
      </div>
    `).join("");
  }

  // ==========================================
  // TAB 3: GAME ĐUA XE KIẾN THỨC
  // ==========================================
  initRacingGame() {
    this.raceGame = new RacingGame("race-canvas");

    // Lắng nghe cập nhật tiến độ từ game loop
    this.raceGame.onProgressUpdate = (p1, p2, trackLen) => {
      // Cập nhật khoảng cách & thanh tiến trình
      document.getElementById("gauge-p1-distance").textContent = `${Math.round(p1.pos)}m / ${trackLen}m`;
      document.getElementById("gauge-p2-distance").textContent = `${Math.round(p2.pos)}m / ${trackLen}m`;
      document.getElementById("bar-p1-progress").style.width = `${(p1.pos / trackLen) * 100}%`;
      document.getElementById("bar-p2-progress").style.width = `${(p2.pos / trackLen) * 100}%`;

      // Cập nhật công-tơ-mét & HUD
      document.getElementById("hud-speedometer-val").textContent = Math.round(p1.speed);
      document.getElementById("hud-combo-val").textContent = `${p1.streak}x`;
      document.getElementById("hud-score-val").textContent = p1.score;
    };

    // Khi có xe cán đích
    this.raceGame.onFinishCallback = (winner, p1, p2) => {
      this.handleRaceFinished(winner, p1, p2);
    };

    // Nút Bắt đầu đua
    const btnStart = document.getElementById("btn-start-race");
    if (btnStart) {
      btnStart.addEventListener("click", () => {
        const mode = document.getElementById("game-mode-select").value;
        const diff = document.getElementById("game-diff-select").value;
        const p1Name = auth.currentUser?.name || "Học sinh";
        this.raceGame.setMode(mode, diff, p1Name, "Người chơi 2");

        document.getElementById("label-p1-name").textContent = `Làn 1: ${p1Name}`;
        document.getElementById("label-p2-name").textContent = `Làn 2: ${this.raceGame.player2.name}`;

        this.prepareRaceQuestions();
        this.raceGame.start();
        this.loadNextGameQuestion();
      });
    }
  }

  prepareRaceQuestions() {
    // Trộn ngẫu nhiên câu hỏi từ ngân hàng cho game đua xe
    const all = [
      ...QUESTIONS_BANK.mcq,
      ...QUESTIONS_BANK.true_false,
      ...QUESTIONS_BANK.fill_in_blank
    ];
    this.gameQuestions = this.quiz.shuffle(all);
    this.gameQIndex = 0;
    this.gameCurrentTurn = 1;
  }

  loadNextGameQuestion() {
    if (this.gameQIndex >= this.gameQuestions.length) {
      this.prepareRaceQuestions();
    }

    const q = this.gameQuestions[this.gameQIndex];
    this.renderGameQuestion(q);
  }

  renderGameQuestion(q) {
    const titleEl = document.getElementById("game-q-title");
    const optionsEl = document.getElementById("game-q-options");
    const typeBadge = document.getElementById("game-q-type-badge");
    const turnBadge = document.getElementById("game-q-turn-badge");
    const feedbackBox = document.getElementById("game-feedback-box");

    feedbackBox.classList.add("hidden");
    titleEl.textContent = q.question;

    const typeNames = {
      mcq: "Trắc nghiệm",
      true_false: "Đúng / Sai",
      fill_in_blank: "Điền khuyết",
      matching: "Ghép cột",
      short_answer: "Tự luận tính toán"
    };
    typeBadge.textContent = typeNames[q.type] || "Câu hỏi";
    turnBadge.textContent = this.raceGame.mode === "pvp" 
      ? `Lượt trả lời: Người chơi ${this.gameCurrentTurn}` 
      : "Lượt trả lời: Bạn";

    optionsEl.innerHTML = "";

    if (q.type === "mcq") {
      optionsEl.innerHTML = q.options.map((opt, idx) => `
        <button class="btn-touch w-full p-4 rounded-xl border border-slate-200 bg-slate-50 hover:bg-orange-50 hover:border-orange-400 font-semibold text-slate-800 text-left transition flex items-center gap-3" onclick="app.submitGameAnswer(${idx})">
          <span class="w-7 h-7 rounded-lg bg-slate-200 text-slate-700 flex items-center justify-center font-bold text-xs">${String.fromCharCode(65 + idx)}</span>
          <span>${opt}</span>
        </button>
      `).join("");
    } else if (q.type === "true_false") {
      optionsEl.innerHTML = `
        <div class="grid grid-cols-2 gap-4">
          <button class="btn-touch p-5 rounded-2xl border-2 border-emerald-300 bg-emerald-50 hover:bg-emerald-100 font-extrabold text-emerald-800 text-lg transition flex items-center justify-center gap-2" onclick="app.submitGameAnswer(true)">
            ✓ ĐÚNG
          </button>
          <button class="btn-touch p-5 rounded-2xl border-2 border-rose-300 bg-rose-50 hover:bg-rose-100 font-extrabold text-rose-800 text-lg transition flex items-center justify-center gap-2" onclick="app.submitGameAnswer(false)">
            ✗ SAI
          </button>
        </div>
      `;
    } else if (q.type === "fill_in_blank") {
      optionsEl.innerHTML = `
        <div class="space-y-3">
          <input type="text" id="game-fib-input" placeholder="Nhập từ hoặc số cần điền..." class="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-orange-500 font-medium">
          <button class="btn-touch w-full rounded-xl font-bold text-sm bg-orange-500 text-white hover:bg-orange-600 transition" onclick="app.submitGameAnswer(document.getElementById('game-fib-input').value)">
            XÁC NHẬN ĐÁP ÁN
          </button>
        </div>
      `;
    }
  }

  submitGameAnswer(userAnswer) {
    const q = this.gameQuestions[this.gameQIndex];
    let isCorrect = false;

    if (q.type === "mcq") {
      isCorrect = parseInt(userAnswer, 10) === q.correct;
    } else if (q.type === "true_false") {
      isCorrect = Boolean(userAnswer) === q.correct;
    } else if (q.type === "fill_in_blank") {
      const clean = String(userAnswer).trim().toLowerCase();
      isCorrect = q.keywords.some(k => clean.includes(k.toLowerCase()));
    }

    const playerNum = this.raceGame.mode === "pvp" ? this.gameCurrentTurn : 1;
    const boostRes = this.raceGame.handleAnswer(playerNum, isCorrect, q.level);

    // Hiển thị phản hồi giải thích
    const feedbackBox = document.getElementById("game-feedback-box");
    feedbackBox.classList.remove("hidden");

    if (isCorrect) {
      feedbackBox.className = "mt-4 p-4 rounded-xl text-sm bg-emerald-50 border border-emerald-200 text-emerald-900";
      feedbackBox.innerHTML = `
        <p class="font-bold flex items-center gap-2 text-emerald-800">
          <span>🚀 CHÍNH XÁC!</span>
          <span class="text-xs bg-emerald-200 px-2 py-0.5 rounded-full font-extrabold">+${boostRes.gain}m (Nitro Boost)</span>
        </p>
        <p class="text-xs mt-1 text-emerald-700">${q.explanation || 'Xuất sắc, xe của bạn đã bứt phá ngoạn mục!'}</p>
      `;
    } else {
      feedbackBox.className = "mt-4 p-4 rounded-xl text-sm bg-rose-50 border border-rose-200 text-rose-900";
      feedbackBox.innerHTML = `
        <p class="font-bold flex items-center gap-2 text-rose-800">
          <span>⚠️ CHƯA CHÍNH XÁC!</span>
          <span class="text-xs bg-rose-200 px-2 py-0.5 rounded-full font-extrabold">Xe bị khựng lại (-30m)</span>
        </p>
        <p class="text-xs mt-1 text-rose-700"><strong>Giải thích:</strong> ${q.explanation || 'Hãy chú ý công thức v = s / t và đơn vị đo!'}</p>
      `;
    }

    // Chuyển câu tiếp theo sau 1,8 giây để học sinh kịp đọc giải thích
    setTimeout(() => {
      this.gameQIndex++;
      if (this.raceGame.mode === "pvp") {
        this.gameCurrentTurn = this.gameCurrentTurn === 1 ? 2 : 1;
      }
      if (!this.raceGame.isFinished) {
        this.loadNextGameQuestion();
      }
    }, 1800);
  }

  handleRaceFinished(winner, p1, p2) {
    const modal = document.getElementById("race-result-modal");
    const title = document.getElementById("race-modal-winner-title");
    const desc = document.getElementById("race-modal-winner-desc");

    const p1Name = document.getElementById("race-stat-p1-name");
    const p1Score = document.getElementById("race-stat-p1-score");
    const p1Streak = document.getElementById("race-stat-p1-streak");

    const p2Name = document.getElementById("race-stat-p2-name");
    const p2Score = document.getElementById("race-stat-p2-score");
    const p2Dist = document.getElementById("race-stat-p2-dist");

    title.textContent = `🏆 ${winner.name} ĐÃ CÁN ĐÍCH CHIẾN THẮNG!`;
    desc.textContent = `Cuộc đua 1.000m khép lại với màn tranh tài vật lý kịch tính.`;

    p1Name.textContent = p1.name;
    p1Score.textContent = `${p1.score} điểm`;
    p1Streak.textContent = `Vị trí: ${Math.round(p1.pos)}m`;

    p2Name.textContent = p2.name;
    p2Score.textContent = `${p2.score} điểm`;
    p2Dist.textContent = `Vị trí: ${Math.round(p2.pos)}m`;

    modal.classList.remove("hidden");

    // Tự động lưu thành tích vào hệ thống LMS
    auth.recordExamResult({
      studentName: p1.name,
      gameMode: this.raceGame.mode === "pvp" ? "Đua PvP 2 người" : `Đua với Bot AI (${this.raceGame.getDifficultyLabel(this.raceGame.aiDifficulty)})`,
      score: p1.score,
      accuracy: Math.round((p1.pos / this.raceGame.trackLength) * 100),
      duration: "1 chặng đua 1000m"
    });
  }

  closeRaceModal() {
    document.getElementById("race-result-modal").classList.add("hidden");
  }

  restartRace() {
    this.closeRaceModal();
    document.getElementById("btn-start-race").click();
  }

  // ==========================================
  // TAB 4: LUYỆN TẬP 100 CÂU HỎI 5 DẠNG
  // ==========================================
  initPracticeQuiz() {
    const btnStart = document.getElementById("btn-start-quiz");
    const btnCheck = document.getElementById("btn-quiz-check");
    const btnNext = document.getElementById("btn-quiz-next");

    if (btnStart) {
      btnStart.addEventListener("click", () => {
        sound.playClick();
        const cat = document.getElementById("quiz-filter-category").value;
        const count = parseInt(document.getElementById("quiz-filter-count").value, 10);
        this.quiz.initSession(cat, count);
        this.renderPracticeQuestion();
      });
    }

    if (btnCheck) {
      btnCheck.addEventListener("click", () => {
        this.checkPracticeAnswer();
      });
    }

    if (btnNext) {
      btnNext.addEventListener("click", () => {
        sound.playClick();
        const nextQ = this.quiz.nextQuestion();
        if (nextQ) {
          this.renderPracticeQuestion();
        } else {
          this.renderPracticeSummary();
        }
      });
    }

    // Bắt đầu ngay 10 câu mẫu
    this.quiz.initSession("all", 10);
    this.renderPracticeQuestion();
  }

  renderPracticeQuestion() {
    const q = this.quiz.getCurrentQuestion();
    if (!q) return;

    document.getElementById("quiz-progress-text").textContent = `Câu hỏi ${this.quiz.currentIndex + 1} / ${this.quiz.currentQuestions.length}`;
    document.getElementById("quiz-score-display").textContent = this.quiz.stats.score;

    const badge = document.getElementById("quiz-badge-type");
    const typeMap = {
      mcq: "Trắc nghiệm",
      true_false: "Đúng / Sai",
      fill_in_blank: "Điền khuyết",
      matching: "Ghép cột",
      short_answer: "Tự luận tính toán"
    };
    badge.textContent = typeMap[q.type] || "Câu hỏi";

    // Ẩn giải thích và đặt lại nút
    document.getElementById("quiz-explanation-box").classList.add("hidden");
    document.getElementById("btn-quiz-check").classList.remove("hidden");
    document.getElementById("btn-quiz-next").classList.add("hidden");

    const container = document.getElementById("quiz-q-content");
    container.innerHTML = "";

    // Tiêu đề câu hỏi
    const title = document.createElement("h3");
    title.className = "text-base sm:text-lg font-bold text-slate-900";
    title.innerHTML = q.question;
    container.appendChild(title);

    // Nội dung tương tác theo dạng câu hỏi
    this.matchingSelectedLeft = null;
    this.matchingUserPairs = {};

    if (q.type === "mcq") {
      const optsDiv = document.createElement("div");
      optsDiv.className = "space-y-3 pt-2";
      optsDiv.innerHTML = q.options.map((opt, idx) => `
        <label class="flex items-center gap-3 p-4 rounded-xl border border-slate-200 hover:border-orange-400 bg-slate-50 cursor-pointer transition">
          <input type="radio" name="practice_mcq" value="${idx}" class="w-4 h-4 text-orange-600 focus:ring-orange-500">
          <span class="font-bold text-slate-500 text-xs w-6">${String.fromCharCode(65 + idx)}.</span>
          <span class="text-sm text-slate-800 font-medium">${opt}</span>
        </label>
      `).join("");
      container.appendChild(optsDiv);
    } else if (q.type === "true_false") {
      const optsDiv = document.createElement("div");
      optsDiv.className = "grid grid-cols-2 gap-4 pt-2";
      optsDiv.innerHTML = `
        <label class="flex items-center justify-center gap-2 p-5 rounded-2xl border-2 border-emerald-200 bg-emerald-50 hover:bg-emerald-100 cursor-pointer font-bold text-emerald-800 transition">
          <input type="radio" name="practice_tf" value="true" class="w-5 h-5 text-emerald-600">
          <span>✓ ĐÚNG</span>
        </label>
        <label class="flex items-center justify-center gap-2 p-5 rounded-2xl border-2 border-rose-200 bg-rose-50 hover:bg-rose-100 cursor-pointer font-bold text-rose-800 transition">
          <input type="radio" name="practice_tf" value="false" class="w-5 h-5 text-rose-600">
          <span>✗ SAI</span>
        </label>
      `;
      container.appendChild(optsDiv);
    } else if (q.type === "fill_in_blank") {
      const div = document.createElement("div");
      div.className = "pt-2 space-y-2";
      div.innerHTML = `
        <p class="text-sm font-semibold text-slate-700 bg-orange-50 p-4 rounded-xl border border-orange-200">
          ${q.blankPrompt || q.question}
        </p>
        <input type="text" id="practice-fib-val" placeholder="Nhập câu trả lời điền vào chỗ trống..." class="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-orange-500 font-medium">
      `;
      container.appendChild(div);
    } else if (q.type === "matching") {
      const div = document.createElement("div");
      div.className = "pt-2 space-y-3";

      // Xáo trộn cột phải để học sinh ghép
      const rightOptions = this.quiz.shuffle(q.pairs.map((p, idx) => ({ text: p.right, origIdx: idx })));

      div.innerHTML = `
        <p class="text-xs text-slate-500 italic">Hướng dẫn: Nhấp chọn một mục ở cột trái, sau đó nhấp vào mục tương ứng ở cột phải để ghép cặp.</p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div class="space-y-2" id="matching-left-col">
            ${q.pairs.map((p, idx) => `
              <div class="matching-item p-3.5 rounded-xl border border-slate-200 bg-white font-semibold text-xs text-slate-800 flex items-center justify-between" data-left="${idx}" onclick="app.selectMatchingLeft(${idx})">
                <span>${idx + 1}. ${p.left}</span>
                <span class="matching-badge-left text-[11px] font-bold text-orange-600"></span>
              </div>
            `).join("")}
          </div>
          <div class="space-y-2" id="matching-right-col">
            ${rightOptions.map((opt, rIdx) => `
              <div class="matching-item p-3.5 rounded-xl border border-slate-200 bg-slate-50 font-semibold text-xs text-slate-800 flex items-center justify-between" data-right-orig="${opt.origIdx}" onclick="app.selectMatchingRight(${opt.origIdx})">
                <span>• ${opt.text}</span>
                <span class="matching-badge-right text-[11px] font-bold text-blue-600"></span>
              </div>
            `).join("")}
          </div>
        </div>
      `;
      container.appendChild(div);
    } else if (q.type === "short_answer") {
      const div = document.createElement("div");
      div.className = "pt-2 space-y-3";
      div.innerHTML = `
        <div class="flex items-center gap-2">
          <input type="text" id="practice-sa-val" placeholder="Nhập đáp số (Ví dụ: 15 hoặc 15.5)..." class="flex-1 px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-orange-500 font-bold">
          <span class="px-4 py-3 bg-slate-100 rounded-xl font-bold text-xs text-slate-700 border border-slate-200">${q.unit || ''}</span>
        </div>
        <p class="text-xs text-slate-400">💡 Lưu ý: Hệ thống hỗ trợ dấu phẩy và dấu chấm thập phân với dung sai ±2%.</p>
      `;
      container.appendChild(div);
    }
  }

  selectMatchingLeft(idx) {
    this.matchingSelectedLeft = idx;
    document.querySelectorAll("#matching-left-col .matching-item").forEach(el => {
      if (parseInt(el.dataset.left, 10) === idx) {
        el.classList.add("selected");
      } else {
        el.classList.remove("selected");
      }
    });
    sound.playClick();
  }

  selectMatchingRight(origIdx) {
    if (this.matchingSelectedLeft === null) {
      alert("Vui lòng nhấp chọn một mục ở cột bên trái trước!");
      return;
    }

    // Ghép cặp: leftIndex => origIdx
    this.matchingUserPairs[this.matchingSelectedLeft] = origIdx;
    sound.playClick();

    // Cập nhật nhãn đã ghép
    const leftEl = document.querySelector(`#matching-left-col [data-left="${this.matchingSelectedLeft}"]`);
    if (leftEl) {
      leftEl.classList.remove("selected");
      leftEl.classList.add("matched");
      leftEl.querySelector(".matching-badge-left").textContent = `➔ Đã ghép`;
    }

    this.matchingSelectedLeft = null;
  }

  checkPracticeAnswer() {
    const q = this.quiz.getCurrentQuestion();
    if (!q) return;

    let userAnswer = null;

    if (q.type === "mcq") {
      const selected = document.querySelector("input[name='practice_mcq']:checked");
      if (!selected) {
        alert("Vui lòng chọn một phương án trả lời!");
        return;
      }
      userAnswer = selected.value;
    } else if (q.type === "true_false") {
      const selected = document.querySelector("input[name='practice_tf']:checked");
      if (!selected) {
        alert("Vui lòng chọn Đúng hoặc Sai!");
        return;
      }
      userAnswer = selected.value === "true";
    } else if (q.type === "fill_in_blank") {
      const val = document.getElementById("practice-fib-val").value;
      if (!val || !val.trim()) {
        alert("Vui lòng nhập từ hoặc số cần điền!");
        return;
      }
      userAnswer = val.trim();
    } else if (q.type === "matching") {
      if (Object.keys(this.matchingUserPairs).length < q.pairs.length) {
        alert("Vui lòng ghép nối đầy đủ tất cả các cặp trước khi nộp bài!");
        return;
      }
      userAnswer = this.matchingUserPairs;
    } else if (q.type === "short_answer") {
      const val = document.getElementById("practice-sa-val").value;
      if (!val || !val.trim()) {
        alert("Vui lòng nhập kết quả bài toán!");
        return;
      }
      userAnswer = val.trim();
    }

    const evalResult = this.quiz.submitAnswer(userAnswer);
    document.getElementById("quiz-score-display").textContent = this.quiz.stats.score;

    // Hiển thị khung giải thích
    const expBox = document.getElementById("quiz-explanation-box");
    expBox.classList.remove("hidden");

    if (evalResult.isCorrect) {
      sound.playCorrect();
      expBox.className = "p-5 rounded-2xl text-sm bg-emerald-50 border border-emerald-200 text-emerald-950";
      expBox.innerHTML = `
        <p class="font-extrabold text-emerald-800 flex items-center gap-2 mb-2 text-base">
          <i data-lucide="check-circle" class="w-5 h-5 text-emerald-600"></i>
          CHÍNH XÁC! (+10 điểm)
        </p>
        <p class="text-xs text-emerald-800 leading-relaxed">${evalResult.explanation}</p>
      `;
    } else {
      sound.playWrong();
      expBox.className = "p-5 rounded-2xl text-sm bg-rose-50 border border-rose-200 text-rose-950";
      expBox.innerHTML = `
        <p class="font-extrabold text-rose-800 flex items-center gap-2 mb-2 text-base">
          <i data-lucide="alert-circle" class="w-5 h-5 text-rose-600"></i>
          CHƯA CHÍNH XÁC!
        </p>
        <div class="text-xs text-rose-800 leading-relaxed space-y-1">
          <p><strong>Giải thích chi tiết:</strong></p>
          <p>${evalResult.explanation}</p>
        </div>
      `;
    }

    this.initLucide();
    document.getElementById("btn-quiz-check").classList.add("hidden");
    document.getElementById("btn-quiz-next").classList.remove("hidden");
  }

  renderPracticeSummary() {
    const summary = this.quiz.getSummary();
    sound.playWin();

    const container = document.getElementById("quiz-q-content");
    container.innerHTML = `
      <div class="text-center py-6 space-y-4">
        <div class="w-20 h-20 mx-auto rounded-full bg-orange-100 text-orange-600 flex items-center justify-center text-4xl shadow-sm">
          🌟
        </div>
        <h3 class="text-2xl font-black text-slate-900">Hoàn thành bài luyện tập!</h3>
        <p class="text-xs text-slate-500">Bạn đã hoàn thành ${summary.total} câu hỏi trong thời gian ${summary.durationSec} giây.</p>

        <div class="grid grid-cols-3 gap-3 max-w-md mx-auto pt-2">
          <div class="bg-slate-50 p-4 rounded-xl border border-slate-200">
            <p class="text-[10px] font-bold text-slate-400 uppercase">Đúng</p>
            <p class="text-2xl font-black text-emerald-600 mt-1">${summary.correct} / ${summary.total}</p>
          </div>
          <div class="bg-slate-50 p-4 rounded-xl border border-slate-200">
            <p class="text-[10px] font-bold text-slate-400 uppercase">Chính xác</p>
            <p class="text-2xl font-black text-orange-600 mt-1">${summary.accuracy}%</p>
          </div>
          <div class="bg-slate-50 p-4 rounded-xl border border-slate-200">
            <p class="text-[10px] font-bold text-slate-400 uppercase">Điểm số</p>
            <p class="text-2xl font-black text-blue-600 mt-1">${summary.score}</p>
          </div>
        </div>

        <button class="btn-touch px-6 py-2.5 rounded-xl font-bold text-sm bg-orange-500 text-white hover:bg-orange-600 transition shadow-sm" onclick="app.initPracticeQuiz()">
          LUYỆN TẬP LƯỢT MỚI
        </button>
      </div>
    `;

    document.getElementById("btn-quiz-check").classList.add("hidden");
    document.getElementById("btn-quiz-next").classList.add("hidden");

    // Lưu kết quả vào LMS
    auth.recordExamResult({
      studentName: auth.currentUser?.name || "Học sinh",
      gameMode: `Luyện tập (${summary.total} câu)`,
      score: summary.score,
      accuracy: summary.accuracy,
      duration: `${summary.durationSec}s`
    });
  }
}

// Khởi tạo instance
new AppController();
