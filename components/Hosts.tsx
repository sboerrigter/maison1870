import Image from "next/image";
import Wrap from "./Wrap";

export default function Hosts() {
  return (
    <section className="mt-section flex bg-gradient-to-b from-transparent to-emerald-50 pb-12">
      <Wrap className="mb-section flex max-w-[1160px] flex-col-reverse items-center gap-[60px] lg:flex-row xl:gap-[120px]">
        <Image
          alt="Your hosts Hannah & Sjoerd"
          className="rounded-full shadow lg:w-1/2"
          height={480}
          src="/photos/hannah-sjoerd.jpg"
          width={480}
        />
        <div className="text-center lg:w-1/2 lg:text-left">
          <h2>
            Your hosts Hannah&nbsp;<span className="font-serif">&amp;</span>
            &nbsp;Sjoerd
          </h2>
          <p>
            We are Hannah and Sjoerd, a Dutch couple with two children. We moved
            to France in the summer of 2022 to work remotely and to renovate our
            19th century house. We love to welcome guests who want to explore
            beautiful Dordogne and Perigord Noir region. Don&apos;t hesitate to
            contact us if you have any questions!
          </p>
        </div>
      </Wrap>
    </section>
  );
}
