import { render } from "@testing-library/react";
import AirPressureBox from "../components/AirPressureBox";

test("If pressure is passed, user can see it's value", () => {
  const pressure = 1200;
  const { getByText } = render(<AirPressureBox pressure={pressure} />);

  expect(getByText(pressure)).toBeTruthy();
});

test("If pressure isn't passed, 0 is default value", () => {
  const { getByText } = render(<AirPressureBox />);

  expect(getByText(0)).toBeTruthy();
});

test("There is an abbreviation for unit of measurement", () => {
  const { getByText } = render(<AirPressureBox />);

  expect(getByText("mb")).toBeTruthy();
});

test("There is a value with unit info", () => {
  const { getByTestId } = render(<AirPressureBox />);

  expect(getByTestId("airPressure")).toHaveTextContent("0 mb");
});

test("There is a header", () => {
  const { getByTestId } = render(<AirPressureBox />);

  expect(getByTestId("airPressureHeader")).toHaveTextContent("Air Pressure");
});
