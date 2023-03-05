import { colorRanges } from "../constants";

export const Legend = ({ size = 24 }: { size?: number }) => (
<div className="inline-block">
  <div className="flex flex-row flex-grow-0">
    {colorRanges.map((bgClass: string) => (
      <div style={{ width: size, height: size }} className={bgClass}></div>
    ))}
  </div>
  <div className="flex flex-row justify-between font-bold text-gray-400">
    <label>0</label>
    <label>36+</label>
  </div>
</div>
);
