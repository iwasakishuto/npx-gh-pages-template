/**
 * @file convert date to easy-to-understand format.
 * @author Shuto Iwasaki <https://github.com/iwasakishuto>
 * @plugins react-moment <https://github.com/headzoo/react-moment>
 * @copyright Shuto Iwasaki 2021
 * @license MIT
 */

// import "moment/locale/ja";

import EllipsisTextCss, {
  EllipsisTextCssProps,
} from "@/components/Typography/EllipsisTextCss";

import moment from "moment";

type EllipsisFormatDateProps = {
  date: moment.MomentInput;
} & EllipsisTextCssProps;

const EllipsisFormatDate: React.FC<EllipsisFormatDateProps> = ({
  date,
  maxLine = 1,
  ...props
}) => {
  return (
    <EllipsisTextCss
      text={moment(date).fromNow()}
      maxLine={maxLine}
      {...props}
    />
  );
};

export default EllipsisFormatDate;
