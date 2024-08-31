import { hexToRGBA } from "@/utils/hex-to-rgba";
import styled from "styled-components";

export const Button = styled.a<any>`
  display: block;
  margin: 16px 0;
  padding: 15px 25px;
  background-color: ${({ buttonBackgroundColor }) =>
    hexToRGBA(buttonBackgroundColor, 90) || "#000000"};
  color: ${({ buttonColor }) => buttonColor || "#ffffff"};
  border-radius: 32px;
  text-decoration: none;
  font-size: 16px;
  font-weight: 700;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${({ buttonBackgroundColor }) =>
      buttonBackgroundColor
        ? shadeColor(buttonBackgroundColor, -10)
        : "#000000"};
  }
`;

const shadeColor = (color: string, percent: number) => {
  let R = parseInt(color.substring(1, 3), 16);
  let G = parseInt(color.substring(3, 5), 16);
  let B = parseInt(color.substring(5, 7), 16);

  R = parseInt(((R * (100 + percent)) / 100) as unknown as string);
  G = parseInt(((G * (100 + percent)) / 100) as unknown as string);
  B = parseInt(((B * (100 + percent)) / 100) as unknown as string);

  R = R < 255 ? R : 255;
  G = G < 255 ? G : 255;
  B = B < 255 ? B : 255;

  let RR = R.toString(16).length === 1 ? "0" + R.toString(16) : R.toString(16);
  let GG = G.toString(16).length === 1 ? "0" + G.toString(16) : G.toString(16);
  let BB = B.toString(16).length === 1 ? "0" + B.toString(16) : B.toString(16);

  return "#" + RR + GG + BB;
};
