@echo off
title VSJ Logistics - dev server
cd /d "%~dp0"
echo Installing packages...
call npm install
if errorlevel 1 (echo npm install failed & pause & exit /b 1)
echo Starting dev server on http://localhost:3000 ...
start "" http://localhost:3000
call npm run dev
pause
