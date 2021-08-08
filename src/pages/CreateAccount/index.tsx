import { useHistory } from "react-router-dom";

import { ButtonPrimary } from "../../styles/Button";
import { FormGroup, InputControl } from "../../styles/Form";
import { FlexColumnCenter } from "../../styles/Flex";
import { Container, MainContainer } from "./style";

const CreateAccount = () => {
  const history = useHistory();
  return (
    <Container>
      <MainContainer>
        <header>
          <h3>Get started</h3>
          <p>
            Start creating the best possible user experience for you customers
          </p>
        </header>
        <section>
          <FlexColumnCenter>
            <FormGroup>
              <label htmlFor="name">Name</label>
              <InputControl
                type="text"
                name="name"
                id="name"
                placeholder="Enter your name"
              />
            </FormGroup>
            <FormGroup>
              <label htmlFor="team">E-mail</label>
              <InputControl
                type="text"
                name="team"
                id="team"
                placeholder="Enter your Team name"
              />
            </FormGroup>
            <FormGroup>
              <label htmlFor="email">E-mail</label>
              <InputControl
                type="email"
                name="email"
                id="email"
                placeholder="seumelhor@email.com"
              />
            </FormGroup>
            <FormGroup>
              <label htmlFor="password">Password</label>
              <InputControl
                type="password"
                name="password"
                id="password"
                placeholder="**************"
              />
            </FormGroup>
          </FlexColumnCenter>

          <ButtonPrimary onClick={() => history.push("/dashboard")}>
            Sign in
          </ButtonPrimary>
        </section>
      </MainContainer>
    </Container>
  );
};

export { CreateAccount };
