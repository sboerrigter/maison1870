import Analytics from "@/components/Analytics";
import Button from "@/components/Button";
import Footer from "@/components/Footer";
import Head from "next/head";
import Hero from "@/components/Hero";
import Image from "next/image";
import Wrap from "@/components/Wrap";

export default function Home() {
  return (
    <>
      <Head>
        <title>
          Maison 1870 &middot; Holiday apartment in Sarlat&#8209;la&#8209;Canéda
        </title>
        <meta
          name="description"
          content="Private holiday apartment in a 150 year old villa in apartment in Sarlat&#8209;la&#8209;Canéda, Dordogne, France."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link
          key="preconnect-ga"
          rel="preconnect"
          href="https://www.google-analytics.com"
        />
        <link
          key="preconnect-gtm"
          rel="preconnect"
          href="https://www.googletagmanager.com"
        />
        <Analytics />
      </Head>

      <Hero />

      <main className="my-section text-center">
        <Wrap className="content max-w-[880px]">
          <h1 className="text-emerald-500 font-sans text-sm 2xs:text-base md:text-lg uppercase tracking-wider mb-2">
            Holiday apartment in Sarlat&#8209;la&#8209;Canéda
          </h1>

          <h2 className="h1">
            Private studio apartment in a 150 year old villa
          </h2>

          <p>
            Welcome to the cozy studio apartment, below our 150-year old home in
            Sarlat&#8209;la&#8209;Canéda. We are a Dutch family who live here
            since the summer of 2022 and we have fully renovated and refurnished
            the apartment.
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
            The studio is located in a green and quiet area of
            Sarlat&#8209;la&#8209;Canéda. The medieval city center with lots of
            restaurants, shops and historic sights is at just 5 minutes driving
            or 15 minutes walking distance. And you can visit all main sights
            and attractions in the Perigord noir within a 30 minute drive from
            the apartment.
          </p>

          <Button />
        </Wrap>
      </main>

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

      <Footer />
    </>
  );
}
