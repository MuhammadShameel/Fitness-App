import React from "react";

const ExerciseVideo = ({ exerciseVideos, name }: any) => {
  return (
    <div className="container mx-auto">
      <div className="mt-20 lg:mt-[203px] p-5">
        <h1 className="text-2xl lg:text-4xl font-bold text-black mb-8">
          Watch <span className="text-red-600 capitalize">{name}</span> exercise
          videos
        </h1>
        <div className="flex flex-col lg:flex-row gap-0 lg:gap-[110px] justify-start flex-wrap items-center">
          {exerciseVideos?.slice(0, 3)?.map((item: any, index: any) => (
            <a
              key={index}
              className="exercise-video"
              href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="rounded-tl-[20px]"
                src={item.video.thumbnails[0].url}
                alt={item.video.title}
              />
              <div>
                <h2 className="text-lg lg:text-2xl font-semibold text-nowrap text-black">
                  {item.video.title}
                </h2>
                <p className="text-sm text-black">{item.video.channelName}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExerciseVideo;
