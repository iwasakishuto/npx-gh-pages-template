/**
 * @file Ability Data Type.
 * @author Shuto Iwasaki <https://github.com/iwasakishuto>
 * @copyright Shuto Iwasaki 2022
 * @license MIT
 */

import { SvgIconComponent } from "@mui/icons-material";

export const SNS_NAMES = ["github", "twitter", "facebook", "linkedin", "instagram"] as const;
export type SnsName = typeof SNS_NAMES[number];

export type Sns = {
  name: SnsName;
  link: string;
  Icon: SvgIconComponent;
};
