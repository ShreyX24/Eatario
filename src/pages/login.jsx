import { useGoogleLogin } from "@react-oauth/google";
import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../lib/authContext";


const Login = () => {

  const { setIsLoggedIn } = useAuth();
  const navigate = useNavigate();

  //Loging in with google and extracting user info
  const googleLogin = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      // console.log(tokenResponse);

      
      try {
        const userInfoResponse = await fetch(
          "https://www.googleapis.com/oauth2/v3/userinfo",
          {
            headers: {
              Authorization: `Bearer ${tokenResponse.access_token}`,
            },
          }
        );

        if (userInfoResponse.ok) {
          const userInfo = await userInfoResponse.json();
          // console.log("User Info:", userInfo);

          setIsLoggedIn(true); // Set login state to true
          navigate('/home'); // Redirect to home page
          // Here you can handle the user info, e.g., save it to your app's state or send it to your backend
        } else {
          console.error("Failed to fetch user info");
        }
      } catch (error) {
        console.error("Error fetching user info:", error);
      }
    },
    onError: (error) => console.error("Login Failed:", error),
  });

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
          <div className="h-3/4 w-full p-4 flex flex-col gap-4 bg-red-200 md:h-2/3 md:w-1/2 md:justify-center md:items-center">
            <div className=" flex flex-col gap-5 ">
              <span className="font-bold text-2xl">Welcome</span>
              <p>Log into your account or create a new one.</p>
            </div>
            <div className="flex flex-col gap-2 md:w-3/4">
              <div className="p-4 h-[40px] w-3/4 rounded flex items-center gap-6  bg-slate-200 hover:bg-slate-100 md:w-full">
                <img
                  src="./assests/icons/google.png"
                  alt=""
                  height="24"
                  width="24"
                  className="object-contain"
                />
                <span className="cursor-pointer" onClick={() => googleLogin()}>
                  Sign in with Google
                </span>
              </div>
              <div className="p-4 h-[40px] w-3/4 rounded flex items-center gap-6  bg-slate-200 hover:bg-slate-100 md:w-full">
                <img
                  src="./assests/icons/facebook.png"
                  alt=""
                  height="24"
                  width="24"
                  className="object-contain"
                />
                <span className="cursor-pointer">Sign in with Facebook</span>
              </div>
            </div>
            <div className="md:w-3/4">
              <span className="p-4 text-sm">
                New User?{" "}
                <NavLink to="/register" className="underline">
                  Register
                </NavLink>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
