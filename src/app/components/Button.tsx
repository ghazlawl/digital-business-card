import React from "react";

type BlueButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
} & (
  | React.AnchorHTMLAttributes<HTMLAnchorElement>
  | React.ButtonHTMLAttributes<HTMLButtonElement>
);

const BlueButton: React.FC<BlueButtonProps> = ({
  children,
  onClick,
  href,
  ...props
}) => {
  const classNames = [
    "w-full",
    "block",
    "bg-blue-500",
    "hover:bg-blue-600",
    "cursor-pointer",
    "duration-300",
    "font-bold",
    "py-2",
    "px-4",
    "rounded-full",
    "shadow-md",
    "text-white",
    "hover:text-white-200",
    "text-center",
    "transition-colors",
  ];

  if (onClick) {
    return (
      <button
        onClick={onClick}
        className={classNames.join(" ")}
        {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)}
      >
        {children}
      </button>
    );
  }

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

export default BlueButton;
