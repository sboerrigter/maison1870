import Image from "next/image";
import Wrap from "@/components/Wrap";
import { useState } from "react";

export default function Gallery() {
  const images = [
    1, 2, 3, 4, 5, 6, 7, 8, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
  ];
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
        <Image
          alt="Maison 1870"
          className="w-full aspect-[4/3] bg-gray-900 mb-5 rounded-lg object-contain"
          src={`/photos/${current}.jpg`}
          width={800}
          height={600}
          sizes="(max-width: 880px) 100vw, 800px"
        />
      </Wrap>

      <div className="flex flex-nowrap overflow-x-auto gap-5 p-5 pb-20 -mb-20">
        {images.map((number) => (
          <Image
            alt="Maison 1870"
            className={`
              w-[120px] md:w-[180px] aspect-square rounded-lg object-cover cursor-pointer
              transition-all duration-100 ease-out
              ${
                current == number
                  ? "scale-105 shadow-xl shadow-black/20"
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
