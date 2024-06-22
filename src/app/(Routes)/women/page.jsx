"use client";

import useUser from "@/hooks/useAuth";

export default function WomenPage() {
  const { user } = useUser();
  console.log("user from women : ", user);
  return <h1>Women PAge</h1>;
}
