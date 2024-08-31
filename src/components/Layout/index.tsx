"use client";

import { Container } from "./styles";

const Layout = ({
  children,
  backgroundColor,
  backgroundImage,
  color,
  font,
}: any) => {
  return (
    <Container
      backgroundColor={backgroundColor}
      backgroundImage={backgroundImage}
      color={color}
      font={font}
    >
      {children}

      <p>Copyright © 2024 ByCross Software | All Rights Reserved</p>
    </Container>
  );
};

export default Layout;
