import styled from "styled-components";
import { Theme } from "../../styles/Variables";

export const Container = styled.main`
  background-color: transparent;

  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: row;
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

export const Header = styled.header`
  height: 80px;
  padding: 10px 30px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;

  background-color: ${Theme.default.white};
`;

export const SubMenu = styled.div`
  padding: 10px 0;
  display: flex;
  flex-direction: row;
`;
export const Item = styled.div`
  width: 40px;
  height: 40px;
  background-color: ${Theme.default.inputBackground};
  border-radius: 100%;

  margin: 0 5px;
  img {
    width: 100%;
    height: 100%;
  }
`;

export const Section = styled.section`
  display: flex;
  width: 100%;
  flex-direction: column;
`;


export const Content = styled.section`
  padding:10px 20px;
  header{
    font-size:24px;
    font-weight:bold;
    color:${Theme.default.title};
  }
  section{
    width:100%;
    padding:5px auto;
  }
  
`;

export const CardSection = styled.section`
  width:100%;
  padding: 5px 0;

  display:flex;
  flex-direction:row;
`;
