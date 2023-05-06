import { ChangeEvent, useState } from "react";
import api from "../service/api/axios";

interface UserProps {
  name: string;
  email: string;
  password: string;
}
export function UpdatePage() {
  const [isLoadingEditButton, setIsLoadingEditButton] = useState(false);
  const [showPasswordUpdate, setShowPasswordUpdate] = useState(false);

  const [userUpdate, setUserUpdate] = useState<UserProps>({
    name: "",
    email: "",
    password: "",
  });

  function handleShowPasswordUpdate() {
    setShowPasswordUpdate((state) => !state);
  }

  function handleChangeNameUpdate(event: ChangeEvent<HTMLInputElement>) {
    setUserUpdate({ ...userUpdate, name: event.target.value });
  }

  function handleChangeEmailUpdate(event: ChangeEvent<HTMLInputElement>) {
    setUserUpdate({ ...userUpdate, email: event.target.value });
  }

  function handleChangePasswordUpdate(event: ChangeEvent<HTMLInputElement>) {
    setUserUpdate({ ...userUpdate, password: event.target.value });
  }

  function cleanInputs() {
    setUserUpdate({ name: "", email: "", password: "" });
  }

  function reloadPage() {
    window.location.reload();
  }

  async function updateUser() {
    setIsLoadingEditButton(true);
    try {
      const { email, name, password } = userUpdate;
      const userId = localStorage.getItem("userId");
      await api.put(`user/${userId}`, { email, name, password });
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoadingEditButton(false);
      cleanInputs();
      reloadPage();
    }
  }

  return {
    userUpdate,
    isLoadingEditButton,
    updateUser,
    handleChangeEmailUpdate,
    handleChangeNameUpdate,
    handleChangePasswordUpdate,
    handleShowPasswordUpdate,
    showPasswordUpdate,
  };
}
