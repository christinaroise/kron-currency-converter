import { useState, useEffect } from "react";
import { AppProps } from "next/app";
import { GlobalStyles } from "styled-components/GlobalStyles";

export default function MyApp({ Component, pageProps }: AppProps) {
  const [isPageMounted, setIsPageMounted] = useState(false);

  useEffect(() => {
    setIsPageMounted(true);
  }, []);

  // Temp solution for Styled Components to work properly with SSR
  useEffect(() => {
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement?.removeChild(jssStyles);
    }
  }, []);

  return (
    isPageMounted && (
      <>
        <GlobalStyles />
        <header />
        <main id="root">
          <Component {...pageProps} />
        </main>
        <footer />
      </>
    )
  );
}
