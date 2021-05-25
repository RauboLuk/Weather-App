import HighlightsBox from "./HighlightsBox";

const VisibilityBox = () => {
  return (
    <HighlightsBox small>
      <p className="m-auto w-max">Visibility</p>
      <p className="m-auto mt-2 w-max text-6xl font-bold">
        6,4 <span className="text-4xl font-medium">miles</span>
      </p>
    </HighlightsBox>
  );
};

export default VisibilityBox;
