import { render } from "@testing-library/react";
import addDays from "date-fns/addDays";
import DayCard from "../components/DayCard";
import response from "../__fixtures__/response";
import imgSrc from "../__fixtures__/imgSrc";

const day = response.consolidated_weather[0];

test("There is tomorrow message instead of date", () => {
  const tomorrow = {
    ...day,
    applicable_date: addDays(new Date(day.applicable_date), 1),
  };
  const { getByTestId } = render(<DayCard weather={tomorrow} unit="C" />);

  expect(getByTestId("DayCardDate")).toHaveTextContent("Tomorrow");
});

test("There is correct format date for any day other than tommorow", () => {
  const { getByTestId } = render(<DayCard weather={day} unit="C" />);

  expect(getByTestId("DayCardDate")).toHaveTextContent("Sun, 30 May");
});

test("If there is no src to image there is an alt info", () => {
  const { getByTestId } = render(<DayCard weather={day} unit="C" />);

  expect(getByTestId("DayCardImg")).toHaveAttribute(
    "alt",
    day.weather_state_name
  );
});

test("There is correct src to img", () => {
  for (const abbr in imgSrc) {
    const editedDay = {
      ...day,
      weather_state_abbr: abbr,
    };
    const { getByTestId, unmount } = render(
      <DayCard weather={editedDay} unit="C" />
    );
    expect(getByTestId("DayCardImg")).toHaveAttribute("src", imgSrc[abbr]);
    unmount();
  }
});

test("There is max temp visible and it's rounded", () => {
  const { getByTestId } = render(<DayCard weather={day} unit="C" />);
  expect(getByTestId("DayCardTempMax")).toHaveTextContent(`18℃`);
});

test("There is min temp visible and it's rounded", () => {
  const { getByTestId } = render(<DayCard weather={day} unit="C" />);
  expect(getByTestId("DayCardTempMin")).toHaveTextContent(`5℃`);
});

test("If unit is set to F, temperature is in ℉ unit", () => {
  const { getByTestId } = render(<DayCard weather={day} unit="F" />);
  expect(getByTestId("DayCardTempMax")).toHaveTextContent(`℉`);
  expect(getByTestId("DayCardTempMin")).toHaveTextContent(`℉`);
});

test("If unit is set to F, temperature is converted to ℉", () => {
  const { getByTestId } = render(<DayCard weather={day} unit="F" />);
  expect(getByTestId("DayCardTempMax")).toHaveTextContent(`64`);
  expect(getByTestId("DayCardTempMin")).toHaveTextContent(`42`);
});
