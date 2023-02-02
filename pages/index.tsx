import Head from "next/head";
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
        <Wrap width={840}>
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
        </Wrap>
      </main>
    </>
  );
}
