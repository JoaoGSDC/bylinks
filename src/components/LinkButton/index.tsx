"use client";

import { Button } from "./styles";

const LinkButton = ({
  href,
  children,
  buttonBackgroundColor,
  buttonColor,
}: any) => {
  return (
    <Button
      href={href}
      target="_blank"
      buttonBackgroundColor={buttonBackgroundColor}
      buttonColor={buttonColor}
    >
      {children}
    </Button>
  );
};

export default LinkButton;
