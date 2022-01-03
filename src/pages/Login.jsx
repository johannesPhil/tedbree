import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import logo from "../images/Logo.png";
import loginArt from "../images/login_art.png";
import { useMutation, useQuery } from "react-query";

import axios from "axios";
import * as apiReq from "../ApiRequests";
import { data } from "autoprefixer";

const Login = () => {
  const navigate = useNavigate();
  const [fields, setFields] = useState({ email: "", password: "" });
  const [credentialError, setCredentialError] = useState("");
  const [inputError, setInputError] = useState("");

  const { mutate: getToken, isLoading: checkUser } = useMutation(
    apiReq.getToken,
    {
      onSuccess: async (data) => {
        axios
          .get("/user", {
            headers: {
              Authorization: `Bearer ${data}`,
            },
          })
          .then((res) => {
            console.log(res.data);
            navigate("/user", { state: { data: res.data.data } });
          });
      },
      onError: async (error) => {
        setCredentialError("Invalid Credentials");
      },
    }
  );

  const inputChange = (event) => {
    const { name, value } = event.target;
    setFields({ ...fields, [name]: value });
  };

  const login = async (e) => {
    e.preventDefault();
    if (fields.email === "" || fields.password === "") {
      setInputError("Please fill all fields");
      return;
    }
    getToken(fields);
  };

  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="art relative hidden lg:block lg:w-1/2 h-screen bg-jb-blue clip-path-blue before:redStripe">
        <div className="mt-10 ml-10 text-white">
          <img src={logo} alt="" />
          for employers
        </div>
        <div className="mt-10 p-8">
          <h1 className="text-5xl text-white font-bold">
            Find the best candidates for your organisation.
          </h1>
          <img src={loginArt} alt="" className=" w-4/5 h-4/5" />
        </div>
      </div>
      <div className="form w-full lg:w-1/2 flex items-center justify-center">
        <span className="bigRing before:ringRed after:ringBlue"></span>
        <form onSubmit={login} className=" w-4/5 md:w-3/5 m-auto">
          <h2 className="text-jb-blue text-3xl">Login</h2>
          <div className="my-5 flex flex-col">
            <label htmlFor="email" className="text-jb-blue">
              Email
            </label>
            <input
              type="text"
              name="email"
              placeholder="Mail Address"
              className="loginInput"
              value={fields.name}
              onChange={inputChange}
            />
          </div>
          <div className="my-5 flex flex-col">
            <label htmlFor="password" className="text-jb-blue">
              Password
            </label>
            <input
              type="password"
              name="password"
              placeholder="password"
              className="loginInput"
              value={fields.name}
              onChange={inputChange}
            />
          </div>
          {credentialError !== "" ? (
            <p className="text-jb-red my-3">{credentialError}</p>
          ) : inputError !== "" ? (
            <p className="text-jb-red my-3">{credentialError}</p>
          ) : (
            ""
          )}
          <div>
            <button className=" w-2/5 bg-jb-blue text-white py-2 rounded-lg">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
