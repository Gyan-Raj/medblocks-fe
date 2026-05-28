// app\lib\api.ts
import axios from "axios";
import ENV_CONSTANTS from "../env.constants";

export const api = axios.create({
  baseURL: ENV_CONSTANTS.NEXT_PUBLIC_BASE_URL,
  withCredentials: true, // send the httpOnly cookie on every request
});
