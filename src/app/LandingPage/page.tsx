"use client";
import { useEffect } from "react";
import { VideoPlayerPlayNow } from "./components/video";
import { redirect } from "next/navigation";
import { motion } from "framer-motion";
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
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ delay: 0.3 }}
    >
      <div>
        <VideoPlayerPlayNow />
      </div>
    </motion.div>
  );
}
