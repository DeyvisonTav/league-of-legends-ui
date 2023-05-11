import { DeletePage } from "@/app/hook/delete";
import { UpdatePage } from "@/app/hook/update";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

export function FormContainerEditPage() {
  const {
    userUpdate,
    isLoadingEditButton,
    updateUser,
    handleChangeEmailUpdate,
    handleChangeNameUpdate,
    handleChangePasswordUpdate,
    handleShowPasswordUpdate,
    showPasswordUpdate,
  } = UpdatePage();
  const { DeleteUser, isLoadingDeleteButton } = DeletePage();
  return (
    <div className="shadow-xl shadow-zinc-400">
      <div className="flex flex-col gap-[5rem] py-[5rem] items-center">
        <div className="flex flex-col gap-2">
          <label className="pl-2 text-base font-bold">Name:</label>
          <input
            required
            value={userUpdate.name}
            type="text"
            onChange={handleChangeNameUpdate}
            placeholder="Name"
            className="bg-[#EDEDED] w-[60rem] py-7 rounded-md text-sm text-#AAAAAA p-4  font-bold 
           focus:outline-none focus:border-zinc-400 focus:ring-1 focus:ring-zinc-400
           transition-all duration-500"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="pl-2 text-base font-bold">Email:</label>
          <input
            required
            value={userUpdate.email}
            type="text"
            onChange={handleChangeEmailUpdate}
            placeholder="Email"
            className="bg-[#EDEDED] w-[60rem] py-7 rounded-md text-sm text-#AAAAAA p-4  font-bold 
           focus:outline-none focus:border-zinc-400 focus:ring-1 focus:ring-zinc-400
           transition-all duration-500"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="pl-2 text-base font-bold">Password:</label>
          <input
            required
            value={userUpdate.password}
            onChange={handleChangePasswordUpdate}
            type={showPasswordUpdate ? "text" : "password"}
            placeholder="Password"
            className="bg-[#EDEDED] w-[60rem] py-7 rounded-md text-sm text-#AAAAAA p-4  font-bold 
           focus:outline-none focus:border-zinc-400 focus:ring-1 focus:ring-zinc-400
           transition-all duration-500"
          />
        </div>
        {showPasswordUpdate ? (
          <div
            className="absolute ml-[55rem]  mt-[27.2rem] cursor-pointer"
            onClick={handleShowPasswordUpdate}
          >
            <AiFillEye size={24} />
          </div>
        ) : (
          <div
            className="absolute ml-[55rem]  mt-[27.2rem] cursor-pointer"
            onClick={handleShowPasswordUpdate}
          >
            <AiFillEyeInvisible size={24} />
          </div>
        )}
      </div>
      <div className="flex flex-col pl-[12rem] gap-12 pb-24">
        <div>
          <button
            disabled={isLoadingEditButton || isLoadingDeleteButton}
            onClick={updateUser}
            className="text-lg text-white w-[60rem] rounded-lg py-5
              bg-[#282C3A]  font-bold
              hover:bg-zinc-500 transition-all duration-300 border"
          >
            Salvar
          </button>
        </div>

        <div>
          <button
            disabled={isLoadingEditButton || isLoadingDeleteButton}
            onClick={DeleteUser}
            className="text-lg text-white w-[60rem] py-5 rounded-lg 
             bg-[#282C3A] font-bold
             hover:bg-zinc-500  transition-all duration-300 border"
          >
            Deletar
          </button>
        </div>
      </div>
    </div>
  );
}
