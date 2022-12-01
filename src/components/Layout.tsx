/**
 * @file Root common layout file.
 * @author Shuto Iwasaki <https://github.com/iwasakishuto>
 * @copyright Shuto Iwasaki 2022
 * @license MIT
 */

import {
  META_COVER_IMAGE,
  META_DESCRIPTION,
  META_KEYWORDS,
  META_SITE_NAME,
  META_SITE_URL,
  TWITTER_USER_NAME,
} from "@/data/const";

import NextHeadSeo from "next-head-seo";
import { SNS } from "@/data/sns";
import { Tooltip } from "@mui/material";
import urlJoin from "url-join";

type LayoutProps = {
  path: string;
  title: string;
  description?: string;
  ogImagePath?: string;
  noindex?: boolean;
  noTitleTemplate?: boolean;
  isTopPage?: boolean;
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({
  path,
  title,
  description = META_DESCRIPTION,
  ogImagePath = META_COVER_IMAGE,
  noindex,
  noTitleTemplate,
  isTopPage,
  children,
}) => {
  const pageAbsUrl = urlJoin(META_SITE_URL, path);
  const ogImageAbsUrl = urlJoin(META_SITE_URL, ogImagePath);

  return (
    <>
      <NextHeadSeo
        title={noTitleTemplate ? title : `${title} - ${META_SITE_NAME}`}
        canonical={pageAbsUrl}
        description={description}
        robots={noindex ? "noindex, nofollow" : undefined}
        og={{
          title: title,
          description: description,
          url: pageAbsUrl,
          type: isTopPage ? "website" : "article",
          image: ogImageAbsUrl,
          siteName: META_SITE_NAME,
        }}
        twitter={{
          card: "summary_large_image",
          site: TWITTER_USER_NAME,
        }}
        customMetaTags={[
          {
            key: "keywords",
            name: "keywords",
            content: META_KEYWORDS.join(", "),
          },
        ]}
      />

      <div className="flex flex-col h-screen w-screen bg-slate-50">
        {/* <--- Main Contents --- */}
        {children}
        {/* --- Main Contents ---> */}
        {/* <--- Footer Element --- */}
        <div
          className={
            "flex flex-row items-center h-10 w-screen bg-black text-white border-0 border-t-2 border-gray-300 border-solid"
          }
        >
          <div className="mr-auto ml-4">iwasakishuto, 2022</div>
          <div className="ml-auto mr-4 items-cente space-x-1">
            {SNS.map((e) => (
              <a
                key={e.name}
                href={e.link}
                target="_blank"
                rel="noreferrer"
                className={`color-${e.name}`}
              >
                <Tooltip title={e.name}>
                  {<e.Icon className={`bg-white rounded-full w-5 h-5 p-1 color-${e.name}`} />}
                </Tooltip>
              </a>
            ))}
          </div>
        </div>
        {/* --- END Footer Element ---> */}
      </div>
    </>
  );
};

export default Layout;
