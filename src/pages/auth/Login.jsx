import { Form, Input, Button } from "antd";
import { useLoginController } from "./LoginController";
import AuthLayout from "./AuthLayout";
import { Link } from "react-router-dom";
import LoginSvg from "../../assets/svg/loginSvg";
import EnterLogoSvg from "../../assets/svg/enterLogoSvg";


const Login = () => {
  const { onFinish, isLoading, contextHolder } = useLoginController();

  return (
    <AuthLayout>
      {contextHolder}
      {/* Logo */}
      <LoginSvg />

      {/* Title */}
      <div className="mt-5 w-full mb-6">
        <h2 className="text-3xl font-medium text-gray-800 mb-2">Sign In</h2>
        {/* <p className="text-gray-500 mb-2 text-base " >
          Don’t have an account?{" "}
          <a
            href="#"
            className="text-[#3B3B98] font-medium hover:text-[#2e2e78] hover:underline"
          >
            Register Here
          </a>
        </p> */}
      </div>

      {/* Form */}
      <Form
        name="login"
        layout="vertical"
        className="w-full flex flex-col"
        onFinish={onFinish}
        autoComplete="off"
      >
        {/* Username */}
        <Form.Item
          name="username"
          validateTrigger={["onBlur", "onChange"]}
          rules={[
            {
              required: true,
              message: "Please enter your username or email!",
            },
            {
              pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Email is Invalid",
            },
          ]}
        >
          <Input
            placeholder="Enter username or email"
            size="large"
            className="rounded-lg"
          />
        </Form.Item>

        {/* Password */}
        <Form.Item
          name="password"
          className="!mb-2"
          rules={[{ required: true, message: "Please enter your password!" }]}
        >
          <Input.Password
            placeholder="Enter Password"
            size="large"
            className="rounded-lg"
          />
        </Form.Item>

        {/* Forgot Password */}
        <div className="flex justify-end mb-8">
          <Link
            to="/forgotpassword"
            className="!text-[#3B3B98] text-sm font-medium hover:!text-[#2e2e78] hover:underline"
          >
            Forgot your password?
          </Link>
        </div>

        {/* Submit */}
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="flex items-center justify-center gap-2 !bg-[#3B3C97] !border-[#3B3C97] text-white py-3 rounded-lg font-semibold text-lg shadow-md hover:!bg-[#2f3078] hover:!border-[#2f3078] transition-all"
            loading={isLoading}
            block
          >
            <EnterLogoSvg /> Login
          </Button>
        </Form.Item>
      </Form>
    </AuthLayout>
  );
};

export default Login;
