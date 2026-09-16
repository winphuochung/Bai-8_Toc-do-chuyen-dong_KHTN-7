// js/modules/physics-calc.js
// Máy tính vật lý & Mô phỏng so sánh tốc độ Bài 8 KHTN 7

export class PhysicsCalc {
  // Bảng đối tượng mẫu trong tự nhiên & kỹ thuật (theo SGK KHTN 7)
  static SGK_OBJECTS = [
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
  ];

  // Tính Tốc độ: v = s / t
  static calculateSpeed(sValue, sUnit, tValue, tUnit) {
    if (tValue <= 0 || sValue < 0) {
      throw new Error("Quãng đường phải ≥ 0 và Thời gian phải > 0");
    }

    // Quy chuẩn về hệ SI (m và s)
    let sInMeters = sValue;
    if (sUnit === "km") sInMeters = sValue * 1000;
    if (sUnit === "cm") sInMeters = sValue / 100;

    let tInSeconds = tValue;
    if (tUnit === "h") tInSeconds = tValue * 3600;
    if (tUnit === "min") tInSeconds = tValue * 60;

    const vMs = sInMeters / tInSeconds;
    const vKmh = vMs * 3.6;

    return {
      vMs: parseFloat(vMs.toFixed(3)),
      vKmh: parseFloat(vKmh.toFixed(3)),
      sInMeters,
      tInSeconds
    };
  }

  // Tính Quãng đường: s = v * t
  static calculateDistance(vValue, vUnit, tValue, tUnit) {
    if (vValue < 0 || tValue < 0) {
      throw new Error("Tốc độ và Thời gian phải ≥ 0");
    }

    let vInMs = vValue;
    if (vUnit === "kmh") vInMs = vValue / 3.6;

    let tInSeconds = tValue;
    if (tUnit === "h") tInSeconds = tValue * 3600;
    if (tUnit === "min") tInSeconds = tValue * 60;

    const sMeters = vInMs * tInSeconds;
    const sKm = sMeters / 1000;

    return {
      sMeters: parseFloat(sMeters.toFixed(2)),
      sKm: parseFloat(sKm.toFixed(3))
    };
  }

  // Tính Thời gian: t = s / v
  static calculateTime(sValue, sUnit, vValue, vUnit) {
    if (vValue <= 0 || sValue < 0) {
      throw new Error("Quãng đường phải ≥ 0 và Tốc độ phải > 0");
    }

    let sInMeters = sValue;
    if (sUnit === "km") sInMeters = sValue * 1000;

    let vInMs = vValue;
    if (vUnit === "kmh") vInMs = vValue / 3.6;

    const tSeconds = sInMeters / vInMs;
    const tMinutes = tSeconds / 60;
    const tHours = tSeconds / 3600;

    return {
      tSeconds: parseFloat(tSeconds.toFixed(2)),
      tMinutes: parseFloat(tMinutes.toFixed(2)),
      tHours: parseFloat(tHours.toFixed(3))
    };
  }

  // Quy đổi đơn vị m/s <-> km/h
  static convertUnit(value, fromUnit) {
    if (fromUnit === "ms") {
      return {
        from: `${value} m/s`,
        to: `${parseFloat((value * 3.6).toFixed(3))} km/h`,
        formula: `${value} × 3,6 = ${(value * 3.6).toFixed(3)} km/h`
      };
    } else {
      return {
        from: `${value} km/h`,
        to: `${parseFloat((value / 3.6).toFixed(3))} m/s`,
        formula: `${value} ÷ 3,6 = ${(value / 3.6).toFixed(3)} m/s`
      };
    }
  }

  // So sánh tốc độ nhập vào với thế giới tự nhiên
  static compareWithWorld(speedInMs) {
    return this.SGK_OBJECTS.map(obj => {
      const ratio = speedInMs / obj.speedMs;
      let text = "";
      if (Math.abs(ratio - 1) < 0.05) {
        text = "Tương đương";
      } else if (ratio > 1) {
        text = `Nhanh gấp ${ratio.toFixed(1)} lần`;
      } else {
        text = `Bằng ${(ratio * 100).toFixed(1)}%`;
      }
      return {
        ...obj,
        ratio,
        text,
        speedKmh: parseFloat((obj.speedMs * 3.6).toFixed(2))
      };
    });
  }
}
