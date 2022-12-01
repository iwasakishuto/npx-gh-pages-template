/**
 * @file Truncates multi-line text to fit within an html element based on a set pixel number max-height.
 * @author Shuto Iwasaki <https://github.com/iwasakishuto>
 * @plugins shave <https://github.com/xiaody/react-lines-ellipsis>
 * @copyright Shuto Iwasaki 2021
 * @license MIT
 */

import React, { useContext, useState } from "react";

import { HTMLSpanProps } from "types";
import { ReactLinesEllipsisProps } from "react-lines-ellipsis";

// import Tooltip from "@mui/material/Tooltip";
export type EllipsisTextCssProps = {
  text?: string;
  maxLine?: number;
  ellipsisProps?: ReactLinesEllipsisProps;
} & HTMLSpanProps;

const EllipsisTextCss: React.FC<EllipsisTextCssProps> = ({
  text = "",
  maxLine = 3,
  ellipsisProps = {},
  ...props
}) => {
  return (
    <span {...props} className={`block ${props.className || ""}`}>
      <span
        className="overflow-hidden whitespace-pre-wrap break-all"
        style={{
          display: "-webkit-box",
          WebkitBoxOrient: "vertical",
          WebkitLineClamp: String(maxLine),
          textOverflow: "-o-ellipsis-lastline",
        }}
      >
        {text + "\n".repeat(maxLine)}
      </span>
    </span>
  );
};

export default EllipsisTextCss;
