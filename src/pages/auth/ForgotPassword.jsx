import React from 'react';
import { Form, Input, Button } from 'antd';

import { useForgotPasswordController } from './ForgotPasswordController';
import AuthLayout from './AuthLayout';
import { Link } from 'react-router-dom';
import LoginSvg from '../../assets/svg/loginSvg';
import LeftArrowSvg from '../../assets/svg/leftArrowSvg';
import PasswordUpdateSuccessSvg from '../../assets/svg/passwordUpdateSuccessSvg';
import PasswordErrorSvg from '../../assets/svg/passwordErrorSvg';

const ForgotPassword = () => {
  const {
    step,
    email,
    handleEmailSubmit,
    handleOtpSubmit,
    handlePasswordReset,
    setStep,
    validatePassword,
    passwordValidation,
    navigate,
    isButtonDisabled,
    handleEmailChange,
    handleOtpChange,
    otpError,
    isLoading,
  } = useForgotPasswordController();

  return (
    <AuthLayout>
      <LoginSvg />

      {/* Step 1 - Enter Email */}
      {step === 'email' && (
        <>
          <div className='mt-5 w-full mb-6'>
            <h2 className="text-3xl font-medium text-gray-800 mb-2">Forgot your password</h2>
            <p className="text-gray-500 mb-2 text-sm">Enter your email to reset your password</p>
          </div>

          <Form
            layout="vertical"
            className="w-full flex flex-col"
            onFinish={handleEmailSubmit}
          >
            <Form.Item
              name="email"
              rules={[
                { required: true, message: 'Please enter your email!' },
                {
                  pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: 'Email is invalid',
                },
              ]}
            >
              <Input placeholder="Enter your email" size="large" onChange={(e) => handleEmailChange(e.target.value)} />
            </Form.Item>

            <Button type="primary" htmlType="submit" loading={isLoading} disabled={isButtonDisabled} block>
              Send OTP
            </Button>
          </Form>

          <div className="mt-8 flex items-center gap-2">
            <LeftArrowSvg />
            <Link to="/" className="text-base text-gray-600 hover:underline">
              Go back to login
            </Link>
          </div>

        </>
      )}

      {/* Step 2 - Enter OTP */}
      {step === 'otp' && (
        <>
          <div className='mt-5 w-full mb-6'>
            <h2 className="text-3xl font-semibold text-gray-800 mb-2">Enter OTP</h2>
            <p className="text-gray-500 mb-6 text-sm">
              Enter OTP sent to <span className="font-medium">{email}</span>
            </p>
          </div>

          <Form layout="vertical" className="w-full flex flex-col gap-4" onFinish={handleOtpSubmit}>
            <Form.Item
              name="otp"
              rules={[{ required: true, message: 'Please enter the OTP!' }]}
              validateStatus={otpError ? "error" : ""}
              help={otpError ? "Invalid OTP" : null}
            >
              <Input.OTP length={6} size="large" onChange={(value) => handleOtpChange(value)} />
            </Form.Item>


            <div className="flex justify-end w-full text-sm mb-2">
              <a href="#" className="text-indigo-600 hover:underline text-right">
                Resend OTP?
              </a>
            </div>
            <Button type="primary" htmlType="submit" loading={isLoading} disabled={isButtonDisabled} block>
              Verify OTP
            </Button>
          </Form>

          <div className="flex justify-center w-full text-sm mt-5">
            <p className="text-gray-500 mb-6 text-base " >
              Entered wrong email?{" "}
              <a
                href=""
                className="text-indigo-600 hover:underline text-base"
                onClick={() => setStep('email')}
              >
                Update Email
              </a>
            </p>
          </div>
        </>
      )}

      {/* Step 3 - Reset Password */}
      {step === 'reset' && (
        <>
          <div className='mt-5 w-full mb-6'>
            <h2 className="text-3xl font-semibold text-gray-800 mb-2">Create new password</h2>
          </div>

          <Form
            layout="vertical"
            className="w-full flex flex-col gap-4"
            onFinish={handlePasswordReset}
          >
            <Form.Item
              name="password"
              rules={[{ required: true, message: 'Please enter a new password!' }]}
            >
              <Input.Password
                placeholder="New Password"
                size="large"
                onChange={(e) => validatePassword(e.target.value)} // ✅ live validation
              />
            </Form.Item>

            {/* ✅ Show checklist only when user starts typing */}
            {Object.values(passwordValidation).some((val) => val !== false) && (
              <div className="mb-2">
                <p className="text-gray-600 text-sm mb-1 font-medium">
                  Password should meet following criteria
                </p>
                <ul className="text-sm space-y-1">
                  <li className={passwordValidation.length ? 'text-green-600' : 'text-red-500'}>
                    {passwordValidation.length ? '✔' : '✘'} At least 8 characters
                  </li>
                  <li
                    className={passwordValidation.specialChar ? 'text-green-600' : 'text-red-500'}
                  >
                    {passwordValidation.specialChar ? '✔' : '✘'} At least one special character
                  </li>
                  <li className={passwordValidation.lowercase ? 'text-green-600' : 'text-red-500'}>
                    {passwordValidation.lowercase ? '✔' : '✘'} One lowercase letter
                  </li>
                  <li className={passwordValidation.uppercase ? 'text-green-600' : 'text-red-500'}>
                    {passwordValidation.uppercase ? '✔' : '✘'} One uppercase letter
                  </li>
                </ul>
              </div>
            )}

            <Form.Item
              name="confirmPassword"
              dependencies={['password']}
              rules={[
                { required: true, message: 'Please confirm your password!' },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue('password') === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(
                      new Error('The new password and confirmation do not match')
                    );
                  },
                }),
              ]}
            >
              <Input.Password placeholder="Confirm new password" size="large" />
            </Form.Item>

            <Button type="primary" htmlType="submit" loading={isLoading} block>
              Update Password
            </Button>
          </Form>
        </>
      )}

      {/* Step 4 - Success */}
      {step === 'success' && (
        <div className="flex flex-col items-center">
          <div className='mb-6'>
            <PasswordUpdateSuccessSvg />
          </div>
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Password changed successfully
          </h2>
          <Button type="primary" onClick={() => navigate("/")}>
            Back to login
          </Button>
        </div>
      )}

      {/* Step 5 - Error */}
      {step === 'error' && (
        <div className="flex flex-col items-center">
          <div className='mb-6'>
            <PasswordErrorSvg />
          </div>
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Unexpected error occurred</h2>
          <Button type="primary" onClick={() => setStep('email')}>
            Try Again
          </Button>
        </div>
      )}
    </AuthLayout>
  );
};

export default ForgotPassword;