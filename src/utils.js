import format from "date-fns/format";
import isValid from "date-fns/isValid";
import isTomorrow from "date-fns/isTomorrow";
import formatRelative from "date-fns/formatRelative";
import Clear from "./assets/images/Clear.png";
import Hail from "./assets/images/Hail.png";
import HeavyCloud from "./assets/images/HeavyCloud.png";
import HeavyRain from "./assets/images/HeavyRain.png";
import LightCloud from "./assets/images/LightCloud.png";
import LightRain from "./assets/images/LightRain.png";
import Shower from "./assets/images/Shower.png";
import Sleet from "./assets/images/Sleet.png";
import Snow from "./assets/images/Snow.png";
import Thunderstorm from "./assets/images/Thunderstorm.png";

export const formatDate = (date) => {
  const dateObj = new Date(date);
  if (!isValid(dateObj)) return "";
  if (isTomorrow(dateObj)) return "Tomorrow";
  return format(dateObj, "eee, d MMM");
};

export const relativeDate = (date) => {
  if (!isValid(new Date(date))) return "";
  return formatRelative(new Date(), new Date(date)).split(" ")[0];
};

export const getImage = (weather) => {
  switch (weather) {
    case "sn":
      return Snow;
    case "sl":
      return Sleet;
    case "h":
      return Hail;
    case "t":
      return Thunderstorm;
    case "hr":
      return HeavyRain;
    case "lr":
      return LightRain;
    case "s":
      return Shower;
    case "hc":
      return HeavyCloud;
    case "lc":
      return LightCloud;
    case "c":
      return Clear;
    default:
      return Clear;
  }
};
