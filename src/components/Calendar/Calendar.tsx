import { Tooltip } from "../Tooltip/Tooltip";
import { Day } from "./Day/Day";
import { CalendarData, DayData } from "./interfaces";
import { Legend } from "./Legend/Legend";

export const Calendar = ({ data, size = 12 }: CalendarData) => {
  const tooltipMessage = ({count, date}: DayData) =>
    `${count} commits on ${date.toDateString()}`;
  return (
    <div className="flex gap-2 flex-col">
      <div className="flex gap-1">
        {data.length &&
          data.map((week: DayData[]) => (
            <div className="flex gap-1 flex-col" key={week[0].date.getTime()}>
              {week.length &&
                week.map((dayData: DayData) => (
                  <Tooltip content={tooltipMessage(dayData)} direction="bottom">
                    <Day
                      key={dayData.date.getTime()}
                      data={dayData}
                      size={size}
                    />
                  </Tooltip>
                ))}
            </div>
          ))}
      </div>
      <Legend size={size * 2} />
    </div>
  );
};
