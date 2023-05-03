"use client";
import Image from "next/image";
import { FormInputs } from "./formInputs";
import { SocialButtons } from "./socialButtons";
import { ButtonPlayer } from "./buttonPlayer";
import Link from "next/link";
import { FormLogin } from "../hook/formLogin";
import { Register } from "../hook/formRegister";

export function FormContainerLogin() {
  const {
    handleLogin,
    handleChangeEmail,
    handleChangePassword,
    user,
    isLoading,
    feedbackMessage,
    handleShowPassword,
    showPassword,
  } = FormLogin();
  const {
    handleChangeEmailRegister,
    handleChangeNameRegister,
    handleChangePasswordRegister,
    userRegister,
    handleShowPasswordRegister,
    showPasswordRegister,
  } = Register();
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="mt-14">
        <Image
          src={"/assets/riot-games-logo.png"}
          alt="logo da riot games"
          width={100}
          height={20}
        />
      </div>
      <div className="mt-14">
        <h1 className="font-bold text-xl">Sign in</h1>
      </div>

      <div>
        <FormInputs
        handleShowPasswordRegister={handleShowPasswordRegister}
          handleShowPassword={handleShowPassword}
          showPasswordRegister={showPasswordRegister}
          showPassword={showPassword}
          userRegister={userRegister}
          handleChangePasswordRegister={handleChangePasswordRegister}
          handleChangeNameRegister={handleChangeNameRegister}
          handleChangeEmailRegister={handleChangeEmailRegister}
          type="login"
          handleChangeEmail={handleChangeEmail}
          handleChangePassword={handleChangePassword}
          user={user}
        />
      </div>

      <div>
        <SocialButtons />
      </div>

      <div className="flex justify-start w-[17.8rem] mt-3 gap-2">
        <input type="checkbox" />
        <p className="text-xs text-[#AAAAAA] font-bold">Stay signed in</p>
      </div>

      {feedbackMessage === "Registrado com sucesso!" && (
        <div className="mt-5 text-sm text-green-500">{feedbackMessage}</div>
      )}
      <div className=" absolute  mt-48 text-sm text-red-500">
        {feedbackMessage}
      </div>

      <div>
        <ButtonPlayer
          userRegister={userRegister}
          type="login"
          user={user}
          isLoading={isLoading}
          handleLogin={handleLogin}
        />
      </div>

      <div className="mt-24 flex flex-col justify-center text-center">
        <div className="text-sm text-[#AAAAAA] font-bold">can't sign in?</div>
        <Link
          href={"/CreateUser"}
          className="hover:underline text-sm text-[#AAAAAA] 
        font-bold transition-all duration-300"
        >
          create account
        </Link>
      </div>
    </div>
  );
}
