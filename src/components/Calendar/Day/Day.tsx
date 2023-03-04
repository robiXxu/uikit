export interface DayData {
  date: Date;
  count: number;
}

export const Day = ({
  size = 12,
  data,
}: {
  size?: number;
  data?: DayData;
  count?: number;
}) => {
  let colorIndex = data ? Math.ceil(data.count / 4) : 0;
  if (colorIndex > 9) { colorIndex = 9 }
  const color = colorIndex ? `bg-red-${colorIndex}00` : 'bg-gray-200';
  return (
    <div
      style={{ width: size, height: size }}
      className={`rounded bg-gray-200 ${color}`}
      title={`${data?.date.toDateString()} ${data?.count}`}
    ></div>
  );
};
