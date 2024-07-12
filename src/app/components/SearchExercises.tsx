import Link from "next/link";
import React from "react";

const SearchExercises = () => {
  return (
    <main className="container mx-auto">
      <h2 className="text-3xl flex justify-center font-semibold my-3 align-middle text-center">
        Awesome Exercises You <br /> Should Know
      </h2>
      <div className="relative">
        <form className="mx-auto">
          <div className="flex">
            <div className="relative w-full my-3">
              <input
                type="search"
                id="location-search"
                className="block w-full z-20 p-3 text-sm h-10 focus:outline-gray-400 bg-[#e8e8e8]"
                placeholder="Search Exercises..."
                required
              />
              <button
                type="submit"
                className="absolute top-0 right-0 bottom-0 p-2.5 h-10 text-sm font-medium text-white bg-[#fe4040] "
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
    </main>
  );
};

export default SearchExercises;
