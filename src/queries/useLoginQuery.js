import { useMutation } from "@tanstack/react-query";
import { message, notification } from "antd";
import React from "react";
import axios from "axios";

import { useAuthStore } from "../store/authStore";
import { API_ROUTES } from "../api/apiConfig";


const loginApi = async ({ username, password }) => {
    const response = await axios.post(`${API_ROUTES.AUTH.LOGIN}`, { username, password });
    return response.data;
};


// Custom hook to provide notification contextHolder and login mutation
export const useLoginMutation = () => {
    const { setUser } = useAuthStore();
    const [api, contextHolder] = notification.useNotification();

    const mutation = useMutation({
        mutationFn: loginApi,
        onSuccess: (data) => {
            setUser(data);
            if (data.token) {
                document.cookie = `token=${data.token};`;
            }
            message.success("Login successful!");
            api.success({
                message: "Login Successful",
                description: `Welcome, ${data.user.username}!`,
                duration: 3,
            });
        },
        onError: (error) => {
            message.error(error.message || "Login failed");
            api.error({
                message: "Login Failed",
                description: error.response.data.error || "Invalid credentials",
                duration: 3,
            });
        },
    });

    return { ...mutation, contextHolder };
};
