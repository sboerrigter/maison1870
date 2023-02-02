import "@/main.css";

import type { AppProps } from "next/app";
import { Playfair_Display } from "@next/font/google";

const font = Playfair_Display({ weight: "700", subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>
        {`
          :root {
            --playfair-display: ${font.style.fontFamily};
          }
        `}
      </style>
      <Component {...pageProps} />
    </>
  );
}
