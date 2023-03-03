import Image from "next/image";
import Wrap from "@/components/Wrap";
import { useState } from "react";

export default function Gallery() {
  const images = [...Array(19).keys()].map((number) => {
    return number + 1;
  });
  const [current, setCurrent] = useState(1);

  const previous = () => {
    setCurrent(current - 1);
  };

  const next = () => {
    setCurrent(current + 1);
  };

  return (
    <section className="my-section">
      <Wrap className="max-w-[880px]">
        <div className="w-full aspect-[4/3] bg-gray-900 mb-3 md:mb-5 rounded-lg overflow-hidden relative">
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
