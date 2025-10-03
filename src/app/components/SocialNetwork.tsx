import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

type SocialButtonProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  icon: any;
};

const SocialButton: React.FC<SocialButtonProps> = ({ icon, ...props }) => {
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

export default SocialButton;
