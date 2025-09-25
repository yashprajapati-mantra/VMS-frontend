import { useMutation } from "@tanstack/react-query";
import React from "react";
import axios from "axios";

import { useAuthStore } from "../store/authStore";
import { API_ROUTES } from "../api/apiConfig";
import { useNotify } from "../components/comman/NotificationProvider";

const loginApi = async ({ username, password }) => {
    const response = await axios.post(`${API_ROUTES.AUTH.LOGIN}`, { username, password });
    return response.data;
};


export const useLoginMutation = () => {
    const { setUser } = useAuthStore();
    const { openNotificationWithIcon } = useNotify();

    const mutation = useMutation({
        mutationFn: loginApi,
        onSuccess: (data) => {
            setUser(data);
            if (data.token) {
                document.cookie = `token=${data.token};`;
            }
            openNotificationWithIcon("success", "Login Successful", `Welcome, ${data.user.username}!`);
        },
        onError: (error) => {
            openNotificationWithIcon("error", "Login Failed", error.message || "Login failed");
        },
    });

    return { ...mutation };
};
