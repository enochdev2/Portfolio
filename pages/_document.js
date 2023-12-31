import { Html, Head, Main, NextScript } from "next/document";
import NextThemeProvider from "../ThemeProvider";

export default function Document() {
  return (
    <Html>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Raleway:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <body className={`bg-[#030014] overflow-y-scroll overflow-x-hidden`}>
        <NextThemeProvider>
        <Main />
        <NextScript />
        </NextThemeProvider>
      </body>
    </Html>
  );
}
