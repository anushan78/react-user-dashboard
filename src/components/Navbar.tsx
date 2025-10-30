import React from "react";
import { useUser } from "../context/UserContext";
import { Link } from "react-router-dom";

export default function Navbar() {
  const { user } = useUser();

  return (
    <nav className="bg-gray-800 p-4 text-white flex justify-between">
      <Link to="/" className="font-bold text-lg">
        User Dashboard
      </Link>
      {user && <span>Welcome, {user.name}</span>}
    </nav>
  );
}
