import { useEffect, useState } from "react";
import useAxios from "axios-hooks";
import Today from "./components/Today";
import Week from "./components/Week";
import Highlights from "./components/Highlights";
import Footer from "./components/Footer";
import SearchBox from "./components/SearchBox";
import axios from "axios";

function App() {
  const [unit, setUnit] = useState(localStorage.getItem("unit") || "C");
  const [woeid, setWoeid] = useState(localStorage.getItem("woeid") || "523920");
  const [coords, setCoords] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);
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
    getWeather().catch((e) => console.log(e.message));
    return () => {
      manualCancel();
    };
  }, [getWeather, manualCancel, woeid]);

  useEffect(() => {
    if (coords) {
      console.log(coords);
      axios
        .get(
          `https://mycorsproxy-it.herokuapp.com/https://www.metaweather.com/api/location/search/?lattlong=${coords}`
        )
        .then((res) => {
          console.log(res.data);
          setWoeid(res?.data[0].woeid);
        });
    }
  }, [coords]);

  useEffect(() => {
    localStorage.setItem("unit", unit);
  }, [unit]);

  useEffect(() => {
    localStorage.setItem("woeid", woeid);
  }, [woeid]);

  if (isModalVisible)
    return (
      <SearchBox setIsModalVisible={setIsModalVisible} setWoeid={setWoeid} />
    );

  if (error) {
    manualCancel();
    return <p>{JSON.stringify(error.message)}</p>;
  }

  return (
    <div className="min-h-screen h-full font-rale font-medium xl:grid xl:grid-cols-3 xl:grid-rows-layout">
      <Today
        weather={data?.consolidated_weather[0]}
        setCoords={setCoords}
        city={data?.title}
        unit={unit}
        showModal={setIsModalVisible}
      />
      <Week
        weatherWeek={data?.consolidated_weather}
        unit={unit}
        setUnit={setUnit}
      />
      <Highlights weather={data?.consolidated_weather[0]} />
      <Footer />
    </div>
  );
}

export default App;
