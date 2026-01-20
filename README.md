# MayoBox Application

Assessment test for panya store.

## 📋 Table of Contents

- [Prerequisites](#prerequisites)
- [Project Structure](#project-structure)
- [Quick Start](#quick-start)
  - [Linux/macOS](#linuxmacos)
  - [Windows (WSL2 - Recommended)](#windows-wsl2---recommended)
- [Manual Setup](#manual-setup)
- [Development](#development)
- [Environment Variables](#environment-variables)
- [Available Commands](#available-commands)
- [API Documentation](#api-documentation)
- [Troubleshooting](#troubleshooting)

## 🔧 Prerequisites

### Required Software

**Docker Desktop** (v20.10 or higher)

- Download: https://www.docker.com/products/docker-desktop
- Includes Docker Compose

### Optional (For Local Development)

- **Go** (v1.25.0 or higher)
- **Node.js** (v20 or higher)
- **Make** (for using Makefile commands)

### Platform-Specific Requirements

#### Linux/macOS

- Make is usually pre-installed
- If not available:
  - Ubuntu/Debian: `sudo apt-get install build-essential`
  - macOS: `xcode-select --install`

#### Windows

- **WSL2 is required** for the easiest setup experience
- See [Windows Setup Guide](#windows-wsl2---recommended) below

## 📁 Project Structure

```
mayobox/
├── server/              # Go backend (API + Database)
│   ├── cmd/api/        # Main application
│   ├── internal/       # Internal packages
│   ├── migrations/     # Database migrations
│   ├── Dockerfile      # API container
│   ├── docker-compose.yml
│   ├── Makefile        # Server commands
│   ├── .env.example
│   └── .env.pgcontainer.example
│
├── web/                # Next.js frontend
│   ├── app/           # Next.js pages
│   ├── components/    # React components
│   ├── Dockerfile     # Web container
│   ├── docker-compose.yml
│   ├── Makefile       # Web commands
│   └── .env.example
│
├── start.sh           # Unix startup script
└── stop.sh            # Unix shutdown script
```

## 🚀 Quick Start

### Linux/macOS

**1. Clone the repository**

```bash
git clone <repository-url>
cd mayobox
```

**2. Make scripts executable**

```bash
chmod +x start.sh stop.sh
```

**3. Install goose (migration tool)**

```bash
go install github.com/pressly/goose/v3/cmd/goose@latest
```

**4. Start the application**

```bash
./start.sh
```

**5. Access the application**

- 🌐 **Web Application**: http://localhost:3000
- 🔌 **API**: http://localhost:4000
- 📚 **API Documentation**: http://localhost:4000/docs
- 🗄️ **Database**: localhost:5433

**6. Stop the application**

```bash
./stop.sh
```

Or use arguments directly:

```bash
./stop.sh stop    # Stop services
./stop.sh down    # Remove containers
./stop.sh clean   # Full cleanup (deletes data)
```

### Windows (WSL2 - Recommended)

#### Step 1: Install WSL2

**1. Open PowerShell as Administrator and run:**

```powershell
wsl --install
```

**2. Restart your computer when prompted**

**3. After restart, Ubuntu will automatically launch**

- Set up your Ubuntu username and password
- You now have a Linux environment on Windows!

#### Step 2: Install Required Dependencies in WSL2

**1. Open Ubuntu (WSL2) terminal**

**2. Update package lists:**

```bash
sudo apt update
```

**3. Install Make:**

```bash
sudo apt install build-essential -y
```

**4. Install Go (v1.25.0)**

```bash
# Download Go
wget https://go.dev/dl/go1.25.0.linux-amd64.tar.gz

# Remove any previous Go installation and extract new one
sudo rm -rf /usr/local/go && sudo tar -C /usr/local -xzf go1.25.0.linux-amd64.tar.gz

# Add Go to PATH (add to ~/.bashrc or ~/.zshrc)
echo 'export PATH=$PATH:/usr/local/go/bin' >> ~/.bashrc
echo 'export PATH=$PATH:$HOME/go/bin' >> ~/.bashrc
source ~/.bashrc

# Verify installation
go version
```

**5. Install goose (migration tool):**

```bash
go install github.com/pressly/goose/v3/cmd/goose@latest
```

**6. Install Node.js (v20):**

```bash
# Install Node Version Manager (nvm)
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.0/install.sh | bash

# Reload shell configuration
source ~/.bashrc

# Install Node.js v20
nvm install 20
nvm use 20

# Verify installation
node --version
npm --version
```

#### Step 3: Install and Configure Docker Desktop

**1. Download Docker Desktop for Windows:**

- https://www.docker.com/products/docker-desktop

**2. Install Docker Desktop**

**3. Enable WSL2 Integration:**

- Open Docker Desktop
- Go to Settings → Resources → WSL Integration
- Enable integration with your Ubuntu distribution
- Click "Apply & Restart"

**4. Verify Docker in WSL2:**

```bash
docker --version
docker compose version
```

#### Step 4: Clone and Run the Project

**1. Navigate to your project directory in WSL2:**

```bash
# It's recommended to keep projects in WSL2 filesystem for better performance
cd ~
mkdir projects
cd projects
```

**2. Clone the repository:**

```bash
git clone <repository-url>
cd mayobox
```

**3. Make scripts executable:**

```bash
chmod +x start.sh stop.sh
```

**4. Start the application:**

```bash
./start.sh
```

**5. Access from Windows:**

- 🌐 **Web Application**: http://localhost:3000
- 🔌 **API**: http://localhost:4000
- 📚 **API Documentation**: http://localhost:4000/docs

## 🛠️ Manual Setup

### Prerequisites Check

Before starting manual setup, verify you have the required tools:

```bash
# Check Docker
docker --version
docker compose version

# Check Go (if doing local development)
go version

# Check Node.js (if doing local development)
node --version

# Check Make
make --version

# Check goose (required for migrations)
goose --version
```

**If goose is not installed:**

```bash
go install github.com/pressly/goose/v3/cmd/goose@latest

# Verify installation
goose --version
```

**If Air is not installed (optional, for hot reload):**

```bash
go install github.com/air-verse/air@latest

# Verify installation
air -v
```

### Setup Steps

If you want to set up each component manually:

#### 1. Environment Files

**Server:**

```bash
cd server
cp .env.example .env
cp .env.pgcontainer.example .env.pgcontainer
```

**Web:**

```bash
cd web
cp .env.example .env
```

#### 2. Database Only

```bash
cd server
make db/up        # Start PostgreSQL
make db/wait      # Wait until ready
make migrate/up   # Run migrations (requires goose)
```

#### 3. API Server (Local Development)

```bash
cd server

# Install dependencies
go mod download

# Run with hot reload (requires Air)
make dev

# Or build and run
make build
make start
```

#### 4. Web Application (Local Development)

```bash
cd web

# Install dependencies
npm install

# Run development server
npm run dev

# Or build and run production
npm run build
npm start
```

## 🌍 Environment Variables

### Server (`server/.env`)

```env
MAYOBOX_PORT="4000"
MAYOBOX_ENV="development"
MAYOBOX_DB_DSN="postgres://mayobox:pa55word@localhost:5433/mayobox?sslmode=disable"
MAYOBOX_DB_MAX_OPEN_CONN="25"
MAYOBOX_DB_MAX_IDLE_CONN="15"
MAYOBOX_DB_MAX_IDLE_TIME="15m"
MAYOBOX_LOG_LEVEL="debug"
MAYOBOX_CORS_TRUSTED_ORIGINS="http://localhost:3000"
```

### Database (`server/.env.pgcontainer`)

```env
POSTGRES_DB=mayobox
POSTGRES_USER=mayobox
POSTGRES_PASSWORD=pa55word
```

### Web (`web/.env`)

```env
NEXT_PUBLIC_BASE_SERVER_URL="http://localhost:4000"
```

## 📝 Available Commands

### Server Commands (in `server/` directory)

| Command                | Description                    | Requirements         |
| ---------------------- | ------------------------------ | -------------------- |
| `make help`            | Show all available commands    | Make                 |
| `make dev`             | Run API with hot reload        | Make, Air            |
| `make build`           | Build the API binary           | Make, Go             |
| `make start`           | Start the built API            | Make                 |
| `make test`            | Run tests with coverage        | Make, Go             |
| `make db/up`           | Start database container       | Make, Docker         |
| `make db/down`         | Stop database container        | Make, Docker         |
| `make db/clear`        | Remove database and volumes    | Make, Docker         |
| `make db/wait`         | Wait until database is ready   | Make, Docker         |
| `make migrate/new`     | Create new migration           | Make, goose          |
| `make migrate/up`      | Apply all migrations           | Make, goose          |
| `make migrate/reset`   | Rollback all migrations        | Make, goose          |
| `make migrate/version` | Show current migration version | Make, goose          |
| `make migrate/status`  | Show migration status          | Make, goose          |
| `make compose/up`      | Run API + DB with Docker       | Make, Docker         |
| `make compose/clear`   | Clean up containers            | Make, Docker         |
| `make swag`            | Generate Swagger docs          | Make, swag (install) |
| `make tidy`            | Tidy and vendor dependencies   | Make, Go             |
| `make audit`           | Run quality control checks     | Make, Go             |

### Web Commands (in `web/` directory)

| Command              | Description              | Requirements |
| -------------------- | ------------------------ | ------------ |
| `npm run dev`        | Start development server | Node.js, npm |
| `npm run build`      | Build for production     | Node.js, npm |
| `npm start`          | Start production server  | Node.js, npm |
| `npm run lint`       | Run ESLint               | Node.js, npm |
| `make compose/up`    | Run web with Docker      | Make, Docker |
| `make compose/clear` | Clean up containers      | Make, Docker |

### Installing Missing Tools

**Air (for hot reload):**

```bash
go install github.com/air-verse/air@latest
```

**Swag (for Swagger docs):**

```bash
go install github.com/swaggo/swag/cmd/swag@latest
```

**Goose (for migrations - REQUIRED):**

```bash
go install github.com/pressly/goose/v3/cmd/goose@latest
```
