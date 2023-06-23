import Image from "next/image";
import Wrap from "@/components/Wrap";
import { useState } from "react";

export default function Gallery() {
  const [current, setCurrent] = useState(1);
  const images = [...Array(18).keys()].map((number) => {
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
      <Wrap className="relative max-w-[880px]">
        <div className="relative mb-3 aspect-[4/3] w-full overflow-hidden rounded-lg bg-gray-900 md:mb-5">
          {images.map((number) => (
            <Image
              alt={`Maison 1870, photo ${number}`}
              className={`
                  absolute left-0 top-0
                  h-full w-full object-contain transition-opacity duration-150
                ${current == number ? "opacity-100" : "opacity-0"}
              `}
              height={600}
              key={number}
              sizes="(max-width: 879px) 100vw, 800px"
              src={`/photos/${number}.jpg`}
              width={800}
            />
          ))}
        </div>

        <button
          aria-label="previous"
          className="
            center absolute bottom-3 left-8 h-12 w-12
            rounded-full bg-white
            pr-1 text-gray-800
            shadow-md transition-colors
            duration-200 hover:bg-emerald-400 hover:text-white
            md:left-2 md:top-1/2 md:-mt-8 md:h-16 md:w-16
          "
          onClick={() => previous()}
        >
          <svg
            className="h-5 w-5 md:h-6 md:w-6"
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
          aria-label="next"
          className="
            center absolute bottom-3 right-8 h-12 w-12
            rounded-full bg-white
            pl-1 text-gray-800
            shadow-md transition-colors
            duration-200 hover:bg-emerald-400 hover:text-white
            md:right-2 md:top-1/2 md:-mt-8 md:h-16 md:w-16
          "
          onClick={() => next()}
        >
          <svg
            className="h-5 w-5 md:h-6 md:w-6"
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

      <div className="-mb-10 flex flex-nowrap gap-4 overflow-x-auto p-5 pb-10 md:gap-5 md:px-10">
        {images.map((number) => (
          <Image
            alt={`Maison 1870, photo ${number}`}
            className={`
              aspect-square w-[120px] cursor-pointer rounded-lg object-cover transition-all
              duration-150 ease-out md:w-[180px]
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
