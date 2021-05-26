import AirPressureBox from "./AirPressureBox";
import HumidityBox from "./HumidityBox";
import VisibilityBox from "./VisibilityBox";
import WindBox from "./WindBox";

const Highlights = ({ weather }) => {
  return (
    <div className="bg-navyBlue-dark xl:col-span-2">
      <header className="m-auto w-82 text-gray-light text-2xl font-bold md:w-auto md:max-w-screen-md md:px-8">
        <h2>Today’s Highlights</h2>
      </header>
      <div className="m-auto py-8 max-w-max grid gap-8 md:grid-cols-2 md:gap-12">
        <WindBox
          windSpeed={weather?.wind_speed}
          windDirection={weather?.wind_direction}
          windDirectionCompass={weather?.wind_direction_compass}
        />
        <HumidityBox humidity={weather?.humidity} />
        <VisibilityBox visibility={weather?.visibility} />
        <AirPressureBox pressure={weather?.air_pressure} />
      </div>
    </div>
  );
};

export default Highlights;
