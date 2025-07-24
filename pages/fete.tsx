import Analytics from "@/components/Analytics";
import Content from "@/components/Content";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Map from "@/components/Map";
import Wrap from "@/components/Wrap";

export default function Home() {
  return (
    <>
      <Head>
        <title>10 ans de mariage de Hannah & Sjoerd !</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="noindex" />
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
                10 ans de mariage
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
            href="https://docs.google.com/forms/d/e/1FAIpQLSeMpxw-8m3eBxXum2j1ndWONXosXBFnQv54hFraCrpqwy4oOQ/viewform"
            target="_blank"
            rel="nofollow"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="mr-1.5 h-4 w-4"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
              />
            </svg>
            Inscrivez-vous !
          </Link>
        </Wrap>
      </header>
      <Content>
        <h1 className="mb-2 font-sans text-sm uppercase tracking-wider text-emerald-400 2xs:text-base md:text-lg">
          invitation
        </h1>
        <h2 className="h1">
          {" "}
          Hannah & Sjoerd
          <br />
          10 ans de mariage !
        </h2>
        <p>
          En juillet 2025 nous fêterons nos 10 ans de mariage et nous aimerions
          fêter ce moment important avec vous. Nous vous invitons donc à notre
          fête le <strong>samedi 26 juillet 2025</strong>. Voici ce que nous
          avons prévu :
        </p>
        <ul>
          <li className="my-4">
            🇫🇷 La fête aura lieu chez nous à Sarlat-la-Canéda (en France).
          </li>

          <li className="my-4">
            🗓️ La fête commencera le samedi 26 juillet 2025 à 12:00.
          </li>

          <li className="my-4">
            ☀️ N&apos;hésitez pas à venir en short si ça vous dit, il fait chaud
            par ici !
          </li>

          <li className="my-4">
            🍷 Nous vous servirons des plats et des vins de notre belle région.
          </li>

          <li className="my-4">
            🕺 Dansez sur nos musiques préférées ou profitez au calme de la vue
            depuis notre balcon.
          </li>

          <li className="my-4">
            🩳 Les enfants sont les bienvenus (n&apos;oubliez pas leur maillot).
          </li>

          <li className="my-4">
            ⏰ La musique s&apos;arrêtera à partir de 20:00 pour ne pas géner
            les voisins, mais restez aussi longtemps que vous le souhaitez !
          </li>

          <li className="my-4">
            🛏️ Les enfants peuvent rester dormir et nous aurons quelques places
            pour les adultes.
          </li>

          <li className="my-4">
            🎉 Si vous le souhaitez vous pouvez rester toute la semaine et
            participer à une ou plusieurs activités que nous avons prévues !
          </li>
        </ul>
      </Content>

      <Gallery prefix="party/" />

      <Content>
        <h2>La semaine de fête de Hannah&nbsp;&amp;&nbsp;Sjoerd !</h2>
        <p>
          Nous savons que beaucoup d&apos;entre vous viendront de loin et nous
          avons donc prévu de prolonger la fête sur la semaine qui suivra. Vous
          pouvez vous inscrire à une ou plusieurs activités. Voici le programme
          :
        </p>

        <p>
          <strong>Dimanche 27 juillet 2025</strong>
          <br />
          Journée tranquille sur la plage au bord de la Dordogne avec
          possibilité de déjeuner sur place.
        </p>

        <p>
          <strong>Lundi 28 juillet 2025</strong>
          <br />
          Rally culturel avec déjeuner dans une ferme aux canards et une
          dégustation de vins.
        </p>

        <p>
          <strong>Mardi 29 juillet 2025</strong>
          <br />
          Canoë sur la Dordogne avec pique-nique (adultes € 25, enfants € 15).
        </p>

        <p>
          <strong>Mercredi 30 juillet 2025</strong>
          <br />
          Tour sur le marché de Sarlat, suivi d&apos;un “bring your own” apéro à
          la maison pour partager les bonnes choses que nous aurons achetées.
        </p>

        <p>
          <strong>Jeudi 31 juillet 2025</strong>
          <br />
          Accrobranche à “La Forêt des Ecureuils” (adultes € 20, enfants € 15).
        </p>

        <p>
          <strong>Vendredi 1 août 2025</strong>
          <br />
          BBQ afterparty (adultes € 20, enfants € 10).
        </p>

        <p>
          Vous pouvez vous inscrire pour toute la semaine ou pour une partie des
          activités. Pendant cette semaine les plats et boissons dans les
          restaurants seront à vos frais et nous vous demanderons de participer
          financièrement pour quelques activités (voir ci-dessus).
        </p>
      </Content>

      <Wrap className="my-section max-w-[1280px]">
        <div className="flex flex-col items-center gap-[60px] lg:flex-row lg:gap-[120px]">
          <div className="content flex-1 text-center lg:mb-24 lg:w-1/2 lg:max-w-[480px] lg:text-left xl:mb-36">
            <h2>Adresse et parking</h2>
            <p>
              La fête aura lieu chez nous à l&apos;adresse{" "}
              <a href="https://maps.app.goo.gl/a2ex17CEi1Gz9Xe56">
                13 Côte de Ravat à Sarlat-la-Canéda
              </a>
              . Nous habitons à 5 minutes du centre médiéval, à 4 heures de Pau
              et à 9 heures de Bruxelles.
            </p>

            <p>
              Vous pouvez vous garer sur la pelouse chez nos voisins. À votre
              arrivée, tournez immédiatement à gauche, passez devant la maison
              de nos voisins. Vous pouvez vous garer dans la zone délimitée.
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

      <section className="mt-section mb-section bg-gradient-to-b from-transparent to-emerald-50 pb-2">
        <Content>
          <h2>Dormir</h2>
          <p>
            Après la fête les enfants pourrons rester dormir pour que les papas
            et mamans puissent rester plus longtemps. Le lendemain ils se
            réveilleront avec Netflix et des tartines au Nutella.
          </p>

          <h3>Rester dormir</h3>
          <p>
            Nous aurons quelques places pour les adultes. Merci de nous dire
            rapidement si vous souhaitez rester dormir et pendant combien de
            nuits, nous verrons ce qui sera possible. Nous n&apos;aurons
            surement pas assez de lits pour tout le monde, peut-être que
            certains devront amener leur sac de couchage et tapis de sol.
          </p>

          <h3>Autres options pour rester dormir</h3>
          <p>
            Si vous préférez dormir au calme, vous trouverez beaucoup
            d&apos;options dans le coin. Voici une petite liste :
          </p>

          <p>
            <a href="https://www.airbnb.com/s/Les-Hauts-de-Sarlat/homes">
              Les hauts de Sarlat
            </a>
            <br />
            Appartements à 1 minute à pied
          </p>
          <p>
            <a href="https://domainederavat.fr/">Domaine de Ravat</a>
            <br />
            Hôtel à 3 minutes à pied
          </p>
          <p>
            <a href="https://www.hotel-sarlat.com/">Hotel de la Pagézie</a>
            <br />
            Hôtel à 10 minutes à pied
          </p>
          <p>
            <a href="https://www.aire-service-camping-car-panoramique.fr/dordogne/24-sarlat-la-caneda">
              Aire de camping car de Sarlat
            </a>
            <br />
            Parking pour les camping-cars à 15 minutes à pied
          </p>
          <p>
            <a href="https://europe.huttopia.com/en/site/sarlat/">
              Huttopia Sarlat
            </a>
            <br />
            Camping proposant des chalets à 5 minutes en voiture
          </p>

          <p>
            Sur le site{" "}
            <a href="https://en.sarlat-tourisme.com/i-prepare-my-stay/accommodation/">
              sarlat-tourisme.com
            </a>{" "}
            vous trouverez d&apos;autres options d&apos;hotels, campings et
            chalets. Nous vous conseillons de réserver bien à l&apos;avance, en
            été il y a énormément de monde à Sarlat !
          </p>
        </Content>
      </section>
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
          <h2>Vous venez aussi ?</h2>
          <p>
            Nous avons déjà hâte ! Merci de nous informer de votre venue ou non,
            si vous souhaitez rester dormir et si vous participerez à la semaine
            qui suivra la fête. Merci de renseigner ce formulaire :
          </p>

          <Link
            className={`
                mb-8 inline-flex items-center
                justify-center rounded-full
                bg-emerald-400 px-8 py-3 font-semibold
                !text-white !no-underline shadow-md
                shadow-black/10 hover:bg-emerald-500
              `}
            href="https://docs.google.com/forms/d/e/1FAIpQLSeMpxw-8m3eBxXum2j1ndWONXosXBFnQv54hFraCrpqwy4oOQ/viewform"
            target="_blank"
            rel="nofollow"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="mr-1.5 h-4 w-4"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
              />
            </svg>
            Faites-nous savoir si vous serez présents
          </Link>

          <p>
            Merci de nous faire savoir avant le <strong>1 novembre 2024</strong>{" "}
            si vous serez présents, afin que nous puissions en tenir compte lors
            des préparatifs.
          </p>

          <p>
            A bientôt,
            <br />
            Hannah, Sjoerd, David et Lucas ❤️
          </p>

          <p>
            <i>
              p.s. <a href="tel:+33632004114">appelez-nous</a> ou{" "}
              <a href="mailto:bonjour@maison1870.com">envoyez un email</a> si
              vous avez des questions !
            </i>
          </p>
        </div>
      </Wrap>

      <Footer />
    </>
  );
}
