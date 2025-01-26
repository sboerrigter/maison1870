import Amenities from "@/components/Amenities";
import Analytics from "@/components/Analytics";
import Button from "@/components/Button";
import Content from "@/components/Content";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";
import Head from "next/head";
import Hero from "@/components/Hero";
import Hosts from "@/components/Hosts";
import Languages from "@/components/Languages";
import Region from "@/components/Region";

export default function Home() {
  return (
    <>
      <Head>
        <title>
          Maison 1870 &middot; Holiday apartment in Sarlat&#8209;la&#8209;Canéda
        </title>
        <meta
          name="description"
          content="Private studio apartment in a 150 year old villa in Sarlat&#8209;la&#8209;Canéda, Dordogne, France."
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
        <h1 className="mb-2 font-sans text-sm uppercase tracking-wider text-emerald-400 2xs:text-base md:text-lg">
          Holiday apartment in Sarlat&#8209;la&#8209;Canéda
        </h1>
        <h2 className="h1">Private studio apartment in a 150 year old villa</h2>
        <p>
          Welcome to Maison 1870, a 150 year old villa in the green and quiet
          outskirts of Sarlat&#8209;la&#8209;Canéda. We are a Dutch family who
          live here since the summer of 2022 and we rent out a cute studio
          appartment below our home. The appartment has been fully renovated and
          refurnished. We are currently renovating the rest of our home and
          building a second holiday apartment.
        </p>
      </Content>
      <Gallery />
      <Content>
        <p>
          The studio apartment has a bright living-room with a sofa-bed and a
          well equipped kitchen. The connected bedroom has a queen size
          boxspring bed with a comfortable matras. There is a bathroom with rain
          shower and a separate toilet. The apartment has a private entrance
          with outdoor seating area in our large garden with panoramic views
          over the city. You can park your car in one of the parking spaces in
          the front garden, or right in front of your apartment.
        </p>
        <Button />
      </Content>
      <Amenities />
      <Region />
      <Hosts />
      <Languages />
      <Content id="booking">
        <h2>
          Availabillity <span className="font-serif">&amp;</span> bookings
        </h2>
        <p>
          You can view the current availability of the apartment in the calendar
          below. After selecting the desired dates, you can check the prices and
          book your stay.
        </p>

        <p>
          You can also find us on other websites like{" "}
          <a
            href="https://www.airbnb.com/rooms/781840949977429677"
            target="_blank"
            rel="noreferrer nofollow"
          >
            Airbnb
          </a>{" "}
          and{" "}
          <a
            href="https://www.booking.com/hotel/fr/private-studio-in-150-year-old-villa.en-gb.html"
            target="_blank"
            rel="noreferrer nofollow"
          >
            Booking.com
          </a>
          , but booking there will probably be more expensive due to their
          commissions. Please contact us if you want to pay with
          "Chèques-Vacances".
        </p>
        <iframe
          src="https://w.hostexbooking.site/widget/106914?site_type=1&host_id=101781&listing_id=106914&enabled=1"
          className="border border-gray-200 rounded-lg min-h-[800px] w-full mt-16"
        ></iframe>
      </Content>
      <Footer />
    </>
  );
}
