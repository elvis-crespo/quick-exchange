import styled from "styled-components";
import { themeTypography } from "../utils/themes";

const FooterContainer = styled.footer`
  // border-top: 1px solid #d2d2d2;
  background-color: ${({ theme }) => theme.navBackground};
  color: ${({ theme }) => theme.text};
  width: 100%;
  padding: 0 32px;
  nav {
    // border-top: 1px solid #d2d2d2;
    padding: 2rem;
    width: 100%;
    height: 60px;
    max-width: 1200px;
    margin: 0 auto;
    p {
      text-align: center;
      font-family: ${themeTypography.fontFamily};
    }
  }
`;
export const Footer = () => {
  return (
    <>
      <FooterContainer>
        <nav>
        <p>&copy; 2024 Swapify. Todos los derechos reservados.</p>
        </nav>
      </FooterContainer>
    </>
  );
};
