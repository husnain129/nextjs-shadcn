import { API_URL } from "@/setting";
import axios, { AxiosInstance } from "axios";

interface ApiResponse {
  data: any;
  error: any;
}

export interface IApiFactory {
  get: (url: string) => Promise<any>;
  post: (url: string, data: any) => Promise<any>;
  patch: (url: string, data: any) => Promise<any>;
  delete: (url: string) => Promise<void>;
}

const axiosInstance: AxiosInstance = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${
      typeof localStorage !== "undefined" &&
      localStorage?.getItem("access_token")
    }`,
  },
});

export const ApiFactory = (): IApiFactory => {
  const request = async (
    url: string,
    method: string = "GET",
    data: any = null
  ): Promise<any> => {
    try {
      const response: ApiResponse = await axiosInstance({
        method,
        url,
        data,
      });
      return response.data;
    } catch (error: any) {
      throw error.response ? error.response.data : error;
    }
  };

  return {
    get: async (url: string) => request(url, "GET"),
    post: async (url: string, data: any) => request(url, "POST", data),
    patch: async (url: string, data: any) => request(url, "PATCH", data),
    delete: async (url: string) => request(url, "DELETE"),
  };
};
