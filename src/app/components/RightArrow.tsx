import React, { useContext } from "react";
import { VisibilityContext } from "react-horizontal-scrolling-menu";
import Image from "next/image";
import RightArrowIcon from "../../../public/assets/icons/right-arrow.png";

const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext);

  return (
    <div onClick={() => scrollNext()} className="left-arrow cursor-pointer">
      <Image src={RightArrowIcon} alt="right-arrow" width={30} height={30} />
    </div>
  );
};

export default RightArrow;
