import { Day, DayData } from "./Day/Day";

export const Calendar = ({
  data,
  size = 12,
}: {
  data: DayData[][];
  size: number;
}) => {
  return (
    <div className="flex gap-1">
      {data.length &&
        data.map((week: DayData[]) => (
          <div className="flex gap-1 flex-col" key={week[0].date.getTime()}>
            {week.length &&
              week.map((dayData: DayData) => (
                <Day key={dayData.date.getTime()} data={dayData} size={size} />
              ))}
          </div>
        ))}
    </div>
  );
};
