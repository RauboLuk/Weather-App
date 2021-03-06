import DayCard from "./DayCard";
import TemperatureUnits from "./TemperatureUnits";

const Week = ({ weatherWeek, unit, setUnit }) => {
  return (
    <div className="p-12 py-14 bg-navyBlue-dark xl:col-span-2 md:py-10 md:px-0">
      <TemperatureUnits unit={unit} setUnit={setUnit}/>
      <div className="m-auto bg-navyBlue-dark grid grid-cols-2 gap-6 w-max md:grid-cols-5 md:pt-16 ">
        {weatherWeek?.slice(1).map((day) => (
          <DayCard weather={day} unit={unit} key={day.id} />
        ))}
      </div>
    </div>
  );
};

export default Week;
