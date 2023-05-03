"use client";
import Image from "next/image";
import { FormInputs } from "@/app/components/formInputs";
import { SocialButtons } from "@/app/components/socialButtons";
import Link from "next/link";
import { ButtonPlayer } from "@/app/components/buttonPlayer";
import { Register } from "../../hook/formRegister";
import { FormLogin } from "@/app/hook/formLogin";
export function FormContainerRegister() {
  const {
    handleChangeEmailRegister,
    handleChangeNameRegister,
    handleChangePasswordRegister,
    handleRegister,
    isLoading,
    userRegister,
    feedbackMessage,
    handleShowPasswordRegister,
    showPasswordRegister,
  } = Register();
  const {
    handleChangeEmail,
    handleChangePassword,
    user,
    handleShowPassword,
    showPassword,
  } = FormLogin();
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
        <h1 className="font-bold text-xl">Register</h1>
      </div>

      <div>
        <FormInputs
          showPassword={showPassword}
          handleShowPassword={handleShowPassword}
          showPasswordRegister={showPasswordRegister}
          handleShowPasswordRegister={handleShowPasswordRegister}
          userRegister={userRegister}
          handleChangePasswordRegister={handleChangePasswordRegister}
          handleChangeNameRegister={handleChangeNameRegister}
          handleChangeEmailRegister={handleChangeEmailRegister}
          type="register"
          handleChangeEmail={handleChangeEmail}
          handleChangePassword={handleChangePassword}
          user={user}
        />
      </div>

      <div>
        <SocialButtons />
      </div>

      {feedbackMessage === "Registrado com sucesso!" && (
        <div className="mt-5 text-sm text-green-500">{feedbackMessage}</div>
      )}
      <div className=" absolute  mt-48 text-sm text-red-500">
        {feedbackMessage}
      </div>

      <div>
        <ButtonPlayer
          type="register"
          user={user}
          userRegister={userRegister}
          isLoading={isLoading}
          handleRegister={handleRegister}
        />
      </div>

      <div className="mt-36 flex flex-col justify-center text-center">
        <Link
          href={"/"}
          className=" hover:underline text-sm text-[#AAAAAA] font-bold
        transition-all duration-300"
        >
          return for Sign in
        </Link>
      </div>
    </div>
  );
}
