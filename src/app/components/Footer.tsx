import React from "react";
import Image from "next/image";
import Logo from "../../../public/assets/images/Logo-1.png";
import Link from "next/link";

const Footer = () => (
  <div className="mt-20 bg-[#FFF3F4]">
    <div className="flex flex-wrap items-center justify-center gap-10 px-10 pt-6">
      <Image src={Logo} alt="logo" width={200} height={41} />
    </div>
    <p className="text-center text-lg lg:text-2xl mt-10 pb-10">
      Made by{" "}
      <Link
        href={"https://github.com/MuhammadShameel"}
        className="text-[#dc2626]"
      >
        Muhammad Shameel
      </Link>
    </p>
  </div>
);

export default Footer;
