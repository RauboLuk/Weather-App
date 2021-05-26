import Clear from "../assets/images/Clear.png";
import { formatDate, getImage } from "../utils";

const DayCard = ({ weather }) => {
  return (
    <div className="w-30 h-44 p-4 bg-navyBlue-light flex align-middle justify-center flex-col">
      <div className="w-max mx-auto text-gray-light text-base">
        {formatDate(weather?.applicable_date)}
      </div>
      <img
        className="max-h-16 w-auto mx-auto"
        src={getImage(weather?.weather_state_abbr)}
        alt={weather?.weather_state_name}
      />
      <div className="w-full m-auto flex justify-center gap-4">
        <div className="text-gray-light text-base">{Math.round(weather?.max_temp)}°C</div>
        <div className="text-gray-text1 text-base">{Math.round(weather?.min_temp)}°C</div>
      </div>
    </div>
  );
};

export default DayCard;
