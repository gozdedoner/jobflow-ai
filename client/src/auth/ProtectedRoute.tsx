import { Navigate } from "react-router-dom";
import { useAuth } from "./AuthContext";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function ProtectedRoute({ children }: Props) {
  const auth = useAuth();

  if (!auth || !auth.token) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
}
