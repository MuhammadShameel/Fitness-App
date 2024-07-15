import React from "react";
import { Exercise } from "../types"; // Adjust the import path as needed

interface ExercisesProps {
  exercises: Exercise[];
  bodyPart: string;
  setExercises: React.Dispatch<React.SetStateAction<Exercise[]>>;
}

const Exercises: React.FC<ExercisesProps> = ({ exercises }) => {
  return (
    <div>
      <h1>Exercises are below</h1>
      {exercises?.map((exercise) => (
        <div key={exercise.id}>
          <p>{exercise.name}</p>
        </div>
      ))}
    </div>
  );
};

export default Exercises;
