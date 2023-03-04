import { ReactNode, useState } from "react";

export const Tooltip = (props: {
  children: ReactNode
  content: string;
}) => {
  const [active, setActive] = useState(false);
  return (
    <div
      className="inline-block relative"
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
    >
      {props.children}
      {active && <div>{props.content}</div>}
    </div>
  );
};
