"use client";
import { useState, ChangeEvent } from "react";
import api from "../service/api/axios";
import { ZodError, z } from "zod";
interface UserProps {
  email: string;
  password: string;
}

const schema = z.object({
  email: z.string().email("E-mail inválido"),
  password: z.string().min(6, "Senha deve ter pelo menos 6 caracteres"),
});

export function FormLogin() {
  const [user, setUser] = useState<UserProps>({ email: "", password: "" });
  const [feedbackMessage, setFeedbackMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  function handleShowPassword() {
    setShowPassword((state) => !state);
  }

  function validateFields(email: string, password: string) {
    try {
      schema.parse({ email, password });
      return true;
    } catch (error: unknown) {
      if (error instanceof ZodError) {
        setFeedbackMessage(error.errors[0].message);
        return false;
      }
      throw error;
    }
  }

  function handleChangeEmail(event: ChangeEvent<HTMLInputElement>) {
    setUser({ ...user, email: event.target.value });
  }

  function handleChangePassword(event: ChangeEvent<HTMLInputElement>) {
    setUser({ ...user, password: event.target.value });
  }
  function cleanInputs() {
    setUser({ email: "", password: "" });
  }

  function feedbackMessageError() {
    setFeedbackMessage("Usuario não existe!");
  }
  function setLocalStorage(id: string) {
    localStorage.setItem("userId", id);
  }

  async function handleLogin() {
    setIsLoading(true);
    if (!validateFields(user.email, user.password)) {
      setIsLoading(false);
      return;
    }

    try {
      const email = user.email;
      const password = user.password;

      const data: any = await api.post("/user/authenticate", {
        email: email,
        password: password,
      });
      const userId = data.data?.user?.id;
      setLocalStorage(userId);
    } catch (err) {
      console.error(err);
      feedbackMessageError();
    } finally {
      setIsLoading(false);
      cleanInputs();
    }
  }

  return {
    user,
    feedbackMessage,
    handleChangeEmail,
    handleChangePassword,
    handleLogin,
    isLoading,
    showPassword,
    handleShowPassword,
  };
}
