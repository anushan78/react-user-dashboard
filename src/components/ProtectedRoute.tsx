import type { JSX } from "react";
import { Navigate } from "react-router-dom";
import { useUser } from "../context/UserContext";

interface ProtectedRouteProps {
  children: JSX.Element;
}

export default function ProtectedRoute({
  children,
}: ProtectedRouteProps): JSX.Element {
  const { user } = useUser();

  if (!user) {
    return <Navigate to="/" replace />;
  }
  return children;
}
