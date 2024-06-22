"use client";
import { useContext } from "react";
import { AuthContexts } from "@/contexts/AuthContexts";

export default function useAuth() {
  const context = useContext(AuthContexts);
  if (!context) throw Error("u must use hook inside context Provider");

  return context;
}
