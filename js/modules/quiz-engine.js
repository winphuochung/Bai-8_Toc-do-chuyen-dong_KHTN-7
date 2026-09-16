// js/modules/quiz-engine.js
// Bộ xử lý logic câu hỏi 5 dạng, xáo trộn câu hỏi & chấm điểm theo chuẩn sư phạm

import { QUESTIONS_BANK } from "../data/questions.js";

export class QuizEngine {
  constructor() {
    this.bank = QUESTIONS_BANK;
    this.currentQuestions = [];
    this.currentIndex = 0;
    this.stats = {
      total: 0,
      correct: 0,
      wrong: 0,
      score: 0,
      startTime: 0,
      endTime: 0,
      byType: {
        mcq: { correct: 0, total: 0 },
        true_false: { correct: 0, total: 0 },
        fill_in_blank: { correct: 0, total: 0 },
        matching: { correct: 0, total: 0 },
        short_answer: { correct: 0, total: 0 }
      }
    };
  }

  // Thuật toán xáo trộn Fisher-Yates
  shuffle(array) {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  // Khởi tạo phiên luyện tập hoặc thi đấu
  initSession(category = "all", count = 10, difficulty = "all") {
    let pool = [];

    if (category === "all") {
      pool = [
        ...this.bank.mcq,
        ...this.bank.true_false,
        ...this.bank.fill_in_blank,
        ...this.bank.matching,
        ...this.bank.short_answer
      ];
    } else if (this.bank[category]) {
      pool = [...this.bank[category]];
    }

    if (difficulty !== "all") {
      pool = pool.filter(q => q.level === difficulty);
    }

    // Xáo trộn ngẫu nhiên và lấy số lượng câu yêu cầu
    this.currentQuestions = this.shuffle(pool).slice(0, Math.min(count, pool.length));
    this.currentIndex = 0;
    this.resetStats();
    this.stats.total = this.currentQuestions.length;
    this.stats.startTime = Date.now();

    return this.getCurrentQuestion();
  }

  resetStats() {
    this.stats = {
      total: 0,
      correct: 0,
      wrong: 0,
      score: 0,
      startTime: 0,
      endTime: 0,
      byType: {
        mcq: { correct: 0, total: 0 },
        true_false: { correct: 0, total: 0 },
        fill_in_blank: { correct: 0, total: 0 },
        matching: { correct: 0, total: 0 },
        short_answer: { correct: 0, total: 0 }
      }
    };
  }

  getCurrentQuestion() {
    if (this.currentIndex < this.currentQuestions.length) {
      return this.currentQuestions[this.currentIndex];
    }
    return null;
  }

  // Đánh giá câu trả lời của học sinh
  submitAnswer(userAnswer) {
    const q = this.getCurrentQuestion();
    if (!q) return null;

    let isCorrect = false;
    const type = q.type;
    this.stats.byType[type].total += 1;

    switch (type) {
      case "mcq": {
        isCorrect = parseInt(userAnswer, 10) === q.correct;
        break;
      }
      case "true_false": {
        isCorrect = Boolean(userAnswer) === q.correct;
        break;
      }
      case "fill_in_blank": {
        const cleanUser = String(userAnswer).trim().toLowerCase();
        isCorrect = q.keywords.some(k => cleanUser.includes(k.toLowerCase()) || cleanUser === k.toLowerCase());
        break;
      }
      case "matching": {
        // userAnswer là Object { leftIndex: rightIndex }
        // Hoặc mảng các cặp đã nối
        isCorrect = true;
        if (!userAnswer || typeof userAnswer !== "object") {
          isCorrect = false;
        } else {
          for (let i = 0; i < q.pairs.length; i++) {
            if (userAnswer[i] !== i) {
              isCorrect = false;
              break;
            }
          }
        }
        break;
      }
      case "short_answer": {
        const cleanUser = String(userAnswer).trim().replace(",", ".");
        const userNum = parseFloat(cleanUser);

        if (!isNaN(userNum) && q.targetValue !== undefined) {
          const tol = (q.tolerancePercent || 2) / 100;
          const diff = Math.abs(userNum - q.targetValue);
          isCorrect = diff <= Math.max(0.05, Math.abs(q.targetValue) * tol);
        } else if (q.keywords) {
          const lowUser = cleanUser.toLowerCase();
          isCorrect = q.keywords.some(k => lowUser.includes(k.toLowerCase()));
        }
        break;
      }
    }

    if (isCorrect) {
      this.stats.correct += 1;
      this.stats.byType[type].correct += 1;
      this.stats.score += 10;
    } else {
      this.stats.wrong += 1;
    }

    const result = {
      isCorrect,
      question: q,
      userAnswer,
      explanation: q.explanation || (q.solutionSteps ? q.solutionSteps.join("<br>") : ""),
      solutionSteps: q.solutionSteps || null
    };

    return result;
  }

  nextQuestion() {
    this.currentIndex += 1;
    if (this.currentIndex >= this.currentQuestions.length) {
      this.stats.endTime = Date.now();
      return null;
    }
    return this.getCurrentQuestion();
  }

  getSummary() {
    const durationSec = Math.round((this.stats.endTime - this.stats.startTime) / 1000) || 0;
    const accuracy = this.stats.total > 0 ? Math.round((this.stats.correct / this.stats.total) * 100) : 0;
    return {
      ...this.stats,
      durationSec,
      accuracy
    };
  }
}
