import Analytics from "@/components/Analytics";
import Content from "@/components/Content";
import Head from "next/head";
import Wrap from "@/components/Wrap";
import { useState } from "react";

export default function Home() {
  const [question, setQuestion] = useState(0);
  const [language, setLanguage] = useState("nl");
  const [score, setScore] = useState(0);

  const questions = [
    {
      nl: (
        <>
          <p className="!mb-1 font-sans text-base font-bold uppercase tracking-wider text-emerald-400">
            Hannah &amp; Sjoerd&apos;s
          </p>
          <h1 className="text-5xl">Culture autorally</h1>
          <p>
            Welkom bij de &ldquo;Hannah &amp; Sjoerd&rdquo; culturele autorally!
            En doldwaas avontuur langs onze favoriete plekken in de buurt.
          </p>

          <p>
            Jullie gaan vandaag een route afleggen langs verschillende punten.
            Op ieder punt moet je een vraag beantwoorden. Als je de vraag goed
            beantwoord krijg je 5 punten en de locatie voor de volgende vraag.
            Maar beantwoord je een vraag fout, dan verlies je een punt.
          </p>

          <p>
            Als je er echt niet uitkomt kan je ook een hulplijn inschakelen.
            Maar, dat kost je wel 10 punten.
          </p>

          <p>
            Het team dat aan het einde van de dag de meeste punten heeft
            verzameld is de winnaar van eeuwige roem!
          </p>

          <p>
            Snap je dat? Typ dan hieronder &ldquo;ik snap het&rdquo; voor de
            eerste locatie en vraag.
          </p>
        </>
      ),
      fr: (
        <>
          <p className="!mb-1 font-sans text-base font-bold uppercase tracking-wider text-emerald-400">
            Hannah &amp; Sjoerd&apos;s
          </p>
          <h1 className="text-5xl">Rally culturel</h1>
          <p>
            Bienvenue au rallye culturel automobile de Hannah et Sjoerd&rdquo; !
            Et une folle aventure le long de nos lieux préférés dans la région.
          </p>

          <p>
            Aujourd'hui, vous allez parcourir un itinéraire en passant par
            plusieurs points. À chaque point, vous devez répondre à une
            question. Si vous répondez correctement à la question vous
            obtiendrez 5 points et l'emplacement de la question suivante. Mais
            si vous répondez incorrectement à une question, vous perdrez un
            point.
          </p>

          <p>
            Si vous n'y arrivez vraiment pas, vous pouvez aussi appeler un
            service d'assistance téléphonique. Mais cela vous coûtera 10 points.
          </p>

          <p>
            L'équipe ayant le plus de points à la fin de la journée remporte la
            gloire éternelle !
          </p>

          <p>
            Vous avez compris ? Alors tapez &ldquo;je comprends&rdquo;
            ci-dessous pour le premier lieu et la première question. pour le
            premier emplacement et la première question.
          </p>
        </>
      ),
      answers: ["ik snap het", "je comprends"],
    },
    {
      nl: (
        <>
          <h1>Vraag 1</h1>
          <p>Welk typisch Nederlandse product wordt hier verkocht?</p>
        </>
      ),
      fr: (
        <>
          <h1>Question 10</h1>
          <p>Welk typisch Nederlandse product wordt hier verkocht?</p>
        </>
      ),
      answers: ["poffertjes"],
    },
  ];

  return (
    <>
      <Head>
        <title>Rally</title>
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

      <div className="min-h-screen bg-emerald-50 pb-5">
        <Wrap className="max-w-screen-xs">
          <div className="flex justify-between py-5 text-sm font-bold uppercase">
            <div className="flex-none rounded-full bg-emerald-900 px-4 py-2 font-mono text-white">
              Score: {score}
            </div>

            {language == "nl" ? (
              <a
                className="select-none rounded-full py-2 text-right text-emerald-500"
                onClick={() => setLanguage("fr")}
              >
                Je ne comprends pas
              </a>
            ) : (
              <a
                className="select-none rounded-full py-2 text-right text-emerald-500"
                onClick={() => setLanguage("nl")}
              >
                Ik snap er niks van
              </a>
            )}
          </div>
          <div className="content rounded-xl bg-white p-10 shadow-xl">
            {language == "nl" ? questions[question].nl : questions[question].fr}

            <form></form>
          </div>

          <a
            className="my-5 block w-full select-none rounded-full py-2 text-center text-sm font-bold uppercase text-emerald-500"
            href="tel:+31646277318"
            onClick={() => setScore(score - 10)}
          >
            {language == "nl"
              ? "Hulplijn inschakelen (- 10 punten)"
              : "Service d'assistance (- 10 points)"}
          </a>
        </Wrap>
      </div>
    </>
  );
}
