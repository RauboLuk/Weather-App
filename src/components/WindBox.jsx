import HighlightsBox from "./HighlightsBox";
import NavigationIcon from "@material-ui/icons/Navigation";

const WindBox = ({
  windSpeed = "0",
  windDirection = "0",
  windDirectionCompass = "N",
}) => {
  const rotation = `${windDirection}deg`
  return (
    <HighlightsBox className="h-52">
      <p className="m-auto w-max">Wind status</p>
      <p className="m-auto mt-2 w-max text-6xl font-bold">
        {Math.round(windSpeed)}
        <span className="text-4xl font-medium">mph</span>
      </p>
      <div className="m-auto mt-6 w-max flex gap-2">
        <div className="w-6 h-6 bg-gray-dark rounded-full flex justify-center items-center transform-gpu">
          <NavigationIcon style={{ fontSize: 15, rotate: rotation }} />
        </div>
        <p className="text-sm flex items-center">{windDirectionCompass}</p>
      </div>
    </HighlightsBox>
  );
};

export default WindBox;
