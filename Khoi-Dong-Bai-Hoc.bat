@echo off
chcp 65001 >nul
title KHOI DONG BAI 8: TOC DO CHUYEN DONG - KHTN 7
cls
echo =========================================================================
echo   KHOI DONG UNG DUNG BAI 8: TOC DO CHUYEN DONG (KHTN 7)
echo   Tac gia: Thay Le Van Thang - Truong TH ^& THCS Phuoc Hung
echo =========================================================================
echo.
echo [*] Dang khoi chay may chu cuc bo cong 8000...
start "" /b python -m http.server 8000
timeout /t 2 /nobreak >nul
echo [*] Dang mo ung dung tren trinh duyet...
start http://localhost:8000
echo.
echo =========================================================================
echo   [OK] Ung dung dang hoat dong tai: http://localhost:8000
echo   - Khong bi Loi 153 khi nhung video YouTube.
echo   - De tat may chu khi day xong, Thay/Co chi can dong cua so nay.
echo =========================================================================
echo.
pause
