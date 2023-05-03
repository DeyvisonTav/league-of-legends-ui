import { ChangeEvent } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
interface FormProps {
  handleChangeNameRegister: (e: ChangeEvent<HTMLInputElement>) => void;
  handleChangeEmailRegister: (e: ChangeEvent<HTMLInputElement>) => void;
  handleChangePasswordRegister: (e: ChangeEvent<HTMLInputElement>) => void;
  handleChangeEmail: (e: ChangeEvent<HTMLInputElement>) => void;
  handleChangePassword: (e: ChangeEvent<HTMLInputElement>) => void;
  handleShowPasswordRegister: () => void;
  handleShowPassword: () => void;

  type: string;
  user: { email: string; password: string };
  userRegister: { name: string; email: string; password: string };
  showPassword: boolean;
  showPasswordRegister: boolean;
}

export function FormInputs({
  handleShowPasswordRegister,
  handleShowPassword,
  showPasswordRegister,
  showPassword,
  type,
  handleChangeEmailRegister,
  handleChangeNameRegister,
  handleChangePasswordRegister,
  handleChangeEmail,
  handleChangePassword,
  user,
  userRegister,
}: FormProps) {
  return (
    <div className="flex flex-col gap-3 mt-5 transition-all duration-500">
      {type === "register" && (
        <input
          required
          value={userRegister.name}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            handleChangeNameRegister(e)
          }
          placeholder="name"
          className="bg-[#EDEDED] w-[18rem] py-4 rounded-md text-xs text-#AAAAAA p-3 font-bold 
          uppercase  focus:outline-none focus:border-zinc-400 focus:ring-1 focus:ring-zinc-400
          transition-all duration-500"
        />
      )}
      {type === "register" && (
        <input
          required
          value={userRegister.email}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            handleChangeEmailRegister(e)
          }
          placeholder="email"
          className="bg-[#EDEDED] w-[18rem] py-4 rounded-md text-xs text-#AAAAAA p-3 font-bold 
          uppercase  focus:outline-none focus:border-zinc-400 focus:ring-1 focus:ring-zinc-400
          transition-all duration-500"
        />
      )}
      {type === "register" && (
        <input
          required
          value={userRegister.password}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            handleChangePasswordRegister(e)
          }
          type={showPasswordRegister ? "text" : "password"}
          placeholder="password"
          className="bg-[#EDEDED] w-[18rem] py-4 rounded-md text-xs text-#AAAAAA p-3 font-bold 
          uppercase  focus:outline-none focus:border-zinc-400 focus:ring-1 focus:ring-zinc-400
          transition-all duration-500"
        />
      )}
      {type === "register" && showPasswordRegister ? (
        <div
          className="absolute ml-[15.8rem]  mt-[8.5rem] cursor-pointer"
          onClick={handleShowPasswordRegister}
        >
          <AiFillEye />
        </div>
      ) : (
        type === "register" && (
          <div
            className="absolute ml-[15.8rem] mt-[8.5rem] cursor-pointer"
            onClick={handleShowPasswordRegister}
          >
            <AiFillEyeInvisible />
          </div>
        )
      )}

      {type !== "register" && (
        <input
          required
          value={user.email}
          type="text"
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            handleChangeEmail(e);
          }}
          placeholder="email"
          className="bg-[#EDEDED] w-[18rem] py-4 rounded-md text-xs text-#AAAAAA p-3 font-bold 
          uppercase  focus:outline-none focus:border-zinc-400 focus:ring-1 focus:ring-zinc-400
          transition-all duration-500"
        />
      )}
      {type !== "register" && (
        <input
          required
          value={user.password}
          type={showPassword ? "text" : "password"}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            handleChangePassword(e)
          }
          placeholder="password"
          className="bg-[#EDEDED] w-full py-4 rounded-md text-xs text-#AAAAAA p-2  font-bold 
          uppercase focus:outline-none focus:border-zinc-400 focus:ring-1 focus:ring-zinc-400
           transition-all duration-500"
        />
      )}

      {type !== "register" && showPassword ? (
        <div
          className="absolute ml-[15.8rem] mt-[4.8rem] cursor-pointer"
          onClick={handleShowPassword}
        >
          <AiFillEye />
        </div>
      ) : (
        type !== "register" && (
          <div
            className="absolute ml-[15.8rem] mt-[4.8rem] cursor-pointer"
            onClick={handleShowPassword}
          >
            <AiFillEyeInvisible />
          </div>
        )
      )}
    </div>
  );
}
