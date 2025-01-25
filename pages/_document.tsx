import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html
      lang="en"
      className="font-sans text-gray-500 antialiased scroll-smooth"
    >
      <Head />
      <body className="overflow-x-hidden">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
