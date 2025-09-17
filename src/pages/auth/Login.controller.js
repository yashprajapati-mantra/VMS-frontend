import axios from "axios";

export const loginController = async (email, password) => {
    try {
        const response = await axios.post("https://dummyjson.com/auth/login", {
            username: email,
            password: password,
        });

        // You can handle storing token or user info here
        localStorage.setItem("token", response.data.token);

        return { success: true, data: response.data };
    } catch (error) {
        return {
            success: false,
            message: error.response?.data?.message || "Login failed",
        };
    }
};

