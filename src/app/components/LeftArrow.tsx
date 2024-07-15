import React, { useContext } from "react";
import { VisibilityContext } from "react-horizontal-scrolling-menu";
import Image from "next/image";
import LeftArrowIcon from "../../../public/assets/icons/left-arrow.png";

const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);

  return (
    <div onClick={() => scrollPrev()} className="right-arrow cursor-pointer">
      <Image src={LeftArrowIcon} alt="left-arrow" width={30} height={30} />
    </div>
  );
};

export default LeftArrow;
