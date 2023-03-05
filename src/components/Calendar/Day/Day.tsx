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
  const classes = [
    'bg-gray-200',
    'bg-sky-100',
    'bg-sky-200',
    'bg-sky-300',
    'bg-sky-400',
    'bg-sky-500',
    'bg-sky-600',
    'bg-sky-700',
    'bg-sky-800',
    'bg-sky-900',
  ];
  return (
    <div
      style={{ width: size, height: size }}
      className={`rounded ${classes[colorIndex]}`}
      title={`${data?.date.toDateString()} ${data?.count}`}
    ></div>
  );
};
