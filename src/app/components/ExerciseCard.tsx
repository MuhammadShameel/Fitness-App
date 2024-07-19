import React from "react";
import Link from "next/link";
import Image from "next/image";

const ExerciseCard = ({ exercise }: any) => {
  return (
    <main>
      <div className="flex flex-col items-center justify-center bg-white w-[270px] m-5 p-5 cursor-pointer shadow-md hover:shadow-lg transition-shadow duration-300">
        <Link href={`/exercise/${exercise.id}`} className="w-full">
          <div className="flex flex-col ">
            <div className="relative w-full h-[200px]">
              <Image
                src={exercise.gifUrl}
                alt={exercise.name}
                layout="fill"
                objectFit="cover"
                className="rounded-t-md p-5"
              />
            </div>
            <div className="flex justify-start mt-2">
              <button className="p-2  text-white text-xs rounded-full capitalize bg-[#ffa9a9]">
                {exercise.bodyPart}
              </button>

              <button className="p-2 mx-1 text-white text-xs  rounded-full capitalize bg-[#fcc757]">
                {exercise.target}
              </button>
            </div>

            <div className="mt-3 text-start">
              <h3 className="text-lg font-medium text-gray-800 capitalize">
                {exercise.name}
              </h3>
            </div>
          </div>
        </Link>
      </div>
    </main>
  );
};

export default ExerciseCard;
