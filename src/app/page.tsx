"use client";
import { useState } from "react";
import Navbar from "./components/Navbar";
import SearchExercises from "./components/SearchExercises";
import Exercises from "./components/Exercises";

interface Exercise {
  id: string;
  name: string;
  target: string;
  equipment: string;
  bodyPart: string;
}

export default function Home() {
  const [exercises, setExercises] = useState([]);
  const [bodyPart, setBodyPart] = useState("all");

  return (
    <main>
      <Navbar />
      <SearchExercises
        setExercises={setExercises}
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
      />
      <Exercises
        setExercises={setExercises}
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
      />
    </main>
  );
}
