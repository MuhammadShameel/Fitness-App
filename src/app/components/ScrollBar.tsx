"use client";
import React from "react";
import { ScrollMenu } from "react-horizontal-scrolling-menu";
import "react-horizontal-scrolling-menu/dist/styles.css";

import BodyPart from "./BodyPart";
import LeftArrow from "./LeftArrow";
import RightArrow from "./RightArrow";
import ExerciseCard from "./ExerciseCard";

interface ScrollBarProps {
  data: any[];
  bodyPart: any;
  setBodyPart: (bodyPart: any) => void;
}

const ScrollBar: React.FC<ScrollBarProps> = ({
  data,
  bodyPart,
  setBodyPart,
}) => {
  return (
    <ScrollMenu
      wrapperClassName="scrollhost"
      LeftArrow={<LeftArrow />}
      RightArrow={<RightArrow />}
    >
      {data?.map((item: any) => (
        <div
          key={item.id || item}
          itemID={item.id || item}
          title={item.id || item}
          className="my-20"
        >
          {/* <BodyPart item={item} bodyPart={bodyPart} setBodyPart={setBodyPart} /> */}
          {bodyPart ? (
            <BodyPart
              item={item}
              setBodyPart={setBodyPart}
              bodyPart={bodyPart}
            />
          ) : (
            <ExerciseCard exercise={item} />
          )}
        </div>
      ))}
    </ScrollMenu>
  );
};

export default ScrollBar;
