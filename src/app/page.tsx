'use client'
import { motion } from "framer-motion";
import { FormContainerLogin } from "./components/form";
import { IconsMaximize } from "./components/iconsMaximize";
import { VideoPlayer } from "./components/video";

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ delay: 0.3 }}
    >
      <div className="flex mx-10 shadow-lg shadow-zinc-400 mt-20">
        <div className="absolute right-0 top-0 mt-24 mr-14">
          <IconsMaximize />
        </div>
        <div className="grid grid-cols-4">
          <div>
            <FormContainerLogin />
          </div>
          <div className=" col-span-3 bg-zinc-100">
            <VideoPlayer identification="zed" />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
