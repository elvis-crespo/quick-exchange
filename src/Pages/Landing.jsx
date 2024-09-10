import styled from "styled-components";
import { NavBar } from "../components/NavBar"
import { Footer } from "../components/Footer";

const Container = styled.div`
  position: relative;
  padding: 0;
  // background-color: #e9e5ef;
  background-color: #1b2736;
  width: 100%;
  min-height: calc(100vh - 60px);
`;

export const Landing = () => {
  const menuItems = [
    { path: "#history", label: "History" },
    { path: "#contact-us", label: "Contact Us" },
  ];
  return (
    <>
      <NavBar menuItems={menuItems} theme="light"></NavBar>

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
