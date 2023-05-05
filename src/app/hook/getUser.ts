import { useEffect, useState } from "react";
import api from "../service/api/axios";

interface UserProps {
  id: string;
  name: string;
  email: string;
  password_hash: string;
  create_at: Date;
}

export function GetUser() {
  const [user, setUser] = useState<UserProps[] | any>([]);

  async function getUser() {
    try {
      const id = localStorage.getItem("userId");
      const user: any = await api.get(`/user/${id}`);
      const userResponse = user.data?.user;
      setUser(userResponse);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getUser();
  }, []);

  return { user };
}
