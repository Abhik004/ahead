import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="mt-4 border-gray-300 py-12 px-4 md:px-12 border-t font-sans">
      <p className="text-xl font-bold text-violet-700 flex justify-center">
        <Image width={60} height={60} alt="logo" src="/logo.png" className="rounded-lg" />
      </p>
      <p className="text-2xl md:text-3xl font-bold text-[#6748eb] flex justify-center mt-2 md:mt-4">
        ahead
      </p>
      <div className="flex flex-col md:flex-row gap-4 md:gap-8 items-center justify-center mt-5 font-semibold">
        <div className="flex items-center">
          <div className="bg-[#97eed6] rounded-full p-1 flex items-center justify-center">
            <Image width={21} height={21} alt="location" src="/location.jpg" />
          </div>
          <div className="pl-2">AugustraBe 26, 10117 Berlin</div>
        </div>
        <div className="flex items-center">
          <div className="bg-[#97eed6] rounded-full p-1 flex items-center justify-center">
            <Image width={21} height={21} alt="mail" src="/mail.jpg" />
          </div>
          <div className="pl-2">hi@ahead-app.com</div>
        </div>
      </div>
      <div className="flex justify-center mt-5 md:mt-8">
        <Image
          src="/appleStoreIcon.svg"
          alt="download applestore"
          width={150}
          height={150}
        />
      </div>
    </footer>
  );
};

export default Footer;
