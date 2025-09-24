import axios from "axios";
import { API_ROUTES } from "./apiConfig";

export const fetchRolesAndPermissions = async () => {
    const response = await axios.get("https://dummyjson.com/posts");
    return response.data;
};