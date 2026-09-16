// js/data/theory.js
// Lý thuyết trọng tâm Bài 8: Tốc độ chuyển động (KHTN 7 - Kết nối tri thức với cuộc sống)

export const THEORY_DATA = {
  lessonTitle: "Bài 8: Tốc độ chuyển động",
  subject: "Khoa học tự nhiên 7 (Bộ sách Kết nối tri thức với cuộc sống)",
  videoUrl: "https://www.youtube-nocookie.com/embed/a4CtFYYYAPA?rel=0", // Video bài giảng tham khảo KHTN 7
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
          <p class="font-bold text-lg mb-1 flex items-center gap-2">
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
            <p class="text-sm font-semibold text-blue-800 uppercase mb-1">Công thức cốt lõi</p>
            <div class="text-3xl font-extrabold text-blue-900 my-2">v = s / t</div>
            <p class="text-xs text-blue-700 font-medium">Tốc độ = Quãng đường / Thời gian</p>
          </div>
          <div class="bg-amber-50 border border-amber-200 p-4 rounded-xl text-center shadow-sm">
            <p class="text-sm font-semibold text-amber-800 uppercase mb-1">Tìm quãng đường</p>
            <div class="text-3xl font-extrabold text-amber-900 my-2">s = v · t</div>
            <p class="text-xs text-amber-700 font-medium">Quãng đường = Tốc độ × Thời gian</p>
          </div>
          <div class="bg-emerald-50 border border-emerald-200 p-4 rounded-xl text-center shadow-sm">
            <p class="text-sm font-semibold text-emerald-800 uppercase mb-1">Tìm thời gian</p>
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
            <div class="mt-3 text-xs flex justify-between border-t border-white/20 pt-2">
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
          <div class="border border-slate-200 rounded-xl p-4 bg-white hover:border-orange-400 transition shadow-sm">
            <div class="w-10 h-10 rounded-lg bg-orange-100 text-orange-600 flex items-center justify-center font-bold mb-2">01</div>
            <h4 class="font-bold text-slate-800 mb-1">Thước & Đồng hồ bấm giây</h4>
            <p class="text-xs text-slate-600">Dùng thước đo quãng đường s, dùng đồng hồ bấm giây đo thời gian t, sau đó áp dụng công thức v = s/t.</p>
          </div>
          <div class="border border-slate-200 rounded-xl p-4 bg-white hover:border-blue-400 transition shadow-sm">
            <div class="w-10 h-10 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center font-bold mb-2">02</div>
            <h4 class="font-bold text-slate-800 mb-1">Cổng quang điện & Hiện số</h4>
            <p class="text-xs text-slate-600">Tự động bấm giờ khi vật chắn chùm sáng ở cổng quang, giúp kết quả đo có độ chính xác cực cao trong phòng thí nghiệm.</p>
          </div>
          <div class="border border-slate-200 rounded-xl p-4 bg-white hover:border-emerald-400 transition shadow-sm">
            <div class="w-10 h-10 rounded-lg bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold mb-2">03</div>
            <h4 class="font-bold text-slate-800 mb-1">Thiết bị bắn tốc độ (CSGT)</h4>
            <p class="text-xs text-slate-600">Sử dụng sóng vô tuyến hoặc laser để đo ngay tức thì tốc độ phương tiện, hỗ trợ kiểm soát an toàn giao thông.</p>
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
        <p class="text-sm text-slate-600 mb-3">Số liệu tham khảo thực tế từ Bảng 8.2 SGK Khoa học tự nhiên 7 (Kết nối tri thức):</p>
        <div class="overflow-x-auto rounded-xl border border-slate-200">
          <table class="w-full text-sm text-left">
            <thead class="bg-slate-100 text-slate-700 font-bold border-b border-slate-200">
              <tr>
                <th class="p-3">Đối tượng chuyển động</th>
                <th class="p-3 text-right">Tốc độ (m/s)</th>
                <th class="p-3 text-right">Tốc độ (km/h)</th>
                <th class="p-3">Ghi chú SGK</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-100">
              <tr class="hover:bg-orange-50/50">
                <td class="p-3 font-semibold text-slate-800">🐌 Ốc sên bò</td>
                <td class="p-3 text-right text-orange-600 font-mono">0,0014</td>
                <td class="p-3 text-right text-orange-600 font-mono">≈ 0,005</td>
                <td class="p-3 text-xs text-slate-500">Chuyển động rất chậm</td>
              </tr>
              <tr class="hover:bg-orange-50/50">
                <td class="p-3 font-semibold text-slate-800">🐢 Rùa bơi lội / bò</td>
                <td class="p-3 text-right text-orange-600 font-mono">0,055</td>
                <td class="p-3 text-right text-orange-600 font-mono">≈ 0,20</td>
                <td class="p-3 text-xs text-slate-500">Chậm chạp</td>
              </tr>
              <tr class="hover:bg-orange-50/50">
                <td class="p-3 font-semibold text-slate-800">🚶 Người đi bộ bình thường</td>
                <td class="p-3 text-right text-blue-600 font-mono">1,50</td>
                <td class="p-3 text-right text-blue-600 font-mono">5,40</td>
                <td class="p-3 text-xs text-slate-500">Tốc độ di chuyển hàng ngày</td>
              </tr>
              <tr class="hover:bg-orange-50/50">
                <td class="p-3 font-semibold text-slate-800">🏃 Kỷ lục gia Usain Bolt (100m)</td>
                <td class="p-3 text-right text-emerald-600 font-mono font-bold">10,44</td>
                <td class="p-3 text-right text-emerald-600 font-mono font-bold">37,58</td>
                <td class="p-3 text-xs text-slate-500">Kỷ lục thế giới điền kinh 9,58s</td>
              </tr>
              <tr class="hover:bg-orange-50/50 bg-amber-50/30">
                <td class="p-3 font-semibold text-slate-800">🐆 Báo săn Gê-pa (Cheetah)</td>
                <td class="p-3 text-right text-amber-600 font-mono font-bold">30,00</td>
                <td class="p-3 text-right text-amber-600 font-mono font-bold">108,00</td>
                <td class="p-3 text-xs text-slate-500">Động vật chạy nhanh nhất trên cạn</td>
              </tr>
              <tr class="hover:bg-orange-50/50">
                <td class="p-3 font-semibold text-slate-800">🚗 Ô tô lưu thông thông thường</td>
                <td class="p-3 text-right text-blue-600 font-mono">16,7 – 27,8</td>
                <td class="p-3 text-right text-blue-600 font-mono">60 – 100</td>
                <td class="p-3 text-xs text-slate-500">Quy định luật an toàn giao thông</td>
              </tr>
              <tr class="hover:bg-orange-50/50">
                <td class="p-3 font-semibold text-slate-800">✈️ Máy bay chở khách</td>
                <td class="p-3 text-right text-indigo-600 font-mono">222 – 250</td>
                <td class="p-3 text-right text-indigo-600 font-mono">800 – 900</td>
                <td class="p-3 text-xs text-slate-500">Vận tải đường hàng không</td>
              </tr>
              <tr class="hover:bg-orange-50/50">
                <td class="p-3 font-semibold text-slate-800">🌊 Vết nứt tách giãn đáy đại dương</td>
                <td class="p-3 text-right text-slate-500 font-mono">vài cm/năm</td>
                <td class="p-3 text-right text-slate-500 font-mono">—</td>
                <td class="p-3 text-xs text-slate-500">Chuyển động kiến tạo địa chất</td>
              </tr>
            </tbody>
          </table>
        </div>
      `
    }
  ]
};
