import Email from "@/components/Email";
import Image from "next/image";
import Telephone from "@/components/Telephone";
import Wrap from "@/components/Wrap";

export default function Hosts() {
  return (
    <section className="mt-section flex bg-gradient-to-b from-transparent to-emerald-50 pb-12">
      <Wrap className="mb-section flex max-w-[1160px] flex-col-reverse items-center gap-[60px] lg:flex-row xl:gap-[120px]">
        <div className="mx-8 xs:mx-12 lg:mx-0 lg:w-1/2">
          {" "}
          <Image
            alt="Your hosts Hannah & Sjoerd"
            className="rounded-full shadow"
            height={480}
            src="/photos/hannah-sjoerd.jpg"
            width={480}
          />
        </div>

        <div className="text-center lg:w-1/2 lg:text-left">
          <h2>
            Your hosts Hannah&nbsp;<span className="font-serif">&amp;</span>
            &nbsp;Sjoerd
          </h2>
          <p className="mb-8">
            We are Hannah and Sjoerd, a Dutch couple with two children. We moved
            to France in the summer of 2022 to work remotely and to renovate our
            19th century house. We love to welcome guests who want to explore
            beautiful Dordogne and Perigord Noir region. Don&apos;t hesitate to
            contact us if you have any questions!
          </p>

          <div className="center flex-col gap-x-8 gap-y-1 text-gray-800 sm:flex-row lg:flex-col lg:items-start">
            <Telephone />
            <Email />
          </div>
        </div>
      </Wrap>
    </section>
  );
}
