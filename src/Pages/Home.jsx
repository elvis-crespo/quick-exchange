import styled from "styled-components";
import { NavBar } from "../components/NavBar";
import { Footer } from "../components/Footer";
import { themeTypography } from "../utils/themes";

const Container = styled.div`
  display: flex;
  position: relative;
  padding: 25px 0px;
  background-color: ${({ theme }) => theme.navBackground};
  color: ${({ theme }) => theme.text};
  width: 100%;
  min-height: calc(100vh - 60px);
  scroll-margin-top: 60px;
  @media (max-width: 920px) {
    flex-direction: column;
  }

  @media (max-width: 570px) {
    flex-direction: column;
  }

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    min-width: 40vw;
    h1 {
      font-family: ${themeTypography.fontFamily};
    }
    p {
      padding: 32px 119px;
      font-family: ${themeTypography.fontFamily};
    }
    img {
      width: 90%;
      height: 90%;
      object-fit: contain;
      object-position: center;
      @media (max-width: 920px) {
        width: 80%;
        height: 80%;
      }

      @media (max-width: 570px) {
        width: 70%;
        height: 70%;
      }
    }
  }
`;

export default function Home() {
  const menuItems = [
    { path: "#history", label: "History" },
    { path: "#contact-us", label: "Contact Us" },
  ];
  return (
    <>
      <>
        <NavBar menuItems={menuItems} theme="ligth"></NavBar>

        <Container id="history">
          <div>
            <h1>HISTORY</h1>
          </div>
          <div>
            <img src="src/assets/test.png" alt="" />
          </div>
        </Container>
        <Container id="contact-us">
          <div className="flex-column">
            <h1>CONTACT US</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit animi
              amet numquam minus? Nulla impedit voluptate corporis vero
              architecto obcaecati ullam dolore laboriosam explicabo ut
              possimus, inventore dignissimos ex autem.
            </p>
          </div>
          <div>
            <img src="src/assets/test.png" alt="" />
          </div>
        </Container>

        <Footer />
      </>
    </>
  );
};
