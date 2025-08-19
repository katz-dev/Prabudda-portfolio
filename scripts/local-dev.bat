@echo off
REM Local development setup script for Windows
REM Use this to test the Docker setup locally before deploying

echo 🏠 Setting up local development environment...

REM Check if Docker is installed
docker --version >nul 2>&1
if errorlevel 1 (
    echo ❌ Docker is not installed. Please install Docker Desktop first.
    echo Visit: https://docs.docker.com/desktop/install/windows-install/
    pause
    exit /b 1
)

REM Check if Docker Compose is installed
docker-compose --version >nul 2>&1
if errorlevel 1 (
    echo ❌ Docker Compose is not installed. Please install Docker Compose first.
    echo Visit: https://docs.docker.com/compose/install/
    pause
    exit /b 1
)

REM Build and start the application
echo 🔨 Building and starting the application...
docker-compose up -d --build

if errorlevel 1 (
    echo ❌ Failed to build and start the application!
    pause
    exit /b 1
)

REM Wait for the application to be ready
echo ⏳ Waiting for application to be ready...
timeout /t 10 /nobreak >nul

REM Check if container is running
docker-compose ps | findstr "Up" >nul
if errorlevel 1 (
    echo ❌ Failed to start application!
    echo 📝 Logs:
    docker-compose logs
    pause
    exit /b 1
) else (
    echo ✅ Application started successfully!
    echo 🌐 Access your application at: http://localhost
    echo.
    echo 📊 Container status:
    docker-compose ps
    echo.
    echo 📝 To view logs: docker-compose logs -f
    echo 🛑 To stop: docker-compose down
    echo.
    pause
)
