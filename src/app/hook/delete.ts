import { useState } from "react";
import api from "../service/api/axios";

export function DeletePage() {
  const [isLoadingDeleteButton, setIsLoadingDeleteButton] = useState(false);

  function cleanLocalStorage() {
    localStorage.removeItem("userId");
  }

  function reloadPage() {
    window.location.reload();
  }

  async function DeleteUser() {
    setIsLoadingDeleteButton(true);
    try {
      const userId = localStorage.getItem("userId");
      await api.delete(`user/${userId}`);
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoadingDeleteButton(false);
      cleanLocalStorage();
      reloadPage();
    }
  }

  return { isLoadingDeleteButton, DeleteUser };
}
