"use client";
import { useEffect } from "react";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { VideoPlayerPlayNow } from "./components/video";
import { redirect } from "next/navigation";
export default function LandingPage() {
  const id = localStorage.getItem("userId");

  useEffect(() => { 
    if (id) {
      return;
    } else {
      redirect("/");
    }
  }, [id]);
  return (
    <div>
      <Header />
      <VideoPlayerPlayNow />
      <Footer />
    </div>
  );
}
