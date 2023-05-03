"use client";
import { useState, ChangeEvent } from "react";
import api from "../service/api/axios";
import z, { ZodError } from "zod";

interface UserProps {
  name: string;
  email: string;
  password: string;
}

const schema = z.object({
  name: z.string().min(4, "O nome deve ter pelo menos 4 caracteres"),
  email: z.string().email("E-mail inválido"),
  password: z.string().min(6, "Senha deve ter pelo menos 6 caracteres"),
});

export function Register() {
  const [userRegister, setUserRegister] = useState<UserProps>({
    name: "",
    email: "",
    password: "",
  });
  const [feedbackMessage, setFeedbackMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showPasswordRegister, setShowPasswordRegister] = useState(false);

  function handleShowPasswordRegister() {
    setShowPasswordRegister((state) => !state);
  }

  function validateFields(name: string, email: string, password: string) {
    try {
      schema.parse({ name, email, password });
      return true;
    } catch (error: unknown) {
      if (error instanceof ZodError) {
        setFeedbackMessage(error.errors[0].message);
        return false;
      }
      throw error;
    }
  }

  function handleChangeNameRegister(event: ChangeEvent<HTMLInputElement>) {
    setUserRegister({ ...userRegister, name: event.target.value });
  }

  function handleChangeEmailRegister(event: ChangeEvent<HTMLInputElement>) {
    setUserRegister({ ...userRegister, email: event.target.value });
  }

  function handleChangePasswordRegister(event: ChangeEvent<HTMLInputElement>) {
    setUserRegister({ ...userRegister, password: event.target.value });
  }

  function cleanInputs() {
    setUserRegister({ name: "", email: "", password: "" });
  }

  function feedbackMessageSucess() {
    setFeedbackMessage("Registrado com sucesso!");
  }

  function feedbackMessageError() {
    setFeedbackMessage("Algo deu Errado!");
  }

  async function handleRegister() {
    setIsLoading(true);
    if (
      !validateFields(
        userRegister.name,
        userRegister.email,
        userRegister.password
      )
    ) {
      setIsLoading(false);
      return;
    }

    try {
      const { name, email, password } = userRegister;

      await api.post("/user/register", { name, email, password });
      feedbackMessageSucess();
    } catch (err) {
      console.error(err);
      feedbackMessageError();
    } finally {
      setIsLoading(false);
      cleanInputs();
    }
  }

  return {
    userRegister,
    feedbackMessage,
    handleChangeNameRegister,
    handleChangeEmailRegister,
    handleChangePasswordRegister,
    handleRegister,
    isLoading,
    showPasswordRegister,
    handleShowPasswordRegister,
  };
}
