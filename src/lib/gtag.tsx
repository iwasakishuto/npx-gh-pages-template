/**
 * @file Utility library for handling GoogleAnalytics.
 * @author Shuto Iwasaki <https://github.com/iwasakishuto>
 * @copyright Shuto Iwasaki 2022
 * @license MIT
 */

import { GA_TRACKING_ID } from "@/data/const";

export const pageview = (path: string) => {
  window.gtag("config", GA_TRACKING_ID, {
    page_path: path,
  });
};

export const event = ({
  action,
  category,
  label,
  value,
}: {
  action: string;
  category: string;
  label: string;
  value?: number;
}) => {
  if (!GA_TRACKING_ID) return;
  window.gtag("event", action, {
    event_category: category,
    event_label: JSON.stringify(label),
    value,
  });
};
