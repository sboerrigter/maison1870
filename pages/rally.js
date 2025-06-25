import { useEffect, useState } from "react";

import Head from "next/head";
import Image from "next/image";
import dynamic from "next/dynamic";

export default function Rally() {
  const [question, setQuestion] = useState(0);
  const [language, setLanguage] = useState("nl");
  const [score, setScore] = useState(0);
  const [error, setError] = useState(false);

  // Load state from localStorage on component mount
  useEffect(() => {
    const savedQuestion = localStorage.getItem("rallyQuestion");
    const savedLanguage = localStorage.getItem("rallyLanguage");
    const savedScore = localStorage.getItem("rallyScore");

    if (savedQuestion) setQuestion(parseInt(savedQuestion));
    if (savedLanguage) setLanguage(savedLanguage);
    if (savedScore) setScore(parseInt(savedScore));
  }, []);

  // Save state to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("rallyQuestion", question);
    localStorage.setItem("rallyLanguage", language);
    localStorage.setItem("rallyScore", score);
  }, [question, language, score]);

  const questions = [
    {
      location: [44.90247, 1.211192],
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
            beantwoord krijg je 10 punten en de locatie voor de volgende vraag.
            Maar beantwoord je een vraag fout, dan verlies je een punt.
          </p>

          <p>
            Als je er echt niet uitkomt kan je ook een hulplijn inschakelen.
            Maar, dat kost je wel 5 punten.
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
            Bienvenue au rallye culturel automobile de Hannah &amp; Sjoerd ! Une
            aventure folle à travers nos endroits préférés de la région.
          </p>
          <p>
            Aujourd&apos;hui, vous allez suivre un itinéraire en passant par
            différents points. À chaque point, vous devrez répondre à une
            question. Si vous répondez correctement, vous gagnez 10 points et
            recevez l&apos;emplacement de la prochaine question. Mais si vous
            vous trompez, vous perdez un point.
          </p>
          <p>
            Si vous n&apos;y arrivez vraiment pas, vous pouvez utiliser un
            joker. Mais cela vous coûtera 5 points.
          </p>
          <p>
            L&apos;équipe qui aura le plus de points à la fin de la journée
            remportera la gloire éternelle !
          </p>
          <p>
            Vous avez compris ? Tapez alors ci-dessous &ldquo;je
            comprends&rdquo; pour obtenir le premier lieu et la première
            question.
          </p>
        </>
      ),
      answers: ["ik snap het", "je comprends"],
    },
    {
      location: [44.90247, 1.211192],
      nl: (
        <>
          <h2 className="text-4xl">Locatie {question}</h2>
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
          <h2 className="text-4xl">Lieu {question}</h2>
          <p>Rendez-vous à l&apos;emplacement ci-dessus.</p>
          <p>
            Nous allons régulièrement au Carrefour Market pour faire des
            courses. Mais quel magasin dans les environs pensez-vous que nous
            avons presque aussi souvent visité ces trois dernières années ?
          </p>
        </>
      ),
      answers: ["bricomarche", "bricomarché"],
    },
    {
      location: [44.892833, 1.211897],
      nl: (
        <>
          <h2 className="text-4xl">Locatie {question}</h2>
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
          <h2 className="text-4xl">Lieu {question}</h2>
          <p>
            À cet endroit, vous trouverez l&apos;une des installations
            importantes de Sarlat. Une fois par an, une grande fête y est
            organisée. Qu&apos;est-ce qui y est vendu pour récolter de
            l&apos;argent ?
          </p>
          <p>
            Indice : La réponse se trouve dans{" "}
            <a href="https://www.youtube.com/watch?v=kDNANhftmaQ">
              BonSjoerd épisode 12
            </a>
            .
          </p>
        </>
      ),
      answers: [
        "bier",
        "biere",
        "bière",
        "drank",
        "drinken",
        "boissons",
        "buvait",
      ],
    },
    {
      location: [44.887917, 1.219869],
      nl: (
        <>
          <h2 className="text-4xl">Locatie {question}</h2>
          <p>
            De Dordogne is bekend vanwege de vele prachtige kastelen. In
            &ldquo;Parc du Plantier&rdquo; staat het kasteel dat wij het vaakst
            bezocht hebben. In welk jaar is dit kasteel gebouwd?
          </p>
        </>
      ),
      fr: (
        <>
          <h2 className="text-4xl">Lieu {question}</h2>
          <p>
            La Dordogne est connue pour ses nombreux magnifiques châteaux. Dans
            le &ldquo;Parc du Plantier&rdquo; se trouve le château que nous
            avons visité le plus souvent. En quelle année ce château a-t-il été
            construit ?
          </p>
        </>
      ),
      answers: ["2023"],
    },
    {
      location: [44.901698, 1.217905],
      nl: (
        <>
          <h2 className="text-4xl">Locatie {question}</h2>
          <p>
            Deze locatie heette vroeger &ldquo;Les Tilleuls&rdquo;, vanwege de
            linde bomen die hier staan. Maar er staan nog bomen van een andere
            soort. Hoeveel en welke soort?
          </p>
        </>
      ),
      fr: (
        <>
          <h2 className="text-4xl">Lieu {question}</h2>
          <p>
            Cet endroit s&apos;appelait autrefois &ldquo;Les Tilleuls&rdquo;, à
            cause des tilleuls qui s&apos;y trouvent. Mais il y a aussi
            d&apos;autres arbres d&apos;une autre espèce. Combien et de quelle
            espèce ?
          </p>
        </>
      ),
      answers: ["24 platanen", "24 platanes", "24 platane"],
    },
    {
      location: [44.933182, 1.252884],
      nl: (
        <>
          <h2 className="text-4xl">Locatie {question}</h2>
          <p>Welk typisch Nederlandse product wordt hier verkocht?</p>
        </>
      ),
      fr: (
        <>
          <h2 className="text-4xl">Lieu {question}</h2>
          <p>Quel produit typiquement néerlandais est vendu ici ?</p>
        </>
      ),
      answers: ["poffertjes"],
    },
    {
      location: [44.970967, 1.206543],
      nl: (
        <>
          <h2 className="text-4xl">Locatie {question}</h2>
          <p>Hier gaan we lekker rekenen!</p>
          <ul>
            <li>A = het getal dat je hier ziet.</li>
            <li>B = het geboortejaar van zowel Hannah als Sjoerd.</li>
            <li>C = het nummer van het departement waar je je nu bevindt.</li>
          </ul>
          <p>Bereken: B + C * A</p>
        </>
      ),
      fr: (
        <>
          <h2 className="text-4xl">Lieu {question}</h2>
          <p>Ici, nous allons faire un peu de calcul !</p>
          <ul>
            <li>A = le nombre que vous voyez ici.</li>
            <li>B = l&apos;année de naissance de Hannah et de Sjoerd.</li>
            <li>
              C = le numéro du département où vous vous trouvez actuellement.
            </li>
          </ul>
          <p>Calculez : B + C * A</p>
        </>
      ),
      answers: ["6306"],
    },
    {
      location: [44.966080302135694, 1.1612585663991821],
      nl: (
        <>
          <h2 className="text-4xl">Locatie {question}</h2>
          <p>
            Tijd om even te relaxen en wat spelletjes te doen. Als de klok 11 en
            een half keer heeft geslagen krijgen jullie van de spelleiding een
            leuke puzzel. Wat is de oplossing?
          </p>
        </>
      ),
      fr: (
        <>
          <h2 className="text-4xl">Lieu {question}</h2>
          <p>
            Il est temps de se détendre un peu et de jouer à quelques jeux.
            Lorsque l&apos;horloge aura sonné onze heures et demie, vous
            recevrez une belle énigme de la part de l&apos;organisation. Quelle
            est la solution ?
          </p>
        </>
      ),
      answers: ["la bonne vie en france"],
    },
    {
      location: [44.93544426749727, 1.1421611902007716],
      nl: (
        <>
          <h2 className="text-4xl">Locatie {question}</h2>

          <p>
            Veel Nederlands denken dat Foie Gras eenden zielig zijn. Maar kijk
            hier eens wat een prachtig leven deze dieren hier hebben. Dus ga
            lekker zitten en geniet zonder schuldgevoel van een heerlijke
            maaltijd met lokale specialiteiten. Bon appétit!
          </p>

          <p>
            Het hoofdingrediënt van het toetje is ook een lokale specialiteit.
            Wat is dat?
          </p>
        </>
      ),
      fr: (
        <>
          <h2 className="text-4xl">Lieu {question}</h2>
          <p>
            Beaucoup de Néerlandais pensent que les canards de foie gras sont
            malheureux. Mais regardez ici la belle vie que ces animaux ont.
            Alors installez-vous confortablement et profitez sans culpabilité
            d&apos;un délicieux repas avec des spécialités locales. Bon appétit
            !
          </p>
          <p>
            L&apos;ingrédient principal du dessert est aussi une spécialité
            locale. De quoi s&apos;agit-il ?
          </p>
        </>
      ),
      answers: ["walnoot", "walnoten", "noix", "des noix"],
    },
    {
      location: [44.903273596791266, 1.190496638046599],
      nl: (
        <>
          <h2 className="text-4xl">Locatie {question}</h2>
          <p>
            Dit is ook een plek die wij de afgelopen jaren vaak bezocht hebben.
            Gelukkig is dit hier gratis.
          </p>
          <p>
            Wat wordt hier niet geaccepteerd naast medicijnen, banden en
            huishoudelijk afval?
          </p>
        </>
      ),
      fr: (
        <>
          <h2 className="text-4xl">Lieu {question}</h2>
          <p>
            C&apos;est aussi un endroit que nous avons souvent visité ces
            dernières années. Heureusement, c&apos;est gratuit ici.
          </p>
          <p>
            Qu&apos;est-ce qui n&apos;est pas accepté ici, en plus des
            médicaments, des pneus et des déchets ménagers ?
          </p>
        </>
      ),
      answers: [
        "radioactief afval",
        "radioactive waste",
        "déchets radioactifs",
        "dechets radioactifs",
      ],
    },
    {
      location: [44.892639323126886, 1.1642579597006202],
      nl: (
        <>
          <h2 className="text-4xl">Locatie {question}</h2>
          <p>
            Je vind hier een grote versie van een apparaat dat Hannah graag
            gebruikt om de rest van ons gezin te verwennen.
          </p>
          <p>
            Ze heeft ook meegewerkt aan vertalingen voor een bekende producent
            van dit soort machines. Hoe heet die producent?
          </p>
        </>
      ),
      fr: (
        <>
          <h2 className="text-4xl">Lieu {question}</h2>
          <p>
            Ici, vous trouverez une grande version d&apos;un appareil que Hannah
            aime utiliser pour choyer le reste de notre famille.
          </p>
          <p>
            Elle a également contribué aux traductions pour un célèbre fabricant
            de ce type de machines. Quel est le nom de ce fabricant ?
          </p>
        </>
      ),
      answers: ["kitchenaid"],
    },
    {
      location: [44.840465480937006, 1.1483590891533588],
      nl: (
        <>
          <h2 className="text-4xl">Locatie {question}</h2>
          <p>
            Hier kijk je uit over de prachtige Dordogne vallei met haar vele
            kastelen. Vanaf dit punt kan je er wel vijf zien: Château de Beynac,
            Château de Frayrac, Château de Castelnaud-la-Chapelle, Château de
            Lacoste en Château de Marqueyssac.
          </p>
          <p>Maar hoeveel rode driehoeken zie je hier?</p>
        </>
      ),
      fr: (
        <>
          <h2 className="text-4xl">Lieu {question}</h2>
          <p>
            Ici, vous avez une vue sur la magnifique vallée de la Dordogne avec
            ses nombreux châteaux. Depuis ce point, vous pouvez en voir cinq :
            Château de Beynac, Château de Frayrac, Château de
            Castelnaud-la-Chapelle, Château de Lacoste et Château de
            Marqueyssac.
          </p>
          <p>Mais combien de triangles rouges voyez-vous ici ?</p>
        </>
      ),
      answers: ["85"],
    },
    {
      location: [44.82626292498936, 1.1824676357309465],
      nl: (
        <>
          <h2 className="text-4xl">Locatie {question}</h2>
          <p>
            Welkom in “La Roque Gageac”. Dit mooie plaatsje ligt tussen de
            rivier de Dordogne en een imposante rotswand met daarin een
            middeleeuws fort.
          </p>
          <p>
            In dit dorpje zijn ook veel bijzondere planten te vinden. Hoe oud is
            de maker van dit “Paradijs op aarde” geworden?
          </p>
        </>
      ),
      fr: (
        <>
          <h2 className="text-4xl">Lieu {question}</h2>
          <p>
            Bienvenue à “La Roque Gageac”. Ce beau village est situé entre la
            rivière Dordogne et une imposante falaise avec une forteresse
            médiévale.
          </p>
          <p>
            Dans ce village, on trouve aussi de nombreuses plantes
            particulières. Quel âge avait le créateur de ce “Paradis sur terre”
            ?
          </p>
        </>
      ),
      answers: ["79", "79 jaar", "79 ans"],
    },
    {
      location: [44.8019342180701, 1.2189664953015382],
      nl: (
        <>
          <h2 className="text-4xl">Locatie {question}</h2>
          <p>
            In Domme kan je het beste buiten de stadsmuur parkeren en het stadje
            te voet betreden. Ga hier op zoek naar twee kippen.
          </p>
          <p>
            Als je door dit geometrisch object richting ons huis kijkt, zie je
            halverwege een groot bouwwerk boven de bomen uitsteken. Wat is het
            adres van dit gebouw (huisnummer + straatnaam)?
          </p>
        </>
      ),
      fr: (
        <>
          <h2 className="text-4xl">Lieu {question}</h2>
          <p>
            À Domme, il est préférable de se garer à l&apos;extérieur des
            remparts et d&apos;entrer dans la ville à pied. Cherchez ici deux
            poules.
          </p>
          <p>
            Si vous regardez vers notre maison à travers cet objet géométrique,
            vous verrez à mi-chemin un grand bâtiment dépasser des arbres.
            Quelle est l&apos;adresse de ce bâtiment (numéro + nom de la rue) ?
          </p>
        </>
      ),
      answers: ["22 marobert"],
    },
    {
      location: [44.75916320111895, 1.2221376892464353],
      nl: (
        <>
          <h2 className="text-4xl">Locatie {question}</h2>
          <p>
            Op deze plek zijn ludieke kunstenaars actief geweest. Wat is er
            afgebeeld op het werk dat is gesigneerd door de mysterieuze
            kunstenaar “S”?
          </p>
        </>
      ),
      fr: (
        <>
          <h2 className="text-4xl">Lieu {question}</h2>
          <p>
            À cet endroit, des artistes ludiques ont été actifs. Que représente
            l&apos;œuvre signée par l&apos;énigmatique artiste “S” ?
          </p>
        </>
      ),
      answers: ["hart", "hartje", "cœur", "coeur"],
    },
    {
      location: [44.710327786823726, 1.2247312140463134],
      nl: (
        <>
          <h2 className="text-4xl">Locatie {question}</h2>
          <p>
            Hier vind je een verrekijker die je een panoramisch uitzicht geeft
            over de omgeving. Maar hoeveel stappen moet je hier omhoog zetten om
            de “Lol” ervan in te zien?
          </p>
        </>
      ),
      fr: (
        <>
          <h2 className="text-4xl">Lieu {question}</h2>
          <p>
            Ici, vous trouverez une longue-vue qui vous offre une vue
            panoramique sur les environs. Mais combien de marches devez-vous
            monter ici pour voir le “fun” ?
          </p>
        </>
      ),
      answers: ["122"],
    },
    {
      location: [44.90247, 1.211192],
      nl: (
        <>
          <h2 className="text-4xl">Gefeliciteerd!</h2>
          <p>
            Dat was het goede antwoord en daarmee is de Rally afgelopen.
            Gefeliciteerd met jullie mooie score!
          </p>

          <div className="flex justify-center">
            <div className="rounded-full bg-emerald-900 px-8 py-4 font-mono text-white mb-6 font-bold text-xl">
              Score: {score}
            </div>
          </div>

          <p>
            Goed gedaan hoor! Laat deze score maar snel aan de spelleiding zien
            zodat ze kunnen bepalen wie de rally gewonnen heeft.
          </p>

          <p>
            Na deze prestatie hebben jullie wel wat lekkers verdiend. We hebben
            om 17:00 uur bij “Les Vignerons des Côteaux du Céou” gereserveerd
            voor een wijnproeverij.
          </p>

          <p>Proost en bedankt voor het meespelen!</p>
        </>
      ),
      fr: (
        <>
          <h2 className="text-4xl">Félicitations !</h2>
          <p>
            C&apos;était la bonne réponse et la Rallye est donc terminée.
            Félicitations pour votre beau score !
          </p>
          <div className="flex justify-center">
            <div className="rounded-full bg-emerald-900 px-8 py-4 font-mono text-white mb-6 font-bold text-xl">
              Score : {score}
            </div>
          </div>
          <p>
            Bien joué ! Montrez vite ce score à l&apos;organisation pour
            qu&apos;ils puissent déterminer qui a gagné le rallye.
          </p>
          <p>
            Après cette performance, vous avez bien mérité une petite
            gourmandise. Nous avons réservé une dégustation de vin à 17h00 chez
            “Les Vignerons des Côteaux du Céou”.
          </p>
          <p>Santé et merci d&apos;avoir participé !</p>
        </>
      ),
    },
  ];

  const OpenStreetMap = dynamic(() => import("@/components/OpenStreetMap"), {
    ssr: false,
  });

  function submit(event) {
    event.preventDefault();

    let answer = event.target[0].value;

    answer = answer.toLowerCase();
    answer = answer.replace(" ", "");

    let goodanswers = questions[question].answers.map((answer) => {
      answer = answer.toLowerCase();
      answer = answer.replace(" ", "");
      return answer;
    });

    if (answer == "") {
      setError(
        language == "nl"
          ? "Je moet natuurlijk wel iets invullen..."
          : "Bien sûr, vous devez remplir quelque chose..."
      );
    } else if (goodanswers.includes(answer)) {
      setScore(score + 10);
      setError(false);
      setQuestion(question + 1);
    } else {
      setScore(score - 1);
      setError(
        language == "nl"
          ? "Helaas, dat is fout. Dat kost jullie een punt!"
          : "Malheureusement, c'était une erreur. Cela vous coûtera un point !"
      );
    }

    event.target[0].value = "";
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

          {question == 0 || question == 16 ? (
            <Image
              alt="Hannah & Sjoerd"
              className="w-full"
              priority
              src="/photos/party/hero.jpg"
              width={1600}
              height={1200}
              sizes="100vw"
            />
          ) : (
            <OpenStreetMap location={questions[question].location} />
          )}

          <div className="content rounded-xl bg-white p-10 shadow-xl">
            {language == "nl" ? questions[question].nl : questions[question].fr}

            {question != 16 && (
              <form
                onSubmit={(event) => submit(event)}
                className="flex flex-col gap-4"
              >
                <div
                  className={`
                bg-rose-600 text-white p-3 rounded
                ${error ? "visible" : "hidden"}
              `}
                >
                  {error}
                </div>

                <input
                  className="border border-gray-300 w-full p-2 rounded focus:ring-0 focus:outline-none focus:border-gray-400"
                  type="text"
                />

                <button
                  className=" bg-emerald-400 hover:bg-emerald-500 w-full !text-white font-semibold !no-underline inline-flex items-center justify-center px-8 py-3 rounded-full shadow-lg shadow-emerald-500/50"
                  type="submit"
                >
                  {language == "nl" ? "Verstuur antwoord" : "Envoyer réponse"}
                </button>
              </form>
            )}
          </div>

          <a
            className="my-5 block w-full select-none rounded-full py-2 text-center text-sm font-bold uppercase text-emerald-500"
            href="tel:+31646277318"
            onClick={() => setScore(score - 5)}
          >
            {language == "nl"
              ? "Hulplijn inschakelen (- 5 punten)"
              : "Service d&apos;assistance (- 5 points)"}
          </a>
        </div>
      </div>
    </>
  );
}
