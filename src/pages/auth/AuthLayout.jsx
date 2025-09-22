import React from "react";
import LoginImage from "@/assets/images/LoginImage.jpg";
const AuthLayout = ({ children }) => {
  return (
   <div className="min-h-screen p-2 flex">
        {/* Left Side - Camera / Branding */}
        {/* <div className="hidden md:flex flex-col justify-center items-center w-1/2 bg-gray-900 relative">
          <img
            src="/vite.svg"
            alt="Security Camera"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-6 flex flex-wrap justify-center gap-6 w-full px-6">
            <img src="/vite.svg" alt="logo1" className="h-6 opacity-70" />
            <img src="/vite.svg" alt="logo2" className="h-6 opacity-70" />
            <img src="/vite.svg" alt="logo3" className="h-6 opacity-70" />
            <img src="/vite.svg" alt="logo4" className="h-6 opacity-70" />
          </div>
        </div> */}
        <div className="w-1/2 relative overflow-hidden hidden md:flex">
            {/* Background Image Container */}
            <img src={LoginImage} height="auto" width="auto" alt="Logo" className="rounded-xl"/>

            {/* Bottom Logo Section */}
            <div className="absolute bottom-8 left-0 right-0 px-8">
                <div className="grid grid-cols-3 gap-4 text-center">
                    {/* First Row */}
                    <div className="flex items-center justify-center space-x-2">
                        <div className="w-4 h-4 bg-white rounded opacity-80"></div>
                        <span className="text-white text-sm opacity-80 font-medium">LOGOIPSUM</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2">
                        <div className="w-4 h-4 bg-white rounded opacity-60"></div>
                        <span className="text-white text-sm opacity-60">LOGOIPSUM</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2">
                        <div className="w-4 h-4 bg-blue-300 rounded opacity-70"></div>
                        <span className="text-white text-sm opacity-70">LOGOIPSUM</span>
                    </div>

                    {/* Second Row */}
                    <div className="flex items-center justify-center space-x-2 mt-2">
                        <div className="w-3 h-3 bg-white rounded-full opacity-60"></div>
                        <span className="text-white text-sm opacity-60">Logoipsum</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2 mt-2">
                        <div className="w-3 h-3 bg-purple-300 rounded-full opacity-70"></div>
                        <span className="text-white text-sm opacity-70">Logoipsum</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2 mt-2">
                        <div className="w-3 h-3 bg-white rounded-full opacity-80"></div>
                        <span className="text-white text-sm opacity-80 font-medium">Logoipsum</span>
                    </div>
                </div>
            </div>
        </div>

        {/* Right Side - Dynamic Form Content */}
        <div className="flex flex-col justify-center items-center w-full md:w-1/2 p-10">
          <div className="flex flex-col items-center w-full max-w-md">
            {children}
          </div>
        </div>
      </div>
  );
};

export default AuthLayout;
