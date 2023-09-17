import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../redux/slice/loginSlice";
import { Icon } from "@iconify/react";
import InputField from "../components/common/InputField";
import clsx from "clsx";
import Button from "../components/common/Button";
import { useNavigate } from "react-router";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const status = useSelector((state) => state.login.status);
  const error = useSelector((state) => state.login.error);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = {
      email: email,
      password: password,
    };
    dispatch(loginUser(payload));
  };

  useEffect(() => {
    if (status === "succeeded") {
      navigate("/");
    }
  }, [status]);

  return (
    <div className="py-8 w-96 h-screen mx-auto flex flex-col">
      <h1 className="text-xl mb-4 text-center">Login to your Account</h1>
      <button className="flex items-center gap-2 border-2 px-4 md:px-6 lg:px-12 py-2 justify-center rounded-lg">
        <Icon icon="akar-icons:google-fill" />
        <p className="text-base">Login with Google</p>
      </button>
      <p className="text-xs my-6 text-center">or sign in with email</p>
      <form className="flex flex-col h-1/2 w-full gap-6">
        <InputField
          data={email}
          onChange={handleChangeEmail}
          id="username"
          placeholder="Username"
        />
        <InputField
          data={password}
          onChange={handleChangePassword}
          id="password"
          placeholder="Password"
        />
        <div className="flex flex-grow  flex-col w-full">
          <p
            className={clsx(
              "text-red-600 text-center",
              error ? "block" : "hidden"
            )}
          >
            {error}
          </p>
          <div className="flex flex-grow items-end">
            <Button target={handleSubmit} variant="primary">
              Log In
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
