import axios from "axios";
import { API_ROUTES } from "./apiConfig";

export async function fetchUsers() {
  const response = await axios.get(API_ROUTES.USER.GET_USERS);
  return response.data;
}
