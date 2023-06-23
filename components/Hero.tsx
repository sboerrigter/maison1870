import Button from "@/components/Button";
import Image from "next/image";
import Logo from "@/components/Logo";
import Wrap from "@/components/Wrap";

export default function Hero() {
  return (
    <header className="bg-gray-600 w-full h-[66.67vw] min-h-[360px] max-h-[75vh] relative">
      <Image
        alt="Holiday apartment in Sarlat&#8209;la&#8209;Canéda"
        className="w-full h-full absolute left-0 top-0 object-cover z-0"
        priority
        src="/photos/15.jpg"
        width={1600}
        height={1200}
        sizes="100vw"
      />

      <div className="w-full h-full absolute left-0 top-0 bg-gradient-to-b from-blue-900/75 via-transparent" />

      <Wrap className="max-w-[1280px] relative flex justify-between items-end pt-6 2xs:pt-8 md:pt-10">
        <Logo />
        <Button className="hidden sm:flex" blackShadow />
      </Wrap>
    </header>
  );
}
