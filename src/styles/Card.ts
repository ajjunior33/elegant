import styled from "styled-components";
import { Theme } from "../styles/Variables";

export const CardSmall = styled.div`
  width: 270px;
  height: 120px;
  padding: 20px;
  background-color: ${Theme.default.white};
  border-radius: 10px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  margin: 5px;
`;

export const IconCard = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  border-radius: 100%;

  background-color: ${(props) =>
    props.color ? props.color : Theme.default.white}10;
  svg {
    font-size: 24px;
    color: ${(props) => (props.color ? props.color : Theme.default.white)};
  }
`;

export const ContentCard = styled.div`
  p {
    color: ${Theme.default.label};
    font-size: 14px;
    font-weight: 500;
  }
  h3 {
    font-size: 18px;
    font-weight: 600;
    color: ${Theme.default.title};
  }
`;
export const ItemPorcentage = styled.div`
  display: flex;
  flex-direction: row;
  span {
    color: ${Theme.default.label};
  }
  .text {
    color: ${Theme.default.label};
  }
`;

export const ItemPorcentageStable = styled(ItemPorcentage)`
  span {
    color: ${Theme.default.warning};
  }
`;

export const ItemPorcentageNegative = styled(ItemPorcentage)`
  span {
    color: ${Theme.default.danger};
  }
`;

export const ItemPorcentagePositive = styled(ItemPorcentage)`
  span {
    color: ${Theme.default.success};
  }
`;