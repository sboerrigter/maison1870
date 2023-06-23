import Image from "next/image";
import Map from "@/components/Map";
import Wrap from "@/components/Wrap";

export default function Region() {
  return (
    <Wrap className="my-section max-w-[1280px] md:mb-36">
      <div className="flex flex-col items-center gap-[60px] lg:flex-row lg:gap-[120px]">
        <div className="flex-1 text-center lg:mb-24 lg:w-1/2 lg:max-w-[480px] lg:text-left xl:mb-36">
          <h2>In the heart of the Perigord Noir</h2>
          <p>
            The studio is located in a green and quiet area of
            Sarlat&#8209;la&#8209;Canéda. The medieval city center, with lots of
            restaurants, shops and historic sights, is at just 5 minutes driving
            or 15 minutes walking distance from the apartment. The Dordogne
            river is at just 15 minutes driving distance and you can visit all
            main sights and attractions in the Perigord Noir within a 30 minute
            drive from the apartment. We have a lot of recommendations for great
            places to visit!
          </p>
        </div>
        <Map className="max-w-[600px] lg:w-1/2" />
      </div>

      <div className="-mt-12 grid max-w-[1020px] grid-cols-2 gap-2.5 xs:gap-5 md:grid-cols-4 lg:mt-0 xl:-mt-20">
        {[1, 2, 3, 4].map((number) => (
          <Image
            alt="Sarlat region"
            className="aspect-[4/3] w-full rounded-lg shadow-sm"
            height={180}
            key={number}
            sizes="(max-width: 880px) 50vw, 240px"
            src={`/photos/sarlat-region-${number}.jpg`}
            width={240}
          />
        ))}
      </div>
    </Wrap>
  );
}
