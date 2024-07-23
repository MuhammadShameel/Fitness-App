import Link from "next/link";
import React from "react";

const HorizontalScrollbar = ({ data }: any) => {
  return (
    <div className="flex overflow-x-scroll space-x-4 h-100 w-100 scrollhost p-5">
      {data.map((exercise: any) => (
        <Link
          href={`/exercise/${exercise.id}`}
          key={exercise.id}
          className="w-full"
        >
          <div className="min-w-96 bg-white shadow-lg rounded-lg p-4">
            <img
              src={exercise.gifUrl}
              alt={exercise.name}
              className="h-100 w-full object-cover rounded-t-lg"
            />
            <h2 className="text-lg font-bold mt-2">{exercise.name}</h2>
            <p className="text-gray-500 capitalize">{exercise.bodyPart}</p>
            <p className="text-gray-500 capitalize">{exercise.target}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default HorizontalScrollbar;
