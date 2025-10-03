import React from "react";

import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type TileProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: React.ReactNode;
  icon: IconDefinition;
  label: string;
  href?: string;
};

const Tile: React.FC<TileProps> = ({
  children,
  icon,
  label,
  href,
  ...props
}) => {
  const classNames = [
    "align-items-center",
    "bg-blue-200/[0.1]",
    "hover:bg-blue-200/[0.15]",
    "duration-300",
    "cursor-pointer",
    "flex",
    "flex-row",
    "leading-none",
    "mb-4",
    "p-4",
    "rounded-lg",
    "text-left",
    "transition",
  ];

  return (
    <a href={href} className={classNames.join(" ")} {...props}>
      <span className="w-6 flex-none mr-4 pt-[0.4rem]">
        <FontAwesomeIcon
          icon={icon}
          style={{ width: "24px", height: "24px" }}
        />
      </span>
      <span className="flex flex-1 flex-col">
        <p className="font-bold mb-1.25 text-xs">{label}</p>
        {children}
      </span>
    </a>
  );
};

export default Tile;
