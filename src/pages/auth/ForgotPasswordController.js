import { useEffect, useState } from 'react';
import {
  useRequestOtpMutation,
  useResetPasswordMutation,
  useVerifyOtpMutation,
} from '../../queries/useForgotPasswordQuery';
import { useNavigate } from 'react-router-dom';

export const useForgotPasswordController = () => {
  const navigate = useNavigate();

  const [step, setStep] = useState('email');
  // Steps: "email" | "otp" | "reset" | "success" | "error"
  const [email, setEmail] = useState('');
  const [passwordValidation, setPasswordValidation] = useState({
    length: false,
    specialChar: false,
    lowercase: false,
    uppercase: false,
  });
  const [otpError, setOtpError] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const validatePassword = (password) => {
    const validation = {
      length: password.length >= 8,
      specialChar: /[!@#$%^&*(),.?":{}|<>]/.test(password),
      lowercase: /[a-z]/.test(password),
      uppercase: /[A-Z]/.test(password),
    };
    setPasswordValidation(validation);
    return validation;
  };

  // Step 1 - Request OTP
  const requestOtpMutation = useRequestOtpMutation(
    () => setStep('otp'), // ✅ On success → go to OTP step
    () => setStep('error') // ❌ On error → show error screen
  );

  const handleEmailSubmit = (values) => {
    setEmail(values.email);
    requestOtpMutation.mutate({ email: values.email });
  };

  // Step 2 - Verify OTP
  const verifyOtpMutation = useVerifyOtpMutation(
    () => {
      setOtpError(false);     // clear error on success
      setStep('reset');       // ✅ go to reset step
    },
    () => {
      setOtpError(true);
    }
  );

  const handleOtpSubmit = (values) => {
    setOtpError(false); // reset before submit
    verifyOtpMutation.mutate({ email, otp: values.otp });
  };

  // Step 3 - Reset Password
  const resetPasswordMutation = useResetPasswordMutation(
    () => setStep('success'), // ✅ On success → show success screen
    () => setStep('error') // ❌ On error → show error screen
  );

  const handlePasswordReset = (values) => {
    resetPasswordMutation.mutate({
      email,
      password: values.password,
    });
  };

  const handleEmailChange = (value) => {
    setIsButtonDisabled(value.trim() === ""); // disable if empty
  };

  // When OTP is typed
  const handleOtpChange = (value) => {
    setIsButtonDisabled(value.length !== 6); // disable unless 6 digits
  };

  useEffect(() => {
    // Reset button disabled state when step changes
    setIsButtonDisabled(true);
  }, [step]);

  return {
    step,
    email,
    setStep,
    handleEmailSubmit,
    handleOtpSubmit,
    handlePasswordReset,
    passwordValidation,
    validatePassword,
    navigate,
    otpError,
    isButtonDisabled,
    handleEmailChange,
    handleOtpChange,
    isLoading:
      requestOtpMutation.isLoading ||
      verifyOtpMutation.isLoading ||
      resetPasswordMutation.isLoading,
  };
};
