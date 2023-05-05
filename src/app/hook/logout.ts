"use client";

import { redirect } from "next/navigation";

export function Logout() {
  function cleanLocalStorage() {
    localStorage.removeItem("userId");
  }

  function logout() {
    cleanLocalStorage();
    redirect("/");
  }

  return { logout };
}
