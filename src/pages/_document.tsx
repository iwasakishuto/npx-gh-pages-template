/**
 * @note
 * _document.tsxはサーバーサイドのみでレンダリングされ、クライアントサイドでは使われない。
 * そのため、"onClick" のようなイベントハンドラはここに追加するべきではない。
 * 全て、のページで共通のコンポーネントは <App> コンポーネントに書くべきである。
 * @author Shuto Iwasaki <https://github.com/iwasakishuto>
 * @copyright Shuto Iwasaki 2022
 * @license MIT
 */

import Document, { DocumentContext, Head, Html, Main, NextScript } from "next/document";
import {
  G_VERIFICATION_CODE,
  META_COVER_IMAGE_ABS_URL,
  META_DESCRIPTION,
  META_SITE_NAME,
  TWITTER_USER_NAME,
} from "@/data/const";
import React, { useContext, useState } from "react";

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="ja-JP" dir="ltr">
        <Head>
          <meta charSet="UTF-8" />
          <meta name="application-name" content="infty" />
          <meta name="theme-color" content="#f0efeb" />
          <meta name="google-site-verification" content={G_VERIFICATION_CODE} />
          <link rel="manifest" href="/manifest.json" />
          <link rel="icon" type="image/x-icon" href="/images/favicon.ico" />
          <link rel="icon" type="image/png" href="/images/favicon.png" />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/images/images/favicon/icons-180x180.png"
          />

          {/* <--- Twitter Meta Tag --- */}
          <meta name="twitter:title" content={META_SITE_NAME} />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content={TWITTER_USER_NAME} />
          <meta name="twitter:creator" content={TWITTER_USER_NAME} />
          <meta name="twitter:description" content={META_DESCRIPTION} />
          <meta name="twitter:image" content={META_COVER_IMAGE_ABS_URL} />
          {/* --- Twitter Meta Tag ---> */}

          {/* <--- Manifest for Windows --- */}
          <meta
            name="msapplication-square70x70logo"
            content="images/images/favicon/icons-70x70.png"
          />
          <meta
            name="msapplication-square150x150logo"
            content="images/images/favicon/icons-150x150.png"
          />
          <meta
            name="msapplication-square310x310logo"
            content="images/images/favicon/icons-310x310.png"
          />
          <meta name="msapplication-TileColor" content="#000" />
          {/* --- Manifest for Windows --- */}

          {/* <--- Manifest for Safari --- */}
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-status-bar-style" content="#000" />
          <meta name="apple-mobile-web-app-title" content={META_SITE_NAME} />
          {/* --- Manifest for Safari ---> */}
        </Head>
        <body className="m-0 p-0">
          <div id="page-transition"></div>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
