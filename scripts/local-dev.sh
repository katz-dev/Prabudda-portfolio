#!/bin/bash

# Local development setup script
# Use this to test the Docker setup locally before deploying

set -e

echo "🏠 Setting up local development environment..."

# Check if Docker is installed
if ! command -v docker &> /dev/null; then
    echo "❌ Docker is not installed. Please install Docker first."
    echo "Visit: https://docs.docker.com/get-docker/"
    exit 1
fi

# Check if Docker Compose is installed
if ! command -v docker-compose &> /dev/null; then
    echo "❌ Docker Compose is not installed. Please install Docker Compose first."
    echo "Visit: https://docs.docker.com/compose/install/"
    exit 1
fi

# Build and start the application
echo "🔨 Building and starting the application..."
docker-compose up -d --build

# Wait for the application to be ready
echo "⏳ Waiting for application to be ready..."
sleep 10

# Check if container is running
if docker-compose ps | grep -q "Up"; then
    echo "✅ Application started successfully!"
    echo "🌐 Access your application at: http://localhost"
    echo ""
    echo "📊 Container status:"
    docker-compose ps
    echo ""
    echo "📝 To view logs: docker-compose logs -f"
    echo "🛑 To stop: docker-compose down"
else
    echo "❌ Failed to start application!"
    echo "📝 Logs:"
    docker-compose logs
    exit 1
fi
