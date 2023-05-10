import React from 'react';

import { AiOutlineInfoCircle } from 'react-icons/ai';

const Billboard = () => {
  return (
    <div className="relative h-[56.25vw]">
      <video
        className="w-full h-[56.25vw] object-cover brightness-[60%]"
        autoPlay
        muted
        loop
        poster="https://upload.wikimedia.org/wikipedia/commons/7/70/Big.Buck.Bunny.-.Opening.Screen.png"
        src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
      ></video>
      <div className="absolute top-[30%] md:top-[40%] ml-4 md:ml-16 w-full">
        <p className="text-white text-1xl md:text-5xl h-full w-[50%] lg:text-6xl font-bold drop-shadow-xl">
          Big Buck Bunny
        </p>
        <p className="text-white text-[8px] md:text-lg mt-3 md:mt-8 w-[90%] md:w-[90%] lg:w-[50%] drop-shadow-xl">
          Three rodents amuse themselves by harassing creatures of the forest.
          However, when they mess with a bunny, he decides to teach them a
          lesson.
        </p>
        <div className="flex flex-row items-center mt-3 md:mt-4 gap-3">
          <button
            className="
              bg-white
              text-white
              bg-opacity-30
              rounded-md
              py-1
              md:py-2
              px-2
              md:px-4
              w-auto
              text-xs
              lg:text-lg
              font-semibold
              flex
              flex-row
              items-center
              hover:bg-opacity-20
              transition"
          >
            <AiOutlineInfoCircle className="mr-1" />
            More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default Billboard;
