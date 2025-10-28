// src/config.ts
// 🌐 Backend base URL: automatically switches between local and Cloud Run

export const API_BASE_URL =
  window.location.hostname === "localhost"
    ? "http://127.0.0.1:8000" // Local FastAPI backend
    : "https://gaura-backend-534966102969.asia-south1.run.app"; // 🔗 Replace with your actual Cloud Run URL
