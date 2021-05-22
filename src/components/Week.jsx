import DayCard from "./DayCard";

const Week = () => {
  return (
    <div className="p-12 py-14 bg-navyBlue-dark">
      <div className="m-auto bg-navyBlue-dark grid grid-cols-2 gap-6 w-max">
        <DayCard />
        <DayCard />
        <DayCard />
      </div>
    </div>
  );
};

export default Week;