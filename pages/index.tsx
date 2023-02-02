import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Wrap from "@/components/Wrap";

export default function Home() {
  return (
    <>
      <Head>
        <title>
          Maison 1870 &middot; Holiday apartment in Sarlat-la-Canéda
        </title>
        <meta
          name="description"
          content="Private holiday apartment in a 150 year old villa in apartment in Sarlat-la-Canéda, Dordogne, France."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="my-section text-center">
        <Wrap>
          <Image
            alt="Maison 1870"
            className="w-full rounded-lg mb-section"
            src="/photos/01.jpg"
            width={800}
            height={600}
            sizes="(max-width: 880px) 100vw, 800px"
          />

          <h1 className="text-emerald-500 font-sans text-sm 2xs:text-base sm:text-lg uppercase mb-2">
            Holiday apartment in sarlat&#8209;la&#8209;canéda
          </h1>

          <h2 className="h1">
            Private studio apartment in a 150 year old villa
          </h2>

          <p>
            Welcome to the cozy studio apartment, below our 150-year old home in
            Sarlat-la-Canéda. We are a Dutch family who live here since the
            summer of 2022 and we have fully renovated and refurnished the
            apartment.
          </p>

          <p>
            The studio has a bright living-room with a sofa-bed and a well
            equipped kitchen. The connected bedroom has a queen size boxspring
            bed with a comfortable matras. There is a bathroom with rain shower
            and a separate toilet. The apartment has a private entrance with
            outdoor seating area in our large garden with panoramic views over
            the city. You can park your car in one of the parking spaces in the
            front garden, or right in front of your apartment.
          </p>

          <h2>In the area</h2>

          <p>
            The studio is located in a green and quiet area of Sarlat-la-Canéda.
            The medieval city center with lots of restaurants, shops and
            historic sights is at just 5 minutes driving or 15 minutes walking
            distance. And you can visit all main sights and attractions in the
            Perigord noir within a 30 minute drive from the apartment.
          </p>

          <Link
            className="
              bg-emerald-400 hover:bg-emerald-600 text-white
              font-semibold
              inline-flex items-center justify-center
              px-8 py-3 rounded-full
              shadow-lg shadow-emerald-500/50

            "
            href="https://www.airbnb.com/rooms/781840949977429677"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-3"
            >
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
              <line x1="16" y1="2" x2="16" y2="6"></line>
              <line x1="8" y1="2" x2="8" y2="6"></line>
              <line x1="3" y1="10" x2="21" y2="10"></line>
            </svg>
            Availability & bookings
          </Link>
        </Wrap>
      </main>

      <section className="my-section">
        <Wrap>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-1">
            {[
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
            ].map((number) => (
              <Image
                alt="Maison 1870"
                className="w-full rounded-sm object-cover aspect-square"
                height={200}
                key={number}
                src={`/photos/${number}.jpg`}
                width={200}
              />
            ))}
          </div>
        </Wrap>
      </section>
    </>
  );
}
