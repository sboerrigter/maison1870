import Analytics from "@/components/Analytics";
import Button from "@/components/Button";
import Content from "@/components/Content";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";
import Head from "next/head";
import Hero from "@/components/Hero";
import Map from "@/components/Map";

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
      <Content>
        <h1 className="text-emerald-400 font-sans text-sm 2xs:text-base md:text-lg uppercase tracking-wider mb-2">
          Holiday apartment in Sarlat&#8209;la&#8209;Canéda
        </h1>
        <h2 className="h1">Private studio apartment in a 150 year old villa</h2>
        <p>
          Welcome to the cozy studio apartment, below our 150-year old home in
          Sarlat&#8209;la&#8209;Canéda. We are a Dutch family who live here
          since the summer of 2022 and we have fully renovated and refurnished
          the apartment.
        </p>
        <p>
          The studio has a bright living-room with a sofa-bed and a well
          equipped kitchen. The connected bedroom has a queen size boxspring bed
          with a comfortable matras. There is a bathroom with rain shower and a
          separate toilet. The apartment has a private entrance with outdoor
          seating area in our large garden with panoramic views over the city.
          You can park your car in one of the parking spaces in the front
          garden, or right in front of your apartment.
        </p>
        <Button />
      </Content>
      <Gallery />
      <Content>
        <h2>In the heart of the Perigord Noir</h2>
        <p>
          The studio is located in a green and quiet area of
          Sarlat&#8209;la&#8209;Canéda. The medieval city center with lots of
          restaurants, shops and historic sights is at just 5 minutes driving or
          15 minutes walking distance. You can visit all main sights and
          attractions in the Perigord noir within a 30 minute drive from the
          apartment. We have a lot of recommendations for great places to visit!
        </p>
        <Map />
      </Content>

      <Content>
        <h2>
          Your hosts Hannah&nbsp;<span className="font-serif">&amp;</span>
          &nbsp;Sjoerd
        </h2>
        <p>
          We are Sjoerd and Hannah, a Dutch couple with two children. We moved
          to France in the summer of 2022 to work remotely and to renovate our
          19th century house. We love welcome guests who want to explore
          beautiful perigord noir region. Don&apos;t hesitate to{" "}
          <a href="mailto:bonjour@maison1870.com">contact us</a> if you have any
          questions!
        </p>
        <Button />
      </Content>

      <Footer />
    </>
  );
}
