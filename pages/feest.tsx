import Analytics from "@/components/Analytics";
import Button from "@/components/Button";
import Content from "@/components/Content";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";
import Head from "next/head";
import Hosts from "@/components/Hosts";
import Image from "next/image";
import Link from "next/link";
import Map from "@/components/Map";
import Wrap from "@/components/Wrap";

export default function Home() {
  return (
    <>
      <Head>
        <title>Hannah & Sjoerd 10 jaar getrouwd!</title>
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
      <header className="relative h-[66.67vw] max-h-[75vh] min-h-[360px] w-full bg-gray-600">
        <Image
          alt="Hannah & Sjoerd"
          className="absolute left-0 top-0 z-0 h-full w-full object-cover object-top"
          priority
          src="/photos/party/hero.jpg"
          width={1600}
          height={1200}
          sizes="100vw"
        />

        <div className="absolute left-0 top-0 h-full w-full bg-gradient-to-b from-gray-900/50 via-transparent" />

        <Wrap className="relative flex max-w-[1280px] items-end justify-between pt-6 2xs:pt-8 md:pt-10">
          <div className="flex items-center gap-4 text-white">
            <svg
              className="h-[30px] w-[60px] 2xs:h-[45px] 2xs:w-[90px] lg:h-[60px] lg:w-[120px]"
              color="currentColor"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              viewBox="0 0 120 60"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g strokeWidth="2">
                <path d="m1 59h118" />
                <path d="m5 19h31v40h-31z" />
                <path
                  d="m36 19h79v40h-79z"
                  transform="matrix(-1 0 0 1 151 0)"
                />
                <path d="m38 19-2-14-15.5-4-15.5 4-2 14z" />
                <path d="m117 19-2-14-12-4h-82.5l15.5 4 2 14z" />
              </g>
              <path d="m17.5 26.5h6v8h-6z" />
              <path d="m17.5 44.5h6v8h-6z" />
              <path d="m17.5 8.5h6v6h-6z" />
              <path d="m24.5 8.5h-8l4-3z" />
              <path d="m36.5 35.5h78v4h-78z" />
              <path d="m39.5 35.5v4" />
              <path d="m45.5 35.5v4" />
              <path d="m48.5 35.5v4" />
              <path d="m51.5 35.5v4" />
              <path d="m51.5 8.5h6v6h-6z" />
              <path d="m52.5 49.5c0-2.7614237-2.2385763-5-5-5s-5 2.2385763-5 5v4h10z" />
              <path d="m54.5 30.5c0-3.3137085-2.6862915-6-6-6s-6 2.6862915-6 6v9h12z" />
              <path d="m57.5 35.5v4" />
              <path d="m58.5 8.5h-8l4-3z" />
              <path d="m63.5 35.5v4" />
              <path d="m63.5 35.5v4" />
              <path d="m66.5 35.5v4" />
              <path d="m66.5 49.5c0-2.7614237-2.2385763-5-5-5s-5 2.2385763-5 5v4h10z" />
              <path d="m69.5 35.5v4" />
              <path d="m72.5 30.5c0-3.3137085-2.6862915-6-6-6s-6 2.6862915-6 6v9h12z" />
              <path d="m72.5 8.5h6v6h-6z" />
              <path d="m75.5 35.5v4" />
              <path d="m79.5 8.5h-8l4-3z" />
              <path d="m80.5 49.5c0-2.7614237-2.2385763-5-5-5s-5 2.2385763-5 5v9h10z" />
              <path d="m81.5 35.5v4" />
              <path d="m84.5 35.5v4" />
              <path d="m87.5 35.5v4" />
              <path d="m90.5 30.5c0-3.3137085-2.6862915-6-6-6s-6 2.6862915-6 6v9h12z" />
              <path d="m93.5 35.5v4" />
              <path d="m93.5 8.5h6v6h-6z" />
              <path d="m94.5 49.5c0-2.7614237-2.2385763-5-5-5s-5 2.2385763-5 5v4h10z" />
              <path d="m99.5 35.5v4" />
              <path d="m99.5 35.5v4" />
              <path d="m100.5 8.5h-8l4-3z" />
              <path d="m102.5 35.5v4" />
              <path d="m105.5 35.5v4" />
              <path d="m108.5 30.5c0-3.3137085-2.686292-6-6-6-3.3137085 0-6 2.6862915-6 6v9h12z" />
              <path d="m108.5 49.5c0-2.7614237-2.238576-5-5-5s-5 2.2385763-5 5v4h10z" />
              <path d="m111.5 35.5v4" />
            </svg>

            <div>
              <p className="mb-1 font-heading text-xl font-bold !leading-none 2xs:mb-1.5 2xs:text-2xl lg:mb-2 lg:text-4xl">
                Hannah & Sjoerd
              </p>
              <p className="text-2xs font-semibold uppercase !leading-none tracking-wider 2xs:text-xs lg:text-sm">
                10 jaar getrouwd
              </p>
            </div>
          </div>

          <Link
            className={`
                mb-8 inline-flex
                hidden items-center justify-center
                rounded-full bg-emerald-400
                px-8 py-3 font-semibold !text-white
                !no-underline shadow-md shadow-black/10
                hover:bg-emerald-500 sm:flex
              `}
            href="https://docs.google.com/forms/d/e/1FAIpQLSfCpC1BZ8pvlP5AbcT3uAoKSrAYh7Vu8exo79xFhLtS7n4k0A/viewform"
            target="_blank"
            rel="nofollow"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="mr-1.5 h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
            Meld je aan!
          </Link>
        </Wrap>
      </header>
      <Content>
        <h1 className="mb-2 font-sans text-sm uppercase tracking-wider text-emerald-400 2xs:text-base md:text-lg">
          uitnodiging
        </h1>
        <h2 className="h1">
          {" "}
          Hannah & Sjoerd
          <br />
          10 jaar getrouwd!
        </h2>
        <p>
          In juli 2025 is het al weer 10 jaar geleden dat wij (Hannah en Sjoerd)
          zijn getrouwd. Deze mooie mijlpaal willen we graag met jullie vieren.
          Daarom geven we op <strong>zaterdag 26 juli 2025</strong> een feest,
          waar we jullie graag voor willen uitnodigen. Dit is ongeveer het idee:
        </p>
        <ul>
          <li className="my-4">
            🇫🇷 We vieren een feest bij ons thuis in Sarlat-la-Canéda
            (Frankrijk).
          </li>

          <li className="my-4">
            🗓️ Het feest begint op zaterdag 26 juli 2025 om 12:00 uur.
          </li>

          <li className="my-4">
            ☀️ Je mag best in je korte broek komen hoor. Het is lekker warm bij
            ons.
          </li>

          <li className="my-4">
            🍷 Wij zorgen voor lekker eten en drinken uit onze regio.
          </li>

          <li className="my-4">
            🕺 Dans mee op onze favoriete muziek, of geniet rustig van het
            uitzicht op ons balkon.
          </li>

          <li className="my-4">
            🩳 Kinderen zijn welkom (en vergeet hun zwembroeken niet).
          </li>

          <li className="my-4">
            ⏰ Om 20:00 gaat de muziek uit i.v.m. geluidsoverlast, maar blijf
            daarna rustig hangen!
          </li>

          <li className="my-4">
            🛏️ Kinderen mogen lekker blijven slapen en we hebben ook (beperkte)
            ruimte voor volwassenen.
          </li>

          <li className="my-4">
            🎉 Als je het leuk vindt, mag je de week lang blijven en meedoen met
            leuke activiteiten!
          </li>
        </ul>
      </Content>

      <Gallery prefix="party/" />

      <Content>
        <h2>De Hannah & Sjoerd feestweek!</h2>
        <p>
          Omdat veel van jullie van ver komen, vinden jullie het misschien leuk
          om wat langer te blijven. Daarom organiseren we de Hannah & Sjoerd
          feestweek, met een aantal leuke activiteiten waar je je voor kan
          aanmelden. Het programma ziet er als volgt uit:
        </p>

        <p>
          <strong>Zondag 27 juli 2025</strong>
          <br />
          Uitbrakken op het strand met Franse snackbar ervaring.
        </p>

        <p>
          <strong>Maandag 28 juli 2025</strong>
          <br />
          Culturele autorally met lunch bij een eendenboerderij en een
          wijnproeverij.
        </p>

        <p>
          <strong>Dinsdag 29 juli 2025</strong>
          <br />
          Kanovaren op de Dordogne met picknick (volwassenen € 25, kinderen €
          15).
        </p>

        <p>
          <strong>Woensdag 30 juli 2025</strong>
          <br />
          Privétour over de markt van Sarlat en “bring your own” apéro.
        </p>

        <p>
          <strong>Dondedag 31 juli 2025</strong>
          <br />
          In de bomen klimmen bij “La Foret des Ecureuils” (volwassenen € 20,
          kinderen € 15).
        </p>

        <p>
          <strong>Vrijdag 1 augustus 2025</strong>
          <br />
          Barbeque afterparty met DJ Snikkeldrift (volwassenen € 20, kinderen €
          10).
        </p>

        <p>
          Je kan je aanmelden voor de hele feestweek, of alleen voor een deel
          van deze activiteiten. Tijdens de feestweek is eten & drinken in
          restaurants voor eigen rekening en vragen we een bijdrage voor sommige
          activiteiten. Anders wordt het wel een erg duur feestje 😅.
        </p>
      </Content>

      <Wrap className="my-section max-w-[1280px]">
        <div className="flex flex-col items-center gap-[60px] lg:flex-row lg:gap-[120px]">
          <div className="content flex-1 text-center lg:mb-24 lg:w-1/2 lg:max-w-[480px] lg:text-left xl:mb-36">
            <h2>Locatie en parkeren</h2>
            <p>
              We vieren het feest bij ons thuis op{" "}
              <a href="https://maps.app.goo.gl/a2ex17CEi1Gz9Xe56">
                13 Côte de Ravat in Sarlat-la-Canéda
              </a>
              . We wonen op slechts 5 minuten van het middeleeuwse centrum en 12
              uur van Nederland.
            </p>

            <p>
              We hebben niet veel parkeerplekken, dus we willen iedereen vragen
              om ergens anders te parkeren. Zoals op het parkeerterrein bij de{" "}
              <a href="https://www.google.com/maps/place/Carrefour+Market+Sarlat-La-Caneda/@44.902465,1.2071664,17z/data=!4m7!3m6!1s0x12ab561f1a2d36e7:0xb8d1b6bc10057de8!8m2!3d44.902465!4d1.21193!15sChBDYXJyZWZvdXIgTWFya2V0IgOIAQFaEiIQY2FycmVmb3VyIG1hcmtldJIBC3N1cGVybWFya2V04AEA!16s%2Fg%2F1tnxz3ck?entry=tts&g_ep=EgoyMDI0MDkwNC4wKgBIAVAD">
                Carrefour Market
              </a>
              . Vanaf daar kan je in 20 minuten naar ons huis wandelen.
              Chauffeurs kunnen wel mensen bij ons afzetten, voordat ze de auto
              parkeren.
            </p>
          </div>
          <Map className="max-w-[600px] lg:w-1/2" />
        </div>

        <div className="-mt-12 grid max-w-[1020px] grid-cols-2 gap-2.5 xs:gap-5 md:grid-cols-4 lg:mt-0 xl:-mt-20">
          {["1", "sarlat-region-2", "sarlat-region-3", "sarlat-region-4"].map(
            (photo) => (
              <Image
                alt="Sarlat region"
                className="aspect-[4/3] w-full rounded-lg shadow-sm"
                height={180}
                key={photo}
                sizes="(max-width: 880px) 50vw, 240px"
                src={`/photos/${photo}.jpg`}
                width={240}
              />
            )
          )}
        </div>
      </Wrap>

      <Content>
        <h2>Slapen</h2>
        <p>
          Na het feestje mogen kinderen blijven slapen, zodat de papa&apos;s en
          mama&apos;s wat langer kunnen blijven. Ze worden s&apos;ochtends
          opgevangen door Netflix en stokbrood met Nutella. 📺🥖
        </p>

        <h3>Blijven slapen</h3>
        <p>
          We hebben ook beperkte ruimte voor volwassenen om te blijven slapen.
          We horen graag of je daar gebruik van wilt maken en van wanneer tot
          wanneer jullie denken te blijven. Dan gaan wij even puzzelen of en hoe
          dat past. Waarschijnlijk hebben we niet genoeg bedden voor iedereen,
          dus we zullen sommige mensen vragen om zelf een slaapzak mee te nemen
          en ergens op de grond te slapen.
        </p>

        <h3>Andere slaap mogelijkheden</h3>
        <p>
          Als je liever een rustiger plekje opzoekt om te slapen, zijn er ook
          een heleboel andere mogelijkheden in de buurt. Hierbij een aantal
          tips:
        </p>

        <ul>
          <li>
            <a href="https://www.airbnb.com/s/Les-Hauts-de-Sarlat/homes">
              Les hauts de Sarlat
            </a>{" "}
            - Vakantiehuisjes op 1 minuut loopafstand
          </li>
          <li>
            <a href="https://domainederavat.fr/">Domaine de Ravat</a> - Luxe
            hotel op 3 minuten loopafstand
          </li>
          <li>
            <a href="https://www.hotel-sarlat.com/">Hotel de la Pagézie</a> -
            Hotel op 10 minuten loopafstand
          </li>
          <li>
            <a href="https://en.sarlat-tourisme.com/offers/aire-communale-de-sarlat-la-caneda-sarlat-la-caneda-en-1939725/">
              Camperplaats Sarlat
            </a>{" "}
            - Camper standplaats op 15 minuten loopafstand
          </li>
          <li>
            <a href="https://europe.huttopia.com/en/site/sarlat/">
              Huttopia Sarlat
            </a>{" "}
            - Camping (met huisjes) op 5 minuten rijden
          </li>
        </ul>

        <p>
          Op de website{" "}
          <a href="https://en.sarlat-tourisme.com/i-prepare-my-stay/accommodation/">
            sarlat-tourisme.com
          </a>{" "}
          vind je nog veel meer hotels, campings en vakantiehuisjes. We raden je
          wel aan om op tijd te boeken, want in de zomer is het hier erg druk!
        </p>
      </Content>

      <section className="mt-section flex bg-gradient-to-b from-transparent to-emerald-50 pb-12">
        <Wrap className="mb-section flex max-w-[1160px] flex-col-reverse items-center gap-[60px] lg:flex-row xl:gap-[120px]">
          <div className="mx-8 xs:mx-12 lg:mx-0 lg:w-1/2">
            {" "}
            <Image
              alt="Your hosts Hannah & Sjoerd"
              height={480}
              src="/photos/party/hartje.png"
              width={480}
            />
          </div>

          <div className="content text-center lg:w-1/2 lg:text-left">
            <h2>Zijn jullie er bij?</h2>
            <p>
              Wij hebben er nu al zin in! We horen graag of jullie er bij zijn,
              willen blijven slapen en mee willen doen met de Hannah & Sjoerd
              feestweek. Hiervoor kan je het formuliertje achter deze link
              gebruiken:
            </p>

            <Link
              className={`
                mb-8 inline-flex items-center
                justify-center rounded-full
                bg-emerald-400 px-8 py-3 font-semibold
                !text-white !no-underline shadow-md
                shadow-black/10 hover:bg-emerald-500
              `}
              href="https://docs.google.com/forms/d/e/1FAIpQLSfCpC1BZ8pvlP5AbcT3uAoKSrAYh7Vu8exo79xFhLtS7n4k0A/viewform"
              target="_blank"
              rel="nofollow"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="mr-1.5 h-5 w-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
              Laat weten of je er bij bent
            </Link>

            <p>
              We horen graag voor <strong>1 november 2024</strong> of je er bij
              bent, zodat we hier rekening mee kunnen houden tijdens de
              voorbereidingen.
            </p>

            <p>
              Groetjes,
              <br />
              Hannah, Sjoerd, David en Lucas ❤️
            </p>

            <p>
              <i>
                p.s. <a href="tel:+33632004114">Bel</a> of{" "}
                <a href="mailto:bonjour@maison1870.com">mail</a> ons gerust als
                je nog vragen hebt!
              </i>
            </p>
          </div>
        </Wrap>
      </section>

      <Footer />
    </>
  );
}
