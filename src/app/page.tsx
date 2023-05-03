import { FormContainerLogin } from "./components/form";
import { IconsMaximize } from "./components/iconsMaximize";
import { VideoPlayer } from "./components/video";

export default function Home() {
  return (
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
  );
}
