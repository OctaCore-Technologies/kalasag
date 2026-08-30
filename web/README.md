# KALASAG Web

This directory contains the coordination console (frontend) and API server (backend) for KALASAG. The console is used by whoever is directing a node deployment; the backend serves coverage/placement data to both the web console and the mobile field app, and ingests status data uplinked from the gateway node.

## Tech Stack Overview

| Layer        | Technology                     | Build Tools / Runtime   |
| :----------- | :------------------------------ | :---------------------- |
| **Frontend** | React & TypeScript              | Vite, Node.js (via NVM) |
| **Backend**  | Express.js & TypeScript         | Node.js (via NVM)       |

---

## 1. Frontend Prerequisites (Node.js)

The React frontend relies on Node.js for local development and bundling. To prevent system-wide dependency conflicts, we require Node Version Manager (NVM) across all environments.

> **Note:** NVM keeps our local environments completely isolated. Never install frontend dependencies using elevated privileges.

### Linux Setup

Run the following in your terminal:

1. `curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash`
2. `source ~/.bashrc`
3. `nvm install --lts`
4. `nvm use --lts`

### Windows Setup

Run the following in an elevated PowerShell:

1. `winget install CoreyButler.NVMforWindows`
2. Restart your PowerShell window.
3. `nvm install lts`
4. `nvm use lts`

---

## 2. Running the Frontend Locally

Once your OS-specific NVM is installed, you can initialize and boot the React application.

1. `cd web/frontend`
2. `npm install`
3. `npm run dev`

---

## 3. Running the Backend Locally

The backend runs on the same Node.js/NVM setup as the frontend.

1. `cd web/backend`
2. `npm install`
3. `npm run dev`

The backend serves the coverage/placement API to both the web console and the mobile field app, and ingests gateway node data via MQTT/HTTP.

---

## 4. Repository Rules

- **Dependency Management:** Ensure your local `.gitignore` is active before pushing to avoid committing `node_modules`.
- **Environment Variables:** Do not commit `.env` files; all secrets and connection strings must remain strictly local. Copy `.env.example` to `.env` in `web/backend/` and fill in local values.
