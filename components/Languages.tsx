import Wrap from "@/components/Wrap";

export default function Languages() {
  const languages = [
    {
      id: "french",
      flag: "🇫🇷",
      text: "Nous parlons français",
    },
    {
      id: "english",
      flag: "🇬🇧",
      text: "We speak english",
    },
    {
      id: "dutch",
      flag: "🇳🇱",
      text: "Wij spreken Nederlands",
    },
    {
      id: "german",
      flag: "🇩🇪",
      text: "Und auch ein bisschen Deutsch",
    },
  ];
  return (
    <Wrap className="content -mt-12 max-w-[1280px]">
      <div className="flex w-full flex-wrap justify-center gap-x-8 gap-y-2 rounded-lg bg-white p-6 text-center font-bold text-gray-800 shadow-lg md:py-8 md:px-12">
        {languages.map((language) => (
          <div
            key={language.id}
            className="w-full text-base !leading-8 sm:w-auto"
          >
            <span className="mr-2 inline-block text-xl">{language.flag}</span>
            {language.text}
          </div>
        ))}
      </div>
    </Wrap>
  );
}
