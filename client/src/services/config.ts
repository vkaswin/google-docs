const BASE_URL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:8000"
    : "http://localhost:8000";

export const USER_URL = `${BASE_URL}/api/user`;
