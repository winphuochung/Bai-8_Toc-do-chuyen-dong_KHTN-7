@echo off
chcp 65001 > nul
title KHTN 7 - Bài 8: Tốc độ chuyển động (Localhost:8000)
echo ======================================================================
echo  🚀 KHỞI ĐỘNG ỨNG DỤNG HỌC TẬP KHTN 7: BÀI 8 - TỐC ĐỘ CHUYỂN ĐỘNG
echo ======================================================================
echo [INFO] Đang mở trình duyệt tại địa chỉ: http://localhost:8000
start http://localhost:8000
echo [INFO] Server đang lắng nghe tại cổng 8000... (Nhấn Ctrl+C để tắt)
python -m http.server 8000
pause
