import styled from "styled-components";

const FooterContainer = styled.footer`
  background-color: #1b2736;
  color: #fff;
  text-align: center;
  padding: 1rem;
  //   position: fixed;
  width: 100%;
  bottom: 0;
`;
export const Footer = () => {
  return (
    <>
      <FooterContainer>
        <p>&copy; 2024 Swapify. Todos los derechos reservados.</p>
      </FooterContainer>
    </>
  );
};
