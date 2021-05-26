import RoundedButton from "./RoundedButton";

const TemperatureUnits = ({ unit, setUnit }) => {
  return (
    <div className="m-auto px-3 invisible md:visible text-white flex gap-3 justify-end md:max-w-screen-md md:px-8">
      <RoundedButton handleClick={(e) => setUnit("C")} active={unit === "C"}>
        <span className="font-bold">℃</span>
      </RoundedButton>
      <RoundedButton handleClick={(e) => setUnit("F")} active={unit === "F"}>
        <span className="font-bold">℉</span>
      </RoundedButton>
    </div>
  );
};

export default TemperatureUnits;
