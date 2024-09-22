import styled from "styled-components";
import { NavBar } from "../components/NavBar"
import { Footer } from "../components/Footer";

// const handleScroll = (id) => {
//   const element = document.getElementById(id);
//   const yOffset = -80; 
//   const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;

//   window.scrollTo({ top: y, behavior: "smooth" });
// };


const Container = styled.div`
  position: relative;
  padding: 25px 75px;
  // background-color: #e9e5ef; //Dark mode
  background-color: ${({ theme }) => theme.navBackground};
  // background-color: #1b2736; //Light mode
  color: ${({ theme }) => theme.text};
  width: 100%;
  min-height: calc(100vh - 60px);
  scroll-margin-top: 60px;
`;

export const Landing = () => {
  const menuItems = [
    { path: "#history", label: "History" },
    { path: "#contact-us", label: "Contact Us" },
  ];
  return (
    <>
      <NavBar menuItems={menuItems} theme="ligth"></NavBar>

      <Container id="history">
        <h1>History</h1>
      </Container>
      <Container id="contact-us">
        <h1>Contact us</h1>
      </Container>

      <Footer />
    </>
  );
}
