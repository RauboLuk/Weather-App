import HighlightsBox from "./HighlightsBox";

const HumidityBox = ({ humidity = "0" }) => {
  return (
    <HighlightsBox className="h-52">
      <p className="m-auto w-max">Humidity</p>
      <p className="m-auto mt-2 w-max text-6xl font-bold">
        {humidity}
        <span className="text-4xl font-medium">%</span>
      </p>
      <div className="w-56 m-auto flex flex-col text-xs text-gray-text1">
        <div className="w-full mt-3 flex justify-between">
          <p className="">0</p>
          <p>50</p>
          <p>100</p>
        </div>
        <div className="relative">
          <div className="w-full h-2 bg-gray-light rounded"></div>
          <div
            className="absolute top-0 h-2 bg-yellow-progress rounded"
            id="humidity_bar"
            style={{ width: `${humidity}%` }}
          ></div>
        </div>
        <p className="mt-1 self-end">%</p>
      </div>
    </HighlightsBox>
  );
};

export default HumidityBox;
