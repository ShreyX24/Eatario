import { GoogleLogin, useGoogleLogin } from "@react-oauth/google";
import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

const Login = () => {
  const navigate = useNavigate();
  const [googleLoginError, setGoogleLoginError] = useState(false);

  //Loging in with google and extracting user info
  const handleLoginWithGoogle = (token) => {
    if (token) {
      const decoded = jwtDecode(token);
      // console.log(decoded);
      const userInfo = {
        sub: decoded.sub,
        name: decoded.name,
        given_name: decoded.given_name,
        family_name: decoded.family_name,
        picture: decoded.picture,
        email: decoded.email,
        email_verified: decoded.email_verified,
      };
      // console.log(userInfo);

      // login(userInfo);

      const username = userInfo.name;

      navigate(`/u/${username.replace(" ", "")}`); // Redirect to home page
    }
  };

  return (
    <div className="w-screen h-[calc(100vh-128px)] md:h-[calc(100vh-80px)]">
      <div className="w-full h-full p-4 md:flex md:items-center">
        <div className="w-full h-1/2 md:h-full md:w-1/2 md:flex md:justify-end md:items-center">
          <img
            src="./assests/images/loginBg.png"
            alt=""
            className="object-cover h-full w-full md:h-2/3 md:w-1/2"
          />
        </div>
        <div className="w-full h-1/2 md:h-full md:w-1/2 md:flex md:justify-start md:items-center">
          <div className="h-3/4 w-full p-4 flex flex-col gap-4 bg-red-200 md:h-2/3 md:w-1/2 md:justify-center md:items-start md:px-20">
            <div className=" flex flex-col gap-5 ">
              <span className="font-bold text-2xl">Welcome</span>
              <p>Log into your account or create a new one.</p>
            </div>
            <div className="flex md:w-3/4">
              <GoogleLogin
                onSuccess={(credentialResponse) => {
                  // console.log(credentialResponse);
                  handleLoginWithGoogle(credentialResponse.credential);
                }}
                onError={() => {
                  console.log("Login Failed");
                  setGoogleLoginError(true);
                }}
                useOneTap
              />
             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
