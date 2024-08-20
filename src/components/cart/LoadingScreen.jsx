import React from "react";

const LoadingScreen = () => {
  return (
    <div className="w-screen h-[calc(100vh-128px)] md:h-[calc(100vh-80px)]">
      <div className="w-full h-full flex justify-center items-center">
        <div className="flex justify-center items-center gap-4">
        <video width="100%" autoPlay loop muted>
              <source src="./assests/icons/orderCreatingLoading.webm" type="video/webm" />
            
            </video>
          <span className="text-2xl text-gray-500">
            
          </span>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
