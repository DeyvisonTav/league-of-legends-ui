"use client";
import { GetUser } from "@/app/hook/getUser";
import { Logout } from "@/app/hook/logout";
import Image from "next/image";
import Link from "next/link";
import { TfiWorld } from "react-icons/tfi";
export function Header() {
  const { user } = GetUser();
  const { logout } = Logout();

  return (
    <div
      className="fixed w-full flex flex-row justify-between h-20 items-center 
                 text-center bg-[#252423] px-16 text-white z-50"
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
            <Link href={"/LandingPage/EditPage"} className="underline">
              <p>{user?.name}</p>
            </Link>
          </div>
        </div>

        <Link href={"/"}>
          <button
            onClick={() => logout()}
            className="text-lg px-6 py-1 bg-zinc-700 rounded-lg font-bold
                        hover:bg-zinc-600 transition-all duration-300"
          >
            logout
          </button>
        </Link>
        <a
          href="https://signup.leagueoflegends.com/pt-br/signup/index?_gl=1*6nkrcp*_ga*OTQ3MzY0MTAzLjE2ODMyMjc1OTA.*_ga_FXBJE5DEDD*MTY4MzMxOTg0OC4yLjEuMTY4MzMxOTk4NS4zMS4wLjA.&_ga=2.150230782.975518704.1683319849-947364103.1683227590#/"
          target="_blank"
        >
          <div>
            <button
              className="text-lg text-[#252423] px-6 py-1 bg-[#3BC0DF] 
                     rounded-lg font-bold  hover:bg-cyan-300 transition-all 
                     duration-300"
            >
              Play Now
            </button>
          </div>
        </a>
      </div>
    </div>
  );
}
