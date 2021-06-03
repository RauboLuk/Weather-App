import { useEffect, useState } from "react";
import useAxios from "axios-hooks";
import Today from "./components/Today";
import Week from "./components/Week";
import Highlights from "./components/Highlights";
import Footer from "./components/Footer";

import Backdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";

function App() {
  const [unit, setUnit] = useState(localStorage.getItem("unit") || "C");
  const [woeid, setWoeid] = useState(localStorage.getItem("woeid") || "523920");
  const [coords, setCoords] = useState("");
  const [loadingCoords, setLoadingCoords] = useState(false);
  const [{ data, loading, error }, getWeather, manualCancel] = useAxios({
    url: `https://mycorsproxy-it.herokuapp.com/https://www.metaweather.com/api/location/${woeid}`,
    method: "get",
  });
  const [{ loadingLocation }, getLocation, manualCancelLocation] = useAxios(
    {
      url: `https://mycorsproxy-it.herokuapp.com/https://www.metaweather.com/api/location/search/?lattlong=${coords}`,
      method: "get",
    },
    { manual: true }
  );
  console.log(data);

  useEffect(() => {
    getWeather().catch((e) => console.error(e.message));
    return () => {
      manualCancel();
    };
  }, [getWeather, manualCancel, woeid]);

  useEffect(() => {
    if (coords) {
      getLocation()
        .then((res) => {
          setWoeid(res?.data[0].woeid);
        })
        .catch((e) => console.error(e.message));
    }
    return () => {
      manualCancelLocation();
    };
  }, [getLocation, manualCancelLocation, coords]);

  useEffect(() => {
    localStorage.setItem("unit", unit);
  }, [unit]);

  useEffect(() => {
    localStorage.setItem("woeid", woeid);
  }, [woeid]);

  return (
    <div>
      <Backdrop
        className="text-blue-400"
        open={loading || loadingLocation || loadingCoords || error || false}
        style={{ zIndex: 1, backgroundColor: "rgba(0, 0, 0, 0.95)" }}
      >
        {error ? (
          <p className="bg-white rounded-md p-4">
            Error: {error.message}. Please try again.
          </p>
        ) : (
          <CircularProgress color="inherit" />
        )}
      </Backdrop>
      <div className="min-h-screen h-full font-rale font-medium xl:grid xl:grid-cols-3 xl:grid-rows-layout">
        <Today
          weather={data?.consolidated_weather[0]}
          setCoords={setCoords}
          city={data?.title}
          unit={unit}
          setWoeid={setWoeid}
          setLoadingCoords={setLoadingCoords}
        />
        <Week
          weatherWeek={data?.consolidated_weather}
          unit={unit}
          setUnit={setUnit}
        />
        <Highlights weather={data?.consolidated_weather[0]} />
        <Footer />
      </div>
    </div>
  );
}

export default App;
