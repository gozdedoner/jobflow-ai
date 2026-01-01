import axios from "axios";
import type { InternalAxiosRequestConfig, AxiosError } from "axios";

const api = axios.create({
  baseURL: "http://localhost:4000/api",
  withCredentials: true, // 🔐 refresh token cookie için ŞART
});

/* =========================
   REQUEST INTERCEPTOR
   ========================= */
api.interceptors.response.use(
  (response) => response,
  async (error: AxiosError) => {
    const originalRequest = error.config as
      | (InternalAxiosRequestConfig & { _retry?: boolean })
      | undefined;

    if (
      error.response?.status === 401 &&
      originalRequest &&
      !originalRequest._retry &&
      !originalRequest.url?.includes("/auth/refresh")
    ) {
      originalRequest._retry = true;

      try {
        const res = await axios.post(
          "http://localhost:4000/api/auth/refresh",
          {},
          { withCredentials: true }
        );

        const newAccessToken = (res.data as { token: string }).token;

        localStorage.setItem("token", newAccessToken);
        originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;

        return api(originalRequest);
      } catch {
        localStorage.removeItem("token");
        window.location.href = "/login";
      }
    }

    return Promise.reject(error);
  }
);

export default api;
