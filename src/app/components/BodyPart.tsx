import React from "react";
import Image from "next/image";

import Icon from "../../../public/assets/icons/gym.png";

interface BodyPartProps {
  item: any;
  bodyPart: any;
  setBodyPart: (bodyPart: any) => void;
}

const BodyPart: React.FC<BodyPartProps> = ({ item, bodyPart, setBodyPart }) => {
  return (
    <div
      className={`flex flex-col items-center justify-center bg-white w-[270px] m-5 p-20 cursor-pointer ${
        bodyPart === item ? "border-t-4 border-[#ff2625]" : ""
      }`}
      onClick={() => {
        setBodyPart(item);
        window.scrollTo({ top: 1800, left: 100, behavior: "smooth" });
      }}
    >
      <div className="relative w-[40px] h-[40px]">
        <Image src={Icon} alt="" layout="fill" objectFit="contain" />
      </div>
      <div className="text-2xl font-medium  text-center mt-3 text-[#3a1212] capitalize w-max">
        {item}
      </div>
    </div>
  );
};

export default BodyPart;
