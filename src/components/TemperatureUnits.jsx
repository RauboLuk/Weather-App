import RoundedButton from "./RoundedButton";

const TemperatureUnits = () => {
  return (
    <div className="m-auto px-3 invisible md:visible text-white flex gap-3 justify-end md:max-w-screen-md md:px-8">
      <RoundedButton>℃</RoundedButton>
      <RoundedButton>℉</RoundedButton>
    </div>
  );
};

export default TemperatureUnits;