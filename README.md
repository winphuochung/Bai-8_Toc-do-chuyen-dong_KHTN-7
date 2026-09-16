# 🚀 Ứng Dụng Học Tập Tương Tác: Bài 8 - Tốc Độ Chuyển Động
### Môn Khoa học tự nhiên 7 — Bộ sách "Kết nối tri thức với cuộc sống"

Ứng dụng web học tập tương tác toàn diện, kết hợp công nghệ giáo dục hiện đại (**EdTech**) và phương pháp học qua trò chơi (**Game-based Learning**) dành riêng cho học sinh THCS lớp 7 và giáo viên bộ môn KHTN.

---

## 🌟 Các Tính Năng Nổi Bật

### 1. 📖 Hệ Thống Lý Thuyết & Video Tương Tác
- **Tóm tắt bài học chuẩn SGK KNTT:** Định nghĩa tốc độ, công thức gốc $v = \frac{s}{t}$, công thức biến đổi $s = v \cdot t$, $t = \frac{s}{v}$.
- **Video bài giảng đa phương tiện:** Nhúng trực tiếp bài giảng YouTube trực quan, chuẩn kiến thức.
- **Bí kíp quy đổi đơn vị vàng:** Hướng dẫn quy tắc $1\text{ m/s} = 3{,}6\text{ km/h}$ với ví dụ thực tiễn.
- **Thế giới tốc độ SGK:** Bảng dữ liệu thực tế về Usain Bolt ($10{,}44\text{ m/s}$), Báo săn Gê-pa ($30\text{ m/s}$), Ốc sên bò ($0{,}0014\text{ m/s}$), Máy bay, Âm thanh...

### 2. 🧮 Máy Tính & Mô Phỏng Vật Lý
- Tính tự động 3 đại lượng: Tốc độ ($v$), Quãng đường ($s$), Thời gian ($t$) với tùy chọn nhiều đơn vị đo ($\text{m, km, cm; s, phút, giờ}$).
- Công cụ quy đổi tốc độ tức thì giữa $\text{m/s}$ và $\text{km/h}$.
- **Mô phỏng so sánh tự nhiên:** Nhập bất kỳ tốc độ nào, máy sẽ tự động tính toán đối chiếu bạn nhanh gấp mấy lần ốc sên, Usain Bolt hay báo săn.

### 3. 🏎️ Game "Đua Xe Kiến Thức" (Knowledge Racer)
- **Đường đua Canvas 2D mượt mà:** Chặng đua cự ly $1.000\text{ mét}$ với vạch đích ca-rô, hiệu ứng nitro bứt phá.
- **2 Chế độ chơi:**
  - *Đua đơn:* Đấu với Bot AI KHTN (3 cấp độ: Dễ, Vừa, Chuyên gia).
  - *Đua đôi (PvP):* Hai học sinh cùng thi thố trên một thiết bị.
- **Cơ chế:** Trả lời đúng nhận **Nitro Boost (+80m đến +180m)** và nhân chuỗi Combo; trả lời sai xe bị khựng lại và hiển thị giải thích vật lý ngay lập tức.
- **Hiệu ứng âm thanh sinh động:** Tích hợp **Web Audio API** tạo tiếng nẹt pô, nitro vút bay, tiếng chuông trả lời đúng/sai và nhạc vinh danh (100% offline).

### 4. 📝 Ngân Hàng 100 Câu Hỏi (5 Dạng x 20 Câu)
- Đảm bảo đúng 20 câu/dạng, phân loại 3 mức độ (Nhận biết, Thông hiểu, Vận dụng):
  1. **Trắc nghiệm 4 lựa chọn (MCQ):** 20 câu.
  2. **Đúng / Sai (True / False):** 20 câu.
  3. **Điền khuyết (Fill-in-the-blank):** 20 câu.
  4. **Ghép cột (Matching):** 20 câu với giao diện chọn - ghép nối trực quan.
  5. **Tự luận tính toán ngắn:** 20 câu toán vật lý thực tế, có hướng dẫn từng bước giải chi tiết và kiểm tra dung sai $\pm 2\%$.
- Tự động xáo trộn (Randomize) chống học vẹt, phản hồi giải thích khoa học dựa trên $v = s/t$.

### 5. 👨‍🏫 Hệ Thống Quản Trị & Cổng Giáo Viên (LMS)
- **Cổng Học sinh:** Lưu hồ sơ, điểm số cao nhất, tích lũy huy hiệu thành tích.
- **Cổng Giáo viên (Mã bảo mật: `GV-KNTT7`):**
  - Xem bảng thống kê tổng số học sinh, số lượt thi, điểm trung bình, độ chính xác.
  - **Biểu đồ phân tích độ chính xác theo từng dạng bài:** Nhận diện ngay dạng bài học sinh còn yếu (Trắc nghiệm, Đúng/Sai, Điền khuyết, Ghép cột, Tự luận).
  - **Xuất file Excel / CSV:** Xuất toàn bộ bảng điểm chỉ với 1 click.

---

## 💻 Hướng Dẫn Cài Đặt & Sử Dụng

### Cách 1: Mở trực tiếp trên máy tính (Nhanh nhất & Đã tối ưu)
1. Truy cập thư mục dự án: `d:\APP-HOC-TAP\Bai8-toc-do-chuyen-dong\`
2. Nhấp đúp chuột vào file `index.html` để mở trong bất kỳ trình duyệt nào (Google Chrome, Microsoft Edge, Cốc Cốc, Firefox...).
3. Toàn bộ mã nguồn đã được đóng gói thành công ở dạng **Standalone Script (`app.bundle.js`)**, chạy 100% trơn tru ngay trên giao thức `file://` mà **không bị chặn bởi chính sách CORS** của trình duyệt.
4. Video bài giảng tích hợp 3 nguồn bài giảng chuẩn và nút mở trực tiếp trên YouTube nếu mạng trường học hoặc trình duyệt chặn nhúng iframe.

### Cách 2: Chạy qua Web Server nội bộ (Local Server)
Nếu bạn có Python trên máy tính:
```bash
cd d:\APP-HOC-TAP\Bai8-toc-do-chuyen-dong
python -m http.server 8000
```
Sau đó mở trình duyệt truy cập: `http://localhost:8000`

### Cách 3: Đưa lên Internet (Miễn phí)
- **GitHub Pages:** Đẩy thư mục mã nguồn lên GitHub, vào *Settings ➔ Pages ➔ Source: main branch* để nhận đường link online.
- **Vercel / Netlify:** Kéo thả thư mục dự án vào trang quản trị Vercel/Netlify để ứng dụng chạy online cho cả lớp cùng thi đua.

---

## 🔑 Thông Tin Đăng Nhập Mặc Định
- **Học sinh:** Tự do nhập họ tên và lớp (ví dụ: `Nguyễn Văn An`, lớp `7A1`).
- **Giáo viên:** Nhấn vào "Cổng Giáo viên" và nhập mã: `GV-KNTT7` (hoặc `giaovien`).

---
*Dự án được xây dựng với cấu trúc mã nguồn tối ưu, tương thích hoàn hảo trên cả máy tính để bàn, laptop, máy tính bảng và điện thoại thông minh.*
