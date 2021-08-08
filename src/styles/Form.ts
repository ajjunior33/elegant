import styled from "styled-components";
import { Theme } from "./Variables";

export const FormGroup = styled.div`
  display: flex;
  width:100%;
  flex-direction: column;
  margin:10px auto;
  label {
    text-indent: 15px;
    font-size: 14px;
    font-weight: 500;
    color: ${Theme.default.title};
    margin-bottom:10px;
  }
`;

export const InputControl = styled.input`
  width:100%;
  border: 0;
  border-radius: 8px;
  background-color: ${Theme.default.inputBackground};
  padding: 15px 20px;
  color: ${Theme.default.title};
  &::placeholder {
    color: ${Theme.default.placeholder};
    font-size: 14px;
    font-weight: 500;
  }
`;
