// js/data/questions.js
// Ngân hàng 100 câu hỏi Bài 8: Tốc độ chuyển động (KHTN 7 - Kết nối tri thức)
// Gồm 5 dạng, mỗi dạng chuẩn 20 câu, phân bố Nhận biết - Thông hiểu - Vận dụng

export const QUESTIONS_BANK = {
  // ==========================================
  // DẠNG 1: TRẮC NGHIỆM 4 LỰA CHỌN (20 CÂU)
  // ==========================================
  mcq: [
    {
      id: "mcq_01",
      type: "mcq",
      level: "nhan_biet",
      question: "Tốc độ là đại lượng cho biết:",
      options: [
        "Mức độ nhanh hay chậm của chuyển động trong một đơn vị thời gian",
        "Hướng chuyển động của vật trong không gian",
        "Khối lượng của vật đang chuyển động",
        "Quãng đường dài nhất mà vật có thể đi"
      ],
      correct: 0,
      explanation: "Theo định nghĩa SGK KHTN 7: Tốc độ là đại lượng cho biết mức độ nhanh hay chậm của chuyển động."
    },
    {
      id: "mcq_02",
      type: "mcq",
      level: "nhan_biet",
      question: "Công thức tổng quát tính tốc độ chuyển động là:",
      options: ["v = s / t", "v = s . t", "v = t / s", "s = v / t"],
      correct: 0,
      explanation: "Công thức chuẩn: v = s / t, trong đó s là quãng đường, t là thời gian."
    },
    {
      id: "mcq_03",
      type: "mcq",
      level: "nhan_biet",
      question: "Đơn vị đo tốc độ hợp pháp (SI) của nước ta là:",
      options: ["Mét trên giây (m/s)", "Kilômét trên phút (km/min)", "Centimét trên giây (cm/s)", "Dặm trên giờ (mph)"],
      correct: 0,
      explanation: "Trong hệ SI, đơn vị đo độ dài là mét (m), thời gian là giây (s), nên đơn vị tốc độ là m/s."
    },
    {
      id: "mcq_04",
      type: "mcq",
      level: "nhan_biet",
      question: "Để đo thời gian chuyển động trong phòng thí nghiệm với độ chính xác cao nhất, người ta dùng:",
      options: [
        "Cổng quang điện kết hợp đồng hồ đo thời gian hiện số",
        "Đồng hồ cát cổ truyền",
        "Đồng hồ đeo tay có kim giây",
        "Đồng hồ quả lắc cơ học"
      ],
      correct: 0,
      explanation: "Cổng quang điện cảm biến chùm sáng và kích hoạt đồng hồ điện tử tự động, hạn chế tối đa sai số của con người."
    },
    {
      id: "mcq_05",
      type: "mcq",
      level: "nhan_biet",
      question: "Thiết bị CSGT thường dùng để kiểm tra phương tiện chạy quá tốc độ quy định là:",
      options: ["Thiết bị bắn tốc độ", "Thước dây cuộn", "Nhiệt kế hồng ngoại", "Máy đo áp suất lốp"],
      correct: 0,
      explanation: "Thiết bị bắn tốc độ (radar/laser) ghi nhận thời gian và tính toán ngay tốc độ của xe trên đường."
    },
    {
      id: "mcq_06",
      type: "mcq",
      level: "thong_hieu",
      question: "Mối liên hệ quy đổi giữa hai đơn vị tốc độ thông dụng m/s và km/h là:",
      options: [
        "1 m/s = 3,6 km/h",
        "1 km/h = 3,6 m/s",
        "1 m/s = 1 km/h",
        "1 m/s = 0,36 km/h"
      ],
      correct: 0,
      explanation: "1 m/s = 1m / 1s = (1/1000 km) / (1/3600 h) = 3600 / 1000 = 3,6 km/h."
    },
    {
      id: "mcq_07",
      type: "mcq",
      level: "thong_hieu",
      question: "Một con báo săn Gê-pa có tốc độ 30 m/s. Đổi sang đơn vị km/h, tốc độ của báo là:",
      options: ["108 km/h", "83,3 km/h", "300 km/h", "10,8 km/h"],
      correct: 0,
      explanation: "v = 30 × 3,6 = 108 km/h (loài thú chạy nhanh nhất trên mặt đất theo SGK)."
    },
    {
      id: "mcq_08",
      type: "mcq",
      level: "thong_hieu",
      question: "Biết ô tô di chuyển với tốc độ 54 km/h. Tốc độ này tính theo m/s bằng:",
      options: ["15 m/s", "194,4 m/s", "20 m/s", "10 m/s"],
      correct: 0,
      explanation: "Đổi km/h sang m/s: chia cho 3,6. 54 / 3,6 = 15 m/s."
    },
    {
      id: "mcq_09",
      type: "mcq",
      level: "thong_hieu",
      question: "Hai bạn Nam và An cùng chạy quãng đường 60 m. Nam chạy hết 10 s, An chạy hết 12 s. So sánh nào đúng?",
      options: [
        "Nam chạy nhanh hơn An",
        "An chạy nhanh hơn Nam",
        "Hai bạn chạy nhanh như nhau",
        "Không thể so sánh được"
      ],
      correct: 0,
      explanation: "Cùng quãng đường 60m, Nam mất ít thời gian hơn (10s < 12s) nên Nam có tốc độ lớn hơn (6 m/s > 5 m/s)."
    },
    {
      id: "mcq_10",
      type: "mcq",
      level: "thong_hieu",
      question: "Từ công thức v = s / t, công thức để tính quãng đường s là:",
      options: ["s = v . t", "s = v / t", "s = t / v", "s = v + t"],
      correct: 0,
      explanation: "Nhân chéo hai vế: s = v · t."
    },
    {
      id: "mcq_11",
      type: "mcq",
      level: "thong_hieu",
      question: "Từ công thức v = s / t, công thức để xác định thời gian chuyển động t là:",
      options: ["t = s / v", "t = s . v", "t = v / s", "t = s - v"],
      correct: 0,
      explanation: "Biến đổi đại số: t = s / v."
    },
    {
      id: "mcq_12",
      type: "mcq",
      level: "thong_hieu",
      question: "Một con ốc sên bò với tốc độ khoảng 0,0014 m/s. Đây là đối tượng đại diện cho:",
      options: [
        "Chuyển động có tốc độ rất nhỏ trong tự nhiên",
        "Chuyển động nhanh nhất trong các loài nhuyễn thể",
        "Chuyển động có gia tốc lớn",
        "Vật đứng yên tuyệt đối"
      ],
      correct: 0,
      explanation: "Trong bảng số liệu SGK KHTN 7, ốc sên bò với tốc độ 0,0014 m/s (chỉ khoảng 5 mét/giờ), rất chậm."
    },
    {
      id: "mcq_13",
      type: "mcq",
      level: "van_dung",
      question: "Một học sinh đạp xe từ nhà đến trường trên quãng đường 3 km hết 15 phút (0,25 giờ). Tốc độ đạp xe là:",
      options: ["12 km/h", "5 km/h", "15 km/h", "20 km/h"],
      correct: 0,
      explanation: "v = s / t = 3 / 0,25 = 12 km/h (hoặc 3000m / 900s ≈ 3,33 m/s = 12 km/h)."
    },
    {
      id: "mcq_14",
      type: "mcq",
      level: "van_dung",
      question: "Kỷ lục gia Usain Bolt chạy 100 m hết 9,58 s. Tốc độ trung bình xấp xỉ của anh là:",
      options: ["10,44 m/s", "9,58 m/s", "12,50 m/s", "8,25 m/s"],
      correct: 0,
      explanation: "v = s / t = 100 / 9,58 ≈ 10,44 m/s (tương đương 37,58 km/h)."
    },
    {
      id: "mcq_15",
      type: "mcq",
      level: "van_dung",
      question: "Tàu hỏa chạy từ ga A đến ga B với tốc độ không đổi 60 km/h trong 2,5 giờ. Quãng đường AB dài:",
      options: ["150 km", "120 km", "24 km", "180 km"],
      correct: 0,
      explanation: "Áp dụng s = v · t = 60 × 2,5 = 150 km."
    },
    {
      id: "mcq_16",
      type: "mcq",
      level: "van_dung",
      question: "Một ca nô chạy trên sông dài 36 km với tốc độ 24 km/h. Thời gian ca nô đi hết đoạn sông là:",
      options: ["1,5 giờ (90 phút)", "1,2 giờ", "2,0 giờ", "0,67 giờ"],
      correct: 0,
      explanation: "Áp dụng t = s / v = 36 / 24 = 1,5 h = 1 giờ 30 phút."
    },
    {
      id: "mcq_17",
      type: "mcq",
      level: "van_dung",
      question: "Xe buýt chạy trên đoạn đường có biển báo tốc độ tối đa 50 km/h. Xe đi 1,2 km trong 1,2 phút (72 s). Xe có phạm luật không?",
      options: [
        "Có phạm luật (v = 60 km/h > 50 km/h)",
        "Không phạm luật (v = 40 km/h < 50 km/h)",
        "Không phạm luật (v = 50 km/h)",
        "Không đủ dữ kiện tính toán"
      ],
      correct: 0,
      explanation: "Thời gian t = 1,2 phút = 1,2 / 60 = 0,02 h. Tốc độ v = 1,2 / 0,02 = 60 km/h > 50 km/h, nên xe vi phạm."
    },
    {
      id: "mcq_18",
      type: "mcq",
      level: "van_dung",
      question: "Biển báo giao thông có hình tròn viền đỏ, nền trắng, ở giữa ghi số '60' có ý nghĩa gì?",
      options: [
        "Tốc độ tối đa cho phép là 60 km/h",
        "Tốc độ tối thiểu phải đạt là 60 km/h",
        "Khoảng cách tối thiểu giữa 2 xe là 60 m",
        "Quãng đường còn lại là 60 km"
      ],
      correct: 0,
      explanation: "Đây là biển báo hạn chế tốc độ tối đa P.127: các phương tiện không được chạy vượt quá 60 km/h."
    },
    {
      id: "mcq_19",
      type: "mcq",
      level: "van_dung",
      question: "Một người đi xe máy 20 km đầu hết 30 phút, 15 km sau hết 20 phút. Tốc độ trên cả quãng đường là:",
      options: ["42 km/h", "35 km/h", "50 km/h", "30 km/h"],
      correct: 0,
      explanation: "Tổng s = 20 + 15 = 35 km. Tổng t = 30 + 20 = 50 phút = 5/6 h. v = 35 / (5/6) = 42 km/h."
    },
    {
      id: "mcq_20",
      type: "mcq",
      level: "van_dung",
      question: "Một người quan sát thấy chớp sáng trước rồi 3 giây sau mới nghe thấy tiếng sấm. Biết tốc độ âm thanh trong không khí là 340 m/s. Khoảng cách từ người đến nơi sét đánh là:",
      options: ["1020 m", "340 m", "680 m", "170 m"],
      correct: 0,
      explanation: "Áp dụng công thức s = v · t = 340 × 3 = 1020 m."
    }
  ],

  // ==========================================
  // DẠNG 2: ĐÚNG / SAI (TRUE / FALSE - 20 CÂU)
  // ==========================================
  true_false: [
    {
      id: "tf_01",
      type: "true_false",
      level: "nhan_biet",
      question: "Tốc độ của một vật cho biết vật chuyển động nhanh hay chậm.",
      correct: true,
      explanation: "Đúng. Đây là định nghĩa cơ bản của tốc độ trong SGK KHTN 7."
    },
    {
      id: "tf_02",
      type: "true_false",
      level: "nhan_biet",
      question: "Đơn vị tốc độ luôn luôn bắt buộc phải là kilômét trên giờ (km/h) trong mọi trường hợp.",
      correct: false,
      explanation: "Sai. Đơn vị hợp pháp theo hệ đo lường chuẩn SI là m/s, km/h chỉ là đơn vị thường dùng trong đời sống."
    },
    {
      id: "tf_03",
      type: "true_false",
      level: "nhan_biet",
      question: "Dụng cụ đo tốc độ gồm thước để đo quãng đường và đồng hồ bấm giây để đo thời gian.",
      correct: true,
      explanation: "Đúng. Đây là phương pháp đo gián tiếp tốc độ chuyển động trong phòng thực hành."
    },
    {
      id: "tf_04",
      type: "true_false",
      level: "nhan_biet",
      question: "Công thức v = t / s là công thức chính xác để tính tốc độ.",
      correct: false,
      explanation: "Sai. Công thức đúng phải là v = s / t (quãng đường chia thời gian, không phải ngược lại)."
    },
    {
      id: "tf_05",
      type: "true_false",
      level: "nhan_biet",
      question: "Báo săn Gê-pa là loài động vật chạy nhanh nhất trên cạn được đề cập trong SGK KHTN 7.",
      correct: true,
      explanation: "Đúng. Báo săn có thể đạt tốc độ tức thời lên tới 30 m/s (108 km/h)."
    },
    {
      id: "tf_06",
      type: "true_false",
      level: "thong_hieu",
      question: "10 m/s quy đổi sang km/h tương đương với 36 km/h.",
      correct: true,
      explanation: "Đúng. 10 × 3,6 = 36 km/h."
    },
    {
      id: "tf_07",
      type: "true_false",
      level: "thong_hieu",
      question: "Vận tốc 72 km/h tương đương với 20 m/s.",
      correct: true,
      explanation: "Đúng. 72 / 3,6 = 20 m/s."
    },
    {
      id: "tf_08",
      type: "true_false",
      level: "thong_hieu",
      question: "Nếu hai vật cùng đi được quãng đường 100 m, vật nào mất nhiều thời gian hơn sẽ có tốc độ lớn hơn.",
      correct: false,
      explanation: "Sai. Vật nào mất ít thời gian hơn mới chuyển động nhanh hơn (t nhỏ thì v = s/t lớn hơn)."
    },
    {
      id: "tf_09",
      type: "true_false",
      level: "thong_hieu",
      question: "Nếu hai vật chuyển động trong cùng 1 phút, vật nào đi được quãng đường dài hơn thì có tốc độ lớn hơn.",
      correct: true,
      explanation: "Đúng. Cùng thời gian t, quãng đường s lớn hơn thì v = s/t sẽ lớn hơn."
    },
    {
      id: "tf_10",
      type: "true_false",
      level: "thong_hieu",
      question: "Đồng hồ đo tốc độ (tốc kế / công-tơ-mét) gắn trên xe máy chỉ tốc độ trung bình của toàn bộ chuyến đi.",
      correct: false,
      explanation: "Sai. Tốc kế gắn trên xe hiển thị tốc độ tức thời tại thời điểm xe đang chạy."
    },
    {
      id: "tf_11",
      type: "true_false",
      level: "thong_hieu",
      question: "Ốc sên di chuyển với tốc độ khoảng 0,0014 m/s, tức là chưa đầy 2 mm trong mỗi giây.",
      correct: true,
      explanation: "Đúng. 0,0014 m = 1,4 mm/s, cực kỳ chậm."
    },
    {
      id: "tf_12",
      type: "true_false",
      level: "thong_hieu",
      question: "Khi đổi từ đơn vị km/h sang m/s, ta thực hiện phép tính nhân với 3,6.",
      correct: false,
      explanation: "Sai. Muốn đổi từ km/h sang m/s ta phải chia cho 3,6 (ví dụ: 36 km/h / 3,6 = 10 m/s)."
    },
    {
      id: "tf_13",
      type: "true_false",
      level: "van_dung",
      question: "Một xe máy đi quãng đường 45 km trong 1,5 giờ thì tốc độ là 30 km/h.",
      correct: true,
      explanation: "Đúng. v = s / t = 45 / 1,5 = 30 km/h."
    },
    {
      id: "tf_14",
      type: "true_false",
      level: "van_dung",
      question: "Vận động viên bơi cự ly 100 m trong 50 giây có tốc độ là 2 m/s.",
      correct: true,
      explanation: "Đúng. v = s / t = 100 / 50 = 2 m/s."
    },
    {
      id: "tf_15",
      type: "true_false",
      level: "van_dung",
      question: "Tốc độ 15 m/s nhanh hơn tốc độ 50 km/h.",
      correct: true,
      explanation: "Đúng. Đổi 15 m/s = 15 × 3,6 = 54 km/h > 50 km/h."
    },
    {
      id: "tf_16",
      type: "true_false",
      level: "van_dung",
      question: "Một đoàn tàu di chuyển với tốc độ 80 km/h sẽ đi được quãng đường 200 km sau 2 giờ 30 phút.",
      correct: true,
      explanation: "Đúng. 2 giờ 30 phút = 2,5 h; s = v · t = 80 × 2,5 = 200 km."
    },
    {
      id: "tf_17",
      type: "true_false",
      level: "van_dung",
      question: "Thiết bị bắn tốc độ CSGT sử dụng nguyên lý đo nhiệt độ ma sát của bánh xe với mặt đường.",
      correct: false,
      explanation: "Sai. Thiết bị bắn tốc độ sử dụng sóng vô tuyến hoặc chùm laser để đo thời gian phản hồi tín hiệu."
    },
    {
      id: "tf_18",
      type: "true_false",
      level: "van_dung",
      question: "Đi bộ với tốc độ 1,5 m/s thì trong 1 giờ sẽ đi được quãng đường 5,4 km.",
      correct: true,
      explanation: "Đúng. 1,5 m/s = 1,5 × 3,6 = 5,4 km/h. Trong 1 giờ đi được 5,4 km."
    },
    {
      id: "tf_19",
      type: "true_false",
      level: "van_dung",
      question: "Nếu giữ nguyên quãng đường s và tăng thời gian chuyển động t lên 2 lần thì tốc độ v sẽ tăng lên 2 lần.",
      correct: false,
      explanation: "Sai. Vì v = s / t, khi thời gian t tăng 2 lần thì tốc độ v phải giảm đi 2 lần."
    },
    {
      id: "tf_20",
      type: "true_false",
      level: "van_dung",
      question: "Biển báo quy định tốc độ tối đa giúp các phương tiện duy trì khoảng cách an toàn và giảm thiểu tai nạn giao thông.",
      correct: true,
      explanation: "Đúng. Tuân thủ tốc độ quy định là nguyên tắc tối quan trọng đảm bảo an toàn giao thông."
    }
  ],

  // ==========================================
  // DẠNG 3: ĐIỀN KHUYẾT (FILL IN THE BLANK - 20 CÂU)
  // ==========================================
  fill_in_blank: [
    {
      id: "fib_01",
      type: "fill_in_blank",
      level: "nhan_biet",
      question: "Đại lượng cho biết mức độ nhanh hay chậm của chuyển động được gọi là ___.",
      blankPrompt: "Đại lượng cho biết mức độ nhanh hay chậm của chuyển động được gọi là [___].",
      keywords: ["tốc độ", "tốc độ chuyển động", "toc do"],
      explanation: "Tốc độ là đại lượng đặc trưng cho sự nhanh hay chậm của chuyển động."
    },
    {
      id: "fib_02",
      type: "fill_in_blank",
      level: "nhan_biet",
      question: "Trong công thức v = s / t, đại lượng s tượng trưng cho ___ vật đi được.",
      blankPrompt: "Trong công thức v = s / t, đại lượng s tượng trưng cho [___] vật đi được.",
      keywords: ["quãng đường", "quang duong"],
      explanation: "s là viết tắt của quãng đường (spatium trong tiếng Latinh)."
    },
    {
      id: "fib_03",
      type: "fill_in_blank",
      level: "nhan_biet",
      question: "Trong công thức v = s / t, đại lượng t tượng trưng cho ___ đi hết quãng đường đó.",
      blankPrompt: "Trong công thức v = s / t, đại lượng t tượng trưng cho [___] đi hết quãng đường đó.",
      keywords: ["thời gian", "thoi gian"],
      explanation: "t là viết tắt của thời gian (time)."
    },
    {
      id: "fib_04",
      type: "fill_in_blank",
      level: "nhan_biet",
      question: "Đơn vị đo tốc độ chuẩn trong hệ thống đo lường quốc tế SI là ___ trên giây.",
      blankPrompt: "Đơn vị đo tốc độ chuẩn trong hệ thống đo lường quốc tế SI là [___] trên giây.",
      keywords: ["mét", "met", "m"],
      explanation: "Đơn vị SI của tốc độ là mét trên giây (m/s)."
    },
    {
      id: "fib_05",
      type: "fill_in_blank",
      level: "nhan_biet",
      question: "Để đo thời gian trong thí nghiệm một cách tự động và chính xác, người ta dùng cổng ___ điện.",
      blankPrompt: "Để đo thời gian trong thí nghiệm một cách tự động và chính xác, người ta dùng cổng [___] điện.",
      keywords: ["quang", "quang điện"],
      explanation: "Cổng quang điện kích hoạt cảm biến ánh sáng khi xe đi qua."
    },
    {
      id: "fib_06",
      type: "fill_in_blank",
      level: "thong_hieu",
      question: "Khi đổi từ đơn vị m/s sang km/h, ta lấy giá trị tốc độ đó nhân với số ___.",
      blankPrompt: "Khi đổi từ đơn vị m/s sang km/h, ta lấy giá trị tốc độ đó nhân với số [___].",
      keywords: ["3,6", "3.6"],
      explanation: "1 m/s = 3,6 km/h. Vì vậy ta nhân với 3,6."
    },
    {
      id: "fib_07",
      type: "fill_in_blank",
      level: "thong_hieu",
      question: "Khi đổi từ đơn vị km/h sang m/s, ta lấy giá trị tốc độ đó chia cho số ___.",
      blankPrompt: "Khi đổi từ đơn vị km/h sang m/s, ta lấy giá trị tốc độ đó chia cho số [___].",
      keywords: ["3,6", "3.6"],
      explanation: "Quy đổi ngược lại từ km/h sang m/s: chia cho 3,6."
    },
    {
      id: "fib_08",
      type: "fill_in_blank",
      level: "thong_hieu",
      question: "Tốc độ 10 m/s đổi ra km/h có giá trị là ___ km/h.",
      blankPrompt: "Tốc độ 10 m/s đổi ra km/h có giá trị là [___] km/h.",
      keywords: ["36"],
      explanation: "10 × 3,6 = 36 km/h."
    },
    {
      id: "fib_09",
      type: "fill_in_blank",
      level: "thong_hieu",
      question: "Tốc độ 72 km/h đổi ra m/s có giá trị là ___ m/s.",
      blankPrompt: "Tốc độ 72 km/h đổi ra m/s có giá trị là [___] m/s.",
      keywords: ["20"],
      explanation: "72 / 3,6 = 20 m/s."
    },
    {
      id: "fib_10",
      type: "fill_in_blank",
      level: "thong_hieu",
      question: "Muốn tính quãng đường khi biết tốc độ và thời gian, ta dùng công thức s = ___ .",
      blankPrompt: "Muốn tính quãng đường khi biết tốc độ và thời gian, ta dùng công thức s = [___].",
      keywords: ["v . t", "v*t", "v.t", "v x t", "vt"],
      explanation: "s = v · t (quãng đường = tốc độ × thời gian)."
    },
    {
      id: "fib_11",
      type: "fill_in_blank",
      level: "thong_hieu",
      question: "Muốn tính thời gian khi biết quãng đường và tốc độ, ta dùng công thức t = ___ .",
      blankPrompt: "Muốn tính thời gian khi biết quãng đường và tốc độ, ta dùng công thức t = [___].",
      keywords: ["s / v", "s/v"],
      explanation: "t = s / v (thời gian = quãng đường / tốc độ)."
    },
    {
      id: "fib_12",
      type: "fill_in_blank",
      level: "thong_hieu",
      question: "Báo săn Gê-pa có thể chạy với tốc độ lên tới ___ m/s trong cự ly ngắn.",
      blankPrompt: "Báo săn Gê-pa có thể chạy với tốc độ lên tới [___] m/s trong cự ly ngắn.",
      keywords: ["30"],
      explanation: "Theo Bảng 8.2 SGK KNTT, báo săn Gê-pa đạt tốc độ 30 m/s (108 km/h)."
    },
    {
      id: "fib_13",
      type: "fill_in_blank",
      level: "van_dung",
      question: "Kỷ lục gia Usain Bolt chạy 100 m hết 9,58 giây, tốc độ xấp xỉ của anh là ___ m/s (làm tròn 2 chữ số thập phân).",
      blankPrompt: "Kỷ lục gia Usain Bolt chạy 100 m hết 9,58 giây, tốc độ xấp xỉ của anh là [___] m/s.",
      keywords: ["10,44", "10.44"],
      explanation: "v = 100 / 9,58 ≈ 10,44 m/s."
    },
    {
      id: "fib_14",
      type: "fill_in_blank",
      level: "van_dung",
      question: "Một người đi xe đạp với tốc độ 4 m/s trong 10 giây thì đi được quãng đường là ___ mét.",
      blankPrompt: "Một người đi xe đạp với tốc độ 4 m/s trong 10 giây thì đi được quãng đường là [___] mét.",
      keywords: ["40"],
      explanation: "s = v · t = 4 × 10 = 40 m."
    },
    {
      id: "fib_15",
      type: "fill_in_blank",
      level: "van_dung",
      question: "Một ô tô chạy quãng đường 180 km với tốc độ 60 km/h sẽ mất thời gian là ___ giờ.",
      blankPrompt: "Một ô tô chạy quãng đường 180 km với tốc độ 60 km/h sẽ mất thời gian là [___] giờ.",
      keywords: ["3"],
      explanation: "t = s / v = 180 / 60 = 3 giờ."
    },
    {
      id: "fib_16",
      type: "fill_in_blank",
      level: "van_dung",
      question: "Người đi bộ bình thường với tốc độ 1,5 m/s tương đương với ___ km/h.",
      blankPrompt: "Người đi bộ bình thường với tốc độ 1,5 m/s tương đương với [___] km/h.",
      keywords: ["5,4", "5.4"],
      explanation: "1,5 × 3,6 = 5,4 km/h."
    },
    {
      id: "fib_17",
      type: "fill_in_blank",
      level: "van_dung",
      question: "Một vận động viên bơi lội bơi được 50 m trong thời gian 25 giây, tốc độ bơi là ___ m/s.",
      blankPrompt: "Một vận động viên bơi lội bơi được 50 m trong thời gian 25 giây, tốc độ bơi là [___] m/s.",
      keywords: ["2"],
      explanation: "v = s / t = 50 / 25 = 2 m/s."
    },
    {
      id: "fib_18",
      type: "fill_in_blank",
      level: "van_dung",
      question: "Máy bay chở khách bay với tốc độ 900 km/h, tương đương với ___ m/s.",
      blankPrompt: "Máy bay chở khách bay với tốc độ 900 km/h, tương đương với [___] m/s.",
      keywords: ["250"],
      explanation: "900 / 3,6 = 250 m/s."
    },
    {
      id: "fib_19",
      type: "fill_in_blank",
      level: "van_dung",
      question: "Thiết bị dùng để đo tốc độ phương tiện giao thông trên đường thường được gọi tắt là súng/thiết bị ___ tốc độ.",
      blankPrompt: "Thiết bị dùng để đo tốc độ phương tiện giao thông trên đường thường được gọi tắt là súng/thiết bị [___] tốc độ.",
      keywords: ["bắn", "ban"],
      explanation: "Thiết bị bắn tốc độ CSGT."
    },
    {
      id: "fib_20",
      type: "fill_in_blank",
      level: "van_dung",
      question: "Một xe tải đi quãng đường 90 km trong thời gian 1 giờ 30 phút (1,5 h). Tốc độ của xe là ___ km/h.",
      blankPrompt: "Một xe tải đi quãng đường 90 km trong thời gian 1 giờ 30 phút (1,5 h). Tốc độ của xe là [___] km/h.",
      keywords: ["60"],
      explanation: "v = s / t = 90 / 1,5 = 60 km/h."
    }
  ],

  // ==========================================
  // DẠNG 4: GHÉP CỘT (MATCHING - 20 CÂU)
  // ==========================================
  matching: [
    {
      id: "mat_01",
      type: "matching",
      level: "nhan_biet",
      question: "Ghép ký hiệu đại lượng với tên gọi tương ứng trong công thức v = s / t:",
      pairs: [
        { left: "Ký hiệu v", right: "Tốc độ chuyển động" },
        { left: "Ký hiệu s", right: "Quãng đường đi được" },
        { left: "Ký hiệu t", right: "Thời gian chuyển động" }
      ],
      explanation: "v (velocity), s (spatium/distance), t (time)."
    },
    {
      id: "mat_02",
      type: "matching",
      level: "nhan_biet",
      question: "Ghép đại lượng vật lý với đơn vị đo chuẩn trong hệ SI:",
      pairs: [
        { left: "Quãng đường (s)", right: "Mét (m)" },
        { left: "Thời gian (t)", right: "Giây (s)" },
        { left: "Tốc độ (v)", right: "Mét trên giây (m/s)" }
      ],
      explanation: "Các đơn vị chuẩn trong hệ đo lường quốc tế SI."
    },
    {
      id: "mat_03",
      type: "matching",
      level: "nhan_biet",
      question: "Ghép dụng cụ đo với đại lượng cần đo trong bài thực hành tốc độ:",
      pairs: [
        { left: "Thước cuộn / thước mét", right: "Đo quãng đường chuyển động" },
        { left: "Đồng hồ bấm giây", right: "Đo thời gian chuyển động thủ công" },
        { left: "Cổng quang điện", right: "Cảm biến tự động ghi nhận thời gian" }
      ],
      explanation: "Các dụng cụ cơ bản được sử dụng trong phòng thí nghiệm KHTN 7."
    },
    {
      id: "mat_04",
      type: "matching",
      level: "thong_hieu",
      question: "Ghép các công thức tính toán phù hợp:",
      pairs: [
        { left: "Tính tốc độ (v)", right: "v = s / t" },
        { left: "Tính quãng đường (s)", right: "s = v . t" },
        { left: "Tính thời gian (t)", right: "t = s / v" }
      ],
      explanation: "Ba công thức chuyển đổi cốt lõi của bài học."
    },
    {
      id: "mat_05",
      type: "matching",
      level: "thong_hieu",
      question: "Ghép giá trị tốc độ m/s với giá trị tương đương theo km/h:",
      pairs: [
        { left: "10 m/s", right: "36 km/h" },
        { left: "20 m/s", right: "72 km/h" },
        { left: "30 m/s", right: "108 km/h" }
      ],
      explanation: "Áp dụng công thức nhân với 3,6: 10×3,6=36; 20×3,6=72; 30×3,6=108."
    },
    {
      id: "mat_06",
      type: "matching",
      level: "thong_hieu",
      question: "Ghép giá trị tốc độ km/h với giá trị tương đương theo m/s:",
      pairs: [
        { left: "54 km/h", right: "15 m/s" },
        { left: "90 km/h", right: "25 m/s" },
        { left: "18 km/h", right: "5 m/s" }
      ],
      explanation: "Áp dụng chia cho 3,6: 54/3,6=15; 90/3,6=25; 18/3,6=5."
    },
    {
      id: "mat_07",
      type: "matching",
      level: "thong_hieu",
      question: "Ghép đối tượng tự nhiên với tốc độ tương ứng trong SGK KHTN 7:",
      pairs: [
        { left: "Ốc sên bò", right: "Khoảng 0,0014 m/s" },
        { left: "Rùa bơi/bò", right: "Khoảng 0,055 m/s" },
        { left: "Báo săn Gê-pa", right: "Khoảng 30 m/s" }
      ],
      explanation: "Theo bảng số liệu 8.2 SGK KNTT."
    },
    {
      id: "mat_08",
      type: "matching",
      level: "thong_hieu",
      question: "Ghép phương tiện / con người với tốc độ chuyển động đặc trưng:",
      pairs: [
        { left: "Người đi bộ", right: "Khoảng 1,5 m/s (5,4 km/h)" },
        { left: "Vận động viên Usain Bolt", right: "Khoảng 10,44 m/s (37,58 km/h)" },
        { left: "Máy bay chở khách", right: "Khoảng 250 m/s (900 km/h)" }
      ],
      explanation: "Theo dữ liệu thực tế sách giáo khoa."
    },
    {
      id: "mat_09",
      type: "matching",
      level: "thong_hieu",
      question: "Ghép hiện tượng với ý nghĩa vật lý tương ứng:",
      pairs: [
        { left: "Cùng thời gian, đi được quãng đường dài hơn", right: "Tốc độ lớn hơn" },
        { left: "Cùng quãng đường, đi mất ít thời gian hơn", right: "Tốc độ lớn hơn" },
        { left: "Quãng đường đi được bằng 0", right: "Vật đang đứng yên" }
      ],
      explanation: "Cách so sánh nhanh - chậm trong chuyển động."
    },
    {
      id: "mat_10",
      type: "matching",
      level: "van_dung",
      question: "Ghép các bài toán với kết quả quãng đường đi được sau 2 giờ:",
      pairs: [
        { left: "Người đi bộ (5 km/h)", right: "Đi được 10 km" },
        { left: "Người đi xe đạp (15 km/h)", right: "Đi được 30 km" },
        { left: "Ô tô chạy (60 km/h)", right: "Đi được 120 km" }
      ],
      explanation: "s = v · t với t = 2h."
    },
    {
      id: "mat_11",
      type: "matching",
      level: "van_dung",
      question: "Ghép bài toán với thời gian cần thiết để đi hết 120 km:",
      pairs: [
        { left: "Tàu hỏa chạy 60 km/h", right: "Mất 2 giờ" },
        { left: "Xe máy chạy 40 km/h", right: "Mất 3 giờ" },
        { left: "Xe đạp chạy 15 km/h", right: "Mất 8 giờ" }
      ],
      explanation: "t = s / v: 120/60 = 2h; 120/40 = 3h; 120/15 = 8h."
    },
    {
      id: "mat_12",
      type: "matching",
      level: "van_dung",
      question: "Ghép đối tượng chuyển động với quãng đường đi được trong 10 giây:",
      pairs: [
        { left: "Báo săn Gê-pa (30 m/s)", right: "Đi được 300 m" },
        { left: "Usain Bolt (10,44 m/s)", right: "Đi được 104,4 m" },
        { left: "Người đi bộ (1,5 m/s)", right: "Đi được 15 m" }
      ],
      explanation: "s = v · t với t = 10s: 30×10=300m; 10,44×10=104,4m; 1,5×10=15m."
    },
    {
      id: "mat_13",
      type: "matching",
      level: "van_dung",
      question: "Ghép biển báo tốc độ với phạm vi áp dụng thực tế:",
      pairs: [
        { left: "Biển báo số tròn 50 viền đỏ", right: "Tốc độ tối đa cho phép là 50 km/h" },
        { left: "Biển báo số tròn 60 nền xanh", right: "Tốc độ tối thiểu cho phép là 60 km/h" },
        { left: "Biển báo khu dân cư", right: "Cần giảm tốc độ để đảm bảo an toàn" }
      ],
      explanation: "Quy chuẩn biển báo hiệu đường bộ Việt Nam."
    },
    {
      id: "mat_14",
      type: "matching",
      level: "van_dung",
      question: "Ghép các phép đổi đơn vị thời gian sang đơn vị giờ (h):",
      pairs: [
        { left: "15 phút", right: "0,25 giờ" },
        { left: "30 phút", right: "0,5 giờ" },
        { left: "45 phút", right: "0,75 giờ" }
      ],
      explanation: "15/60 = 0,25h; 30/60 = 0,5h; 45/60 = 0,75h."
    },
    {
      id: "mat_15",
      type: "matching",
      level: "van_dung",
      question: "Ghép các đơn vị đo với ký hiệu viết tắt quốc tế:",
      pairs: [
        { left: "Kilômét trên giờ", right: "km/h" },
        { left: "Mét trên giây", right: "m/s" },
        { left: "Centimét trên giây", right: "cm/s" }
      ],
      explanation: "Ký hiệu chuẩn các đơn vị tốc độ."
    },
    {
      id: "mat_16",
      type: "matching",
      level: "van_dung",
      question: "Ghép phương thức so sánh hai chuyển động:",
      pairs: [
        { left: "Cùng đi quãng đường s = 100m", right: "So sánh thời gian t (t nhỏ hơn thì nhanh hơn)" },
        { left: "Cùng chuyển động trong thời gian t = 10s", right: "So sánh quãng đường s (s lớn hơn thì nhanh hơn)" },
        { left: "Khác cả quãng đường và thời gian", right: "Tính thương số v = s / t để so sánh" }
      ],
      explanation: "Ba cách xác định chuyển động nhanh chậm trong thực tế."
    },
    {
      id: "mat_17",
      type: "matching",
      level: "van_dung",
      question: "Ghép các loại chuyển động với đặc điểm tốc độ:",
      pairs: [
        { left: "Vết nứt đáy đại dương", right: "Tốc độ siêu chậm (vài cm/năm)" },
        { left: "Ánh sáng truyền đi", right: "Tốc độ cực đại trong vũ trụ (300.000 km/s)" },
        { left: "Âm thanh trong không khí", right: "Tốc độ khoảng 340 m/s" }
      ],
      explanation: "Kiến thức mở rộng vật lý và tự nhiên."
    },
    {
      id: "mat_18",
      type: "matching",
      level: "van_dung",
      question: "Ghép quãng đường với đối tượng di chuyển trong 1 giờ:",
      pairs: [
        { left: "Quãng đường 5,4 km", right: "Người đi bộ bình thường (1,5 m/s)" },
        { left: "Quãng đường 72 km", right: "Ô tô chạy trên quốc lộ (20 m/s)" },
        { left: "Quãng đường 900 km", right: "Máy bay dân dụng đường dài (250 m/s)" }
      ],
      explanation: "1h = 3600s; s = v · 3600."
    },
    {
      id: "mat_19",
      type: "matching",
      level: "van_dung",
      question: "Ghép sai số đo thực nghiệm với nguyên nhân phát sinh:",
      pairs: [
        { left: "Bấm đồng hồ thủ công bằng tay", right: "Sai số do phản xạ của con người" },
        { left: "Đặt thước đo bị lệch nghiêng", right: "Sai số trong đo cự ly quãng đường" },
        { left: "Sử dụng cổng quang điện hiện số", right: "Hạn chế tối đa sai số thao tác" }
      ],
      explanation: "Kỹ năng thực hành đo tốc độ trong phòng học bộ môn."
    },
    {
      id: "mat_20",
      type: "matching",
      level: "van_dung",
      question: "Ghép tốc độ giới hạn thông thường với khu vực áp dụng:",
      pairs: [
        { left: "Tối đa 50 km/h", right: "Đường trong khu vực đông dân cư" },
        { left: "Tối đa 80 - 90 km/h", right: "Đường ngoài khu vực đông dân cư" },
        { left: "Tối đa 100 - 120 km/h", right: "Đường cao tốc dành riêng cho ô tô" }
      ],
      explanation: "Luật Giao thông đường bộ Việt Nam."
    }
  ],

  // ==========================================
  // DẠNG 5: TỰ LUẬN TÍNH TOÁN NGẮN (20 CÂU)
  // ==========================================
  short_answer: [
    {
      id: "sa_01",
      type: "short_answer",
      level: "thong_hieu",
      question: "Một học sinh chạy cự ly 60 m hết 12 giây. Tính tốc độ của bạn học sinh đó (đơn vị: m/s).",
      targetValue: 5,
      unit: "m/s",
      tolerancePercent: 1,
      solutionSteps: [
        "Tóm tắt: s = 60 m; t = 12 s.",
        "Công thức: v = s / t.",
        "Thay số: v = 60 / 12 = 5 m/s."
      ]
    },
    {
      id: "sa_02",
      type: "short_answer",
      level: "thong_hieu",
      question: "Đổi tốc độ 25 m/s ra đơn vị km/h.",
      targetValue: 90,
      unit: "km/h",
      tolerancePercent: 1,
      solutionSteps: [
        "Quy tắc đổi: Muốn đổi từ m/s sang km/h ta nhân với 3,6.",
        "Tính toán: 25 × 3,6 = 90 km/h."
      ]
    },
    {
      id: "sa_03",
      type: "short_answer",
      level: "thong_hieu",
      question: "Đổi tốc độ 108 km/h ra đơn vị m/s.",
      targetValue: 30,
      unit: "m/s",
      tolerancePercent: 1,
      solutionSteps: [
        "Quy tắc đổi: Muốn đổi từ km/h sang m/s ta chia cho 3,6.",
        "Tính toán: 108 / 3,6 = 30 m/s."
      ]
    },
    {
      id: "sa_04",
      type: "short_answer",
      level: "thong_hieu",
      question: "Một đoàn tàu chạy với tốc độ 45 km/h trong 3 giờ. Tính quãng đường tàu đi được (đơn vị: km).",
      targetValue: 135,
      unit: "km",
      tolerancePercent: 1,
      solutionSteps: [
        "Tóm tắt: v = 45 km/h; t = 3 h.",
        "Công thức: s = v · t.",
        "Tính toán: s = 45 × 3 = 135 km."
      ]
    },
    {
      id: "sa_05",
      type: "short_answer",
      level: "thong_hieu",
      question: "Một xe máy đi quãng đường 80 km với tốc độ 40 km/h. Xe máy đi hết bao nhiêu giờ?",
      targetValue: 2,
      unit: "giờ",
      tolerancePercent: 1,
      solutionSteps: [
        "Tóm tắt: s = 80 km; v = 40 km/h.",
        "Công thức: t = s / v.",
        "Tính toán: t = 80 / 40 = 2 giờ."
      ]
    },
    {
      id: "sa_06",
      type: "short_answer",
      level: "van_dung",
      question: "Bạn Nam đi từ nhà đến trường trên quãng đường 2,4 km hết 20 phút (1/3 giờ). Tính tốc độ của Nam theo đơn vị km/h.",
      targetValue: 7.2,
      unit: "km/h",
      tolerancePercent: 1,
      solutionSteps: [
        "Đổi thời gian: 20 phút = 20 / 60 = 1/3 giờ ≈ 0,333 h.",
        "Công thức: v = s / t = 2,4 / (1/3) = 7,2 km/h."
      ]
    },
    {
      id: "sa_07",
      type: "short_answer",
      level: "van_dung",
      question: "Một máy bay bay từ Hà Nội đến Đà Nẵng với quãng đường khoảng 600 km hết 1,2 giờ. Tính tốc độ trung bình của máy bay (đơn vị: km/h).",
      targetValue: 500,
      unit: "km/h",
      tolerancePercent: 1,
      solutionSteps: [
        "Tóm tắt: s = 600 km; t = 1,2 h.",
        "Công thức: v = s / t.",
        "Tính toán: v = 600 / 1,2 = 500 km/h."
      ]
    },
    {
      id: "sa_08",
      type: "short_answer",
      level: "van_dung",
      question: "Một vận động viên bơi bơi cự ly 200 m với tốc độ 2,5 m/s. Vận động viên đó hoàn thành cự ly trong bao nhiêu giây?",
      targetValue: 80,
      unit: "giây",
      tolerancePercent: 1,
      solutionSteps: [
        "Tóm tắt: s = 200 m; v = 2,5 m/s.",
        "Công thức: t = s / v.",
        "Tính toán: t = 200 / 2,5 = 80 s."
      ]
    },
    {
      id: "sa_09",
      type: "short_answer",
      level: "van_dung",
      question: "Một con rùa bò với tốc độ 0,05 m/s. Trong thời gian 2 phút (120 giây), con rùa bò được quãng đường bao nhiêu mét?",
      targetValue: 6,
      unit: "m",
      tolerancePercent: 1,
      solutionSteps: [
        "Đổi đơn vị: t = 2 phút = 120 giây.",
        "Công thức: s = v · t = 0,05 × 120 = 6 m."
      ]
    },
    {
      id: "sa_10",
      type: "short_answer",
      level: "van_dung",
      question: "Một ô tô chạy từ Hà Nội đến Hải Phòng dài 120 km trong 2 giờ. Tính tốc độ của ô tô theo đơn vị m/s (làm tròn 2 chữ số thập phân).",
      targetValue: 16.67,
      unit: "m/s",
      tolerancePercent: 2,
      solutionSteps: [
        "Tốc độ theo km/h: v = 120 / 2 = 60 km/h.",
        "Đổi sang m/s: 60 / 3,6 ≈ 16,67 m/s."
      ]
    },
    {
      id: "sa_11",
      type: "short_answer",
      level: "van_dung",
      question: "Một xe đua F1 tăng tốc chạy 400 m chỉ mất 8 giây. Tốc độ trung bình của xe là bao nhiêu km/h?",
      targetValue: 180,
      unit: "km/h",
      tolerancePercent: 1,
      solutionSteps: [
        "Tốc độ m/s: v = 400 / 8 = 50 m/s.",
        "Đổi sang km/h: 50 × 3,6 = 180 km/h."
      ]
    },
    {
      id: "sa_12",
      type: "short_answer",
      level: "van_dung",
      question: "Âm thanh truyền trong không khí với tốc độ 340 m/s. Sau khi nhìn thấy tia chớp 5 giây thì nghe tiếng sấm. Khoảng cách nơi sét đánh là bao nhiêu mét?",
      targetValue: 1700,
      unit: "m",
      tolerancePercent: 1,
      solutionSteps: [
        "Tóm tắt: v = 340 m/s; t = 5 s.",
        "Công thức: s = v · t = 340 × 5 = 1700 m."
      ]
    },
    {
      id: "sa_13",
      type: "short_answer",
      level: "van_dung",
      question: "Một người đi xe máy từ điểm A đến B với tốc độ 36 km/h (10 m/s). Đoạn đường AB dài 18 km. Thời gian đi là bao nhiêu phút?",
      targetValue: 30,
      unit: "phút",
      tolerancePercent: 1,
      solutionSteps: [
        "Thời gian tính theo giờ: t = s / v = 18 / 36 = 0,5 giờ.",
        "Đổi sang phút: 0,5 × 60 = 30 phút."
      ]
    },
    {
      id: "sa_14",
      type: "short_answer",
      level: "van_dung",
      question: "Báo săn Gê-pa đuổi mồi với tốc độ 30 m/s trong 15 giây. Quãng đường báo săn đã bứt tốc là bao nhiêu mét?",
      targetValue: 450,
      unit: "m",
      tolerancePercent: 1,
      solutionSteps: [
        "Tóm tắt: v = 30 m/s; t = 15 s.",
        "Công thức: s = v · t = 30 × 15 = 450 m."
      ]
    },
    {
      id: "sa_15",
      type: "short_answer",
      level: "van_dung",
      question: "Một con tàu ngầm di chuyển dưới biển với tốc độ 12 m/s. Trong 1 giờ (3600 s), tàu đi được bao nhiêu kilômét?",
      targetValue: 43.2,
      unit: "km",
      tolerancePercent: 1,
      solutionSteps: [
        "Đổi tốc độ: 12 m/s = 12 × 3,6 = 43,2 km/h.",
        "Sau 1 giờ: s = 43,2 × 1 = 43,2 km."
      ]
    },
    {
      id: "sa_16",
      type: "short_answer",
      level: "van_dung",
      question: "Ốc sên bò với tốc độ 0,0014 m/s. Để bò được quãng đường dài 7 mét thì ốc sên mất bao nhiêu giây?",
      targetValue: 5000,
      unit: "giây",
      tolerancePercent: 1,
      solutionSteps: [
        "Tóm tắt: s = 7 m; v = 0,0014 m/s.",
        "Công thức: t = s / v = 7 / 0,0014 = 5000 giây (khoảng 1 giờ 23 phút)."
      ]
    },
    {
      id: "sa_17",
      type: "short_answer",
      level: "van_dung",
      question: "Người đi bộ đi được 450 m trong 5 phút (300 s). Tốc độ của người đó là bao nhiêu m/s?",
      targetValue: 1.5,
      unit: "m/s",
      tolerancePercent: 1,
      solutionSteps: [
        "Đổi thời gian: 5 phút = 300 s.",
        "Công thức: v = s / t = 450 / 300 = 1,5 m/s."
      ]
    },
    {
      id: "sa_18",
      type: "short_answer",
      level: "van_dung",
      question: "Một đoàn tàu vượt qua cây cầu dài 600 m với tốc độ 15 m/s. Thời gian tàu chạy qua hết chiều dài cây cầu là bao nhiêu giây?",
      targetValue: 40,
      unit: "giây",
      tolerancePercent: 1,
      solutionSteps: [
        "Tóm tắt: s = 600 m; v = 15 m/s.",
        "Công thức: t = s / v = 600 / 15 = 40 giây."
      ]
    },
    {
      id: "sa_19",
      type: "short_answer",
      level: "van_dung",
      question: "Biển báo đoạn đường hạn chế tốc độ 60 km/h. Một ô tô đi đoạn đường 3 km mất 2,5 phút (1/24 h = 0,0417 h). Tốc độ của ô tô là bao nhiêu km/h?",
      targetValue: 72,
      unit: "km/h",
      tolerancePercent: 1,
      solutionSteps: [
        "Thời gian tính ra giờ: t = 2,5 / 60 = 1/24 h.",
        "Tốc độ: v = s / t = 3 / (1/24) = 72 km/h (ô tô đã chạy quá tốc độ)."
      ]
    },
    {
      id: "sa_20",
      type: "short_answer",
      level: "van_dung",
      question: "Trạm vũ trụ quốc tế ISS bay quanh Trái Đất với tốc độ khoảng 7,66 km/s. Trong 1 phút (60 s), trạm ISS bay được quãng đường bao nhiêu kilômét?",
      targetValue: 459.6,
      unit: "km",
      tolerancePercent: 1,
      solutionSteps: [
        "Tóm tắt: v = 7,66 km/s; t = 60 s.",
        "Công thức: s = v · t = 7,66 × 60 = 459,6 km."
      ]
    }
  ]
};
