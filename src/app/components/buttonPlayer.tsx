import { AiOutlineArrowRight } from "react-icons/ai";
interface ButtonProps {
  handleRegister?: () => void;
  handleLogin?: () => void;
  isLoading: boolean;
  user: { email: string; password: string };
  userRegister: { name: string; email: string; password: string };
  type: string;
}
export function ButtonPlayer({
  handleLogin,
  isLoading,
  user,
  userRegister,
  type,
  handleRegister,
}: ButtonProps) {
  return (
    <div className="mt-20">
      {user.email !== "" && user.password !== "" && type === "login" ? (
        <button
          onClick={handleLogin}
          className="py-4 px-4 flex justify-center items-center  bg-red-500
          rounded-2xl transition-all duration-300"
        >
          <AiOutlineArrowRight size={24} color="#ffff" />
        </button>
      ) : (
        type === "login" && (
          <button
            onClick={handleLogin}
            disabled={isLoading}
            className="py-4 px-4 flex justify-center items-center border-2 border-zinc-[#E8E8E8]
         rounded-2xl hover:border-zinc-300 transition-all duration-300"
          >
            <AiOutlineArrowRight size={24} color="#E8E8E8" />
          </button>
        )
      )}

      {userRegister?.name !== "" &&
      userRegister?.email !== "" &&
      userRegister?.password !== "" &&
      type === "register" ? (
        <button
          onClick={handleRegister}
          className="py-4 px-4 flex justify-center items-center  bg-red-500
          rounded-2xl transition-all duration-300"
        >
          <AiOutlineArrowRight size={24} color="#ffff" />
        </button>
      ) : (
        type === "register" && (
          <button
            onClick={handleRegister}
            disabled={isLoading}
            className="py-4 px-4 flex justify-center items-center border-2 border-zinc-[#E8E8E8]
         rounded-2xl hover:border-zinc-300 transition-all duration-300"
          >
            <AiOutlineArrowRight size={24} color="#E8E8E8" />
          </button>
        )
      )}
    </div>
  );
}
