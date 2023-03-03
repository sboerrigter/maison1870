import Wrap from "@/components/Wrap";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <Wrap className="max-w-[1280px] relative flex flex-col justify-between items-center text-center gap-4 lg:flex-row">
        <p className="md:text-base">
          © {new Date().getFullYear()} - Maison&nbsp;1870,
          13&nbsp;Côte&nbsp;de&nbsp;Ravat,
          24200&nbsp;Sarlat&#8209;la&#8209;Canéda
        </p>

        <ul className="flex gap-x-8 flex-col sm:flex-row items-center">
          <li className="flex items-center gap-3">
            <svg
              className="flex-none"
              fill="none"
              height="20"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              width="20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
              <line x1="12" y1="18" x2="12.01" y2="18" />
            </svg>

            <a
              href="tel:+33632004114"
              className="py-2 font-bold underline underline-offset-8 text-emerald-400 hover:text-emerald-300 transition-colors duration-200"
            >
              +33 6 32 00 41 14
            </a>
          </li>

          <li className="flex items-center gap-3">
            <svg
              className="flex-none"
              fill="none"
              height="20"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              width="20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
            <a
              href="mailto:bonjour@maison1870.com"
              className="py-2 pr-0 font-bold underline underline-offset-8 text-emerald-400 hover:text-emerald-300 transition-colors duration-200"
            >
              bonjour@maison1870.com
            </a>
          </li>
        </ul>
      </Wrap>
    </footer>
  );
}
