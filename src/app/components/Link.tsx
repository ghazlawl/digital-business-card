import React from "react";

type LinkProps = {
  children: React.ReactNode;
  href?: string;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>;

const Link: React.FC<LinkProps> = ({ children, href, ...props }) => {
  const classNames = ["hover:underline"];

  return (
    <a
      href={href}
      className={classNames.join(" ")}
      {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
    >
      {children}
    </a>
  );
};

export default Link;
