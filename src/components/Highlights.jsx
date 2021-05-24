import HighlightsBox from "./HighlightsBox";
import NavigationIcon from "@material-ui/icons/Navigation";

const Highlights = () => {
  return (
    <div className="bg-navyBlue-dark">
      <header className="text-gray-light text-2xl mx-5 font-bold">
        <h2>Today’s Highlights</h2>
      </header>
      <div className="py-8 flex flex-col gap-8">
        <HighlightsBox className="h-52">
          <p className="m-auto w-max">Wind status</p>
          <p className="m-auto mt-2 w-max text-6xl font-bold">
            7<span className="text-4xl font-medium">mph</span>
          </p>
          <div className="m-auto mt-6 w-max flex gap-2">
            <div className="w-6 h-6 bg-gray-dark rounded-full flex justify-center items-center transform-gpu rotate-45">
              <NavigationIcon style={{ fontSize: 15 }} />
            </div>
            <p className="text-sm flex items-center">WSW</p>
          </div>
        </HighlightsBox>
        <HighlightsBox className="h-52">
          <p className="m-auto w-max">Humidity</p>
          <p className="m-auto mt-2 w-max text-6xl font-bold">
            84<span className="text-4xl font-medium">%</span>
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
                className="absolute top-0 w-1/2 h-2 bg-yellow-progress rounded"
                id="humidity_bar"
              ></div>
            </div>
            <p className="mt-1 self-end">%</p>
          </div>
        </HighlightsBox>
        <HighlightsBox small>
          <p className="m-auto w-max">Visibility</p>
          <p className="m-auto mt-2 w-max text-6xl font-bold">
            6,4 <span className="text-4xl font-medium">miles</span>
          </p>
        </HighlightsBox>
        <HighlightsBox small>
          <p className="m-auto w-max">Air Pressure</p>
          <p className="m-auto mt-2 w-max text-6xl font-bold">
            998 <span className="text-4xl font-medium">mb</span>
          </p>
        </HighlightsBox>
      </div>
    </div>
  );
};

export default Highlights;
