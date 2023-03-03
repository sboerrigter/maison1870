import Button from "@/components/Button";
import Image from "next/image";
import Logo from "@/components/Logo";
import Wrap from "@/components/Wrap";

export default function Hero() {
  return (
    <header className="bg-gray-600 w-full aspect-[4/3] min-h-[360px] max-h-[75vh] relative">
      <Image
        alt="Holiday apartment in Sarlat&#8209;la&#8209;Canéda"
        className="w-full h-full absolute left-0 top-0 object-cover z-0"
        priority
        src="/photos/19.jpg"
        width={2016}
        height={1512}
        sizes="100vw"
      />

      <div className="w-full h-full absolute left-0 top-0 bg-gradient-to-b from-black/40 to-transparent" />

      <Wrap className="max-w-[1280px] relative flex justify-between items-end pt-6 2xs:pt-8 md:pt-10">
        <Logo />
        <Button className="hidden sm:flex" blackShadow />
      </Wrap>
    </header>
  );
}
