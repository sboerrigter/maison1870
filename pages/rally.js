import Head from "next/head";
import dynamic from "next/dynamic";
import { useState } from "react";

export default function Home() {
  const [question, setQuestion] = useState(0);
  const [language, setLanguage] = useState("nl");
  const [score, setScore] = useState(0);
  const [answer, setAnswer] = useState("");
  const [showError, setShowError] = useState(false);

  const questions = [
    {
      location: [44.58155, 1.12236],
      nl: (
        <>
          <p className="!mb-1 font-sans text-base font-bold uppercase tracking-wider text-emerald-400">
            Hannah &amp; Sjoerd&apos;s
          </p>
          <h1 className="text-5xl">Culture rally</h1>
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
            Aujourd&apos;hui, vous allez parcourir un itinéraire en passant par
            plusieurs points. À chaque point, vous devez répondre à une
            question. Si vous répondez correctement à la question vous
            obtiendrez 5 points et l&apos;emplacement de la question suivante.
            Mais si vous répondez incorrectement à une question, vous perdrez un
            point.
          </p>

          <p>
            Si vous n&apos;y arrivez vraiment pas, vous pouvez aussi appeler un
            service d&apos;assistance téléphonique. Mais cela vous coûtera 10
            points.
          </p>

          <p>
            L&apos;équipe ayant le plus de points à la fin de la journée
            remporte la gloire éternelle !
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
          <h2 className="text-4xl">Locatie 1</h2>
          <p>Ga naar de bovenstaande locatie.</p>
          <p>
            We komen regelmatig bij de Carrefour Market om boodschappen te doen.
            Maar welke winkel in de buurt denken jullie dat we de afgelopen drie
            jaar bijna net zo vaak hebben bezocht?
          </p>
        </>
      ),
      fr: (
        <>
          <p>@todo</p>
        </>
      ),
      answers: ["bricomarche", "bricomarché"],
    },
    {
      nl: (
        <>
          <h2 className="text-4xl">Locatie 2</h2>
          <p>
            Op de volgende locatie vind je één van de belangrijke voorzieningen
            van Sarlat. Één keer per jaar wordt hier ook een groot feest
            gegeven. Wat wordt er dan verkocht om om geld in te zamelen?
          </p>
          <p>
            Hint: Het antwoord is te zien in{" "}
            <a href="https://www.youtube.com/watch?v=kDNANhftmaQ">
              BonSjoerd aflevering 12
            </a>
            .
          </p>
        </>
      ),
      fr: (
        <>
          <p>@todo</p>
        </>
      ),
      answers: ["bier", "biere", "bière"],
    },
    {
      nl: (
        <>
          <h2 className="text-4xl">Proissans</h2>
          <p>Welk typisch Nederlandse product wordt hier verkocht?</p>
        </>
      ),
      fr: (
        <>
          <p>@todo</p>
        </>
      ),
      answers: ["poffertjes"],
    },
  ];

  const OpenStreetMap = dynamic(() => import("@/components/OpenStreetMap"), {
    ssr: false,
  });

  function submit(event) {
    event.preventDefault();

    if (questions[question].answers.includes(answer.toLowerCase())) {
      setScore(score + 10);
      setShowError(false);
      setAnswer("");
      setQuestion(question + 1);
    } else {
      setScore(score - 1);
      setShowError(true);
    }
  }

  return (
    <>
      <Head>
        <title>Rally</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="noindex" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen bg-emerald-50 pb-5">
        <div className="mx-auto w-full px-5 max-w-screen-xs">
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

          <OpenStreetMap location={questions[question].location} />

          <div className="content rounded-xl bg-white p-10 shadow-xl">
            {language == "nl" ? questions[question].nl : questions[question].fr}

            <div className="flex flex-col gap-4">
              <div
                className={`
                bg-rose-600 text-white p-3 rounded
                ${showError ? "visible" : "hidden"}
              `}
              >
                {language == "nl"
                  ? "Helaas, dat is fout. Dat kost jullie een punt!"
                  : "Helaas dat was fout. Dat kost je een punt!"}
              </div>

              <input
                className="border border-gray-300 w-full p-2 rounded"
                type="text"
                onChange={(e) => setAnswer(e.target.value)}
                value={answer}
              />

              <button
                className=" bg-emerald-400 hover:bg-emerald-500 !text-white font-semibold !no-underline inline-flex items-center justify-center px-8 py-3 rounded-full shadow-lg shadow-emerald-500/50"
                onClick={(event) => submit(event)}
              >
                Submit
              </button>
            </div>
          </div>

          <a
            className="my-5 block w-full select-none rounded-full py-2 text-center text-sm font-bold uppercase text-emerald-500"
            href="tel:+31646277318"
            onClick={() => setScore(score - 10)}
          >
            {language == "nl"
              ? "Hulplijn inschakelen (- 10 punten)"
              : "Service d&apos;assistance (- 10 points)"}
          </a>
        </div>
      </div>
    </>
  );
}
