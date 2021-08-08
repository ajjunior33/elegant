import styled from "styled-components";
import { Theme } from "../../styles/Variables";

export const Container = styled.main`
  background-color: transparent;

  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const MainContainer = styled.main`
  width: 418px;

  display: flex;
  flex-direction: column;
  header {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 20px auto;
    p {
      color: ${Theme.default.body};
      font-size: 14px;
      font-weight: 500;
      text-align: center;
    }
    h3 {
      font-size: 32px;
      font-weight: bold;
      color: ${Theme.default.title};
    }
  }

  section {
    display: flex;
    flex-direction: column;

    background-color: ${Theme.default.white};
    border: 1px solid ${Theme.default.border};

    padding: 50px;
    border-radius: 10px;
  }
`;

