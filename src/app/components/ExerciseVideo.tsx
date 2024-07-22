import React from "react";

const ExerciseVideo = ({ exerciseVideos, name }: any) => {
  return (
    <div className="container mx-auto">
      <div className=" p-5">
        <h1 className="text-2xl lg:text-4xl font-bold text-black mb-8">
          Watch <span className="text-red-600 capitalize">{name}</span> exercise
          videos
        </h1>
        <div className="flex flex-wrap gap-6 justify-center items-center">
          {exerciseVideos?.slice(0, 3)?.map((item: any, index: any) => (
            <a
              key={index}
              className="exercise-video block max-w-xs bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform hover:scale-105"
              href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="w-full h-48 object-cover"
                src={item.video.thumbnails[0].url}
                alt={item.video.title}
              />
              <div className="p-4">
                <h2 className="text-lg lg:text-xl font-semibold text-black truncate">
                  {item.video.title}
                </h2>
                <p className="text-sm text-gray-600">
                  {item.video.channelName}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExerciseVideo;
