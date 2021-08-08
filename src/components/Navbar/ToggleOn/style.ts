import styled from "styled-components";
import { Theme } from "../../../styles/Variables";

export const Navbar = styled.section`
  width: 250px;
  height: 100vh;
  padding: 0 20px;
  background-color: ${Theme.default.primary};

  position: relative;
  header {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    padding: 10px 0;
  }
  nav {
    padding: 10px;
    ul {
      list-style: none;
    }
    li {
      padding: 8px;
    }
    li a {
      font-size: 14px;
      font-weight: 500;
      color: #ffffff60;
      transition: 500ms all;
      text-decoration: none;
      &:hover {
        color: #ffffff80;
      }
    }
    li.active a {
      color: #ffffff;
    }
  }
  footer {
    position: absolute;
    bottom: 30px;
    width: 210px;
    background-color: rgba(255, 255, 255, 0.1);

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    padding: 10px 10px;
    border-radius: 10px;

    h3 {
      font-size: 14px;
      font-weight: 700;
      color: ${Theme.default.white};
    }

    span {
      font-size: 10px;
      font-weight: 500;
      color: rgba(255, 255, 255, 0.5);
    }
  }
`;
