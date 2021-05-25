import HighlightsBox from "./HighlightsBox";

const AirPressureBox = () => {
  return (
    <HighlightsBox small>
      <p className="m-auto w-max">Air Pressure</p>
      <p className="m-auto mt-2 w-max text-6xl font-bold">
        998 <span className="text-4xl font-medium">mb</span>
      </p>
    </HighlightsBox>
  );
};

export default AirPressureBox;
