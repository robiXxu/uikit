import { DayData } from "../interfaces";
import { getDayColor } from "../utils";

export const Day = ({
  size = 12,
  data,
}: {
  size?: number;
  data?: DayData;
  count?: number;
}) => {
  return (
    <div
      style={{ width: size, height: size }}
      className={`rounded ${getDayColor(data?.count)}`}
    ></div>
  );
};
