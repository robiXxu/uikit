import { ReactNode, useState } from "react";

const defaultClasses = [
  "absolute",
  "rounded-xl",
  "p-2",
  "bg-gray-900",
  "z-50",
  "font-bold",
  "text-sky-100",
  "text-xs",
  "w-auto",
  "h-auto",
  "whitespace-nowrap",
  "before:absolute",
  "before:content-[' ']",
  "before:border-x-transparent",
  "before:border-y-transparent",
  "before:w-0",
  "before:h-0",
  "before:pointer-events-none",
  "before:border-8",
];

const right = [
  "ml-2",
  "left-full",
  "top-1/2",
  "-translate-y-1/2",
  "before:left-0",
  "before:top-1/2",
  "before:-translate-y-1/2",
  "before:border-r-gray-900",
  "before:-ml-4",
];

const left = [
  "mr-2",
  "right-full",
  "top-1/2",
  "-translate-y-1/2",
  "before:right-0",
  "before:top-1/2",
  "before:-translate-y-1/2",
  "before:border-l-gray-900",
  "before:-mr-4",
];

const bottom = [
  "mt-2",
  "left-1/2",
  "-translate-x-1/2",
  "before:top-0",
  "before:left-1/2",
  "before:-translate-x-1/2",
  "before:border-b-gray-900",
  "before:-mt-4",
];

const top = [
  "bottom-full",
  "mb-2",
  "left-1/2",
  "-translate-x-1/2",
  "before:top-full",
  "before:left-1/2",
  "before:-translate-x-1/2",
  "before:border-t-gray-900",
  "before:mt-0",
];

const getDirectionClasses = (
  direction: TooltipDirection 
) => {
  switch (direction) {
    case "top":
      return top;
    case "bottom":
      return bottom;
    case "left":
      return left;
    case "right":
      return right;
    default:
      return top;
  }
};

export type TooltipDirection = "top" | "bottom" | "left" | "right";

export const Tooltip = ({
  children,
  content,
  direction = "top",
}: {
  children: ReactNode;
  content: string;
  direction?: TooltipDirection;
}) => {
  const [active, setActive] = useState(false);
  const tooltipClasses = [...defaultClasses, ...getDirectionClasses(direction)].join(" ");

  return (
    <div
      className="relative overflow-visible"
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
    >
      {children}
      {active && content?.length > 0 && <div className={tooltipClasses}>{content}</div>}
    </div>
  );
};
