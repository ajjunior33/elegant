import styled from "styled-components";
import { Theme } from "./Variables";
export const Button = styled.button`
  padding: 15px 30px;
  width: 100%;
  border-radius: 4px;
  margin: 10px auto;
  font-size: 16px;
  transition: 500ms;

  display:flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  &:hover {
    filter: brightness(80%);
  }
`;

export const ButtonTransparent = styled(Button)`
  border:0;
  background-color:transparent;
  color: ${Theme.default.title};
`;

export const ButtonPrimary = styled(Button)`
  border: 1px solid ${Theme.default.border};
  color: ${Theme.default.white};
  background-color: ${Theme.default.primary};
`;

export const ButtonLink = styled.button`
  border: 0;
  background-color: transparent;
  font-size: 14px;
  font-weight: 500;
  color: ${Theme.default.info};
  transition: 500ms;
  &:hover {
    filter: brightness(80%);
  }
`;
