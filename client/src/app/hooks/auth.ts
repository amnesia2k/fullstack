import { useMutation } from "@tanstack/react-query";
import { api } from "../lib/axios";

type RegisterResponse = {
  message: string;
  _id: string;
  name: string;
  email: string;
  token: string;
};

export const useRegisterUser = () => {
  return useMutation<
    RegisterResponse,
    unknown,
    { name: string; email: string; password: string }
  >({
    mutationFn: async (formData: {
      name: string;
      email: string;
      password: string;
    }) => {
      const res = await api.post<RegisterResponse>(`/register`, formData);
      console.log(res);
      console.log(res.data);
      return res.data;
    },
  });
};
