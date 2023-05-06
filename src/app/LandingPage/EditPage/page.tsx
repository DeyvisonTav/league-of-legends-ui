"use client";
import { motion } from "framer-motion";
import { HeaderEditPage } from "./components/Header";
import { FormContainerEditPage } from "./components/FormContainer";
import { useEffect } from "react";
import { redirect } from "next/navigation";

export default function EditPage() {
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
      <div className="pt-[10rem] px-72 pb-20">
        <HeaderEditPage />
        <FormContainerEditPage />
      </div>
    </motion.div>
  );
}
