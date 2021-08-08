import { useHistory } from "react-router-dom";

import { ButtonPrimary, ButtonLink } from "../../styles/Button";
import { FormGroup, InputControl } from "../../styles/Form";
import { FlexColumnCenter } from "../../styles/Flex";
import { Container, MainContainer } from "./style";

const Login = () => {
  const history = useHistory();
  return (
    <Container>
      <MainContainer>
        <header>
          <h3>Welcome back!</h3>
          <p>Sign in to your account to continue</p>
        </header>
        <section>
          <FlexColumnCenter>
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
          <ButtonLink onClick={() => history.push("forgout-password")}>
            Forgot your password?
          </ButtonLink>

          <ButtonPrimary onClick={() => history.push("/dashboard")}>
            Sign in{" "}
          </ButtonPrimary>
        </section>
      </MainContainer>
    </Container>
  );
};

export { Login };
