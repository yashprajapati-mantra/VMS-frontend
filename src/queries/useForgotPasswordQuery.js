import { useMutation } from "@tanstack/react-query";
import { message } from "antd";
import { API_ROUTES } from "../api/apiConfig";

// STEP 1 - Request OTP (send email)
// Static OTP request for development; API call commented out
const requestOtpApi = async ({ email }) => {
  // const response = await axios.post(`${API_ROUTES.AUTH.FORGOT_PASSWORD}`, { email });
  // return response.data;
  // Simulate OTP sent
  if (email === "admin@admin.com") {
    return { success: true, message: "OTP sent to your email!" };
  } else {
    throw new Error("Email not found");
  }
};

export const useRequestOtpMutation = (onSuccessCallback) => {
  return useMutation({
    mutationFn: requestOtpApi,
    onSuccess: (data) => {
      message.success("OTP sent to your email!");
      if (onSuccessCallback) onSuccessCallback(data);
    },
    onError: (error) => {
      message.error(error.response?.data?.message || "Failed to send OTP");
    },
  });
};

// STEP 2 - Verify OTP
// Static OTP verification for development; API call commented out
const verifyOtpApi = async ({ email, otp }) => {
  // const response = await axios.post(`${API_ROUTES.AUTH.VERIFY_OTP}`, { email, otp });
  // return response.data;
  // Simulate OTP verification
  if (email === "admin@admin.com" && otp === "123456") {
    return { success: true, message: "OTP verified successfully!" };
  } else {
    throw new Error("Invalid OTP");
  }
};

export const useVerifyOtpMutation = (onSuccessCallback) => {
  return useMutation({
    mutationFn: verifyOtpApi,
    onSuccess: (data) => {
      message.success("OTP verified successfully!");
      if (onSuccessCallback) onSuccessCallback(data);
    },
    onError: (error) => {
      message.error(error.response?.data?.message || "Invalid OTP");
    },
  });
};

// STEP 3 - Reset Password
// Static password reset for development; API call commented out
const resetPasswordApi = async ({ email, password }) => {
  // const response = await axios.post(`${API_ROUTES.AUTH.RESET_PASSWORD}`, {
  //   email,
  //   password,
  // });
  // return response.data;
  // Simulate password reset
  if (email === "admin@admin.com" && password.length >= 6) {
    return { success: true, message: "Password reset successful!" };
  } else {
    throw new Error("Password reset failed");
  }
};

export const useResetPasswordMutation = (onSuccessCallback) => {
  return useMutation({
    mutationFn: resetPasswordApi,
    onSuccess: (data) => {
      message.success("Password reset successful!");
      if (onSuccessCallback) onSuccessCallback(data);
    },
    onError: (error) => {
      message.error(error.response?.data?.message || "Password reset failed");
    },
  });
};
