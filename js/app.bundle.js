// js/app.bundle.js
// TOÀN BỘ MÃ NGUỒN ĐÓNG GÓI CHUẨN STANDALONE (KHÔNG DÙNG ES MODULES)
// Đảm bảo chạy 100% trơn tru khi nhấp đúp file index.html trực tiếp từ máy tính (giao thức file://)

(function() {
  "use strict";

  // ==========================================
  // 1. DỮ LIỆU LÝ THUYẾT SGK KNTT BÀI 8
  // ==========================================
  const THEORY_DATA = {
    lessonTitle: "Bài 8: Tốc độ chuyển động",
    subject: "Khoa học tự nhiên 7 (Bộ sách Kết nối tri thức với cuộc sống)",
    videos: [
      { id: "a4CtFYYYAPA", title: "1. VietJack: Bài 8 Tốc độ chuyển động (Chuẩn KNTT 7)" },
      { id: "J3g7yT6kG3I", title: "2. Thầy Quang: Bài 8 Tốc độ chuyển động (KNTT 7)" },
      { id: "5zpZPaQOnWA", title: "3. OLM: Bài 8 Tốc độ chuyển động (Phần 1)" },
      { id: "llIbQUJ0G6k", title: "4. Thế Giới KHTN: Bài 8 Tốc độ chuyển động" }
    ],
    sections: [
      {
        id: "concept",
        title: "1. Khái niệm tốc độ chuyển động",
        badge: "Cốt lõi",
        icon: "zap",
        content: `
          <p class="mb-3">Để xác định chuyển động nào nhanh hơn hay chậm hơn, ta có thể so sánh:</p>
          <ul class="list-disc pl-6 space-y-2 mb-4 text-slate-700">
            <li><strong>Quãng đường đi được trong cùng một khoảng thời gian:</strong> Chuyển động nào đi được quãng đường dài hơn thì chuyển động đó nhanh hơn.</li>
            <li><strong>Thời gian cần thiết để đi cùng một quãng đường:</strong> Chuyển động nào mất ít thời gian hơn thì chuyển động đó nhanh hơn.</li>
          </ul>
          <div class="p-4 rounded-xl bg-orange-50 border border-orange-200 text-orange-950">
            <p class="font-bold text-base sm:text-lg mb-1 flex items-center gap-2">
              <span class="text-orange-600 font-black">★</span> Định nghĩa Tốc độ:
            </p>
            <p><strong>Tốc độ</strong> là đại lượng cho biết mức độ <em>nhanh hay chậm</em> của chuyển động, được xác định bằng quãng đường đi được trong một đơn vị thời gian.</p>
          </div>
        `
      },
      {
        id: "formula",
        title: "2. Công thức tính tốc độ",
        badge: "Ghi nhớ",
        icon: "calculator",
        content: `
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <div class="bg-blue-50 border border-blue-200 p-4 rounded-xl text-center shadow-sm">
              <p class="text-xs font-bold text-blue-800 uppercase mb-1">Công thức cốt lõi</p>
              <div class="text-3xl font-extrabold text-blue-900 my-2">v = s / t</div>
              <p class="text-xs text-blue-700 font-medium">Tốc độ = Quãng đường / Thời gian</p>
            </div>
            <div class="bg-amber-50 border border-amber-200 p-4 rounded-xl text-center shadow-sm">
              <p class="text-xs font-bold text-amber-800 uppercase mb-1">Tìm quãng đường</p>
              <div class="text-3xl font-extrabold text-amber-900 my-2">s = v · t</div>
              <p class="text-xs text-amber-700 font-medium">Quãng đường = Tốc độ × Thời gian</p>
            </div>
            <div class="bg-emerald-50 border border-emerald-200 p-4 rounded-xl text-center shadow-sm">
              <p class="text-xs font-bold text-emerald-800 uppercase mb-1">Tìm thời gian</p>
              <div class="text-3xl font-extrabold text-emerald-900 my-2">t = s / v</div>
              <p class="text-xs text-emerald-700 font-medium">Thời gian = Quãng đường / Tốc độ</p>
            </div>
          </div>
          <div class="bg-slate-50 p-4 rounded-xl border border-slate-200 text-sm space-y-1">
            <p><strong>Trong đó:</strong></p>
            <p>• <span class="font-semibold text-blue-600">s</span> là quãng đường vật đi được (đơn vị: mét - m, hoặc kilômét - km).</p>
            <p>• <span class="font-semibold text-emerald-600">t</span> là thời gian vật đi hết quãng đường đó (đơn vị: giây - s, hoặc giờ - h).</p>
            <p>• <span class="font-semibold text-orange-600">v</span> là tốc độ của chuyển động (đơn vị: m/s hoặc km/h).</p>
          </div>
        `
      },
      {
        id: "units",
        title: "3. Đơn vị đo tốc độ & Quy tắc quy đổi",
        badge: "Kỹ năng tính",
        icon: "repeat",
        content: `
          <div class="space-y-4">
            <p>Trong hệ đơn vị đo lường hợp pháp (SI) của nước ta, đơn vị chuẩn của tốc độ là <strong>mét trên giây (m/s)</strong>. Ngoài ra, trong đời sống thường dùng đơn vị <strong>kilômét trên giờ (km/h)</strong>.</p>
            <div class="bg-gradient-to-r from-orange-500 to-amber-500 text-white p-5 rounded-2xl shadow-md">
              <p class="text-xs uppercase tracking-widest font-bold opacity-90 mb-2">Bí kíp quy đổi nhanh</p>
              <div class="flex flex-wrap items-center justify-around gap-4 text-center font-bold">
                <div class="bg-white/20 backdrop-blur px-4 py-2 rounded-xl">
                  <span class="text-2xl">1 m/s = 3,6 km/h</span>
                </div>
                <div class="text-3xl">⇄</div>
                <div class="bg-white/20 backdrop-blur px-4 py-2 rounded-xl">
                  <span class="text-2xl">1 km/h ≈ 0,28 m/s</span>
                </div>
              </div>
              <div class="mt-3 text-xs flex flex-wrap justify-between border-t border-white/20 pt-2 gap-2">
                <span>★ Đổi từ <strong>m/s sang km/h</strong>: Nhân với <strong>3,6</strong></span>
                <span>★ Đổi từ <strong>km/h sang m/s</strong>: Chia cho <strong>3,6</strong></span>
              </div>
            </div>
          </div>
        `
      },
      {
        id: "devices",
        title: "4. Dụng cụ đo tốc độ",
        badge: "Thực nghiệm",
        icon: "compass",
        content: `
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div class="border border-slate-200 rounded-xl p-4 bg-white shadow-sm">
              <div class="w-8 h-8 rounded-lg bg-orange-100 text-orange-600 flex items-center justify-center font-bold mb-2 text-sm">01</div>
              <h4 class="font-bold text-slate-800 text-sm mb-1">Thước & Đồng hồ bấm giây</h4>
              <p class="text-xs text-slate-600 leading-relaxed">Dùng thước đo quãng đường s, dùng đồng hồ bấm giây đo thời gian t, sau đó tính v = s/t.</p>
            </div>
            <div class="border border-slate-200 rounded-xl p-4 bg-white shadow-sm">
              <div class="w-8 h-8 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center font-bold mb-2 text-sm">02</div>
              <h4 class="font-bold text-slate-800 text-sm mb-1">Cổng quang điện & Hiện số</h4>
              <p class="text-xs text-slate-600 leading-relaxed">Tự động bấm giờ khi vật chắn chùm sáng cảm ứng, giảm thiểu tối đa sai số phản xạ con người.</p>
            </div>
            <div class="border border-slate-200 rounded-xl p-4 bg-white shadow-sm">
              <div class="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold mb-2 text-sm">03</div>
              <h4 class="font-bold text-slate-800 text-sm mb-1">Thiết bị bắn tốc độ (CSGT)</h4>
              <p class="text-xs text-slate-600 leading-relaxed">Sử dụng sóng vô tuyến hoặc laser để ghi nhận thời gian thực tốc độ của các phương tiện lưu thông.</p>
            </div>
          </div>
        `
      },
      {
        id: "speed-world",
        title: "5. Bảng dữ liệu tốc độ trong tự nhiên & đời sống (SGK KNTT)",
        badge: "Khám phá",
        icon: "globe",
        content: `
          <p class="text-xs text-slate-600 mb-3">Số liệu tham khảo từ Bảng 8.2 SGK Khoa học tự nhiên 7 (Kết nối tri thức):</p>
          <div class="overflow-x-auto rounded-xl border border-slate-200">
            <table class="w-full text-xs text-left">
              <thead class="bg-slate-100 text-slate-700 font-bold border-b border-slate-200">
                <tr>
                  <th class="p-2.5">Đối tượng chuyển động</th>
                  <th class="p-2.5 text-right">Tốc độ (m/s)</th>
                  <th class="p-2.5 text-right">Tốc độ (km/h)</th>
                  <th class="p-2.5">Đặc điểm SGK</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-100">
                <tr class="hover:bg-orange-50/50">
                  <td class="p-2.5 font-semibold text-slate-800">🐌 Ốc sên bò</td>
                  <td class="p-2.5 text-right text-orange-600 font-mono">0,0014</td>
                  <td class="p-2.5 text-right text-orange-600 font-mono">≈ 0,005</td>
                  <td class="p-2.5 text-[11px] text-slate-500">Chuyển động rất chậm</td>
                </tr>
                <tr class="hover:bg-orange-50/50">
                  <td class="p-2.5 font-semibold text-slate-800">🐢 Rùa bơi / bò</td>
                  <td class="p-2.5 text-right text-orange-600 font-mono">0,055</td>
                  <td class="p-2.5 text-right text-orange-600 font-mono">≈ 0,20</td>
                  <td class="p-2.5 text-[11px] text-slate-500">Chậm chạp</td>
                </tr>
                <tr class="hover:bg-orange-50/50">
                  <td class="p-2.5 font-semibold text-slate-800">🚶 Người đi bộ bình thường</td>
                  <td class="p-2.5 text-right text-blue-600 font-mono">1,50</td>
                  <td class="p-2.5 text-right text-blue-600 font-mono">5,40</td>
                  <td class="p-2.5 text-[11px] text-slate-500">Tốc độ di chuyển hàng ngày</td>
                </tr>
                <tr class="hover:bg-orange-50/50 bg-emerald-50/30">
                  <td class="p-2.5 font-semibold text-slate-800">🏃 Kỷ lục gia Usain Bolt (100m)</td>
                  <td class="p-2.5 text-right text-emerald-600 font-mono font-bold">10,44</td>
                  <td class="p-2.5 text-right text-emerald-600 font-mono font-bold">37,58</td>
                  <td class="p-2.5 text-[11px] text-slate-500">Kỷ lục thế giới điền kinh 9,58s</td>
                </tr>
                <tr class="hover:bg-orange-50/50 bg-amber-50/40">
                  <td class="p-2.5 font-semibold text-slate-800">🐆 Báo săn Gê-pa (Cheetah)</td>
                  <td class="p-2.5 text-right text-amber-600 font-mono font-bold">30,00</td>
                  <td class="p-2.5 text-right text-amber-600 font-mono font-bold">108,00</td>
                  <td class="p-2.5 text-[11px] text-slate-500">Động vật chạy nhanh nhất trên cạn</td>
                </tr>
                <tr class="hover:bg-orange-50/50">
                  <td class="p-2.5 font-semibold text-slate-800">🚗 Ô tô lưu thông thông thường</td>
                  <td class="p-2.5 text-right text-blue-600 font-mono">16,7 – 27,8</td>
                  <td class="p-2.5 text-right text-blue-600 font-mono">60 – 100</td>
                  <td class="p-2.5 text-[11px] text-slate-500">Quy định luật an toàn giao thông</td>
                </tr>
                <tr class="hover:bg-orange-50/50">
                  <td class="p-2.5 font-semibold text-slate-800">✈️ Máy bay chở khách</td>
                  <td class="p-2.5 text-right text-indigo-600 font-mono">222 – 250</td>
                  <td class="p-2.5 text-right text-indigo-600 font-mono">800 – 900</td>
                  <td class="p-2.5 text-[11px] text-slate-500">Vận tải đường hàng không</td>
                </tr>
                <tr class="hover:bg-orange-50/50">
                  <td class="p-2.5 font-semibold text-slate-800">🌊 Vết nứt tách giãn đáy đại dương</td>
                  <td class="p-2.5 text-right text-slate-500 font-mono">vài cm/năm</td>
                  <td class="p-2.5 text-right text-slate-500 font-mono">—</td>
                  <td class="p-2.5 text-[11px] text-slate-500">Kiến tạo mảng thạch quyển Trái Đất</td>
                </tr>
              </tbody>
            </table>
          </div>
        `
      }
    ]
  };

  // ==========================================
  // 2. NGÂN HÀNG 100 CÂU HỎI (5 DẠNG X 20 CÂU)
  // ==========================================
  const QUESTIONS_BANK = {
    mcq: [
      { id: "mcq_01", type: "mcq", level: "nhan_biet", question: "Tốc độ là đại lượng cho biết:", options: ["Mức độ nhanh hay chậm của chuyển động trong một đơn vị thời gian", "Hướng chuyển động của vật trong không gian", "Khối lượng của vật đang chuyển động", "Quãng đường dài nhất mà vật có thể đi"], correct: 0, explanation: "Theo SGK KHTN 7: Tốc độ là đại lượng cho biết mức độ nhanh hay chậm của chuyển động." },
      { id: "mcq_02", type: "mcq", level: "nhan_biet", question: "Công thức tổng quát tính tốc độ chuyển động là:", options: ["v = s / t", "v = s . t", "v = t / s", "s = v / t"], correct: 0, explanation: "Công thức chuẩn: v = s / t, trong đó s là quãng đường, t là thời gian." },
      { id: "mcq_03", type: "mcq", level: "nhan_biet", question: "Đơn vị đo tốc độ hợp pháp (SI) của nước ta là:", options: ["Mét trên giây (m/s)", "Kilômét trên phút (km/min)", "Centimét trên giây (cm/s)", "Dặm trên giờ (mph)"], correct: 0, explanation: "Trong hệ SI, đơn vị đo độ dài là mét (m), thời gian là giây (s), nên đơn vị tốc độ là m/s." },
      { id: "mcq_04", type: "mcq", level: "nhan_biet", question: "Để đo thời gian chuyển động trong phòng thí nghiệm với độ chính xác cao nhất, người ta dùng:", options: ["Cổng quang điện kết hợp đồng hồ đo thời gian hiện số", "Đồng hồ cát cổ truyền", "Đồng hồ đeo tay có kim giây", "Đồng hồ quả lắc cơ học"], correct: 0, explanation: "Cổng quang điện cảm biến chùm sáng và kích hoạt đồng hồ điện tử tự động, hạn chế sai số con người." },
      { id: "mcq_05", type: "mcq", level: "nhan_biet", question: "Thiết bị CSGT thường dùng để kiểm tra phương tiện chạy quá tốc độ quy định là:", options: ["Thiết bị bắn tốc độ", "Thước dây cuộn", "Nhiệt kế hồng ngoại", "Máy đo áp suất lốp"], correct: 0, explanation: "Thiết bị bắn tốc độ (radar/laser) ghi nhận thời gian và tính toán ngay tốc độ của xe trên đường." },
      { id: "mcq_06", type: "mcq", level: "thong_hieu", question: "Mối liên hệ quy đổi giữa hai đơn vị tốc độ thông dụng m/s và km/h là:", options: ["1 m/s = 3,6 km/h", "1 km/h = 3,6 m/s", "1 m/s = 1 km/h", "1 m/s = 0,36 km/h"], correct: 0, explanation: "1 m/s = 1m / 1s = (1/1000 km) / (1/3600 h) = 3600 / 1000 = 3,6 km/h." },
      { id: "mcq_07", type: "mcq", level: "thong_hieu", question: "Một con báo săn Gê-pa có tốc độ 30 m/s. Đổi sang đơn vị km/h, tốc độ của báo là:", options: ["108 km/h", "83,3 km/h", "300 km/h", "10,8 km/h"], correct: 0, explanation: "v = 30 × 3,6 = 108 km/h (loài thú chạy nhanh nhất trên mặt đất theo SGK)." },
      { id: "mcq_08", type: "mcq", level: "thong_hieu", question: "Biết ô tô di chuyển với tốc độ 54 km/h. Tốc độ này tính theo m/s bằng:", options: ["15 m/s", "194,4 m/s", "20 m/s", "10 m/s"], correct: 0, explanation: "Đổi km/h sang m/s: chia cho 3,6. 54 / 3,6 = 15 m/s." },
      { id: "mcq_09", type: "mcq", level: "thong_hieu", question: "Hai bạn Nam và An cùng chạy quãng đường 60 m. Nam chạy hết 10 s, An chạy hết 12 s. So sánh nào đúng?", options: ["Nam chạy nhanh hơn An", "An chạy nhanh hơn Nam", "Hai bạn chạy nhanh như nhau", "Không thể so sánh được"], correct: 0, explanation: "Cùng quãng đường 60m, Nam mất ít thời gian hơn (10s < 12s) nên Nam có tốc độ lớn hơn (6 m/s > 5 m/s)." },
      { id: "mcq_10", type: "mcq", level: "thong_hieu", question: "Từ công thức v = s / t, công thức để tính quãng đường s là:", options: ["s = v . t", "s = v / t", "s = t / v", "s = v + t"], correct: 0, explanation: "Nhân chéo hai vế: s = v · t." },
      { id: "mcq_11", type: "mcq", level: "thong_hieu", question: "Từ công thức v = s / t, công thức để xác định thời gian chuyển động t là:", options: ["t = s / v", "t = s . v", "t = v / s", "t = s - v"], correct: 0, explanation: "Biến đổi đại số: t = s / v." },
      { id: "mcq_12", type: "mcq", level: "thong_hieu", question: "Một con ốc sên bò với tốc độ khoảng 0,0014 m/s. Đây là đối tượng đại diện cho:", options: ["Chuyển động có tốc độ rất nhỏ trong tự nhiên", "Chuyển động nhanh nhất trong các loài nhuyễn thể", "Chuyển động có gia tốc lớn", "Vật đứng yên tuyệt đối"], correct: 0, explanation: "Trong bảng số liệu SGK KHTN 7, ốc sên bò với tốc độ 0,0014 m/s (chỉ khoảng 5 mét/giờ)." },
      { id: "mcq_13", type: "mcq", level: "van_dung", question: "Một học sinh đạp xe từ nhà đến trường trên quãng đường 3 km hết 15 phút (0,25 giờ). Tốc độ đạp xe là:", options: ["12 km/h", "5 km/h", "15 km/h", "20 km/h"], correct: 0, explanation: "v = s / t = 3 / 0,25 = 12 km/h." },
      { id: "mcq_14", type: "mcq", level: "van_dung", question: "Kỷ lục gia Usain Bolt chạy 100 m hết 9,58 s. Tốc độ trung bình xấp xỉ của anh là:", options: ["10,44 m/s", "9,58 m/s", "12,50 m/s", "8,25 m/s"], correct: 0, explanation: "v = s / t = 100 / 9,58 ≈ 10,44 m/s (tương đương 37,58 km/h)." },
      { id: "mcq_15", type: "mcq", level: "van_dung", question: "Tàu hỏa chạy từ ga A đến ga B với tốc độ không đổi 60 km/h trong 2,5 giờ. Quãng đường AB dài:", options: ["150 km", "120 km", "24 km", "180 km"], correct: 0, explanation: "Áp dụng s = v · t = 60 × 2,5 = 150 km." },
      { id: "mcq_16", type: "mcq", level: "van_dung", question: "Một ca nô chạy trên sông dài 36 km với tốc độ 24 km/h. Thời gian ca nô đi hết đoạn sông là:", options: ["1,5 giờ (90 phút)", "1,2 giờ", "2,0 giờ", "0,67 giờ"], correct: 0, explanation: "Áp dụng t = s / v = 36 / 24 = 1,5 h = 1 giờ 30 phút." },
      { id: "mcq_17", type: "mcq", level: "van_dung", question: "Xe buýt chạy trên đoạn đường có biển báo tốc độ tối đa 50 km/h. Xe đi 1,2 km trong 1,2 phút (0,02 h). Xe có vi phạm tốc độ không?", options: ["Có vi phạm (v = 60 km/h > 50 km/h)", "Không vi phạm (v = 40 km/h < 50 km/h)", "Không vi phạm (v = 50 km/h)", "Không đủ dữ kiện"], correct: 0, explanation: "v = 1,2 / 0,02 = 60 km/h > 50 km/h, nên xe vi phạm." },
      { id: "mcq_18", type: "mcq", level: "van_dung", question: "Biển báo giao thông hình tròn viền đỏ, nền trắng, ở giữa ghi số '60' có ý nghĩa gì?", options: ["Tốc độ tối đa cho phép là 60 km/h", "Tốc độ tối thiểu phải đạt là 60 km/h", "Khoảng cách tối thiểu giữa 2 xe là 60 m", "Quãng đường còn lại là 60 km"], correct: 0, explanation: "Biển hạn chế tốc độ tối đa P.127: không được chạy vượt quá 60 km/h." },
      { id: "mcq_19", type: "mcq", level: "van_dung", question: "Một người đi xe máy 20 km đầu hết 30 phút, 15 km sau hết 20 phút. Tốc độ trên cả quãng đường là:", options: ["42 km/h", "35 km/h", "50 km/h", "30 km/h"], correct: 0, explanation: "Tổng s = 35 km. Tổng t = 50 phút = 5/6 h. v = 35 / (5/6) = 42 km/h." },
      { id: "mcq_20", type: "mcq", level: "van_dung", question: "Nhìn thấy tia chớp trước rồi 3 giây sau mới nghe tiếng sấm. Tốc độ âm thanh là 340 m/s. Khoảng cách nơi sét đánh là:", options: ["1020 m", "340 m", "680 m", "170 m"], correct: 0, explanation: "s = v · t = 340 × 3 = 1020 m." }
    ],
    true_false: [
      { id: "tf_01", type: "true_false", level: "nhan_biet", question: "Tốc độ của một vật cho biết vật chuyển động nhanh hay chậm.", correct: true, explanation: "Đúng. Đây là định nghĩa cơ bản của tốc độ trong SGK KHTN 7." },
      { id: "tf_02", type: "true_false", level: "nhan_biet", question: "Đơn vị tốc độ luôn luôn bắt buộc phải là kilômét trên giờ (km/h) trong mọi trường hợp.", correct: false, explanation: "Sai. Đơn vị hợp pháp theo hệ đo lường chuẩn SI là m/s." },
      { id: "tf_03", type: "true_false", level: "nhan_biet", question: "Dụng cụ đo tốc độ gồm thước để đo quãng đường và đồng hồ bấm giây để đo thời gian.", correct: true, explanation: "Đúng. Đây là phương pháp đo gián tiếp tốc độ." },
      { id: "tf_04", type: "true_false", level: "nhan_biet", question: "Công thức v = t / s là công thức chính xác để tính tốc độ.", correct: false, explanation: "Sai. Công thức đúng phải là v = s / t." },
      { id: "tf_05", type: "true_false", level: "nhan_biet", question: "Báo săn Gê-pa là loài động vật chạy nhanh nhất trên cạn được đề cập trong SGK KHTN 7.", correct: true, explanation: "Đúng. Báo săn có thể đạt tốc độ 30 m/s (108 km/h)." },
      { id: "tf_06", type: "true_false", level: "thong_hieu", question: "10 m/s quy đổi sang km/h tương đương với 36 km/h.", correct: true, explanation: "Đúng. 10 × 3,6 = 36 km/h." },
      { id: "tf_07", type: "true_false", level: "thong_hieu", question: "Vận tốc 72 km/h tương đương với 20 m/s.", correct: true, explanation: "Đúng. 72 / 3,6 = 20 m/s." },
      { id: "tf_08", type: "true_false", level: "thong_hieu", question: "Nếu hai vật cùng đi được quãng đường 100 m, vật nào mất nhiều thời gian hơn sẽ có tốc độ lớn hơn.", correct: false, explanation: "Sai. Vật nào mất ít thời gian hơn mới có tốc độ lớn hơn." },
      { id: "tf_09", type: "true_false", level: "thong_hieu", question: "Nếu hai vật chuyển động trong cùng 1 phút, vật nào đi được quãng đường dài hơn thì có tốc độ lớn hơn.", correct: true, explanation: "Đúng. Cùng thời gian t, s lớn hơn thì v = s/t lớn hơn." },
      { id: "tf_10", type: "true_false", level: "thong_hieu", question: "Đồng hồ đo tốc độ (công-tơ-mét) gắn trên xe máy chỉ tốc độ trung bình của toàn bộ chuyến đi.", correct: false, explanation: "Sai. Công-tơ-mét hiển thị tốc độ tức thời tại thời điểm xe đang chạy." },
      { id: "tf_11", type: "true_false", level: "thong_hieu", question: "Ốc sên di chuyển với tốc độ khoảng 0,0014 m/s, tức là chưa đầy 2 mm trong mỗi giây.", correct: true, explanation: "Đúng. 0,0014 m = 1,4 mm/s, cực kỳ chậm." },
      { id: "tf_12", type: "true_false", level: "thong_hieu", question: "Khi đổi từ đơn vị km/h sang m/s, ta thực hiện phép tính nhân với 3,6.", correct: false, explanation: "Sai. Từ km/h sang m/s ta phải chia cho 3,6." },
      { id: "tf_13", type: "true_false", level: "van_dung", question: "Một xe máy đi quãng đường 45 km trong 1,5 giờ thì tốc độ là 30 km/h.", correct: true, explanation: "Đúng. v = s / t = 45 / 1,5 = 30 km/h." },
      { id: "tf_14", type: "true_false", level: "van_dung", question: "Vận động viên bơi cự ly 100 m trong 50 giây có tốc độ là 2 m/s.", correct: true, explanation: "Đúng. v = s / t = 100 / 50 = 2 m/s." },
      { id: "tf_15", type: "true_false", level: "van_dung", question: "Tốc độ 15 m/s nhanh hơn tốc độ 50 km/h.", correct: true, explanation: "Đúng. 15 m/s = 54 km/h > 50 km/h." },
      { id: "tf_16", type: "true_false", level: "van_dung", question: "Một đoàn tàu di chuyển với tốc độ 80 km/h sẽ đi được quãng đường 200 km sau 2 giờ 30 phút.", correct: true, explanation: "Đúng. 2h30p = 2,5 h; s = 80 × 2,5 = 200 km." },
      { id: "tf_17", type: "true_false", level: "van_dung", question: "Thiết bị bắn tốc độ CSGT sử dụng nguyên lý đo nhiệt độ ma sát của bánh xe với mặt đường.", correct: false, explanation: "Sai. Sử dụng sóng vô tuyến hoặc laser để tính thời gian phản hồi." },
      { id: "tf_18", type: "true_false", level: "van_dung", question: "Đi bộ với tốc độ 1,5 m/s thì trong 1 giờ sẽ đi được quãng đường 5,4 km.", correct: true, explanation: "Đúng. 1,5 m/s = 5,4 km/h." },
      { id: "tf_19", type: "true_false", level: "van_dung", question: "Nếu giữ nguyên quãng đường s và tăng thời gian chuyển động t lên 2 lần thì tốc độ v sẽ tăng lên 2 lần.", correct: false, explanation: "Sai. Thời gian t tăng 2 lần thì tốc độ v giảm đi 2 lần." },
      { id: "tf_20", type: "true_false", level: "van_dung", question: "Biển báo quy định tốc độ tối đa giúp các phương tiện duy trì khoảng cách an toàn và hạn chế tai nạn.", correct: true, explanation: "Đúng. Tuân thủ tốc độ quy định là nguyên tắc tối quan trọng." }
    ],
    fill_in_blank: [
      { id: "fib_01", type: "fill_in_blank", level: "nhan_biet", question: "Đại lượng cho biết mức độ nhanh hay chậm của chuyển động được gọi là ___.", blankPrompt: "Đại lượng cho biết mức độ nhanh hay chậm của chuyển động được gọi là [___].", keywords: ["tốc độ", "tốc độ chuyển động", "toc do"], explanation: "Tốc độ đặc trưng cho sự nhanh hay chậm của chuyển động." },
      { id: "fib_02", type: "fill_in_blank", level: "nhan_biet", question: "Trong công thức v = s / t, đại lượng s tượng trưng cho ___ vật đi được.", blankPrompt: "Trong công thức v = s / t, đại lượng s tượng trưng cho [___] vật đi được.", keywords: ["quãng đường", "quang duong"], explanation: "s là quãng đường đi được." },
      { id: "fib_03", type: "fill_in_blank", level: "nhan_biet", question: "Trong công thức v = s / t, đại lượng t tượng trưng cho ___ đi hết quãng đường đó.", blankPrompt: "Trong công thức v = s / t, đại lượng t tượng trưng cho [___] đi hết quãng đường đó.", keywords: ["thời gian", "thoi gian"], explanation: "t là thời gian chuyển động." },
      { id: "fib_04", type: "fill_in_blank", level: "nhan_biet", question: "Đơn vị đo tốc độ chuẩn trong hệ thống đo lường quốc tế SI là ___ trên giây.", blankPrompt: "Đơn vị đo tốc độ chuẩn trong hệ thống đo lường quốc tế SI là [___] trên giây.", keywords: ["mét", "met", "m"], explanation: "Đơn vị SI của tốc độ là mét trên giây (m/s)." },
      { id: "fib_05", type: "fill_in_blank", level: "nhan_biet", question: "Để đo thời gian trong thí nghiệm một cách tự động và chính xác, người ta dùng cổng ___ điện.", blankPrompt: "Để đo thời gian trong thí nghiệm một cách tự động và chính xác, người ta dùng cổng [___] điện.", keywords: ["quang", "quang điện"], explanation: "Cổng quang điện cảm biến chùm sáng." },
      { id: "fib_06", type: "fill_in_blank", level: "thong_hieu", question: "Khi đổi từ đơn vị m/s sang km/h, ta lấy giá trị tốc độ đó nhân với số ___.", blankPrompt: "Khi đổi từ đơn vị m/s sang km/h, ta lấy giá trị tốc độ đó nhân với số [___].", keywords: ["3,6", "3.6"], explanation: "1 m/s = 3,6 km/h." },
      { id: "fib_07", type: "fill_in_blank", level: "thong_hieu", question: "Khi đổi từ đơn vị km/h sang m/s, ta lấy giá trị tốc độ đó chia cho số ___.", blankPrompt: "Khi đổi từ đơn vị km/h sang m/s, ta lấy giá trị tốc độ đó chia cho số [___].", keywords: ["3,6", "3.6"], explanation: "Từ km/h sang m/s: chia cho 3,6." },
      { id: "fib_08", type: "fill_in_blank", level: "thong_hieu", question: "Tốc độ 10 m/s đổi ra km/h có giá trị là ___ km/h.", blankPrompt: "Tốc độ 10 m/s đổi ra km/h có giá trị là [___] km/h.", keywords: ["36"], explanation: "10 × 3,6 = 36 km/h." },
      { id: "fib_09", type: "fill_in_blank", level: "thong_hieu", question: "Tốc độ 72 km/h đổi ra m/s có giá trị là ___ m/s.", blankPrompt: "Tốc độ 72 km/h đổi ra m/s có giá trị là [___] m/s.", keywords: ["20"], explanation: "72 / 3,6 = 20 m/s." },
      { id: "fib_10", type: "fill_in_blank", level: "thong_hieu", question: "Muốn tính quãng đường khi biết tốc độ và thời gian, ta dùng công thức s = ___ .", blankPrompt: "Muốn tính quãng đường khi biết tốc độ và thời gian, ta dùng công thức s = [___].", keywords: ["v . t", "v*t", "v.t", "v x t", "vt"], explanation: "s = v · t." },
      { id: "fib_11", type: "fill_in_blank", level: "thong_hieu", question: "Muốn tính thời gian khi biết quãng đường và tốc độ, ta dùng công thức t = ___ .", blankPrompt: "Muốn tính thời gian khi biết quãng đường và tốc độ, ta dùng công thức t = [___].", keywords: ["s / v", "s/v"], explanation: "t = s / v." },
      { id: "fib_12", type: "fill_in_blank", level: "thong_hieu", question: "Báo săn Gê-pa có thể chạy với tốc độ lên tới ___ m/s trong cự ly ngắn.", blankPrompt: "Báo săn Gê-pa có thể chạy với tốc độ lên tới [___] m/s trong cự ly ngắn.", keywords: ["30"], explanation: "Báo săn đạt tốc độ 30 m/s (108 km/h)." },
      { id: "fib_13", type: "fill_in_blank", level: "van_dung", question: "Kỷ lục gia Usain Bolt chạy 100 m hết 9,58 giây, tốc độ xấp xỉ của anh là ___ m/s (làm tròn 2 chữ số thập phân).", blankPrompt: "Kỷ lục gia Usain Bolt chạy 100 m hết 9,58 giây, tốc độ xấp xỉ của anh là [___] m/s.", keywords: ["10,44", "10.44"], explanation: "v = 100 / 9,58 ≈ 10,44 m/s." },
      { id: "fib_14", type: "fill_in_blank", level: "van_dung", question: "Một người đi xe đạp với tốc độ 4 m/s trong 10 giây thì đi được quãng đường là ___ mét.", blankPrompt: "Một người đi xe đạp với tốc độ 4 m/s trong 10 giây thì đi được quãng đường là [___] mét.", keywords: ["40"], explanation: "s = v · t = 4 × 10 = 40 m." },
      { id: "fib_15", type: "fill_in_blank", level: "van_dung", question: "Một ô tô chạy quãng đường 180 km với tốc độ 60 km/h sẽ mất thời gian là ___ giờ.", blankPrompt: "Một ô tô chạy quãng đường 180 km với tốc độ 60 km/h sẽ mất thời gian là [___] giờ.", keywords: ["3"], explanation: "t = s / v = 180 / 60 = 3 giờ." },
      { id: "fib_16", type: "fill_in_blank", level: "van_dung", question: "Người đi bộ bình thường với tốc độ 1,5 m/s tương đương với ___ km/h.", blankPrompt: "Người đi bộ bình thường với tốc độ 1,5 m/s tương đương với [___] km/h.", keywords: ["5,4", "5.4"], explanation: "1,5 × 3,6 = 5,4 km/h." },
      { id: "fib_17", type: "fill_in_blank", level: "van_dung", question: "Một vận động viên bơi lội bơi được 50 m trong thời gian 25 giây, tốc độ bơi là ___ m/s.", blankPrompt: "Một vận động viên bơi lội bơi được 50 m trong thời gian 25 giây, tốc độ bơi là [___] m/s.", keywords: ["2"], explanation: "v = s / t = 50 / 25 = 2 m/s." },
      { id: "fib_18", type: "fill_in_blank", level: "van_dung", question: "Máy bay chở khách bay với tốc độ 900 km/h, tương đương với ___ m/s.", blankPrompt: "Máy bay chở khách bay với tốc độ 900 km/h, tương đương với [___] m/s.", keywords: ["250"], explanation: "900 / 3,6 = 250 m/s." },
      { id: "fib_19", type: "fill_in_blank", level: "van_dung", question: "Thiết bị dùng để đo tốc độ phương tiện giao thông trên đường thường được gọi tắt là súng/thiết bị ___ tốc độ.", blankPrompt: "Thiết bị dùng để đo tốc độ phương tiện giao thông trên đường thường được gọi tắt là súng/thiết bị [___] tốc độ.", keywords: ["bắn", "ban"], explanation: "Thiết bị bắn tốc độ CSGT." },
      { id: "fib_20", type: "fill_in_blank", level: "van_dung", question: "Một xe tải đi quãng đường 90 km trong thời gian 1 giờ 30 phút (1,5 h). Tốc độ của xe là ___ km/h.", blankPrompt: "Một xe tải đi quãng đường 90 km trong thời gian 1 giờ 30 phút (1,5 h). Tốc độ của xe là [___] km/h.", keywords: ["60"], explanation: "v = s / t = 90 / 1,5 = 60 km/h." }
    ],
    matching: [
      { id: "mat_01", type: "matching", level: "nhan_biet", question: "Ghép ký hiệu đại lượng với tên gọi tương ứng trong công thức v = s / t:", pairs: [{ left: "Ký hiệu v", right: "Tốc độ chuyển động" }, { left: "Ký hiệu s", right: "Quãng đường đi được" }, { left: "Ký hiệu t", right: "Thời gian chuyển động" }], explanation: "v: tốc độ, s: quãng đường, t: thời gian." },
      { id: "mat_02", type: "matching", level: "nhan_biet", question: "Ghép đại lượng vật lý với đơn vị đo chuẩn trong hệ SI:", pairs: [{ left: "Quãng đường (s)", right: "Mét (m)" }, { left: "Thời gian (t)", right: "Giây (s)" }, { left: "Tốc độ (v)", right: "Mét trên giây (m/s)" }], explanation: "Các đơn vị chuẩn trong hệ SI." },
      { id: "mat_03", type: "matching", level: "nhan_biet", question: "Ghép dụng cụ đo với đại lượng cần đo trong bài thực hành tốc độ:", pairs: [{ left: "Thước cuộn / thước mét", right: "Đo quãng đường chuyển động" }, { left: "Đồng hồ bấm giây", right: "Đo thời gian chuyển động thủ công" }, { left: "Cổng quang điện", right: "Cảm biến tự động ghi nhận thời gian" }], explanation: "Dụng cụ đo trong bài thực hành KHTN 7." },
      { id: "mat_04", type: "matching", level: "thong_hieu", question: "Ghép các công thức tính toán phù hợp:", pairs: [{ left: "Tính tốc độ (v)", right: "v = s / t" }, { left: "Tính quãng đường (s)", right: "s = v . t" }, { left: "Tính thời gian (t)", right: "t = s / v" }], explanation: "Ba công thức chuyển đổi cốt lõi." },
      { id: "mat_05", type: "matching", level: "thong_hieu", question: "Ghép giá trị tốc độ m/s với giá trị tương đương theo km/h:", pairs: [{ left: "10 m/s", right: "36 km/h" }, { left: "20 m/s", right: "72 km/h" }, { left: "30 m/s", right: "108 km/h" }], explanation: "Nhân với 3,6: 10×3,6=36; 20×3,6=72; 30×3,6=108." },
      { id: "mat_06", type: "matching", level: "thong_hieu", question: "Ghép giá trị tốc độ km/h với giá trị tương đương theo m/s:", pairs: [{ left: "54 km/h", right: "15 m/s" }, { left: "90 km/h", right: "25 m/s" }, { left: "18 km/h", right: "5 m/s" }], explanation: "Chia cho 3,6: 54/3,6=15; 90/3,6=25; 18/3,6=5." },
      { id: "mat_07", type: "matching", level: "thong_hieu", question: "Ghép đối tượng tự nhiên với tốc độ tương ứng trong SGK KHTN 7:", pairs: [{ left: "Ốc sên bò", right: "Khoảng 0,0014 m/s" }, { left: "Rùa bơi/bò", right: "Khoảng 0,055 m/s" }, { left: "Báo săn Gê-pa", right: "Khoảng 30 m/s" }], explanation: "Theo Bảng số liệu SGK KHTN 7." },
      { id: "mat_08", type: "matching", level: "thong_hieu", question: "Ghép phương tiện / con người với tốc độ chuyển động đặc trưng:", pairs: [{ left: "Người đi bộ", right: "Khoảng 1,5 m/s (5,4 km/h)" }, { left: "Vận động viên Usain Bolt", right: "Khoảng 10,44 m/s (37,58 km/h)" }, { left: "Máy bay chở khách", right: "Khoảng 250 m/s (900 km/h)" }], explanation: "Dữ liệu thực tế SGK." },
      { id: "mat_09", type: "matching", level: "thong_hieu", question: "Ghép hiện tượng với ý nghĩa vật lý tương ứng:", pairs: [{ left: "Cùng thời gian, đi được quãng đường dài hơn", right: "Tốc độ lớn hơn" }, { left: "Cùng quãng đường, đi mất ít thời gian hơn", right: "Tốc độ lớn hơn" }, { left: "Quãng đường đi được bằng 0", right: "Vật đang đứng yên" }], explanation: "Cách so sánh chuyển động nhanh chậm." },
      { id: "mat_10", type: "matching", level: "van_dung", question: "Ghép các bài toán với kết quả quãng đường đi được sau 2 giờ:", pairs: [{ left: "Người đi bộ (5 km/h)", right: "Đi được 10 km" }, { left: "Người đi xe đạp (15 km/h)", right: "Đi được 30 km" }, { left: "Ô tô chạy (60 km/h)", right: "Đi được 120 km" }], explanation: "s = v · t với t = 2h." },
      { id: "mat_11", type: "matching", level: "van_dung", question: "Ghép bài toán với thời gian cần thiết để đi hết 120 km:", pairs: [{ left: "Tàu hỏa chạy 60 km/h", right: "Mất 2 giờ" }, { left: "Xe máy chạy 40 km/h", right: "Mất 3 giờ" }, { left: "Xe đạp chạy 15 km/h", right: "Mất 8 giờ" }], explanation: "t = s / v." },
      { id: "mat_12", type: "matching", level: "van_dung", question: "Ghép đối tượng chuyển động với quãng đường đi được trong 10 giây:", pairs: [{ left: "Báo săn Gê-pa (30 m/s)", right: "Đi được 300 m" }, { left: "Usain Bolt (10,44 m/s)", right: "Đi được 104,4 m" }, { left: "Người đi bộ (1,5 m/s)", right: "Đi được 15 m" }], explanation: "s = v · t với t = 10s." },
      { id: "mat_13", type: "matching", level: "van_dung", question: "Ghép biển báo tốc độ với phạm vi áp dụng thực tế:", pairs: [{ left: "Biển báo số tròn 50 viền đỏ", right: "Tốc độ tối đa cho phép là 50 km/h" }, { left: "Biển báo số tròn 60 nền xanh", right: "Tốc độ tối thiểu cho phép là 60 km/h" }, { left: "Biển báo khu dân cư", right: "Cần giảm tốc độ để đảm bảo an toàn" }], explanation: "Quy chuẩn biển báo hiệu đường bộ." },
      { id: "mat_14", type: "matching", level: "van_dung", question: "Ghép các phép đổi đơn vị thời gian sang đơn vị giờ (h):", pairs: [{ left: "15 phút", right: "0,25 giờ" }, { left: "30 phút", right: "0,5 giờ" }, { left: "45 phút", right: "0,75 giờ" }], explanation: "15p=0,25h; 30p=0,5h; 45p=0,75h." },
      { id: "mat_15", type: "matching", level: "van_dung", question: "Ghép các đơn vị đo với ký hiệu viết tắt quốc tế:", pairs: [{ left: "Kilômét trên giờ", right: "km/h" }, { left: "Mét trên giây", right: "m/s" }, { left: "Centimét trên giây", right: "cm/s" }], explanation: "Ký hiệu chuẩn các đơn vị tốc độ." },
      { id: "mat_16", type: "matching", level: "van_dung", question: "Ghép phương thức so sánh hai chuyển động:", pairs: [{ left: "Cùng đi quãng đường s = 100m", right: "So sánh thời gian t (t nhỏ hơn thì nhanh hơn)" }, { left: "Cùng chuyển động trong thời gian t = 10s", right: "So sánh quãng đường s (s lớn hơn thì nhanh hơn)" }, { left: "Khác cả quãng đường và thời gian", right: "Tính thương số v = s / t để so sánh" }], explanation: "Ba cách so sánh chuyển động." },
      { id: "mat_17", type: "matching", level: "van_dung", question: "Ghép các loại chuyển động với đặc điểm tốc độ:", pairs: [{ left: "Vết nứt đáy đại dương", right: "Tốc độ siêu chậm (vài cm/năm)" }, { left: "Ánh sáng truyền đi", right: "Tốc độ cực đại trong vũ trụ (300.000 km/s)" }, { left: "Âm thanh trong không khí", right: "Tốc độ khoảng 340 m/s" }], explanation: "Kiến thức mở rộng." },
      { id: "mat_18", type: "matching", level: "van_dung", question: "Ghép quãng đường với đối tượng di chuyển trong 1 giờ:", pairs: [{ left: "Quãng đường 5,4 km", right: "Người đi bộ bình thường (1,5 m/s)" }, { left: "Quãng đường 72 km", right: "Ô tô chạy trên quốc lộ (20 m/s)" }, { left: "Quãng đường 900 km", right: "Máy bay dân dụng đường dài (250 m/s)" }], explanation: "s = v · 3600." },
      { id: "mat_19", type: "matching", level: "van_dung", question: "Ghép sai số đo thực nghiệm với nguyên nhân phát sinh:", pairs: [{ left: "Bấm đồng hồ thủ công bằng tay", right: "Sai số do phản xạ của con người" }, { left: "Đặt thước đo bị lệch nghiêng", right: "Sai số trong đo cự ly quãng đường" }, { left: "Sử dụng cổng quang điện hiện số", right: "Hạn chế tối đa sai số thao tác" }], explanation: "Thực hành đo tốc độ." },
      { id: "mat_20", type: "matching", level: "van_dung", question: "Ghép tốc độ giới hạn thông thường với khu vực áp dụng:", pairs: [{ left: "Tối đa 50 km/h", right: "Đường trong khu vực đông dân cư" }, { left: "Tối đa 80 - 90 km/h", right: "Đường ngoài khu vực đông dân cư" }, { left: "Tối đa 100 - 120 km/h", right: "Đường cao tốc dành riêng cho ô tô" }], explanation: "Luật an toàn giao thông." }
    ],
    short_answer: [
      { id: "sa_01", type: "short_answer", level: "thong_hieu", question: "Một học sinh chạy cự ly 60 m hết 12 giây. Tính tốc độ của bạn học sinh đó (đơn vị: m/s).", targetValue: 5, unit: "m/s", tolerancePercent: 1, solutionSteps: ["Tóm tắt: s = 60 m; t = 12 s.", "Công thức: v = s / t.", "Tính: v = 60 / 12 = 5 m/s."] },
      { id: "sa_02", type: "short_answer", level: "thong_hieu", question: "Đổi tốc độ 25 m/s ra đơn vị km/h.", targetValue: 90, unit: "km/h", tolerancePercent: 1, solutionSteps: ["Quy tắc: Nhân với 3,6.", "Tính: 25 × 3,6 = 90 km/h."] },
      { id: "sa_03", type: "short_answer", level: "thong_hieu", question: "Đổi tốc độ 108 km/h ra đơn vị m/s.", targetValue: 30, unit: "m/s", tolerancePercent: 1, solutionSteps: ["Quy tắc: Chia cho 3,6.", "Tính: 108 / 3,6 = 30 m/s."] },
      { id: "sa_04", type: "short_answer", level: "thong_hieu", question: "Một đoàn tàu chạy với tốc độ 45 km/h trong 3 giờ. Tính quãng đường tàu đi được (đơn vị: km).", targetValue: 135, unit: "km", tolerancePercent: 1, solutionSteps: ["Công thức: s = v · t.", "Tính: s = 45 × 3 = 135 km."] },
      { id: "sa_05", type: "short_answer", level: "thong_hieu", question: "Một xe máy đi quãng đường 80 km với tốc độ 40 km/h. Xe máy đi hết bao nhiêu giờ?", targetValue: 2, unit: "giờ", tolerancePercent: 1, solutionSteps: ["Công thức: t = s / v.", "Tính: t = 80 / 40 = 2 giờ."] },
      { id: "sa_06", type: "short_answer", level: "van_dung", question: "Bạn Nam đi từ nhà đến trường quãng đường 2,4 km hết 20 phút (1/3 giờ). Tính tốc độ của Nam theo đơn vị km/h.", targetValue: 7.2, unit: "km/h", tolerancePercent: 1, solutionSteps: ["Đổi: 20 phút = 1/3 giờ.", "v = s / t = 2,4 / (1/3) = 7,2 km/h."] },
      { id: "sa_07", type: "short_answer", level: "van_dung", question: "Một máy bay bay từ Hà Nội đến Đà Nẵng dài 600 km hết 1,2 giờ. Tính tốc độ máy bay (đơn vị: km/h).", targetValue: 500, unit: "km/h", tolerancePercent: 1, solutionSteps: ["v = s / t = 600 / 1,2 = 500 km/h."] },
      { id: "sa_08", type: "short_answer", level: "van_dung", question: "Một vận động viên bơi cự ly 200 m với tốc độ 2,5 m/s. Vận động viên đó bơi trong bao nhiêu giây?", targetValue: 80, unit: "giây", tolerancePercent: 1, solutionSteps: ["t = s / v = 200 / 2,5 = 80 s."] },
      { id: "sa_09", type: "short_answer", level: "van_dung", question: "Một con rùa bò với tốc độ 0,05 m/s. Trong 2 phút (120 giây), con rùa bò được quãng đường bao nhiêu mét?", targetValue: 6, unit: "m", tolerancePercent: 1, solutionSteps: ["t = 2 phút = 120 s.", "s = v · t = 0,05 × 120 = 6 m."] },
      { id: "sa_10", type: "short_answer", level: "van_dung", question: "Một ô tô chạy từ Hà Nội đến Hải Phòng 120 km trong 2 giờ. Tính tốc độ ô tô theo m/s (làm tròn 2 chữ số thập phân).", targetValue: 16.67, unit: "m/s", tolerancePercent: 2, solutionSteps: ["v = 120 / 2 = 60 km/h.", "Đổi: 60 / 3,6 ≈ 16,67 m/s."] },
      { id: "sa_11", type: "short_answer", level: "van_dung", question: "Xe đua F1 tăng tốc chạy 400 m mất 8 giây. Tốc độ trung bình là bao nhiêu km/h?", targetValue: 180, unit: "km/h", tolerancePercent: 1, solutionSteps: ["v = 400 / 8 = 50 m/s.", "Đổi: 50 × 3,6 = 180 km/h."] },
      { id: "sa_12", type: "short_answer", level: "van_dung", question: "Âm thanh truyền trong không khí với tốc độ 340 m/s. Nhìn thấy chớp 5 giây sau nghe sấm. Khoảng cách nơi sét đánh là bao nhiêu mét?", targetValue: 1700, unit: "m", tolerancePercent: 1, solutionSteps: ["s = v · t = 340 × 5 = 1700 m."] },
      { id: "sa_13", type: "short_answer", level: "van_dung", question: "Một người đi xe máy tốc độ 36 km/h trên đoạn đường 18 km. Thời gian đi là bao nhiêu phút?", targetValue: 30, unit: "phút", tolerancePercent: 1, solutionSteps: ["t = 18 / 36 = 0,5 giờ = 30 phút."] },
      { id: "sa_14", type: "short_answer", level: "van_dung", question: "Báo săn đuổi mồi với tốc độ 30 m/s trong 15 giây. Quãng đường bứt tốc là bao nhiêu mét?", targetValue: 450, unit: "m", tolerancePercent: 1, solutionSteps: ["s = 30 × 15 = 450 m."] },
      { id: "sa_15", type: "short_answer", level: "van_dung", question: "Một tàu ngầm di chuyển với tốc độ 12 m/s. Trong 1 giờ (3600 s), tàu đi được bao nhiêu km?", targetValue: 43.2, unit: "km", tolerancePercent: 1, solutionSteps: ["12 m/s = 43,2 km/h. Sau 1 giờ đi được 43,2 km."] },
      { id: "sa_16", type: "short_answer", level: "van_dung", question: "Ốc sên bò với tốc độ 0,0014 m/s. Để bò hết 7 mét thì ốc sên mất bao nhiêu giây?", targetValue: 5000, unit: "giây", tolerancePercent: 1, solutionSteps: ["t = 7 / 0,0014 = 5000 giây."] },
      { id: "sa_17", type: "short_answer", level: "van_dung", question: "Người đi bộ đi được 450 m trong 5 phút (300 s). Tốc độ là bao nhiêu m/s?", targetValue: 1.5, unit: "m/s", tolerancePercent: 1, solutionSteps: ["v = 450 / 300 = 1,5 m/s."] },
      { id: "sa_18", type: "short_answer", level: "van_dung", question: "Đoàn tàu chạy qua cây cầu dài 600 m với tốc độ 15 m/s hết bao nhiêu giây?", targetValue: 40, unit: "giây", tolerancePercent: 1, solutionSteps: ["t = 600 / 15 = 40 s."] },
      { id: "sa_19", type: "short_answer", level: "van_dung", question: "Đoạn đường 3 km ô tô đi mất 2,5 phút (1/24 giờ). Tốc độ của ô tô là bao nhiêu km/h?", targetValue: 72, unit: "km/h", tolerancePercent: 1, solutionSteps: ["v = 3 / (1/24) = 72 km/h."] },
      { id: "sa_20", type: "short_answer", level: "van_dung", question: "Trạm không gian ISS bay với tốc độ 7,66 km/s. Trong 1 phút (60 s), trạm bay được bao nhiêu km?", targetValue: 459.6, unit: "km", tolerancePercent: 1, solutionSteps: ["s = 7,66 × 60 = 459,6 km."] }
    ]
  };

  // ==========================================
  // 3. BỘ TẠO ÂM THANH (WEB AUDIO API OFFLINE)
  // ==========================================
  class SoundFX {
    constructor() {
      this.ctx = null;
      this.muted = false;
    }
    init() {
      try {
        if (!this.ctx) {
          const AudioContext = window.AudioContext || window.webkitAudioContext;
          if (AudioContext) this.ctx = new AudioContext();
        }
        if (this.ctx && this.ctx.state === "suspended") {
          this.ctx.resume();
        }
      } catch (e) {}
    }
    toggleMute() {
      this.muted = !this.muted;
      return this.muted;
    }
    playCorrect() {
      if (this.muted) return;
      this.init();
      if (!this.ctx) return;
      const now = this.ctx.currentTime;
      [523.25, 659.25, 783.99, 1046.5].forEach((freq, idx) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = "sine";
        osc.frequency.setValueAtTime(freq, now + idx * 0.08);
        gain.gain.setValueAtTime(0, now + idx * 0.08);
        gain.gain.linearRampToValueAtTime(0.18, now + idx * 0.08 + 0.02);
        gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.08 + 0.35);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(now + idx * 0.08);
        osc.stop(now + idx * 0.08 + 0.36);
      });
    }
    playWrong() {
      if (this.muted) return;
      this.init();
      if (!this.ctx) return;
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = "sawtooth";
      osc.frequency.setValueAtTime(160, now);
      osc.frequency.linearRampToValueAtTime(110, now + 0.25);
      gain.gain.setValueAtTime(0.2, now);
      gain.gain.exponentialRampToValueAtTime(0.01, now + 0.28);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now);
      osc.stop(now + 0.3);
    }
    playBoost() {
      if (this.muted) return;
      this.init();
      if (!this.ctx) return;
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = "triangle";
      osc.frequency.setValueAtTime(220, now);
      osc.frequency.exponentialRampToValueAtTime(880, now + 0.4);
      gain.gain.setValueAtTime(0.05, now);
      gain.gain.linearRampToValueAtTime(0.25, now + 0.2);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.45);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now);
      osc.stop(now + 0.45);
    }
    playClick() {
      if (this.muted) return;
      this.init();
      if (!this.ctx) return;
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = "sine";
      osc.frequency.setValueAtTime(600, now);
      osc.frequency.exponentialRampToValueAtTime(400, now + 0.05);
      gain.gain.setValueAtTime(0.1, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.06);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now);
      osc.stop(now + 0.06);
    }
    playBrake() {
      if (this.muted) return;
      this.init();
      if (!this.ctx) return;
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = "sawtooth";
      osc.frequency.setValueAtTime(750, now);
      osc.frequency.exponentialRampToValueAtTime(140, now + 0.35);
      gain.gain.setValueAtTime(0.12, now);
      gain.gain.exponentialRampToValueAtTime(0.005, now + 0.35);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now);
      osc.stop(now + 0.36);
    }
    playWin() {
      if (this.muted) return;
      this.init();
      if (!this.ctx) return;
      const now = this.ctx.currentTime;
      const melody = [
        { f: 523.25, d: 0.15 }, { f: 523.25, d: 0.15 }, { f: 523.25, d: 0.15 },
        { f: 659.25, d: 0.35 }, { f: 783.99, d: 0.25 }, { f: 1046.5, d: 0.6 }
      ];
      let t = now;
      melody.forEach(note => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = "triangle";
        osc.frequency.setValueAtTime(note.f, t);
        gain.gain.setValueAtTime(0, t);
        gain.gain.linearRampToValueAtTime(0.2, t + 0.03);
        gain.gain.exponentialRampToValueAtTime(0.001, t + note.d);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(t);
        osc.stop(t + note.d + 0.05);
        t += note.d + 0.04;
      });
    }
  }
  const sound = new SoundFX();

  // ==========================================
  // 4. MÁY TÍNH & MÔ PHỎNG VẬT LÝ
  // ==========================================
  const PhysicsCalc = {
    SGK_OBJECTS: [
      { name: "Ốc sên bò", icon: "🐌", speedMs: 0.0014, desc: "Chuyển động rất chậm" },
      { name: "Rùa bò / bơi", icon: "🐢", speedMs: 0.055, desc: "Tốc độ bò chậm rãi" },
      { name: "Người đi bộ", icon: "🚶", speedMs: 1.5, desc: "Đi bộ thông thường (5,4 km/h)" },
      { name: "Người đi xe đạp", icon: "🚲", speedMs: 4.17, desc: "Đi xe đạp nhẹ nhàng (15 km/h)" },
      { name: "Usain Bolt", icon: "🏃", speedMs: 10.44, desc: "Kỷ lục thế giới điền kinh 100m" },
      { name: "Báo săn Gê-pa", icon: "🐆", speedMs: 30.0, desc: "Động vật chạy nhanh nhất trên cạn (108 km/h)" },
      { name: "Ô tô trên cao tốc", icon: "🚗", speedMs: 27.78, desc: "Tốc độ tối đa 100 km/h" },
      { name: "Tàu cao tốc Shinkansen", icon: "🚅", speedMs: 83.33, desc: "Tàu đệm từ / cao tốc (300 km/h)" },
      { name: "Máy bay chở khách", icon: "✈️", speedMs: 250.0, desc: "Tốc độ hành trình (900 km/h)" },
      { name: "Âm thanh trong không khí", icon: "🔊", speedMs: 340.0, desc: "Tốc độ lan truyền sóng âm (1224 km/h)" }
    ],
    calculateSpeed(sValue, sUnit, tValue, tUnit) {
      if (tValue <= 0 || sValue < 0) throw new Error("Quãng đường ≥ 0 và Thời gian > 0");
      let sInMeters = sValue;
      if (sUnit === "km") sInMeters = sValue * 1000;
      let tInSeconds = tValue;
      if (tUnit === "h") tInSeconds = tValue * 3600;
      if (tUnit === "min") tInSeconds = tValue * 60;
      const vMs = sInMeters / tInSeconds;
      const vKmh = vMs * 3.6;
      return { vMs: parseFloat(vMs.toFixed(3)), vKmh: parseFloat(vKmh.toFixed(3)), sInMeters, tInSeconds };
    },
    calculateDistance(vValue, vUnit, tValue, tUnit) {
      if (vValue < 0 || tValue < 0) throw new Error("Tốc độ và Thời gian ≥ 0");
      let vInMs = vValue;
      if (vUnit === "kmh") vInMs = vValue / 3.6;
      let tInSeconds = tValue;
      if (tUnit === "h") tInSeconds = tValue * 3600;
      if (tUnit === "min") tInSeconds = tValue * 60;
      const sMeters = vInMs * tInSeconds;
      const sKm = sMeters / 1000;
      return { sMeters: parseFloat(sMeters.toFixed(2)), sKm: parseFloat(sKm.toFixed(3)) };
    },
    calculateTime(sValue, sUnit, vValue, vUnit) {
      if (vValue <= 0 || sValue < 0) throw new Error("Quãng đường ≥ 0 và Tốc độ > 0");
      let sInMeters = sValue;
      if (sUnit === "km") sInMeters = sValue * 1000;
      let vInMs = vValue;
      if (vUnit === "kmh") vInMs = vValue / 3.6;
      const tSeconds = sInMeters / vInMs;
      return { tSeconds: parseFloat(tSeconds.toFixed(2)), tMinutes: parseFloat((tSeconds / 60).toFixed(2)), tHours: parseFloat((tSeconds / 3600).toFixed(3)) };
    },
    convertUnit(value, fromUnit) {
      if (fromUnit === "ms") {
        return { from: `${value} m/s`, to: `${parseFloat((value * 3.6).toFixed(3))} km/h`, formula: `${value} × 3,6 = ${(value * 3.6).toFixed(3)} km/h` };
      } else {
        return { from: `${value} km/h`, to: `${parseFloat((value / 3.6).toFixed(3))} m/s`, formula: `${value} ÷ 3,6 = ${(value / 3.6).toFixed(3)} m/s` };
      }
    },
    compareWithWorld(speedInMs) {
      return this.SGK_OBJECTS.map(obj => {
        const ratio = speedInMs / obj.speedMs;
        let text = "";
        if (Math.abs(ratio - 1) < 0.05) text = "Tương đương";
        else if (ratio > 1) text = `Nhanh gấp ${ratio.toFixed(1)} lần`;
        else text = `Bằng ${(ratio * 100).toFixed(1)}%`;
        return { ...obj, ratio, text, speedKmh: parseFloat((obj.speedMs * 3.6).toFixed(2)) };
      });
    }
  };

  // ==========================================

  // ==========================================
  // 4.5. BỘ ĐỒNG BỘ ĐUA ONLINE 2 NGƯỜI (P2P / BROADCAST CHANNEL BUS)
  // ==========================================
  class OnlineRaceSync {
    constructor(gameInstance) {
      this.game = gameInstance;
      this.channel = null;
      this.roomPin = null;
      this.role = "host"; // 'host' (Làn 1) hoặc 'guest' (Làn 2)
      this.opponentName = null;
      this.isConnected = false;
      this.onOpponentJoined = null;
      this.onRoomConnected = null;
      this.onRemoteStart = null;
      this.onRemoteSync = null;
      this.onRemoteObstacleCleared = null;
      this.onRemoteFinish = null;

      this.initBus();
    }

    initBus() {
      try {
        if (window.BroadcastChannel) {
          this.channel = new BroadcastChannel("khtn7_online_race_bus");
          this.channel.onmessage = (e) => this.handleMessage(e.data);
        }
      } catch (err) {}

      window.addEventListener("storage", (e) => {
        if (e.key === "khtn7_online_packet" && e.newValue) {
          try {
            const data = JSON.parse(e.newValue);
            this.handleMessage(data);
          } catch (err) {}
        }
      });
    }

    send(packet) {
      if (!this.roomPin) return;
      packet.pin = this.roomPin;
      packet.sender = this.role;
      packet.timestamp = Date.now();

      if (this.channel) {
        try { this.channel.postMessage(packet); } catch (e) {}
      }
      try {
        localStorage.setItem("khtn7_online_packet", JSON.stringify(packet));
      } catch (e) {}
    }

    handleMessage(msg) {
      if (!msg || msg.pin !== this.roomPin || msg.sender === this.role) return;

      if (msg.type === "JOIN_ROOM") {
        if (this.role === "host") {
          this.opponentName = msg.name || "Người chơi 2";
          this.isConnected = true;
          this.send({ type: "ROOM_ACCEPTED", name: this.game.player1.name });
          if (this.onOpponentJoined) this.onOpponentJoined(this.opponentName);
        }
      } else if (msg.type === "ROOM_ACCEPTED") {
        if (this.role === "guest") {
          this.opponentName = msg.name || "Chủ phòng";
          this.isConnected = true;
          if (this.onRoomConnected) this.onRoomConnected(this.opponentName);
        }
      } else if (msg.type === "START_RACE") {
        if (this.onRemoteStart) this.onRemoteStart(msg);
      } else if (msg.type === "CAR_SYNC") {
        if (this.onRemoteSync) this.onRemoteSync(msg);
      } else if (msg.type === "OBSTACLE_CLEARED") {
        if (this.onRemoteObstacleCleared) this.onRemoteObstacleCleared(msg);
      } else if (msg.type === "FINISH_RACE") {
        if (this.onRemoteFinish) this.onRemoteFinish(msg);
      }
    }
  }

  // ==========================================
  // 5. ENGINE GAME ĐUA XE 2D CANVAS VƯỢT CHƯỚNG NGẠI VẬT
  // ==========================================
  class RacingGame {
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
  class QuizEngine {
    constructor() {
      this.bank = QUESTIONS_BANK;
      this.currentQuestions = [];
      this.currentIndex = 0;
      this.stats = { total: 0, correct: 0, wrong: 0, score: 0, startTime: 0, endTime: 0 };
    }
    shuffle(arr) {
      const a = [...arr];
      for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
      }
      return a;
    }
    initSession(category = "all", count = 10) {
      let pool = [];
      if (category === "all") {
        pool = [...this.bank.mcq, ...this.bank.true_false, ...this.bank.fill_in_blank, ...this.bank.matching, ...this.bank.short_answer];
      } else if (this.bank[category]) {
        pool = [...this.bank[category]];
      }
      this.currentQuestions = this.shuffle(pool).slice(0, Math.min(count, pool.length));
      this.currentIndex = 0;
      this.stats = { total: this.currentQuestions.length, correct: 0, wrong: 0, score: 0, startTime: Date.now(), endTime: 0 };
      return this.getCurrentQuestion();
    }
    getCurrentQuestion() {
      return this.currentIndex < this.currentQuestions.length ? this.currentQuestions[this.currentIndex] : null;
    }
    submitAnswer(userAnswer) {
      const q = this.getCurrentQuestion();
      if (!q) return null;
      let isCorrect = false;

      if (q.type === "mcq") {
        isCorrect = parseInt(userAnswer, 10) === q.correct;
      } else if (q.type === "true_false") {
        isCorrect = Boolean(userAnswer) === q.correct;
      } else if (q.type === "fill_in_blank") {
        const clean = String(userAnswer).trim().toLowerCase();
        isCorrect = q.keywords.some(k => clean.includes(k.toLowerCase()));
      } else if (q.type === "matching") {
        isCorrect = true;
        for (let i = 0; i < q.pairs.length; i++) {
          if (userAnswer[i] !== i) { isCorrect = false; break; }
        }
      } else if (q.type === "short_answer") {
        const num = parseFloat(String(userAnswer).trim().replace(",", "."));
        if (!isNaN(num) && q.targetValue !== undefined) {
          const tol = (q.tolerancePercent || 2) / 100;
          isCorrect = Math.abs(num - q.targetValue) <= Math.max(0.05, Math.abs(q.targetValue) * tol);
        }
      }

      if (isCorrect) {
        this.stats.correct++;
        this.stats.score += 10;
      } else {
        this.stats.wrong++;
      }

      return {
        isCorrect,
        question: q,
        explanation: q.explanation || (q.solutionSteps ? q.solutionSteps.join("<br>") : "")
      };
    }
    nextQuestion() {
      this.currentIndex++;
      if (this.currentIndex >= this.currentQuestions.length) {
        this.stats.endTime = Date.now();
        return null;
      }
      return this.getCurrentQuestion();
    }
    getSummary() {
      const durationSec = Math.round((this.stats.endTime - this.stats.startTime) / 1000) || 0;
      const accuracy = this.stats.total > 0 ? Math.round((this.stats.correct / this.stats.total) * 100) : 0;
      return { ...this.stats, durationSec, accuracy };
    }
  }

  // ==========================================
  // 7. AUTH & LMS MANAGER
  // ==========================================
  const AuthLMS = {
    currentUser: null,
    init() {
      try {
        const data = localStorage.getItem("kntt7_current_user");
        this.currentUser = data ? JSON.parse(data) : { role: "student", name: "Học sinh", className: "7A1" };
      } catch (e) {
        this.currentUser = { role: "student", name: "Học sinh", className: "7A1" };
      }
      if (!localStorage.getItem("kntt7_exam_records")) {
        const mock = [
          { studentName: "Nguyễn Văn An", className: "7A1", date: "2026-09-15 08:30", gameMode: "Đua với AI (Vừa)", score: 850, accuracy: 80, duration: "2 phút 15s" },
          { studentName: "Trần Thị Mai", className: "7A1", date: "2026-09-15 09:12", gameMode: "Luyện tập 10 câu", score: 950, accuracy: 90, duration: "1 phút 50s" },
          { studentName: "Lê Quốc Bảo", className: "7A2", date: "2026-09-15 14:05", gameMode: "Đua với AI (Khó)", score: 620, accuracy: 65, duration: "3 phút 10s" }
        ];
        localStorage.setItem("kntt7_exam_records", JSON.stringify(mock));
      }
    },
    loginStudent(name, className) {
      this.currentUser = { role: "student", name: name.trim() || "Học sinh", className: className.trim() || "7A1" };
      localStorage.setItem("kntt7_current_user", JSON.stringify(this.currentUser));
      return { success: true };
    },
    loginTeacher(name, pass) {
      const p = (pass !== undefined ? pass : name || "").toString().trim();
      const n = (pass !== undefined && name ? name : "Giáo viên KHTN 7").toString().trim();
      if (p === "1234567" || p === "GV-KNTT7") {
        this.currentUser = { role: "teacher", name: n || "Giáo viên KHTN 7" };
        localStorage.setItem("kntt7_current_user", JSON.stringify(this.currentUser));
        return { success: true };
      }
      return { success: false, message: "Mật khẩu không chính xác! Vui lòng kiểm tra lại." };
    },
    getAllRecords() {
      try {
        const r = localStorage.getItem("kntt7_exam_records");
        return r ? JSON.parse(r) : [];
      } catch (e) { return []; }
    },
    recordResult(data) {
      const records = this.getAllRecords();
      records.unshift({
        studentName: this.currentUser?.name || "Học sinh",
        className: this.currentUser?.className || "7A1",
        date: new Date().toLocaleString("vi-VN"),
        gameMode: data.gameMode || "Đua xe",
        score: data.score || 0,
        accuracy: data.accuracy || 0,
        duration: data.duration || "1 phút"
      });
      localStorage.setItem("kntt7_exam_records", JSON.stringify(records));
    },
    clearRecords() {
      localStorage.removeItem("kntt7_exam_records");
    },
    exportCSV() {
      const records = this.getAllRecords();
      let csv = "\uFEFFHọ và tên,Lớp,Thời gian thi,Chế độ,Điểm số,Độ chính xác (%),Thời lượng\n";
      records.forEach(r => {
        csv += `"${r.studentName}","${r.className}","${r.date}","${r.gameMode}",${r.score},${r.accuracy},"${r.duration}"\n`;
      });
      const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `Ket_Qua_KHTN7_Bai8_${new Date().toISOString().slice(0, 10)}.csv`;
      a.click();
    }
  };
  AuthLMS.init();

  // ==========================================
  // 8. ĐIỀU PHỐI CHÍNH (APP CONTROLLER)
  // ==========================================
  class AppController {
    constructor() {
      this.quiz = new QuizEngine();
      this.raceGame = null;
      this.calcMode = "speed";
      this.gameQuestions = [];
      this.gameQIndex = 0;
      this.gameTurn = 1;
      this.matchingLeft = null;
      this.matchingPairs = {};
    }

    init() {
      this.initPreAuth();
      this.initTabs();
      this.initSoundButton();
      this.initVideoController();
      this.renderTheory();
      this.initCalculator();
      this.initRacingGame();
      this.initQuiz();
      this.initAuth();
      this.renderLMS();
      this.refreshIcons();
    }

    refreshIcons() {
      if (window.lucide && typeof window.lucide.createIcons === "function") {
        window.lucide.createIcons();
      }
    }

    // Tabs
    initTabs() {
      const tabs = document.querySelectorAll(".nav-tab");
      tabs.forEach(btn => {
        btn.addEventListener("click", () => {
          sound.playClick();
          const target = btn.dataset.tab;
          this.switchTab(target);
        });
      });
    }

    switchTab(tabId) {
      // BẢO VỆ NỘI DUNG LMS: HỌC SINH KHÔNG ĐƯỢC XEM VÀ TƯƠNG TÁC
      if (tabId === "tab-lms") {
        const u = AuthLMS.currentUser;
        if (!u || u.role !== "teacher") {
          sound.playWrong?.();
          alert("Khu vực Bảng LMS chỉ dành riêng cho Giáo viên đăng nhập!");
          return;
        }
      }

      document.querySelectorAll(".nav-tab").forEach(b => {
        if (b.dataset.tab === tabId) {
          b.className = "nav-tab active flex items-center gap-2 py-2 px-3 border-b-2 border-orange-500 text-orange-600 font-bold whitespace-nowrap transition";
        } else {
          b.className = "nav-tab flex items-center gap-2 py-2 px-3 border-b-2 border-transparent text-slate-600 hover:text-orange-600 whitespace-nowrap transition";
        }
      });

      document.querySelectorAll(".tab-pane").forEach(p => {
        if (p.id === tabId) p.classList.remove("hidden");
        else p.classList.add("hidden");
      });

      if (tabId === "tab-game" && this.raceGame) {
        setTimeout(() => this.raceGame.resizeCanvas(), 60);
      }
      if (tabId === "tab-lms") {
        this.renderLMS();
      }
      this.refreshIcons();
    }

    initSoundButton() {
      const btn = document.getElementById("btn-sound-toggle");
      const icon = document.getElementById("sound-icon");
      if (!btn) return;
      btn.addEventListener("click", () => {
        const muted = sound.toggleMute();
        if (muted) {
          icon.setAttribute("data-lucide", "volume-x");
          icon.classList.add("text-red-500");
        } else {
          icon.setAttribute("data-lucide", "volume-2");
          icon.classList.remove("text-red-500");
          sound.playClick();
        }
        this.refreshIcons();
      });
    }

    // Video Controller với 2 chế độ: YouTube & Thí nghiệm tương tác Offline
    initVideoController() {
      const frame = document.getElementById("theory-video-frame");
      const extLink = document.getElementById("video-external-link");
      const directBtn = document.getElementById("video-direct-btn");
      const select = document.getElementById("video-source-select");

      const btnShowYt = document.getElementById("btn-show-youtube");
      const btnShowSim = document.getElementById("btn-show-simlab");
      const viewYt = document.getElementById("video-youtube-view");
      const viewSim = document.getElementById("video-simlab-view");

      const updateVideo = (vidId) => {
        if (frame) {
          frame.setAttribute("referrerpolicy", "strict-origin-when-cross-origin");
          frame.src = `https://www.youtube-nocookie.com/embed/${vidId}?rel=0`;
        }
        if (extLink) {
          extLink.href = `https://www.youtube.com/watch?v=${vidId}`;
        }
        if (directBtn) {
          directBtn.href = `https://www.youtube.com/watch?v=${vidId}`;
        }
      };

      if (select) {
        select.addEventListener("change", (e) => {
          sound.playClick();
          updateVideo(e.target.value);
        });
      }

      this.initSimLab();
    }

    openVideoPopout() {
      sound.playClick();
      const select = document.getElementById("video-source-select");
      const vidId = select ? select.value : "a4CtFYYYAPA";
      const url = `https://www.youtube.com/watch?v=${vidId}`;
      const w = 1000, h = 600;
      const left = Math.max(0, Math.round((window.screen.width - w) / 2));
      const top = Math.max(0, Math.round((window.screen.height - h) / 2));
      window.open(url, "YTVideoTheater", `width=${w},height=${h},top=${top},left=${left},menubar=no,toolbar=no,location=no,status=no`);
    }

    handleLocalVideoFile(event) {
      sound.playClick();
      const file = event.target.files && event.target.files[0];
      if (!file) return;
      const player = document.getElementById("theory-local-player");
      const emptyBox = document.getElementById("local-video-empty");
      if (player) {
        player.src = URL.createObjectURL(file);
        player.classList.remove("hidden");
        if (emptyBox) emptyBox.classList.add("hidden");
        player.play().catch(() => {});
      }
    }

    switchMediaMode(mode) {
      sound.playClick();
      const viewYt = document.getElementById("video-youtube-view");
      const viewLocal = document.getElementById("video-local-view");
      const viewSim = document.getElementById("video-simlab-view");
      const btnShowYt = document.getElementById("btn-show-youtube");
      const btnShowLocal = document.getElementById("btn-show-localvideo");
      const btnShowSim = document.getElementById("btn-show-simlab");

      const activeBtnClass = "py-2 rounded-lg bg-orange-500 text-white shadow-sm font-bold transition flex items-center justify-center gap-1 cursor-pointer";
      const inactiveBtnClass = "py-2 rounded-lg text-slate-600 hover:text-slate-900 font-bold transition flex items-center justify-center gap-1 cursor-pointer";

      // Hide all
      if (viewYt) viewYt.classList.add("hidden");
      if (viewLocal) viewLocal.classList.add("hidden");
      if (viewSim) viewSim.classList.add("hidden");
      if (btnShowYt) btnShowYt.className = inactiveBtnClass;
      if (btnShowLocal) btnShowLocal.className = inactiveBtnClass;
      if (btnShowSim) btnShowSim.className = inactiveBtnClass;

      if (mode === "simlab") {
        if (viewSim) viewSim.classList.remove("hidden");
        if (btnShowSim) btnShowSim.className = activeBtnClass;
        setTimeout(() => {
          this.initSimLab();
        }, 50);
      } else if (mode === "localvideo") {
        if (viewLocal) viewLocal.classList.remove("hidden");
        if (btnShowLocal) btnShowLocal.className = activeBtnClass;
      } else {
        if (viewYt) viewYt.classList.remove("hidden");
        if (btnShowYt) btnShowYt.className = activeBtnClass;
      }
      this.refreshIcons();
    }

    // Phòng Thí nghiệm Mô phỏng Đo Tốc độ (100% Hoạt động Offline)
    initSimLab() {
      const canvas = document.getElementById("sim-canvas");
      if (!canvas) return;
      const ctx = canvas.getContext("2d");
      const parentW = canvas.parentElement ? canvas.parentElement.clientWidth : 0;
      canvas.width = Math.max(300, parentW || canvas.clientWidth || 320);
      canvas.height = 110;

      if (!this.simState) {
        this.simState = {
          speedMs: 10.44, // Mặc định Usain Bolt
          targetDist: 100,
          currentDist: 0,
          elapsedTime: 0,
          isRunning: false,
          animId: null,
          lastT: 0,
          label: "Usain Bolt"
        };
      }

      const drawTrack = () => {
        const w = canvas.width;
        const h = canvas.height;
        ctx.fillStyle = "#0F172A";
        ctx.fillRect(0, 0, w, h);

        // Đường chạy màu đỏ đất nung
        ctx.fillStyle = "#991B1B";
        ctx.fillRect(0, 25, w, h - 35);

        // Vạch cự ly
        ctx.strokeStyle = "rgba(255,255,255,0.3)";
        ctx.lineWidth = 1;
        const startX = 30;
        const endX = w - 40;
        const trackW = endX - startX;

        // Vạch xuất phát & Đích
        ctx.strokeStyle = "#FFFFFF";
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.moveTo(startX, 25);
        ctx.lineTo(startX, h - 10);
        ctx.moveTo(endX, 25);
        ctx.lineTo(endX, h - 10);
        ctx.stroke();

        ctx.fillStyle = "#FEF08A";
        ctx.font = "bold 9px sans-serif";
        ctx.fillText("XUẤT PHÁT (0m)", startX - 10, 18);
        ctx.fillText("ĐÍCH (100m)", endX - 25, 18);

        // Vị trí đối tượng
        const progress = Math.min(1, this.simState.currentDist / this.simState.targetDist);
        const objX = startX + progress * trackW;
        const objY = h / 2 + 10;

        // Vẽ người chạy / xe
        ctx.fillStyle = "#F97316";
        ctx.beginPath();
        ctx.arc(objX, objY - 6, 8, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = "#FFFFFF";
        ctx.font = "bold 9px sans-serif";
        ctx.textAlign = "center";
        ctx.fillText(this.simState.label, objX, objY + 16);
      };

      const loop = (t) => {
        if (!this.simState.isRunning) return;
        const dt = Math.min((t - this.simState.lastT) / 1000, 0.1);
        this.simState.lastT = t;

        this.simState.elapsedTime += dt;
        this.simState.currentDist = Math.min(this.simState.targetDist, this.simState.currentDist + this.simState.speedMs * dt);

        const timerEl = document.getElementById("sim-timer-display");
        const distEl = document.getElementById("sim-dist-display");
        const speedEl = document.getElementById("sim-speed-display");

        if (timerEl) timerEl.textContent = `t = ${this.simState.elapsedTime.toFixed(2)} s`;
        if (distEl) distEl.textContent = `s = ${this.simState.currentDist.toFixed(1)} m`;
        if (speedEl) {
          const calcV = this.simState.elapsedTime > 0 ? (this.simState.currentDist / this.simState.elapsedTime).toFixed(2) : this.simState.speedMs;
          speedEl.textContent = `v = s / t = ${calcV} m/s (${(calcV * 3.6).toFixed(1)} km/h)`;
        }

        drawTrack();

        if (this.simState.currentDist >= this.simState.targetDist) {
          this.simState.isRunning = false;
          sound.playWin();
          return;
        }

        this.simState.animId = requestAnimationFrame(loop);
      };

      drawTrack();

      const btnStart = document.getElementById("btn-sim-start");
      const btnReset = document.getElementById("btn-sim-reset");

      if (btnStart) {
        btnStart.onclick = () => {
          sound.playClick();
          if (this.simState.currentDist >= this.simState.targetDist) {
            this.simState.currentDist = 0;
            this.simState.elapsedTime = 0;
          }
          this.simState.isRunning = true;
          this.simState.lastT = performance.now();
          loop(this.simState.lastT);
        };
      }

      if (btnReset) {
        btnReset.onclick = () => {
          sound.playClick();
          this.simState.isRunning = false;
          if (this.simState.animId) cancelAnimationFrame(this.simState.animId);
          this.simState.currentDist = 0;
          this.simState.elapsedTime = 0;
          document.getElementById("sim-timer-display").textContent = "t = 0.00 s";
          document.getElementById("sim-dist-display").textContent = "s = 0 m";
          document.getElementById("sim-speed-display").textContent = `v = ${this.simState.speedMs} m/s`;
          drawTrack();
        };
      }
    }

    setSimPreset(preset) {
      if (!this.simState) return;
      sound.playClick();
      const presets = {
        bolt: { speed: 10.44, label: "🏃 Usain Bolt" },
        cheetah: { speed: 30.0, label: "🐆 Báo săn" },
        walk: { speed: 1.5, label: "🚶 Đi bộ" },
        car: { speed: 20.0, label: "🚗 Ô tô" },
        snail: { speed: 0.5, label: "🐌 Ốc sên (Tăng tốc)" }
      };

      const sel = presets[preset] || presets.bolt;
      this.simState.speedMs = sel.speed;
      this.simState.label = sel.label;

      const resetBtn = document.getElementById("btn-sim-reset");
      if (resetBtn) resetBtn.click();
      const startBtn = document.getElementById("btn-sim-start");
      if (startBtn) startBtn.click();
    }

    renderTheory() {
      const container = document.getElementById("theory-sections-container");
      if (!container) return;
      container.innerHTML = THEORY_DATA.sections.map(s => `
        <div class="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm hover:border-orange-300 transition">
          <div class="flex items-center justify-between pb-3 border-b border-slate-100 mb-4">
            <h3 class="font-extrabold text-slate-900 text-base sm:text-lg">${s.title}</h3>
            <span class="px-2.5 py-0.5 text-xs font-bold rounded-full bg-slate-100 text-slate-700">${s.badge}</span>
          </div>
          <div class="text-sm text-slate-700 leading-relaxed space-y-3">${s.content}</div>
        </div>
      `).join("");
    }

    // Máy tính
    initCalculator() {
      const modes = ["speed", "dist", "time", "convert"];
      modes.forEach(m => {
        const btn = document.getElementById(`btn-calc-${m}`);
        if (btn) {
          btn.addEventListener("click", () => {
            sound.playClick();
            this.calcMode = m;
            modes.forEach(o => {
              const b = document.getElementById(`btn-calc-${o}`);
              if (b) {
                b.className = o === m
                  ? "px-4 py-2 rounded-xl text-sm font-bold bg-orange-500 text-white shadow-sm transition"
                  : "px-4 py-2 rounded-xl text-sm font-bold bg-slate-100 text-slate-700 hover:bg-slate-200 transition";
              }
            });
            this.renderCalcInputs();
            this.executeCalc();
          });
        }
      });
      this.renderCalcInputs();
      this.executeCalc();
    }

    renderCalcInputs() {
      const container = document.getElementById("calc-inputs-container");
      if (!container) return;

      if (this.calcMode === "speed") {
        container.innerHTML = `
          <div>
            <label class="block text-xs font-bold text-slate-700 mb-1">Quãng đường (s):</label>
            <div class="flex gap-2">
              <input type="number" id="calc-s-val" value="100" class="flex-1 px-4 py-2 rounded-xl border border-slate-200 text-sm">
              <select id="calc-s-unit" class="px-3 py-2 rounded-xl border border-slate-200 text-xs font-bold bg-slate-50">
                <option value="m">mét (m)</option>
                <option value="km">km</option>
              </select>
            </div>
          </div>
          <div>
            <label class="block text-xs font-bold text-slate-700 mb-1">Thời gian (t):</label>
            <div class="flex gap-2">
              <input type="number" id="calc-t-val" value="10" class="flex-1 px-4 py-2 rounded-xl border border-slate-200 text-sm">
              <select id="calc-t-unit" class="px-3 py-2 rounded-xl border border-slate-200 text-xs font-bold bg-slate-50">
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
            <label class="block text-xs font-bold text-slate-700 mb-1">Tốc độ (v):</label>
            <div class="flex gap-2">
              <input type="number" id="calc-v-val" value="54" class="flex-1 px-4 py-2 rounded-xl border border-slate-200 text-sm">
              <select id="calc-v-unit" class="px-3 py-2 rounded-xl border border-slate-200 text-xs font-bold bg-slate-50">
                <option value="kmh">km/h</option>
                <option value="ms">m/s</option>
              </select>
            </div>
          </div>
          <div>
            <label class="block text-xs font-bold text-slate-700 mb-1">Thời gian (t):</label>
            <div class="flex gap-2">
              <input type="number" id="calc-t-val" value="2" class="flex-1 px-4 py-2 rounded-xl border border-slate-200 text-sm">
              <select id="calc-t-unit" class="px-3 py-2 rounded-xl border border-slate-200 text-xs font-bold bg-slate-50">
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
            <label class="block text-xs font-bold text-slate-700 mb-1">Quãng đường (s):</label>
            <div class="flex gap-2">
              <input type="number" id="calc-s-val" value="120" class="flex-1 px-4 py-2 rounded-xl border border-slate-200 text-sm">
              <select id="calc-s-unit" class="px-3 py-2 rounded-xl border border-slate-200 text-xs font-bold bg-slate-50">
                <option value="km">km</option>
                <option value="m">mét (m)</option>
              </select>
            </div>
          </div>
          <div>
            <label class="block text-xs font-bold text-slate-700 mb-1">Tốc độ (v):</label>
            <div class="flex gap-2">
              <input type="number" id="calc-v-val" value="60" class="flex-1 px-4 py-2 rounded-xl border border-slate-200 text-sm">
              <select id="calc-v-unit" class="px-3 py-2 rounded-xl border border-slate-200 text-xs font-bold bg-slate-50">
                <option value="kmh">km/h</option>
                <option value="ms">m/s</option>
              </select>
            </div>
          </div>
        `;
      } else if (this.calcMode === "convert") {
        container.innerHTML = `
          <div>
            <label class="block text-xs font-bold text-slate-700 mb-1">Giá trị tốc độ cần đổi:</label>
            <div class="flex gap-2">
              <input type="number" id="calc-convert-val" value="36" class="flex-1 px-4 py-2 rounded-xl border border-slate-200 text-sm">
              <select id="calc-convert-from" class="px-3 py-2 rounded-xl border border-slate-200 text-xs font-bold bg-slate-50">
                <option value="kmh">km/h ➔ m/s</option>
                <option value="ms">m/s ➔ km/h</option>
              </select>
            </div>
          </div>
        `;
      }

      container.querySelectorAll("input, select").forEach(el => {
        el.addEventListener("input", () => this.executeCalc());
      });
    }

    executeCalc() {
      try {
        const prim = document.getElementById("calc-result-primary");
        const unit = document.getElementById("calc-result-unit");
        const sec = document.getElementById("calc-result-secondary");
        const formula = document.getElementById("calc-formula-desc");
        let cmpMs = 0;

        if (this.calcMode === "speed") {
          const s = parseFloat(document.getElementById("calc-s-val")?.value || 0);
          const sU = document.getElementById("calc-s-unit")?.value || "m";
          const t = parseFloat(document.getElementById("calc-t-val")?.value || 1);
          const tU = document.getElementById("calc-t-unit")?.value || "s";
          const res = PhysicsCalc.calculateSpeed(s, sU, t, tU);
          prim.textContent = res.vMs;
          unit.textContent = "m/s";
          sec.textContent = `Tương đương: ${res.vKmh} km/h`;
          formula.innerHTML = `Công thức: <strong>v = s / t</strong> = ${res.sInMeters}m / ${res.tInSeconds}s = <strong>${res.vMs} m/s</strong>`;
          cmpMs = res.vMs;
        } else if (this.calcMode === "dist") {
          const v = parseFloat(document.getElementById("calc-v-val")?.value || 0);
          const vU = document.getElementById("calc-v-unit")?.value || "kmh";
          const t = parseFloat(document.getElementById("calc-t-val")?.value || 1);
          const tU = document.getElementById("calc-t-unit")?.value || "h";
          const res = PhysicsCalc.calculateDistance(v, vU, t, tU);
          prim.textContent = res.sKm;
          unit.textContent = "km";
          sec.textContent = `Tương đương: ${res.sMeters} mét (m)`;
          formula.innerHTML = `Công thức: <strong>s = v · t</strong> = <strong>${res.sKm} km</strong>`;
          cmpMs = vU === "ms" ? v : v / 3.6;
        } else if (this.calcMode === "time") {
          const s = parseFloat(document.getElementById("calc-s-val")?.value || 0);
          const sU = document.getElementById("calc-s-unit")?.value || "km";
          const v = parseFloat(document.getElementById("calc-v-val")?.value || 1);
          const vU = document.getElementById("calc-v-unit")?.value || "kmh";
          const res = PhysicsCalc.calculateTime(s, sU, v, vU);
          prim.textContent = res.tHours;
          unit.textContent = "giờ";
          sec.textContent = `Tương đương: ${res.tMinutes} phút (${res.tSeconds} giây)`;
          formula.innerHTML = `Công thức: <strong>t = s / v</strong> = <strong>${res.tHours} giờ</strong>`;
          cmpMs = vU === "ms" ? v : v / 3.6;
        } else if (this.calcMode === "convert") {
          const val = parseFloat(document.getElementById("calc-convert-val")?.value || 0);
          const from = document.getElementById("calc-convert-from")?.value || "kmh";
          const res = PhysicsCalc.convertUnit(val, from);
          prim.textContent = res.to.split(" ")[0];
          unit.textContent = res.to.split(" ")[1];
          sec.textContent = `Từ: ${res.from}`;
          formula.innerHTML = `Quy đổi: <strong>${res.formula}</strong>`;
          cmpMs = from === "ms" ? val : val / 3.6;
        }

        const cmpList = document.getElementById("calc-comparison-list");
        if (cmpList && cmpMs > 0) {
          const comps = PhysicsCalc.compareWithWorld(cmpMs);
          cmpList.innerHTML = comps.slice(0, 5).map(c => `
            <div class="flex items-center justify-between p-2 rounded-lg bg-white border border-slate-200">
              <span class="font-bold text-slate-800">${c.icon} ${c.name} (${c.speedMs} m/s)</span>
              <span class="font-bold ${c.ratio >= 1 ? 'text-orange-600' : 'text-blue-600'}">${c.text}</span>
            </div>
          `).join("");
        }
      } catch (e) {}
    }

    // ==========================================
    // CỔNG ĐĂNG NHẬP TRƯỚC APP (PRE-APP AUTH GATEWAY)
    // ==========================================
    initPreAuth() {
      try {
        const studentForm = document.getElementById("pre-auth-student-form");
        const teacherForm = document.getElementById("pre-auth-teacher-form");
        if (studentForm && !studentForm.dataset.bound) {
          studentForm.dataset.bound = "true";
          studentForm.addEventListener("submit", (e) => this.handlePreAuthStudent(e));
        }
        if (teacherForm && !teacherForm.dataset.bound) {
          teacherForm.dataset.bound = "true";
          teacherForm.addEventListener("submit", (e) => this.handlePreAuthTeacher(e));
        }

        const saved = sessionStorage.getItem("khtn7_current_user");
        const authSc = document.getElementById("app-auth-screen");
        const mainSc = document.getElementById("app-main-content");

        if (saved) {
          const user = JSON.parse(saved);
          this.applyLoggedInUser(user);
          if (authSc) {
            authSc.classList.add("hidden");
            authSc.style.display = "none";
          }
          if (mainSc) {
            mainSc.classList.remove("hidden");
            mainSc.style.display = "flex";
          }
        } else {
          const lmsTabBtn = document.getElementById("nav-tab-lms");
          if (lmsTabBtn) {
            lmsTabBtn.classList.add("hidden");
            lmsTabBtn.style.display = "none";
          }
          if (authSc) {
            authSc.classList.remove("hidden");
            authSc.style.display = "flex";
          }
          if (mainSc) {
            mainSc.classList.add("hidden");
            mainSc.style.display = "none";
          }
        }
      } catch (e) {
        console.error("initPreAuth error:", e);
      }
    }

    switchPreAuthTab(tab) {
      try { sound.playClick(); } catch (e) {}
      const sBtn = document.getElementById("auth-tab-btn-student");
      const tBtn = document.getElementById("auth-tab-btn-teacher");
      const sForm = document.getElementById("pre-auth-student-form");
      const tForm = document.getElementById("pre-auth-teacher-form");

      if (tab === "student") {
        if (sBtn) sBtn.className = "py-2.5 rounded-xl text-xs sm:text-sm font-extrabold transition flex items-center justify-center gap-1.5 bg-white text-orange-600 shadow-sm";
        if (tBtn) tBtn.className = "py-2.5 rounded-xl text-xs sm:text-sm font-extrabold transition flex items-center justify-center gap-1.5 text-slate-500 hover:text-slate-800";
        if (sForm) {
          sForm.classList.remove("hidden");
          sForm.style.display = "block";
        }
        if (tForm) {
          tForm.classList.add("hidden");
          tForm.style.display = "none";
        }
      } else {
        if (tBtn) tBtn.className = "py-2.5 rounded-xl text-xs sm:text-sm font-extrabold transition flex items-center justify-center gap-1.5 bg-white text-blue-600 shadow-sm";
        if (sBtn) sBtn.className = "py-2.5 rounded-xl text-xs sm:text-sm font-extrabold transition flex items-center justify-center gap-1.5 text-slate-500 hover:text-slate-800";
        if (tForm) {
          tForm.classList.remove("hidden");
          tForm.style.display = "block";
        }
        if (sForm) {
          sForm.classList.add("hidden");
          sForm.style.display = "none";
        }
      }
    }

    handlePreAuthStudent(e) {
      if (e) e.preventDefault();
      const nameInput = document.getElementById("pre-student-name");
      const classInput = document.getElementById("pre-student-class");
      const carInput = document.getElementById("pre-student-car");

      const name = (nameInput && nameInput.value.trim()) || "Học sinh";
      const cls = (classInput && classInput.value) || "7A1";
      const car = (carInput && carInput.value) || "🏎️ Xe Cam Bão Táp";

      const user = { name, class: cls, car, role: "student" };
      AuthLMS.currentUser = user;
      sessionStorage.setItem("khtn7_current_user", JSON.stringify(user));
      localStorage.setItem("kntt7_current_user", JSON.stringify(user));
      this.applyLoggedInUser(user);

      try { sound.playBoost(); } catch (err) {}
      const authSc = document.getElementById("app-auth-screen");
      const mainSc = document.getElementById("app-main-content");
      if (authSc) {
        authSc.classList.add("hidden");
        authSc.style.display = "none";
      }
      if (mainSc) {
        mainSc.classList.remove("hidden");
        mainSc.style.display = "flex";
      }
      this.refreshIcons();
    }

    handlePreAuthTeacher(e) {
      if (e) e.preventDefault();
      const nameInput = document.getElementById("pre-teacher-name");
      const passInput = document.getElementById("pre-teacher-password") || document.getElementById("pre-teacher-code");

      const name = (nameInput && nameInput.value.trim()) || "Giáo viên KHTN 7";
      const pass = (passInput && passInput.value.trim()) || "";

      if (pass !== "1234567") {
        try { sound.playWrong(); } catch (err) {}
        alert("Mật khẩu không chính xác! Vui lòng kiểm tra lại.");
        if (passInput) passInput.focus();
        return;
      }

      const user = { name, role: "teacher" };
      AuthLMS.currentUser = user;
      sessionStorage.setItem("khtn7_current_user", JSON.stringify(user));
      localStorage.setItem("kntt7_current_user", JSON.stringify(user));
      this.applyLoggedInUser(user);

      try { sound.playCorrect(); } catch (err) {}
      const authSc = document.getElementById("app-auth-screen");
      const mainSc = document.getElementById("app-main-content");
      if (authSc) {
        authSc.classList.add("hidden");
        authSc.style.display = "none";
      }
      if (mainSc) {
        mainSc.classList.remove("hidden");
        mainSc.style.display = "flex";
      }
      this.switchTab("tab-lms");
      this.renderLMS();
      this.refreshIcons();
    }

    quickGuestLogin() {
      const guest = { name: "Khách tham quan", class: "7A1", car: "🏎️ Xe Cam Bão Táp", role: "student" };
      AuthLMS.currentUser = guest;
      sessionStorage.setItem("khtn7_current_user", JSON.stringify(guest));
      this.applyLoggedInUser(guest);

      try { sound.playBoost(); } catch (err) {}
      const authSc = document.getElementById("app-auth-screen");
      const mainSc = document.getElementById("app-main-content");
      if (authSc) {
        authSc.classList.add("hidden");
        authSc.style.display = "none";
      }
      if (mainSc) {
        mainSc.classList.remove("hidden");
        mainSc.style.display = "flex";
      }
      this.refreshIcons();
    }

    logout() {
      try { sound.playClick(); } catch (err) {}
      sessionStorage.removeItem("khtn7_current_user");
      AuthLMS.currentUser = null;

      // Ẩn hoàn toàn nút Bảng LMS & Giáo viên khi đăng xuất
      const lmsTabBtn = document.getElementById("nav-tab-lms");
      if (lmsTabBtn) {
        lmsTabBtn.classList.add("hidden");
        lmsTabBtn.style.display = "none";
      }
      this.switchTab("tab-theory");

      const authSc = document.getElementById("app-auth-screen");
      const mainSc = document.getElementById("app-main-content");
      if (mainSc) {
        mainSc.classList.add("hidden");
        mainSc.style.display = "none";
      }
      if (authSc) {
        authSc.classList.remove("hidden");
        authSc.style.display = "flex";
      }

      const nameInput = document.getElementById("pre-student-name");
      if (nameInput) nameInput.value = "";
      const passInput = document.getElementById("pre-teacher-password") || document.getElementById("pre-teacher-code");
      if (passInput) passInput.value = "";
    }

    applyLoggedInUser(user) {
      const dispName = document.getElementById("user-display-name");
      const dispRole = document.getElementById("user-display-role");
      const dispInit = document.getElementById("user-avatar-initial");
      const l1 = document.getElementById("label-p1-name");
      const lmsTabBtn = document.getElementById("nav-tab-lms");

      if (dispName) dispName.textContent = user.name;
      if (dispRole) dispRole.textContent = user.role === "teacher" ? "Giáo viên" : `${user.class || 'Học sinh'}`;
      if (dispInit) dispInit.textContent = user.name.charAt(0).toUpperCase();
      if (l1) l1.textContent = `Làn 1: ${user.name}`;
      if (this.raceGame && this.raceGame.player1) {
        this.raceGame.player1.name = user.name;
      }

      // KIỂM SOÁT QUYỀN TRUY CẬP: CHỈ GIÁO VIÊN MỚI THẤY VÀ TƯƠNG TÁC ĐƯỢC BẢNG LMS
      if (lmsTabBtn) {
        if (user && user.role === "teacher") {
          lmsTabBtn.classList.remove("hidden");
          lmsTabBtn.style.display = "flex";
        } else {
          lmsTabBtn.classList.add("hidden");
          lmsTabBtn.style.display = "none";
        }
      }

      // Nếu học sinh đang ở tab LMS, tự động chuyển về tab Lý thuyết
      if (!user || user.role !== "teacher") {
        const lmsPane = document.getElementById("tab-lms");
        if (lmsPane && !lmsPane.classList.contains("hidden")) {
          this.switchTab("tab-theory");
        }
      }
    }

    // ==========================================
    // PHÂN BỔ CÂU HỎI ĐỘC LẬP (DISJOINT SETS)
    // ĐẢM BẢO 2 NGƯỜI CHƠI KHÔNG BAO GIỜ TRÙNG CÂU HỎI
    // ==========================================
    setupDisjointQuestions() {
      const allQuestions = [
        ...QUESTIONS_BANK.mcq,
        ...QUESTIONS_BANK.true_false,
        ...QUESTIONS_BANK.fill_in_blank,
        ...QUESTIONS_BANK.matching,
        ...QUESTIONS_BANK.short_answer
      ];
      // Xáo trộn ngẫu nhiên toàn bộ 100 câu
      const shuffled = this.quiz.shuffle(allQuestions);

      // Chia đôi hoàn toàn tách biệt: 50 câu riêng cho P1, 50 câu riêng cho P2
      this.p1Questions = shuffled.slice(0, 50);
      this.p2Questions = shuffled.slice(50, 100);
      this.p1QIndex = 0;
      this.p2QIndex = 0;
    }

    // ==========================================
    // ĐIỀU KHIỂN CHẾ ĐỘ ĐUA XE VÀ ONLINE MULTIPLAYER
    // ==========================================
    onGameModeChange(mode) {
      const lobby = document.getElementById("online-lobby-panel");
      const p2Box = document.getElementById("game-p2-question-box");
      const container = document.getElementById("game-questions-container");
      const diffSel = document.getElementById("game-diff-select");

      if (mode === "online") {
        if (lobby) lobby.classList.remove("hidden");
        if (p2Box) { p2Box.classList.add("hidden"); p2Box.classList.remove("flex"); }
        if (container) container.className = "lg:col-span-8 flex flex-col gap-4";
        if (diffSel) diffSel.parentElement.classList.add("opacity-50");
      } else if (mode === "pvp") {
        if (lobby) lobby.classList.add("hidden");
        if (p2Box) { p2Box.classList.remove("hidden"); p2Box.classList.add("flex"); }
        if (container) container.className = "lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-4";
        if (diffSel) diffSel.parentElement.classList.remove("opacity-50");
      } else {
        // vs_ai
        if (lobby) lobby.classList.add("hidden");
        if (p2Box) { p2Box.classList.add("hidden"); p2Box.classList.remove("flex"); }
        if (container) container.className = "lg:col-span-8 flex flex-col gap-4";
        if (diffSel) diffSel.parentElement.classList.remove("opacity-50");
      }
    }

    onlineCreateRoom() {
      sound.playClick();
      const pin = Math.floor(1000 + Math.random() * 9000).toString();
      this.onlineSync.roomPin = pin;
      this.onlineSync.role = "host";

      const details = document.getElementById("online-room-details");
      const pinDisp = document.getElementById("display-online-pin");
      const roleDisp = document.getElementById("display-online-role");
      const oppDisp = document.getElementById("display-online-opponent");

      if (details) details.classList.remove("hidden");
      if (pinDisp) pinDisp.textContent = pin;
      if (roleDisp) roleDisp.textContent = "Chủ phòng (Làn 1 - Xe Cam)";
      if (oppDisp) oppDisp.innerHTML = `<span class="inline-block w-2 h-2 rounded-full bg-amber-400 animate-ping"></span><span>Mã phòng ${pin}: Đang chờ Người chơi 2 vào...</span>`;

      // Cập nhật game mode
      const p1 = AuthLMS.currentUser?.name || "Chủ phòng";
      this.raceGame.setMode("online", "medium", p1, "Đang chờ đối thủ...", "host");
    }

    onlineJoinRoom() {
      sound.playClick();
      const pinInput = document.getElementById("input-online-pin");
      const pin = (pinInput && pinInput.value.trim()) || "";
      if (pin.length !== 4) {
        alert("Vui lòng nhập đúng mã PIN phòng 4 chữ số!");
        return;
      }

      this.onlineSync.roomPin = pin;
      this.onlineSync.role = "guest";

      const details = document.getElementById("online-room-details");
      const pinDisp = document.getElementById("display-online-pin");
      const roleDisp = document.getElementById("display-online-role");
      const oppDisp = document.getElementById("display-online-opponent");

      if (details) details.classList.remove("hidden");
      if (pinDisp) pinDisp.textContent = pin;
      if (roleDisp) roleDisp.textContent = "Khách (Làn 2 - Xe Xanh)";
      if (oppDisp) oppDisp.innerHTML = `<span class="inline-block w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span><span>Đang gửi yêu cầu vào phòng ${pin}...</span>`;

      const myName = AuthLMS.currentUser?.name || "Khách mời";
      this.raceGame.setMode("online", "medium", "Chủ phòng", myName, "guest");

      // Gửi gói tin JOIN_ROOM
      this.onlineSync.send({ type: "JOIN_ROOM", name: myName });
    }

    // ==========================================
    // ENGINE ĐUA XE VÀ ĐỒNG BỘ TIẾN TRÌNH
    // ==========================================
    initRacingGame() {
      this.raceGame = new RacingGame("race-canvas");
      this.onlineSync = new OnlineRaceSync(this.raceGame);
      this.raceGame.onlineSync = this.onlineSync;

      // Xử lý sự kiện Online Sync
      this.onlineSync.onOpponentJoined = (oppName) => {
        sound.playBoost();
        const oppDisp = document.getElementById("display-online-opponent");
        if (oppDisp) oppDisp.innerHTML = `<span class="text-emerald-400 font-extrabold">🟢 ${oppName} đã vào phòng! Hãy nhấn "BẮT ĐẦU ĐUA"!</span>`;
        this.raceGame.player2.name = oppName;
        const l2 = document.getElementById("label-p2-name");
        if (l2) l2.textContent = `Làn 2: ${oppName}`;
      };

      this.onlineSync.onRoomConnected = (hostName) => {
        sound.playBoost();
        const oppDisp = document.getElementById("display-online-opponent");
        if (oppDisp) oppDisp.innerHTML = `<span class="text-emerald-400 font-extrabold">🟢 Đã kết nối với Chủ phòng (${hostName})! Chờ hiệu lệnh xuất phát...</span>`;
        this.raceGame.player1.name = hostName;
        const l1 = document.getElementById("label-p1-name");
        if (l1) l1.textContent = `Làn 1: ${hostName}`;
      };

      this.onlineSync.onRemoteStart = (pkt) => {
        this.setupDisjointQuestions();
        this.raceGame.start();
        this.renderDualGameQuestions();
      };

      this.onlineSync.onRemoteSync = (pkt) => {
        if (pkt.playerNum === 1 && this.onlineSync.role === "guest") {
          this.raceGame.player1.pos = pkt.pos;
          this.raceGame.player1.speed = pkt.speed;
          this.raceGame.player1.nitro = pkt.nitro;
          this.raceGame.player1.isBlocked = pkt.isBlocked;
        } else if (pkt.playerNum === 2 && this.onlineSync.role === "host") {
          this.raceGame.player2.pos = pkt.pos;
          this.raceGame.player2.speed = pkt.speed;
          this.raceGame.player2.nitro = pkt.nitro;
          this.raceGame.player2.isBlocked = pkt.isBlocked;
        }
      };

      this.onlineSync.onRemoteObstacleCleared = (pkt) => {
        const obs = this.raceGame.obstacles.find(o => o.id === pkt.obsId);
        if (obs) {
          if (pkt.playerNum === 1) obs.p1Cleared = true;
          if (pkt.playerNum === 2) obs.p2Cleared = true;
        }
      };

      // Cập nhật thông số tiến độ trực tiếp
      this.raceGame.onProgressUpdate = (p1, p2, len, obstacles) => {
        const g1 = document.getElementById("gauge-p1-distance");
        const g2 = document.getElementById("gauge-p2-distance");
        const b1 = document.getElementById("bar-p1-progress");
        const b2 = document.getElementById("bar-p2-progress");
        const sp = document.getElementById("hud-speedometer-val");
        const cb = document.getElementById("hud-combo-val");
        const sc = document.getElementById("hud-score-val");

        if (g1) g1.textContent = `${Math.round(p1.pos)}m / ${len}m`;
        if (g2) g2.textContent = `${Math.round(p2.pos)}m / ${len}m`;
        if (b1) b1.style.width = `${Math.min(100, (p1.pos / len) * 100)}%`;
        if (b2) b2.style.width = `${Math.min(100, (p2.pos / len) * 100)}%`;

        // Tốc độ hiển thị theo vai trò người chơi
        const localCar = (this.raceGame.mode === "online" && this.onlineSync.role === "guest") ? p2 : p1;
        if (sp) sp.textContent = Math.round(localCar.speed * 3.6);
        if (cb) cb.textContent = `${localCar.streak}x`;
        if (sc) sc.textContent = localCar.score;
      };

      // Sự kiện khi xe dừng lại trước rào chắn
      this.raceGame.onReachObstacle = (playerNum, obs) => {
        if (playerNum === 1) {
          const qBox = document.getElementById("game-question-box");
          if (qBox) qBox.classList.add("ring-4", "ring-rose-400", "border-rose-500");
          const badge = document.getElementById("game-q-type-badge");
          if (badge) {
            badge.className = "px-3 py-1 text-xs font-bold rounded-full bg-rose-100 text-rose-800 animate-pulse";
            badge.textContent = `🚨 BỊ CHẶN: ${obs.shortName.toUpperCase()} (${obs.dist}m)`;
          }
        } else if (playerNum === 2 && this.raceGame.mode === "pvp") {
          const p2Box = document.getElementById("game-p2-question-box");
          if (p2Box) p2Box.classList.add("ring-4", "ring-rose-400", "border-rose-500");
          const p2Badge = document.getElementById("game-p2-q-type-badge");
          if (p2Badge) {
            p2Badge.className = "px-3 py-1 text-xs font-bold rounded-full bg-rose-100 text-rose-800 animate-pulse";
            p2Badge.textContent = `🚨 BỊ CHẶN: ${obs.shortName.toUpperCase()} (${obs.dist}m)`;
          }
        }
      };

      // Cán đích 1000m
      this.raceGame.onFinishCallback = (winner, p1, p2) => {
        const isP1 = (winner === p1);
        const winTitle = document.getElementById("race-modal-winner-title");
        if (winTitle) {
          winTitle.textContent = `🏆 ${winner.name.toUpperCase()} ĐÃ CÁN ĐÍCH GRAND PRIX 1000M!`;
        }
        const s1Name = document.getElementById("race-stat-p1-name");
        const s1Score = document.getElementById("race-stat-p1-score");
        const s2Name = document.getElementById("race-stat-p2-name");
        const s2Score = document.getElementById("race-stat-p2-score");
        if (s1Name) s1Name.textContent = p1.name;
        if (s1Score) s1Score.textContent = `${p1.score} điểm (${Math.round(p1.pos)}m)`;
        if (s2Name) s2Name.textContent = p2.name;
        if (s2Score) s2Score.textContent = `${p2.score} điểm (${Math.round(p2.pos)}m)`;

        const modal = document.getElementById("race-result-modal");
        if (modal) modal.classList.remove("hidden");

        const qBox = document.getElementById("game-question-box");
        const p2Box = document.getElementById("game-p2-question-box");
        if (qBox) qBox.classList.remove("ring-4", "ring-rose-400", "border-rose-500");
        if (p2Box) p2Box.classList.remove("ring-4", "ring-rose-400", "border-rose-500");

        AuthLMS.recordResult({
          studentName: p1.name,
          gameMode: this.raceGame.mode === "online" ? "Đua Online 2 Người" : (this.raceGame.mode === "pvp" ? "Đua 2 Người (Cùng máy)" : `Đua với AI (${this.raceGame.aiDifficulty})`),
          score: p1.score,
          accuracy: Math.round((p1.pos / this.raceGame.trackLength) * 100),
          duration: "1000m Grand Prix"
        });
      };

      const btnStart = document.getElementById("btn-start-race");
      if (btnStart) {
        btnStart.addEventListener("click", () => {
          const modeEl = document.getElementById("game-mode-select");
          const diffEl = document.getElementById("game-diff-select");
          const mode = modeEl ? modeEl.value : "vs_ai";
          const diff = diffEl ? diffEl.value : "medium";
          const p1 = AuthLMS.currentUser?.name || "Học sinh";
          const onlineRole = this.onlineSync.role || "host";

          this.raceGame.setMode(mode, diff, p1, mode === "online" ? (this.onlineSync.opponentName || "Đối thủ Online") : "Người chơi 2", onlineRole);

          const l1 = document.getElementById("label-p1-name");
          const l2 = document.getElementById("label-p2-name");
          if (l1) l1.textContent = `Làn 1: ${this.raceGame.player1.name}`;
          if (l2) l2.textContent = `Làn 2: ${this.raceGame.player2.name}`;

          // Chuẩn bị 2 tập câu hỏi hoàn toàn tách biệt
          this.setupDisjointQuestions();

          // Bắt đầu đua
          this.raceGame.start();
          this.renderDualGameQuestions();

          // Nếu là chủ phòng online, thông báo cho khách bắt đầu
          if (mode === "online" && onlineRole === "host" && this.onlineSync) {
            this.onlineSync.send({ type: "START_RACE" });
          }
        });
      }
    }

    // ==========================================
    // RENDER CÂU HỎI ĐỘC LẬP CHO CẢ 2 NGƯỜI CHƠI
    // ==========================================
    renderDualGameQuestions() {
      this.renderPlayerQuestion(1);
      if (this.raceGame.mode === "pvp") {
        this.renderPlayerQuestion(2);
      }
    }

    renderPlayerQuestion(playerNum = 1) {
      const isP1 = (playerNum === 1);
      const qList = isP1 ? this.p1Questions : this.p2Questions;
      let qIdx = isP1 ? this.p1QIndex : this.p2QIndex;

      if (!qList || qList.length === 0) return;
      if (qIdx >= qList.length) {
        if (isP1) this.p1QIndex = 0; else this.p2QIndex = 0;
        qIdx = 0;
      }

      const q = qList[qIdx];
      const p = isP1 ? this.raceGame.player1 : this.raceGame.player2;
      const obs = this.raceGame.obstacles[p.currentObstacleIdx];

      // Elements P1 vs P2
      const prefix = isP1 ? "game-q" : "game-p2-q";
      const title = document.getElementById(`${prefix}-title`);
      const opts = document.getElementById(`${prefix}-options`);
      const badge = document.getElementById(`${prefix}-type-badge`);
      const turn = document.getElementById(`${prefix}-turn-badge`);
      const fb = document.getElementById(isP1 ? "game-feedback-box" : "game-p2-feedback-box");

      if (fb) fb.classList.add("hidden");

      if (badge && turn) {
        if (p.isBlocked && obs) {
          badge.className = `px-3 py-1 text-xs font-bold rounded-full bg-rose-100 text-rose-800 animate-pulse`;
          badge.textContent = `🚨 BỊ CHẶN: ${obs.shortName.toUpperCase()} (${obs.dist}m)`;
          turn.innerHTML = `<span class="text-rose-600 font-extrabold">⚠️ Giải đúng để MỞ RÀO LÀN ${playerNum}!</span>`;
        } else {
          badge.className = `px-3 py-1 text-xs font-bold rounded-full ${isP1 ? 'bg-orange-100 text-orange-700' : 'bg-blue-100 text-blue-700'}`;
          badge.textContent = q.type === "mcq" ? "Trắc nghiệm" : (q.type === "true_false" ? "Đúng / Sai" : "Điền khuyết");
          turn.textContent = `Làn ${playerNum}: ${p.name}`;
        }
      }

      if (title) title.textContent = q.question;

      if (opts) {
        if (q.type === "mcq") {
          opts.innerHTML = q.options.map((opt, i) => `
            <button class="btn-touch w-full p-3 rounded-xl border border-slate-200 bg-slate-50 hover:${isP1 ? 'bg-orange-50' : 'bg-blue-50'} font-semibold text-slate-800 text-left transition flex items-center gap-3 text-xs sm:text-sm" onclick="app.submitGameAnswer(${i}, ${playerNum})">
              <span class="w-6 h-6 rounded-lg ${isP1 ? 'bg-orange-100 text-orange-700' : 'bg-blue-100 text-blue-700'} flex items-center justify-center font-bold text-xs">${String.fromCharCode(65 + i)}</span>
              <span>${opt}</span>
            </button>
          `).join("");
        } else if (q.type === "true_false") {
          opts.innerHTML = `
            <div class="grid grid-cols-2 gap-3">
              <button class="btn-touch p-3 rounded-xl border-2 border-emerald-300 bg-emerald-50 hover:bg-emerald-100 font-extrabold text-emerald-800 text-sm transition" onclick="app.submitGameAnswer(true, ${playerNum})">✓ ĐÚNG</button>
              <button class="btn-touch p-3 rounded-xl border-2 border-rose-300 bg-rose-50 hover:bg-rose-100 font-extrabold text-rose-800 text-sm transition" onclick="app.submitGameAnswer(false, ${playerNum})">✗ SAI</button>
            </div>
          `;
        } else if (q.type === "fill_in_blank") {
          opts.innerHTML = `
            <div class="space-y-2.5">
              <input type="text" id="${prefix}-fib-input" placeholder="Nhập đáp án số hoặc từ..." class="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:border-orange-500">
              <button class="btn-touch w-full py-2.5 rounded-xl font-bold text-xs sm:text-sm ${isP1 ? 'bg-orange-500 hover:bg-orange-600' : 'bg-blue-600 hover:bg-blue-700'} text-white transition" onclick="app.submitGameAnswer(document.getElementById('${prefix}-fib-input').value, ${playerNum})">XÁC NHẬN ĐÁP ÁN</button>
            </div>
          `;
        } else {
          // Các dạng tự luận/ghép nối: hiển thị trắc nghiệm nhanh 4 lựa chọn
          opts.innerHTML = `
            <div class="grid grid-cols-2 gap-3">
              <button class="btn-touch p-3 rounded-xl border border-slate-200 bg-slate-50 hover:bg-orange-50 font-bold text-xs text-slate-800" onclick="app.submitGameAnswer(0, ${playerNum})">A. Đáp án đúng</button>
              <button class="btn-touch p-3 rounded-xl border border-slate-200 bg-slate-50 hover:bg-orange-50 font-bold text-xs text-slate-800" onclick="app.submitGameAnswer(1, ${playerNum})">B. Chưa chính xác</button>
            </div>
          `;
        }
      }
    }

    renderGameQ() {
      this.renderDualGameQuestions();
    }

    // ==========================================
    // CHẤM ĐIỂM & MỞ RÀO CHẮN ĐỘC LẬP
    // ==========================================
    submitGameAnswer(ans, playerNum = 1) {
      if (!this.raceGame || !this.raceGame.isRunning || this.raceGame.isFinished) return;

      const isP1 = (playerNum === 1);
      const qList = isP1 ? this.p1Questions : this.p2Questions;
      const qIdx = isP1 ? this.p1QIndex : this.p2QIndex;
      const q = qList[qIdx];
      if (!q) return;

      let correct = false;
      if (q.type === "mcq") correct = parseInt(ans, 10) === q.correct;
      else if (q.type === "true_false") correct = Boolean(ans) === q.correct;
      else if (q.type === "fill_in_blank") {
        const clean = String(ans || "").trim().toLowerCase();
        correct = q.keywords.some(k => clean.includes(k.toLowerCase()));
      } else {
        correct = (ans === 0);
      }

      // Xử lý động cơ đua xe cho Người chơi này
      const res = this.raceGame.handleAnswer(playerNum, correct, q.level);
      if (!res) return;

      const fb = document.getElementById(isP1 ? "game-feedback-box" : "game-p2-feedback-box");
      const box = document.getElementById(isP1 ? "game-question-box" : "game-p2-question-box");

      if (fb) {
        fb.classList.remove("hidden");
        if (res.success) {
          if (box) box.classList.remove("ring-4", "ring-rose-400", "border-rose-500");
          fb.className = "mt-3 p-3 rounded-xl text-xs bg-emerald-50 border border-emerald-200 text-emerald-900";
          if (res.isObstacleCleared) {
            fb.innerHTML = `<strong>🎉 CHÍNH XÁC! ĐÃ MỞ RÀO ${res.obstacle?.shortName.toUpperCase()} (+${res.scoreGain}đ)!</strong><p class="mt-0.5 text-[11px]">Xe phụt lửa Nitro tăng tốc 108 km/h! Giải thích: ${q.explanation}</p>`;
          } else {
            fb.innerHTML = `<strong>🚀 CHÍNH XÁC! TĂNG TỐC NITRO (+${res.scoreGain}đ)!</strong><p class="mt-0.5 text-[11px]">${q.explanation}</p>`;
          }
        } else {
          fb.className = "mt-3 p-3 rounded-xl text-xs bg-rose-50 border border-rose-200 text-rose-900";
          const p = isP1 ? this.raceGame.player1 : this.raceGame.player2;
          if (p.isBlocked) {
            fb.innerHTML = `<strong>⚠️ CHƯA ĐÚNG! Rào chắn chưa mở!</strong><p class="mt-0.5 text-[11px]">Giải thích: ${q.explanation}</p><p class="mt-1 font-bold text-rose-700 text-[11px]">Đang nạp câu hỏi mới sau 2 giây...</p>`;
          } else {
            fb.innerHTML = `<strong>⚠️ CHƯA ĐÚNG! Xe bị hãm tốc độ!</strong><p class="mt-0.5 text-[11px]">Giải thích: ${q.explanation}</p>`;
          }
        }
      }

      // Tăng chỉ số câu hỏi riêng cho người này
      const delay = res.success ? 1300 : 2000;
      setTimeout(() => {
        if (isP1) this.p1QIndex++;
        else this.p2QIndex++;

        if (!this.raceGame.isFinished) {
          this.renderPlayerQuestion(playerNum);
        }
      }, delay);
    }
    // Luyện tập 5 dạng bài
    initQuiz() {
      const btnStart = document.getElementById("btn-start-quiz");
      const btnCheck = document.getElementById("btn-quiz-check");
      const btnNext = document.getElementById("btn-quiz-next");

      if (btnStart) {
        btnStart.addEventListener("click", () => {
          sound.playClick();
          const cat = document.getElementById("quiz-filter-category").value;
          const cnt = parseInt(document.getElementById("quiz-filter-count").value, 10);
          this.quiz.initSession(cat, cnt);
          this.renderQuizQ();
        });
      }
      if (btnCheck) {
        btnCheck.addEventListener("click", () => this.checkQuizAnswer());
      }
      if (btnNext) {
        btnNext.addEventListener("click", () => {
          sound.playClick();
          const next = this.quiz.nextQuestion();
          if (next) this.renderQuizQ();
          else this.renderQuizSummary();
        });
      }

      this.quiz.initSession("all", 10);
      this.renderQuizQ();
    }

    renderQuizQ() {
      const q = this.quiz.getCurrentQuestion();
      if (!q) return;

      document.getElementById("quiz-progress-text").textContent = `Câu ${this.quiz.currentIndex + 1} / ${this.quiz.currentQuestions.length}`;
      document.getElementById("quiz-score-display").textContent = this.quiz.stats.score;
      const typeNames = { mcq: "Trắc nghiệm", true_false: "Đúng / Sai", fill_in_blank: "Điền khuyết", matching: "Ghép cột", short_answer: "Tự luận tính toán" };
      document.getElementById("quiz-badge-type").textContent = typeNames[q.type] || "Câu hỏi";

      document.getElementById("quiz-explanation-box").classList.add("hidden");
      document.getElementById("btn-quiz-check").classList.remove("hidden");
      document.getElementById("btn-quiz-next").classList.add("hidden");

      const cont = document.getElementById("quiz-q-content");
      cont.innerHTML = `<h3 class="text-base sm:text-lg font-bold text-slate-900">${q.question}</h3>`;

      this.matchingLeft = null;
      this.matchingPairs = {};

      if (q.type === "mcq") {
        const div = document.createElement("div");
        div.className = "space-y-2 pt-2";
        div.innerHTML = q.options.map((opt, i) => `
          <label class="flex items-center gap-3 p-3.5 rounded-xl border border-slate-200 bg-slate-50 hover:border-orange-400 cursor-pointer">
            <input type="radio" name="pq_mcq" value="${i}" class="w-4 h-4 text-orange-600">
            <span class="font-bold text-xs">${String.fromCharCode(65 + i)}.</span>
            <span class="text-sm text-slate-800">${opt}</span>
          </label>
        `).join("");
        cont.appendChild(div);
      } else if (q.type === "true_false") {
        const div = document.createElement("div");
        div.className = "grid grid-cols-2 gap-4 pt-2";
        div.innerHTML = `
          <label class="p-4 rounded-xl border-2 border-emerald-200 bg-emerald-50 text-center font-bold text-emerald-800 cursor-pointer">
            <input type="radio" name="pq_tf" value="true"> Đúng
          </label>
          <label class="p-4 rounded-xl border-2 border-rose-200 bg-rose-50 text-center font-bold text-rose-800 cursor-pointer">
            <input type="radio" name="pq_tf" value="false"> Sai
          </label>
        `;
        cont.appendChild(div);
      } else if (q.type === "fill_in_blank") {
        const div = document.createElement("div");
        div.className = "pt-2 space-y-2";
        div.innerHTML = `
          <p class="text-sm font-semibold bg-orange-50 p-3 rounded-xl border border-orange-200">${q.blankPrompt || q.question}</p>
          <input type="text" id="pq-fib-input" placeholder="Điền từ/số còn thiếu..." class="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm">
        `;
        cont.appendChild(div);
      } else if (q.type === "matching") {
        const div = document.createElement("div");
        div.className = "pt-2 space-y-3";
        const rights = this.quiz.shuffle(q.pairs.map((p, i) => ({ text: p.right, idx: i })));
        div.innerHTML = `
          <p class="text-xs text-slate-500 italic">Hướng dẫn: Nhấp chọn một mục ở cột trái, sau đó nhấp vào mục tương ứng ở cột phải.</p>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div class="space-y-2" id="m-left-col">
              ${q.pairs.map((p, i) => `
                <div class="matching-item p-3 rounded-xl border border-slate-200 bg-white font-semibold text-xs flex justify-between items-center" data-left="${i}" onclick="app.selectMLeft(${i})">
                  <span>${i + 1}. ${p.left}</span>
                  <span class="m-badge-left text-orange-600 font-bold text-[11px]"></span>
                </div>
              `).join("")}
            </div>
            <div class="space-y-2" id="m-right-col">
              ${rights.map((r) => `
                <div class="matching-item p-3 rounded-xl border border-slate-200 bg-slate-50 font-semibold text-xs flex justify-between items-center" onclick="app.selectMRight(${r.idx})">
                  <span>• ${r.text}</span>
                </div>
              `).join("")}
            </div>
          </div>
        `;
        cont.appendChild(div);
      } else if (q.type === "short_answer") {
        const div = document.createElement("div");
        div.className = "pt-2 space-y-2";
        div.innerHTML = `
          <div class="flex gap-2">
            <input type="text" id="pq-sa-input" placeholder="Nhập đáp số (Ví dụ: 15 hoặc 15.5)..." class="flex-1 px-4 py-2.5 rounded-xl border border-slate-200 text-sm font-bold">
            <span class="px-4 py-2.5 bg-slate-100 rounded-xl font-bold text-xs border border-slate-200">${q.unit || ''}</span>
          </div>
        `;
        cont.appendChild(div);
      }
    }

    selectMLeft(i) {
      this.matchingLeft = i;
      document.querySelectorAll("#m-left-col .matching-item").forEach(el => {
        if (parseInt(el.dataset.left, 10) === i) el.classList.add("selected");
        else el.classList.remove("selected");
      });
      sound.playClick();
    }

    selectMRight(origIdx) {
      if (this.matchingLeft === null) {
        alert("Vui lòng nhấp chọn một mục ở cột bên trái trước!");
        return;
      }
      this.matchingPairs[this.matchingLeft] = origIdx;
      sound.playClick();
      const el = document.querySelector(`#m-left-col [data-left="${this.matchingLeft}"]`);
      if (el) {
        el.classList.remove("selected");
        el.classList.add("matched");
        el.querySelector(".m-badge-left").textContent = "➔ Đã ghép";
      }
      this.matchingLeft = null;
    }

    checkQuizAnswer() {
      const q = this.quiz.getCurrentQuestion();
      if (!q) return;
      let ans = null;

      if (q.type === "mcq") {
        const s = document.querySelector("input[name='pq_mcq']:checked");
        if (!s) return alert("Vui lòng chọn một đáp án!");
        ans = s.value;
      } else if (q.type === "true_false") {
        const s = document.querySelector("input[name='pq_tf']:checked");
        if (!s) return alert("Vui lòng chọn Đúng hoặc Sai!");
        ans = s.value === "true";
      } else if (q.type === "fill_in_blank") {
        const v = document.getElementById("pq-fib-input")?.value;
        if (!v || !v.trim()) return alert("Vui lòng nhập câu trả lời!");
        ans = v.trim();
      } else if (q.type === "matching") {
        if (Object.keys(this.matchingPairs).length < q.pairs.length) return alert("Vui lòng ghép nối đủ các cặp!");
        ans = this.matchingPairs;
      } else if (q.type === "short_answer") {
        const v = document.getElementById("pq-sa-input")?.value;
        if (!v || !v.trim()) return alert("Vui lòng nhập kết quả bài toán!");
        ans = v.trim();
      }

      const res = this.quiz.submitAnswer(ans);
      document.getElementById("quiz-score-display").textContent = this.quiz.stats.score;

      const exp = document.getElementById("quiz-explanation-box");
      exp.classList.remove("hidden");
      if (res.isCorrect) {
        sound.playCorrect();
        exp.className = "p-4 rounded-2xl text-sm bg-emerald-50 border border-emerald-200 text-emerald-950";
        exp.innerHTML = `<strong>✓ CHÍNH XÁC (+10 điểm)!</strong><p class="text-xs mt-1">${res.explanation}</p>`;
      } else {
        sound.playWrong();
        exp.className = "p-4 rounded-2xl text-sm bg-rose-50 border border-rose-200 text-rose-950";
        exp.innerHTML = `<strong>✗ CHƯA CHÍNH XÁC!</strong><p class="text-xs mt-1">Giải thích: ${res.explanation}</p>`;
      }

      document.getElementById("btn-quiz-check").classList.add("hidden");
      document.getElementById("btn-quiz-next").classList.remove("hidden");
    }

    renderQuizSummary() {
      const s = this.quiz.getSummary();
      sound.playWin();
      document.getElementById("quiz-q-content").innerHTML = `
        <div class="text-center py-6 space-y-3">
          <div class="text-4xl">🌟</div>
          <h3 class="text-xl font-bold">Hoàn thành bài luyện tập!</h3>
          <p class="text-xs text-slate-500">Số câu đúng: ${s.correct} / ${s.total} (${s.accuracy}%) - Thời gian: ${s.durationSec}s</p>
          <button class="px-5 py-2 rounded-xl bg-orange-500 text-white font-bold text-sm shadow" onclick="app.initQuiz()">LUYỆN TẬP LẠI</button>
        </div>
      `;
      document.getElementById("btn-quiz-check").classList.add("hidden");
      document.getElementById("btn-quiz-next").classList.add("hidden");

      AuthLMS.recordResult({
        studentName: AuthLMS.currentUser?.name || "Học sinh",
        gameMode: `Luyện tập (${s.total} câu)`,
        score: s.score,
        accuracy: s.accuracy,
        duration: `${s.durationSec}s`
      });
    }

    // Auth & LMS
    initAuth() {
      const studentForm = document.getElementById("form-student-login");
      if (studentForm) {
        studentForm.addEventListener("submit", (e) => {
          e.preventDefault();
          const name = document.getElementById("input-student-name").value;
          const cls = document.getElementById("input-student-class").value;
          AuthLMS.loginStudent(name, cls);
          this.closeAuthModal();
          this.renderUserBadge();
          this.renderLMS();
        });
      }

      const teacherForm = document.getElementById("form-teacher-login");
      if (teacherForm) {
        teacherForm.addEventListener("submit", (e) => {
          e.preventDefault();
          const name = document.getElementById("input-teacher-name")?.value || "Giáo viên KHTN 7";
          const code = document.getElementById("input-teacher-code")?.value || "";
          const res = AuthLMS.loginTeacher(name, code);
          if (res.success) {
            sound.playCorrect();
            this.closeAuthModal();
            this.applyLoggedInUser(AuthLMS.currentUser);
            this.renderUserBadge();
            this.renderLMS();
            alert("Đăng nhập Giáo viên thành công!");
          } else {
            sound.playWrong();
            alert(res.message);
          }
        });
      }

      document.getElementById("btn-export-csv")?.addEventListener("click", () => AuthLMS.exportCSV());
      document.getElementById("btn-clear-history")?.addEventListener("click", () => {
        if (confirm("Đặt lại lịch sử thi?")) {
          AuthLMS.clearRecords();
          this.renderLMS();
        }
      });
      document.getElementById("btn-open-teacher-login")?.addEventListener("click", () => {
        this.openAuthModal();
        this.switchAuthMode("teacher");
      });

      this.renderUserBadge();
    }

    renderUserBadge() {
      const u = AuthLMS.currentUser;
      const nameEl = document.getElementById("user-display-name");
      const roleEl = document.getElementById("user-display-role");
      const initEl = document.getElementById("user-avatar-initial");
      if (u && nameEl && roleEl && initEl) {
        nameEl.textContent = u.name;
        roleEl.textContent = u.role === "teacher" ? "Giáo viên KHTN 7" : `Lớp ${u.className || '7A1'}`;
        initEl.textContent = u.name.charAt(0).toUpperCase();
        initEl.className = u.role === "teacher"
          ? "w-7 h-7 rounded-lg bg-blue-700 text-white flex items-center justify-center font-bold text-xs"
          : "w-7 h-7 rounded-lg bg-orange-500 text-white flex items-center justify-center font-bold text-xs";
      }
    }

    renderLMS() {
      const u = AuthLMS.currentUser;
      const isT = u && u.role === "teacher";
      const badge = document.getElementById("lms-role-badge");
      const title = document.getElementById("lms-user-title");
      const panel = document.getElementById("teacher-analytics-panel");

      if (badge && title) {
        if (isT) {
          badge.textContent = "Giáo viên";
          badge.className = "px-2.5 py-0.5 rounded-full text-xs font-extrabold bg-blue-100 text-blue-700";
          title.textContent = "Bảng Quản trị & Phân tích Đánh giá KHTN 7";
          if (panel) panel.classList.remove("hidden");
        } else {
          badge.textContent = "Học sinh";
          badge.className = "px-2.5 py-0.5 rounded-full text-xs font-extrabold bg-orange-100 text-orange-700";
          title.textContent = `Hồ sơ Học tập: ${u?.name || 'Học sinh'}`;
          if (panel) panel.classList.add("hidden");
        }
      }

      const recs = AuthLMS.getAllRecords();
      const tbody = document.getElementById("lms-records-tbody");
      if (tbody) {
        if (recs.length === 0) {
          tbody.innerHTML = `<tr><td colspan="7" class="p-6 text-center text-slate-400">Chưa có kết quả làm bài nào.</td></tr>`;
        } else {
          tbody.innerHTML = recs.map(r => `
            <tr class="hover:bg-slate-50 transition">
              <td class="p-3 font-bold text-slate-800">${r.studentName}</td>
              <td class="p-3 text-slate-600">${r.className}</td>
              <td class="p-3 text-slate-500 font-mono text-[11px]">${r.date}</td>
              <td class="p-3 font-semibold text-orange-600">${r.gameMode}</td>
              <td class="p-3 text-right font-bold text-slate-900">${r.score}</td>
              <td class="p-3 text-right"><span class="px-2 py-0.5 rounded-full font-bold text-[11px] ${r.accuracy >= 80 ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'}">${r.accuracy}%</span></td>
              <td class="p-3 text-right text-slate-500">${r.duration}</td>
            </tr>
          `).join("");
        }
      }

      if (isT && recs.length > 0) {
        const unique = new Set(recs.map(r => r.studentName)).size;
        const avgS = Math.round(recs.reduce((a, b) => a + (b.score || 0), 0) / recs.length);
        const avgA = Math.round(recs.reduce((a, b) => a + (b.accuracy || 0), 0) / recs.length);
        document.getElementById("stat-total-students").textContent = unique;
        document.getElementById("stat-total-exams").textContent = recs.length;
        document.getElementById("stat-avg-score").textContent = avgS;
        document.getElementById("stat-avg-accuracy").textContent = `${avgA}%`;
      }
    }

    openAuthModal() { document.getElementById("auth-modal").classList.remove("hidden"); }
    closeAuthModal() { document.getElementById("auth-modal").classList.add("hidden"); }
    switchAuthMode(mode) {
      if (mode === "teacher") {
        document.getElementById("form-student-login").classList.add("hidden");
        document.getElementById("form-teacher-login").classList.remove("hidden");
        document.getElementById("auth-modal-title").textContent = "Cổng Quản trị Giáo viên";
      } else {
        document.getElementById("form-teacher-login").classList.add("hidden");
        document.getElementById("form-student-login").classList.remove("hidden");
        document.getElementById("auth-modal-title").textContent = "Đăng nhập Học sinh";
      }
    }
  }

  // Khởi tạo ngay lập tức khi DOM sẵn sàng
  const appInstance = new AppController();
  window.app = appInstance;
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => appInstance.init());
  } else {
    appInstance.init();
  }

})();
