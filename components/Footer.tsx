import Email from "@/components/Email";
import Telephone from "@/components/Telephone";
import Wrap from "@/components/Wrap";

export default function Footer() {
  return (
    <footer className="bg-gray-800 py-8 text-white">
      <Wrap className="relative flex max-w-[1280px] flex-col items-center justify-between gap-4 text-center lg:flex-row">
        <p className="md:text-base">
          © {new Date().getFullYear()} - Maison&nbsp;1870,
          13&nbsp;Côte&nbsp;de&nbsp;Ravat,
          24200&nbsp;Sarlat&#8209;la&#8209;Canéda
        </p>

        <div className="flex flex-col items-center gap-x-8 sm:flex-row">
          <Telephone light />
          <Email light />
        </div>
      </Wrap>
    </footer>
  );
}
