import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 350px;
  box-shadow: inset 0 -3em 3em rgba(0, 0, 0, 0.1), 0 0 0 2px rgb(190, 190, 190),
    0.3em 0.3em 1em rgba(0, 0, 0, 0.3);
`;

const Title = styled.h2`
  margin-bottom: 10px;
  font-size: 20px;
  font-weight: bold;
`;

const SocialLogin = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 10px;
`;

const SocialButton = styled.button`
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  background-color: #fff;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #f5f5f5;
  }

  img {
    width: 20px;
  }
`;

const EmailInput = styled.input`
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  margin-bottom: 10px;
  width: 100%;
`;

const ContinueButton = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  background-color: #007bff;
  color: #fff;
  font-weight: bold;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0062cc;
  }
`;

const NoAccount = styled.p`
  margin-top: 10px;
  font-size: 14px;

  a {
    text-decoration: none;
    color: #007bff;
  }
`;

export const Login = () => {
  return (
    <Container>
      <Title>Sign in</Title>
      <SocialLogin>
        <SocialButton>
          <img
            src="https://www.freepnglogos.com/uploads/apple-logo-png/apple-logo-png-10.png"
            alt="Apple"
          />
        </SocialButton>
        <SocialButton>
          <img
            src="https://www.freepnglogos.com/uploads/facebook-logo-png/facebook-logo-png-7.png"
            alt="Facebook"
          />
        </SocialButton>
        <SocialButton>
          <img
            src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-4.png"
            alt="Google"
          />
        </SocialButton>
        <SocialButton>
          <img
            src="https://www.freepnglogos.com/uploads/microsoft-logo-png/microsoft-logo-png-14.png"
            alt="Microsoft"
          />
        </SocialButton>
      </SocialLogin>
      <p>or</p>
      <EmailInput type="email" placeholder="Email address" />
      <ContinueButton type="submit">CONTINUE</ContinueButton>
      <NoAccount>
        No account? <a href="#">Sign up</a>
      </NoAccount>
    </Container>
  );
};

