import { loginFormSchema, registerFormSchema } from "@/lib/schema";
import axios from "axios";
import { z } from "zod";

const baseUrl = "http://localhost:8080/apis/v1/";

type registerBody = z.infer<typeof registerFormSchema>;
type loginBody = z.infer<typeof loginFormSchema>;

export const registerApi = async (body: registerBody) => {
  try {
    const response = await axios.post(`${baseUrl}users/register`, body);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(
        error.response?.data?.message || "An error occurred during registration"
      );
    } else {
      // Handle other unexpected errors
      throw new Error("An unexpected error occurred");
    }
  }
};

export const loginApi = async (body: loginBody) => {
  try {
    const response = await axios.post(`${baseUrl}users/login`, body);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(
        error.response?.data?.message || "An error occurred during registration"
      );
    } else {
      // Handle other unexpected errors
      throw new Error("An unexpected error occurred");
    }
  }
};
