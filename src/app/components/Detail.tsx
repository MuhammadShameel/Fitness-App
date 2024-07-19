import React from "react";
import Image from "next/image";

import BodyPartImage from "../../../public/assets/icons/body-part.png";
import TargetImage from "../../../public/assets/icons/target.png";
import EquipmentImage from "../../../public/assets/icons/equipment.png";

const Detail = ({ exerciseDetail }: any) => {
  const { bodyPart, gifUrl, name, target, equipment } = exerciseDetail;

  const extraDetail = [
    {
      icon: BodyPartImage,
      name: bodyPart,
    },
    {
      icon: TargetImage,
      name: target,
    },
    {
      icon: EquipmentImage,
      name: equipment,
    },
  ];
  return (
    <main className="text-gray-600 body-font overflow-hidden">
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <Image
            className="lg:w-1/2 w-full h-auto  object-cover p-5 object-center rounded"
            width={100}
            height={100}
            alt={name}
            src={gifUrl}
          />
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h1 className="text-gray-900 capitalize text-3xl title-font font-medium mb-1">
              {name}
            </h1>

            <p className="leading-relaxed my-10">
              Exercises keep you strong.{" "}
              <span className="capitalize">{name}</span> bup is one of the best{" "}
              exercises to target your {target}. It will help you improve your
              mood and gain energy.
            </p>
            {extraDetail?.map((item) => (
              <div
                key={item.name}
                className="flex-row flex my-4 gap-6 items-center"
              >
                <button className="bg-[#FFF2DB] rounded-full w-[100px] h-[100px] ">
                  <Image
                    src={item.icon}
                    alt={bodyPart}
                    className="w-12  h-12 mx-auto"
                  />
                </button>
                <h2 className="text-gray-900 capitalize text-lg title-font font-medium mb-3">
                  {item.name}
                </h2>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Detail;
