/**
 * @file All Image Paths are defined here.
 * @author Shuto Iwasaki <https://github.com/iwasakishuto>
 * @copyright Shuto Iwasaki 2022
 * @license MIT
 */

import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import type { Sns } from "@/types";
import TwitterIcon from "@mui/icons-material/Twitter";

export const SNS: Sns[] = [
  {
    name: "twitter",
    link: "https://twitter.com/cabernet_rock",
    Icon: TwitterIcon,
  },
  {
    name: "instagram",
    link: "https://www.instagram.com/iwasakishuto/",
    Icon: InstagramIcon,
  },
  {
    name: "facebook",
    link: "https://www.facebook.com/iwasakishuto",
    Icon: FacebookIcon,
  },
  {
    name: "github",
    link: "https://github.com/iwasakishuto",
    Icon: GitHubIcon,
  },
  {
    name: "linkedin",
    link: "https://linkedin.com/in/shuto-iwasaki-019924169",
    Icon: LinkedInIcon,
  },
];
