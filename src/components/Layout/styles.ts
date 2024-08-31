import styled from "styled-components";

export const Container = styled.div<any>`
  max-width: 600px;
  margin: 0 auto;
  padding: 32px;
  text-align: center;
  background-color: ${({ backgroundColor }) => backgroundColor || "#ffffff"};
  background-image: ${({ backgroundImage }) =>
    backgroundImage ? `url(${backgroundImage})` : "none"};
  background-size: cover;
  background-position: center;
  min-height: 100vh;
  color: ${({ color }) => color || "#000000"};
  font-family: ${({ font }) => font || "Arial, sans-serif"};

  p {
    margin-top: 64px;
    font-size: 12px;
    opacity: 0.2;
  }
`;
