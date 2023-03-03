import Image from "next/image";
import Wrap from "@/components/Wrap";

export default function Gallery() {
  return (
    <section className="my-section">
      <Wrap className="max-w-[880px]">
        <Image
          alt="Maison 1870"
          className="w-full rounded-xl mb-5"
          src="/photos/01.jpg"
          width={800}
          height={600}
          sizes="(max-width: 880px) 100vw, 800px"
        />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {[
            "01",
            "02",
            "03",
            "04",
            "05",
            "06",
            "07",
            "08",
            "10",
            "11",
            "12",
            "13",
            "14",
            "15",
            "16",
            "17",
            "18",
            "19",
          ].map((number) => (
            <Image
              alt="Maison 1870"
              className="w-full rounded-xl object-cover aspect-square"
              height={185}
              key={number}
              src={`/photos/${number}.jpg`}
              width={185}
            />
          ))}
        </div>
      </Wrap>
    </section>
  );
}
