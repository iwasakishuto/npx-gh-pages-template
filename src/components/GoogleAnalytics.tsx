/**
 * @file Root common layout file.
 * @author Shuto Iwasaki <https://github.com/iwasakishuto>
 * @copyright Shuto Iwasaki 2022
 * @license MIT
 */

import { GA_TRACKING_ID } from "@/data/const";
import Script from "next/script";

const GoogleAnalytics = () => {
  return (
    <>
      {/* <--- Google App Script --- */}
      <Script
        defer
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
        strategy="afterInteractive"
      />
      <Script id="ga" defer strategy="afterInteractive">
        {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${GA_TRACKING_ID}');
    `}
      </Script>
      {/* --- Google App Script ---> */}
    </>
  );
};

export default GoogleAnalytics;
