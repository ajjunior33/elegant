import { useHistory } from "react-router-dom";
import imageNotFound from "../../assets/images/404.svg";
import { Container, MainContainer } from "./style";
import { ButtonPrimary } from "../../styles/Button";
const NotFound = () => {
  const history = useHistory();
  return (
    <>
      <Container>
        <img src={imageNotFound} alt="404" />

        <MainContainer>
          <h3>Page not found.</h3>
          <p>The page you are looking for might have been removed.</p>
          <ButtonPrimary onClick={() => history.push("/")}>
            Return to home
          </ButtonPrimary>
        </MainContainer>
      </Container>
    </>
  );
};

export { NotFound };
