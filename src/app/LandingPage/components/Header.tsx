import Image from "next/image";
import { TfiWorld } from "react-icons/tfi";

export function Header() {
  return (
    <div
      className="fixed w-full flex flex-row justify-between h-20 items-center text-center
           bg-[#252423] px-16 text-white z-50"
    >
      <div className="flex flex-row gap-10 items-center">
        <div>
          <Image
            src={"/assets/riotGames.png"}
            alt="logo da riot games"
            height={20}
            width={100}
          />
        </div>
        <div>
          <Image
            src={"/assets/lolLogo.png"}
            alt="logo da riot games"
            height={20}
            width={40}
          />
        </div>
      </div>

      <div className="flex flex-row gap-5">
        <div className="flex flex-row gap-5 items-center">
          <div>
            <TfiWorld size={20} />
          </div>
          <div className="flex items-center gap-2">
            <h1 className="text-lg font-bold">welcome</h1>
            <div>-</div>
            <p className="underline">fulano</p>
          </div>
        </div>

        <div>
          <button
            className="text-lg px-6 py-1 bg-zinc-700 rounded-lg font-bold
                   hover:bg-zinc-600 transition-all duration-300 "
          >
            logout
          </button>
        </div>
        <div>
          <button
            className="text-lg text-[#252423] px-6 py-1 bg-[#3BC0DF] rounded-lg font-bold
                   hover:bg-cyan-300 transition-all duration-300 "
          >
            Play Now
          </button>
        </div>
      </div>
    </div>
  );
}
