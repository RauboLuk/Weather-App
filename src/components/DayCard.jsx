import Clear from "../assets/images/Clear.png";

const DayCard = () => {
  return (
    <div className="w-30 h-44 p-4 bg-navyBlue-light flex align-middle justify-center flex-col">
      <div className="w-max mx-auto text-gray-light text-base">Day</div>
      <img className="max-h-16 w-auto mx-auto" src={Clear} alt="" />
      <div className="w-full m-auto flex justify-center gap-4">
        <div className="text-gray-light text-base">-10°C</div>
        <div className="text-gray-text1 text-base">-50°C</div>
      </div>
    </div>
  );
};

export default DayCard;
