"use client";
import { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/firebase/config";
import { useRouter } from "next/navigation";

export default function Session({ children }) {
  const [user] = useAuthState(auth);
  const router = useRouter();

  useEffect(() => {
    if (
      user &&
      typeof window !== "undefined" &&
      sessionStorage.getItem("user")
    ) {
      router.push("/dashboard");
    }
  }, [user, router]);

  return children;
}
