import { useState } from "react";
import {
  FiBarChart,
  FiTrendingUp,
  FiFile,
  FiTrendingDown,
  FiMail,
  FiFeather
} from "react-icons/fi";

import { ToggleOn } from "../../components/Navbar/ToggleOn";
import { ToggleOff } from "../../components/Navbar/ToggleOff";
import { InputControl, FormGroup } from "../../styles/Form";
import {
  CardSmall,
  IconCard,
  ContentCard,
  ItemPorcentagePositive,
  ItemPorcentageNegative,
  ItemPorcentageStable,
} from "../../styles/Card";
import {
  Container,
  Header,
  SubMenu,
  Item,
  Section,
  Content,
  CardSection,
} from "./style";

import avatar from "../../assets/images/avatars.svg";
import menuToggle from "../../assets/images/menu-toggle.svg";
import { ButtonTransparent } from "../../styles/Button";

const Dashboard = () => {
  const [toggleMenu, setToggleMenu] = useState(true);
  return (
    <Container>
      {toggleMenu === true ? <ToggleOn /> : <ToggleOff />}
      <Section>
        <Header>
          <div style={{ width: 270, display: "flex", flexDirection: "row" }}>
            <ButtonTransparent>
              <img src={menuToggle} alt="toggle" />
            </ButtonTransparent>
            <FormGroup>
              <InputControl name="search" placeholder="Enter keywords ..." />
            </FormGroup>
          </div>

          <SubMenu>
            <Item></Item>
            <Item></Item>
            <Item>
              <img src={avatar} alt="Avatar" />
            </Item>
          </SubMenu>
        </Header>
        <Content>
          <header>
            <h4>Dashboard</h4>
          </header>
          <CardSection>
            <CardSmall>
              <IconCard color="#2F49D1">
                <FiBarChart />
              </IconCard>
              <ContentCard>
                <h3>1478 286</h3>
                <p>Total visits</p>
                <ItemPorcentagePositive>
                  <span>
                    <FiTrendingUp /> 4.07%
                  </span>
                  <span className="text">Last month</span>
                </ItemPorcentagePositive>
              </ContentCard>
            </CardSmall>
            <CardSmall>
              <IconCard color="#FFB648">
                <FiFile />
              </IconCard>
              <ContentCard>
                <h3>478 520</h3>
                <p>Total articles</p>
                <ItemPorcentagePositive>
                  <span>
                    <FiTrendingUp /> 0.24%
                  </span>
                  <span className="text">Last month</span>
                </ItemPorcentagePositive>
              </ContentCard>
            </CardSmall>
            <CardSmall>
              <IconCard color="#5F2EEA">
                <FiMail/>
              </IconCard>
              <ContentCard>
                <h3>154 872</h3>
                <p>Total subscribtions</p>
                <ItemPorcentageNegative>
                  <span>
                    <FiTrendingDown /> 1.64%
                  </span>
                  <span className="text">Last month</span>
                </ItemPorcentageNegative>
              </ContentCard>
            </CardSmall>
            <CardSmall>
              <IconCard color="#4BDE97">
                <FiFeather />
              </IconCard>
              <ContentCard>
                <h3>167</h3>
                <p>Total authors</p>
                <ItemPorcentageStable>
                  <span>
                    <FiTrendingUp /> 0.00%
                  </span>
                  <span className="text">Last month</span>
                </ItemPorcentageStable>
              </ContentCard>
            </CardSmall>
          </CardSection>
        </Content>
      </Section>
    </Container>
  );
};

export { Dashboard };
