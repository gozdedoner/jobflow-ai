// src/pages/Login.tsx
import { useState } from "react";
import { login as loginService } from "../auth/auth.service";
import { useAuth } from "../auth/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const data = await loginService(email, password);
    login(data.token);
    navigate("/app");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-purple-900 to-black">
      <form
        onSubmit={handleSubmit}
        className="bg-black/40 backdrop-blur-xl p-10 rounded-2xl w-[360px] border border-purple-500/20 shadow-[0_0_40px_rgba(168,85,247,0.3)]"
      >
        <h1 className="text-3xl font-semibold text-white mb-6 text-center">
          JobFlow AI
        </h1>

        <input
          className="w-full mb-4 px-4 py-3 rounded-lg bg-zinc-900 border border-zinc-700 focus:outline-none"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          className="w-full mb-6 px-4 py-3 rounded-lg bg-zinc-900 border border-zinc-700 focus:outline-none"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="w-full py-3 rounded-xl bg-gradient-to-r from-purple-600 to-fuchsia-600 font-semibold">
          Login
        </button>
      </form>
    </div>
  );
}
