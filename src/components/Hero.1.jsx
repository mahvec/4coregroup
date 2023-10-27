import React from "react";
import background from "../assets/back.svg";
import logo from "../assets/logo.svg";

export function Hero() {
  return (
    <div className="w-full h-[100vh]">
      <div
        style={{ backgroundImage: `url(${background})` }}
        className="max-w-[780px] mx-auto bg-cover bg-center bg-no-repeat h-full"
      >
        <div className="max-w-[480px] mx-auto p-5">
          <nav className="w-full flex justify-end">
            <img src={logo} alt="" />
          </nav>
        </div>
        div
      </div>
    </div>
  );
}
