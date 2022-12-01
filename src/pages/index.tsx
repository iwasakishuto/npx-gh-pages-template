/**
 * @file Root index file.
 * @author Shuto Iwasaki <https://github.com/iwasakishuto>
 * @copyright Shuto Iwasaki 2022
 * @license MIT
 */

import React, { useContext, useEffect, useState } from "react";

import Layout from "@/components/Layout";
import { META_SITE_NAME } from "@/data/const";
import { NextPage } from "next";
import { UtilityContext } from "@/context/UtilityContext";
import type { WindowSize } from "@/types";
import { getWindowSize } from "@/hooks/getWindowSize";

const Home: NextPage = () => {
  const windowSize: WindowSize = getWindowSize();
  const { showDialog } = useContext(UtilityContext)!;

  // Issue an alert when using a device with a small screen size, such as a smartphone
  useEffect(() => {
    if (windowSize.width < 460 && windowSize.height > 460) {
      showDialog({
        title: "スマホですね！",
        description: `横幅が${windowSize.width}pxです。`,
      });
    }
  }, [windowSize]);

  return (
    <Layout path="/" title={META_SITE_NAME} noTitleTemplate={true} isTopPage={true}>
      {/* <--- Header Element --- */}
      <div className="bg-red-300 py-2 w-full max-w-7xl mx-auto flex flex-row overflow-x-scroll">
        Sample Header
      </div>
      {/* --- END Header Element ---> */}
      {/* <--- Main Profile Screen --- */}
      <div className="bg-blue-300 flex flex-1 overflow-y-scroll max-w-7xl mx-auto my-2 w-full h-full rounded-2xl">
        Main Contents
      </div>
      {/* --- END Main Profile Screen ---> */}
    </Layout>
  );
};

export default Home;
