import Image from "next/image";
import Wrap from "@/components/Wrap";
import { useState } from "react";

export default function Gallery() {
  const [current, setCurrent] = useState(1);
  const images = [...Array(19).keys()].map((number) => {
    return number + 1;
  });

  const lastImage = images[images.length - 1];

  const previous = () => {
    if (current == 1) {
      setCurrent(lastImage);
    } else {
      setCurrent(current - 1);
    }
  };

  const next = () => {
    if (current == lastImage) {
      setCurrent(1);
    } else {
      setCurrent(current + 1);
    }
  };

  return (
    <section className="my-section">
      <Wrap className="max-w-[880px] relative">
        <div className="w-full aspect-[4/3] bg-gray-900 mb-3 md:mb-5 rounded-lg relative overflow-hidden">
          {images.map((number) => (
            <Image
              alt={`Maison 1870, photo ${number}`}
              className={`
                  object-contain transition-opacity duration-150
                  absolute w-full h-full left-0 top-0
                ${current == number ? "opacity-100" : "opacity-0"}
              `}
              height={600}
              key={number}
              sizes="(max-width: 880px) 100vw, 800px"
              src={`/photos/${number}.jpg`}
              width={800}
            />
          ))}
        </div>

        <button
          className="
            w-12 h-12 rounded-full shadow-md center pr-1
            bg-white text-gray-800
            hover:bg-emerald-400 hover:text-white
            transition-colors duration-200
            absolute bottom-3 left-8
            md:w-16 md:h-16 md:-mt-8 md:left-2 md:top-1/2
          "
          onClick={() => previous()}
        >
          <svg
            className="w-5 h-5 md:w-6 md:h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        </button>

        <button
          className="
            w-12 h-12 rounded-full shadow-md center pl-1
            bg-white text-gray-800
            hover:bg-emerald-400 hover:text-white
            transition-colors duration-200
            absolute bottom-3 right-8
            md:w-16 md:h-16 md:-mt-8 md:right-2 md:top-1/2
          "
          onClick={() => next()}
        >
          <svg
            className="w-5 h-5 md:w-6 md:h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </button>
      </Wrap>

      <div className="flex flex-nowrap overflow-x-auto gap-4 md:gap-5 p-5 md:px-10 pb-10 -mb-10">
        {images.map((number) => (
          <Image
            alt={`Maison 1870, photo ${number}`}
            className={`
              w-[120px] md:w-[180px] aspect-square rounded-lg object-cover cursor-pointer
              transition-all duration-150 ease-out
              ${
                current == number
                  ? "scale-110 shadow-lg shadow-black/20"
                  : "shadow-sm shadow-transparent"
              }
            `}
            draggable={false}
            height={180}
            key={number}
            onClick={() => setCurrent(number)}
            src={`/photos/${number}.jpg`}
            width={180}
          />
        ))}
      </div>
    </section>
  );
}
