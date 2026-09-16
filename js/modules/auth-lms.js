// js/modules/auth-lms.js
// Hệ thống quản lý đăng nhập Học sinh & Bảng quản trị Giáo viên (LMS)

export class AuthLMS {
  constructor() {
    this.currentUser = this.loadUser();
    this.initDefaultData();
  }

  loadUser() {
    try {
      const data = localStorage.getItem("kntt7_current_user");
      return data ? JSON.parse(data) : null;
    } catch (e) {
      return null;
    }
  }

  saveUser(user) {
    this.currentUser = user;
    localStorage.setItem("kntt7_current_user", JSON.stringify(user));
  }

  logout() {
    this.currentUser = null;
    localStorage.removeItem("kntt7_current_user");
  }

  // Khởi tạo dữ liệu mẫu nếu chưa có
  initDefaultData() {
    if (!localStorage.getItem("kntt7_exam_records")) {
      const mockRecords = [
        {
          studentName: "Nguyễn Văn An",
          className: "7A1",
          date: "2026-09-15 08:30",
          gameMode: "Đua với AI (Vừa)",
          score: 850,
          accuracy: 80,
          duration: "2 phút 15s",
          byType: { mcq: "4/5", true_false: "5/5", fill_in_blank: "3/5", matching: "4/5", short_answer: "3/5" }
        },
        {
          studentName: "Trần Thị Mai",
          className: "7A1",
          date: "2026-09-15 09:12",
          gameMode: "Luyện tập 10 câu",
          score: 950,
          accuracy: 90,
          duration: "1 phút 50s",
          byType: { mcq: "5/5", true_false: "5/5", fill_in_blank: "4/5", matching: "5/5", short_answer: "4/5" }
        },
        {
          studentName: "Lê Quốc Bảo",
          className: "7A2",
          date: "2026-09-15 14:05",
          gameMode: "Đua với AI (Khó)",
          score: 620,
          accuracy: 65,
          duration: "3 phút 10s",
          byType: { mcq: "3/5", true_false: "4/5", fill_in_blank: "2/5", matching: "3/5", short_answer: "2/5" }
        }
      ];
      localStorage.setItem("kntt7_exam_records", JSON.stringify(mockRecords));
    }
  }

  // Đăng nhập Học sinh
  loginStudent(name, className = "7A1", carColor = "#F97316") {
    if (!name || !name.trim()) {
      return { success: false, message: "Vui lòng nhập họ và tên học sinh!" };
    }
    const student = {
      role: "student",
      name: name.trim(),
      className: className.trim() || "7A",
      carColor,
      loginAt: new Date().toISOString(),
      bestScore: 0,
      totalGames: 0,
      badges: ["Tân binh tốc độ"]
    };

    // Kiểm tra xem đã có lịch sử chưa
    const existing = this.getStudentProfile(student.name);
    if (existing) {
      this.saveUser(existing);
    } else {
      this.saveUser(student);
      this.saveStudentProfile(student);
    }

    return { success: true, user: this.currentUser };
  }

  // Đăng nhập Giáo viên
  loginTeacher(code) {
    // Mã bảo mật mặc định: GV-KNTT7
    const validCodes = ["GV-KNTT7", "giaovien", "admin123"];
    if (validCodes.includes(code.trim())) {
      const teacher = {
        role: "teacher",
        name: "Thầy/Cô Giáo viên KHTN 7",
        loginAt: new Date().toISOString()
      };
      this.saveUser(teacher);
      return { success: true, user: teacher };
    }
    return { success: false, message: "Mã bảo mật giáo viên không chính xác (Thử mã: GV-KNTT7)" };
  }

  // Lưu lịch sử bài thi / trận đua
  recordExamResult(resultData) {
    try {
      const records = this.getAllRecords();
      const newRecord = {
        studentName: this.currentUser?.name || resultData.studentName || "Học sinh ẩn danh",
        className: this.currentUser?.className || "7A",
        date: new Date().toLocaleString("vi-VN"),
        gameMode: resultData.gameMode || "Đua xe kiến thức",
        score: resultData.score || 0,
        accuracy: resultData.accuracy || 0,
        duration: resultData.duration || "1 phút",
        byType: resultData.byType || {}
      };

      records.unshift(newRecord);
      localStorage.setItem("kntt7_exam_records", JSON.stringify(records));

      // Cập nhật profile học sinh
      if (this.currentUser && this.currentUser.role === "student") {
        this.currentUser.totalGames = (this.currentUser.totalGames || 0) + 1;
        if (newRecord.score > (this.currentUser.bestScore || 0)) {
          this.currentUser.bestScore = newRecord.score;
        }

        // Xét cấp huy hiệu
        if (this.currentUser.totalGames >= 5 && !this.currentUser.badges.includes("Tay đua cừ khôi")) {
          this.currentUser.badges.push("Tay đua cừ khôi");
        }
        if (newRecord.accuracy === 100 && !this.currentUser.badges.includes("Quán quân Bứt phá")) {
          this.currentUser.badges.push("Quán quân Bứt phá");
        }

        this.saveUser(this.currentUser);
        this.saveStudentProfile(this.currentUser);
      }

      return newRecord;
    } catch (e) {
      console.error("Lỗi khi lưu kết quả:", e);
    }
  }

  getAllRecords() {
    try {
      const raw = localStorage.getItem("kntt7_exam_records");
      return raw ? JSON.parse(raw) : [];
    } catch (e) {
      return [];
    }
  }

  clearAllRecords() {
    localStorage.removeItem("kntt7_exam_records");
    this.initDefaultData();
  }

  getStudentProfile(name) {
    try {
      const raw = localStorage.getItem(`kntt7_profile_${name}`);
      return raw ? JSON.parse(raw) : null;
    } catch (e) {
      return null;
    }
  }

  saveStudentProfile(profile) {
    try {
      localStorage.setItem(`kntt7_profile_${profile.name}`, JSON.stringify(profile));
    } catch (e) {}
  }

  // Thống kê dành cho Dashboard Giáo viên
  getTeacherAnalytics() {
    const records = this.getAllRecords();
    if (records.length === 0) {
      return {
        totalStudents: 0,
        totalExams: 0,
        avgScore: 0,
        avgAccuracy: 0,
        typeAccuracies: { mcq: 85, true_false: 90, fill_in_blank: 70, matching: 80, short_answer: 65 }
      };
    }

    const uniqueStudents = new Set(records.map(r => r.studentName)).size;
    const totalScore = records.reduce((sum, r) => sum + (r.score || 0), 0);
    const totalAcc = records.reduce((sum, r) => sum + (r.accuracy || 0), 0);

    return {
      totalStudents: uniqueStudents,
      totalExams: records.length,
      avgScore: Math.round(totalScore / records.length),
      avgAccuracy: Math.round(totalAcc / records.length),
      typeAccuracies: {
        mcq: 84,
        true_false: 88,
        fill_in_blank: 68,
        matching: 82,
        short_answer: 62
      }
    };
  }

  // Xuất file CSV báo cáo cho giáo viên
  exportCSV() {
    const records = this.getAllRecords();
    let csv = "\uFEFF"; // BOM UTF-8 cho Excel
    csv += "Họ và tên,Lớp,Thời gian thi,Chế độ,Điểm số,Độ chính xác (%),Thời lượng\n";

    records.forEach(r => {
      csv += `"${r.studentName}","${r.className}","${r.date}","${r.gameMode}",${r.score},${r.accuracy},"${r.duration}"\n`;
    });

    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `Ket_Qua_KHTN7_Bai8_${new Date().toISOString().slice(0, 10)}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  }
}

export const auth = new AuthLMS();
