import React from "react";
import background from "../assets/back.svg";
import logo from "../assets/logo.svg";

function Hero() {
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

        <div className="max-w-[480px] mx-auto p-5">
          <p className="font-semibold text-[22px]">Dennis Obeto</p>
          <p className="bg-[#F88600] text-sm">Director, C.O.O.</p>
        </div>

        <div className="w-full bg-gray-600">
          <div className="max-w-[480px] mx-auto p-5">
            <p className="flex items-center">
              <span className="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                >
                  <path
                    d="M10.1251 1.50006C10.1251 1.50006 11.8752 1.65916 14.1025 3.88655C16.3299 6.11393 16.489 7.86402 16.489 7.86402"
                    stroke="white"
                    strokeWidth="1.125"
                    strokeLinecap="round"
                  />
                  <path
                    d="M10.6553 4.15173C10.6553 4.15173 11.3977 4.36387 12.5114 5.47756C13.6251 6.59125 13.8373 7.33371 13.8373 7.33371"
                    stroke="white"
                    strokeWidth="1.125"
                    strokeLinecap="round"
                  />
                  <path
                    d="M11.3255 11.2704L10.9177 10.883L11.3255 11.2704ZM11.6671 10.9108L12.075 11.2982L11.6671 10.9108ZM13.4796 10.6592L13.199 11.1467L13.199 11.1467L13.4796 10.6592ZM14.9125 11.484L14.6319 11.9715L14.9125 11.484ZM15.3163 14.0688L15.7241 14.4562L15.3163 14.0688ZM14.2508 15.1905L13.843 14.8031L14.2508 15.1905ZM13.2572 15.7223L13.3125 16.2821L13.2572 15.7223ZM5.86152 12.3564L6.26937 11.969L5.86152 12.3564ZM2.25217 5.22445L1.69047 5.2546L1.69047 5.2546L2.25217 5.22445ZM7.10814 6.37733L7.51598 6.76472V6.76472L7.10814 6.37733ZM7.22568 4.26983L7.68498 3.94509L7.22568 4.26983ZM6.27994 2.93221L5.82065 3.25695L5.82065 3.25695L6.27994 2.93221ZM3.94609 2.70648L4.35393 3.09387L4.35393 3.09387L3.94609 2.70648ZM2.76889 3.94585L2.36104 3.55847L2.36104 3.55847L2.76889 3.94585ZM8.29734 9.79192L8.70519 9.40454L8.29734 9.79192ZM11.7334 11.6578L12.075 11.2982L11.2593 10.5234L10.9177 10.883L11.7334 11.6578ZM13.199 11.1467L14.6319 11.9715L15.1931 10.9965L13.7602 10.1717L13.199 11.1467ZM14.9084 13.6814L13.843 14.8031L14.6587 15.5779L15.7241 14.4562L14.9084 13.6814ZM13.202 15.1625C12.1257 15.2688 9.3175 15.1781 6.26937 11.969L5.45367 12.7438C8.77571 16.2413 11.9446 16.4171 13.3125 16.2821L13.202 15.1625ZM6.26937 11.969C3.36227 8.90838 2.87464 6.32667 2.81386 5.1943L1.69047 5.2546C1.76492 6.64152 2.3538 9.48019 5.45367 12.7438L6.26937 11.969ZM7.30087 6.99119L7.51598 6.76472L6.70029 5.98995L6.48518 6.21642L7.30087 6.99119ZM7.68498 3.94509L6.73924 2.60747L5.82065 3.25695L6.76639 4.59456L7.68498 3.94509ZM3.53824 2.31909L2.36104 3.55847L3.17673 4.33324L4.35393 3.09387L3.53824 2.31909ZM6.89303 6.60381C6.48518 6.21642 6.48466 6.21697 6.48414 6.21752C6.48396 6.21771 6.48344 6.21826 6.48308 6.21864C6.48237 6.2194 6.48164 6.22018 6.4809 6.22097C6.47943 6.22256 6.4779 6.22422 6.47633 6.22595C6.47318 6.22941 6.46984 6.23316 6.46634 6.23719C6.45932 6.24526 6.45161 6.25448 6.44337 6.2649C6.42688 6.28573 6.40823 6.31134 6.38867 6.34191C6.34943 6.40323 6.30688 6.48398 6.27084 6.58525C6.19757 6.79118 6.15763 7.06387 6.20753 7.40443C6.30557 8.07351 6.74398 8.9733 7.8895 10.1793L8.70519 9.40454C7.63445 8.27725 7.37071 7.58298 7.32065 7.24133C7.2965 7.07652 7.32103 6.98968 7.33074 6.96241C7.33619 6.94708 7.33976 6.94282 7.33627 6.94827C7.33458 6.95092 7.33121 6.95588 7.32553 6.96305C7.32269 6.96664 7.31928 6.97078 7.3152 6.97547C7.31316 6.97782 7.31095 6.9803 7.30857 6.98292C7.30738 6.98423 7.30614 6.98557 7.30486 6.98695C7.30422 6.98764 7.30356 6.98834 7.3029 6.98905C7.30257 6.9894 7.30206 6.98994 7.3019 6.99011C7.30139 6.99065 7.30087 6.99119 6.89303 6.60381ZM7.8895 10.1793C9.03164 11.3818 9.89423 11.8545 10.5524 11.9614C10.8901 12.0162 11.1634 11.9724 11.3704 11.8908C11.4716 11.8509 11.5517 11.804 11.6117 11.7614C11.6417 11.7401 11.6667 11.72 11.6868 11.7023C11.6969 11.6935 11.7058 11.6852 11.7135 11.6777C11.7174 11.674 11.721 11.6705 11.7243 11.6671C11.726 11.6655 11.7275 11.6639 11.7291 11.6623C11.7298 11.6615 11.7305 11.6608 11.7313 11.66C11.7316 11.6596 11.7322 11.6591 11.7323 11.6589C11.7329 11.6583 11.7334 11.6578 11.3255 11.2704C10.9177 10.883 10.9182 10.8825 10.9187 10.8819C10.9189 10.8818 10.9194 10.8812 10.9197 10.8809C10.9204 10.8802 10.9211 10.8795 10.9217 10.8788C10.923 10.8775 10.9243 10.8762 10.9256 10.8749C10.9281 10.8724 10.9305 10.87 10.9327 10.8678C10.9373 10.8634 10.9413 10.8597 10.9449 10.8566C10.9521 10.8503 10.9575 10.8462 10.9609 10.8438C10.9679 10.8388 10.9672 10.8405 10.9577 10.8442C10.9432 10.85 10.875 10.874 10.7327 10.8509C10.4308 10.8019 9.7793 10.5354 8.70519 9.40454L7.8895 10.1793ZM6.73924 2.60747C5.97904 1.53229 4.45788 1.35089 3.53824 2.31909L4.35393 3.09387C4.74606 2.68103 5.43638 2.71346 5.82065 3.25695L6.73924 2.60747ZM2.81386 5.1943C2.79778 4.89483 2.92819 4.59491 3.17673 4.33324L2.36104 3.55847C1.95915 3.98158 1.65369 4.56935 1.69047 5.2546L2.81386 5.1943ZM13.843 14.8031C13.6337 15.0234 13.4148 15.1415 13.202 15.1625L13.3125 16.2821C13.8728 16.2268 14.3262 15.928 14.6587 15.5779L13.843 14.8031ZM7.51598 6.76472C8.24166 6.00072 8.29303 4.80509 7.68498 3.94509L6.76639 4.59456C7.083 5.04236 7.03444 5.63815 6.70029 5.98995L7.51598 6.76472ZM14.6319 11.9715C15.2475 12.3259 15.368 13.1976 14.9084 13.6814L15.7241 14.4562C16.7028 13.4258 16.4178 11.7014 15.1931 10.9965L14.6319 11.9715ZM12.075 11.2982C12.3641 10.9938 12.8145 10.9254 13.199 11.1467L13.7602 10.1717C12.9364 9.69753 11.9146 9.83345 11.2593 10.5234L12.075 11.2982Z"
                    fill="white"
                  />
                </svg>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;