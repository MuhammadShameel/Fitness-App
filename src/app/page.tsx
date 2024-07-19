"use client";
import { useState } from "react";
import SearchExercises from "./components/SearchExercises";
import Exercises from "./components/Exercises";
import { Exercise } from "./types"; // Adjust the import path as needed

export default function Home() {
  const [exercises, setExercises] = useState<Exercise[]>([]);
  const [bodyPart, setBodyPart] = useState<string>("all");
  console.log(bodyPart);
  return (
    <main>
      <SearchExercises
        setExercises={setExercises}
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
      />
      <Exercises
        setExercises={setExercises}
        bodyPart={bodyPart}
        exercises={exercises}
      />
    </main>
  );
}
