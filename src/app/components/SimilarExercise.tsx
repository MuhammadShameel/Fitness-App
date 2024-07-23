import React from "react";
import HorizontalScrollbar from "./HorizontalScrollbar";
import Loading from "./SkeletonLoading";

const SimilarExercises = ({
  targetMuscleExercises,
  equipmentExercises,
}: any) => (
  <div className="container mx-auto mt-0 lg:mt-24">
    <h1 className="text-black font-bold text-2xl lg:text-4xl mb-8 ml-5">
      Similar <span className="text-red-600 capitalize">Target Muscle</span>{" "}
      exercises
    </h1>
    <div className="flex p-2 relative">
      {targetMuscleExercises.length !== 0 ? (
        <HorizontalScrollbar
          data={targetMuscleExercises}
          bodyPart={undefined}
        />
      ) : (
        <Loading />
      )}
    </div>
    <h1 className="text-black font-bold text-2xl lg:text-4xl mb-8 ml-5 mt-14 lg:mt-24">
      Similar <span className="text-red-600 capitalize">Equipment</span>{" "}
      exercises
    </h1>
    <div className="flex p-2 relative">
      {equipmentExercises.length !== 0 ? (
        <HorizontalScrollbar
          data={equipmentExercises}
          bodyPart={undefined}
          setBodyPart={function (bodyPart: any): void {
            throw new Error("Function not implemented.");
          }}
        />
      ) : (
        <Loading />
      )}
    </div>
  </div>
);

export default SimilarExercises;
