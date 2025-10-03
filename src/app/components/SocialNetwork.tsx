import React from "react";

import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type SocialNetworkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  icon: IconDefinition;
};

const SocialNetwork: React.FC<SocialNetworkProps> = ({ icon, ...props }) => {
  const classNames = [
    "text-blue-200",
    "mx-2",
    "hover:text-white",
    "transition",
    "duration-300",
    "ease-in-out",
  ];

  return (
    <a
      href={props.href}
      className={classNames.join(" ")}
      target="_blank"
      rel="noopener noreferrer"
      {...props}
    >
      <FontAwesomeIcon icon={icon} style={{ width: "32px", height: "32px" }} />
    </a>
  );
};

export default SocialNetwork;
