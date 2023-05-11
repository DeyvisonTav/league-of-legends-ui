import { BsFacebook } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { BsApple } from "react-icons/bs";
export function SocialButtons() {
  return (
    <div className="flex flex-row gap-1 mt-5 w-[18rem]">
      <div>
        <button
          className="bg-[#1878F0] flex w-[5.8rem] py-3 items-center 
          rounded-md justify-center hover:bg-blue-400 transition-all duration-300"
        >
          <BsFacebook size={16} color="#ffff" />
        </button>
      </div>
      <div>
        <button
          className="bg-[white] border-zinc-200 border flex w-[5.8rem]
          py-3 items-center rounded-md justify-center hover:bg-zinc-50 
           transition-all duration-300 "
        >
          <FcGoogle size={16} />
        </button>
      </div>
      <div>
        <button
          className="bg-[black] flex w-[5.8rem] py-3 items-center 
          rounded-md justify-center  hover:bg-zinc-800 transition-all duration-300"
        >
          <BsApple size={16} color="#ffff" />
        </button>
      </div>
    </div>
  );
}
