"use client";
import React, { useEffect, useState } from "react";
import { Exercise } from "../types"; // Adjust the import path as needed
import { fetchData, exerciseOptions } from "../utils/fetchData";
import ScrollBar from "./ScrollBar";

interface SearchExercisesProps {
  setExercises: (exercises: Exercise[]) => void;
  bodyPart: string;
  setBodyPart: (bodyPart: string) => void;
}

const SearchExercises: React.FC<SearchExercisesProps> = ({
  setExercises,
  bodyPart,
  setBodyPart,
}) => {
  const [search, setSearch] = useState<string>("");
  const [bodyParts, setBodyParts] = useState<string[]>([]);

  useEffect(() => {
    const fetchBodyParts = async () => {
      const bodyPartsData: string[] = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
        exerciseOptions
      );
      setBodyParts(["all", ...bodyPartsData]);
    };

    const fetchAllExercises = async () => {
      const exercisesData: Exercise[] = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises",
        exerciseOptions
      );
      setExercises(exercisesData);
    };

    fetchBodyParts();
    fetchAllExercises();
  }, [setExercises]);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (search) {
      const exercisesData: Exercise[] = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises",
        exerciseOptions
      );

      const searchedExercises = exercisesData.filter(
        (exercise: Exercise) =>
          exercise.name.toLowerCase().includes(search) ||
          exercise.target.toLowerCase().includes(search) ||
          exercise.equipment.toLowerCase().includes(search) ||
          exercise.bodyPart.toLowerCase().includes(search)
      );

      setSearch("");
      setExercises(searchedExercises);
    }
  };

  return (
    <main className="container mx-auto">
      <h2 className="text-3xl flex justify-center font-semibold my-3 align-middle text-center">
        Awesome Exercises You <br /> Should Know
      </h2>
      <div className="relative">
        <form className="mx-auto" onSubmit={handleSearch}>
          <div className="flex">
            <div className="relative w-full my-5">
              <input
                type="text"
                id="location-search"
                value={search}
                onChange={(e) => setSearch(e.target.value.toLowerCase())}
                className="block w-full z-20 p-3 text-sm h-10 focus:outline-gray-400 bg-[#e8e8e8]"
                placeholder="Search Exercises..."
                required
              />
              <button
                type="submit"
                className="absolute top-0 right-0 bottom-0 p-2.5 h-10 text-sm font-medium text-white bg-[#fe4040]"
              >
                <svg
                  aria-hidden="true"
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-4.35-4.35M18 10a8 8 0 11-16 0 8 8 0 0116 0z"
                  ></path>
                </svg>
                <span className="sr-only">Search</span>
              </button>
            </div>
          </div>
        </form>
      </div>
      <div className="p-5 h-[200px]">
        <ScrollBar
          data={bodyParts}
          setBodyPart={setBodyPart}
          bodyPart={bodyPart}
        />
      </div>
    </main>
  );
};

export default SearchExercises;
