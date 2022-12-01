/**
 * @file
 * Overrides the App component used to initialize the page and
 * controls the Loading screen at the time of page transition.
 * @note
 * Since it behaves the same as the page component provided by Next.js,
 * "_app.tsx" is rendered on the server side (including the execution of getInitialProps)
 * and lifecycle events are also executed on the client side.
 * @author Shuto Iwasaki <https://github.com/iwasakishuto>
 * @copyright Shuto Iwasaki 2022
 * @license MIT
 */

import "@/styles/main.scss";

import type { AppProps } from "next/app";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import UtilityContextProvider from "@/context/UtilityContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <UtilityContextProvider>
      <GoogleAnalytics />
      <Component {...pageProps} />
    </UtilityContextProvider>
  );
}
