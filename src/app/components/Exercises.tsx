import React, { useEffect } from "react";
import { Exercise } from "../types";
import ExerciseCard from "./ExerciseCard";
import { fetchData, exerciseOptions } from "../utils/fetchData";

interface ExercisesProps {
  exercises: Exercise[];
  bodyPart: string;
  setExercises: React.Dispatch<React.SetStateAction<Exercise[]>>;
}

const Exercises: React.FC<ExercisesProps> = ({
  exercises,
  setExercises,
  bodyPart,
}) => {
  useEffect(() => {
    const fetchExercisesData = async () => {
      let exercisesData = [];

      if (bodyPart === "all") {
        exercisesData = await fetchData(
          "https://exercisedb.p.rapidapi.com/exercises",
          exerciseOptions
        );
      } else {
        exercisesData = await fetchData(
          `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`,
          exerciseOptions
        );
      }

      setExercises(exercisesData);
    };

    fetchExercisesData();
  }, [bodyPart]);
  return (
    <main>
      <div className="flex flex-col items-center mt-60">
        <h2 className="text-3xl font-semibold mb-5">Showing Results</h2>
        <div className="flex flex-wrap justify-center">
          {exercises.map((exercise) => (
            <ExerciseCard key={exercise.id} exercise={exercise} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default Exercises;
