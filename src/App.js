import { useEffect, useState } from "react";
import useAxios from "axios-hooks";
import Today from "./components/Today";
import Week from "./components/Week";
import Highlights from "./components/Highlights";
import Footer from "./components/Footer";

function App() {
  const [unit, setUnit] = useState(localStorage.getItem("unit") || "C");
  const [woeid, setWoeid] = useState(localStorage.getItem("woeid") || "523920");
  const [coords, setCoords] = useState(localStorage.getItem("coords") || "");
  const [weather, setWeather] = useState({});
  const [{ data, loading, error }, getWeather, manualCancel] = useAxios({
    url: `https://mycorsproxy-it.herokuapp.com/https://www.metaweather.com/api/location/${woeid}`,
    method: "get",
    withCredentials: false,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET",
    },
  });

  useEffect(() => {
    getWeather();
    return () => {
      manualCancel();
    };
  }, [getWeather, manualCancel, woeid]);

  console.log(data);

  return (
    <div className="min-h-screen h-full font-rale font-medium xl:grid xl:grid-cols-3 xl:grid-rows-layout">
      <Today weather={data?.consolidated_weather[0]} setCoords={setCoords} city={data?.title} />
      <Week weatherWeek={data?.consolidated_weather}  />
      <Highlights weather={data?.consolidated_weather[0]} />
      <Footer />
    </div>
  );
}

export default App;
