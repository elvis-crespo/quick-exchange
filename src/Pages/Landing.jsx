import styled, { keyframes } from "styled-components";
import { NavBar } from "../components/NavBar";
import { Footer } from "../components/Footer";
import { themeTypography } from "../utils/themes";
import ContactForm from "../components/Contact";
import { useState } from "react";
import { Tabs } from "../components/Tabs";
import { TabContent } from "../components/TabContent";
import { useTranslation } from "react-i18next";

// const handleScroll = (id) => {
//   const element = document.getElementById(id);
//   const yOffset = -80;
//   const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;

//   window.scrollTo({ top: y, behavior: "smooth" });
// };

const Appear = keyframes`{
    from {
      opacity: 0;
      /* scale: 0.5; */
      /* transform: translateX(-100px); */
      clip-path: inset(100% 100% 0 0);
    }
    to {
      opacity: 1;
      /* scale: 1; */
      /* transform: translateX(0); */
      clip-path: inset(0 0 0 0);
    }
  }
`;

const Container = styled.div`
  display: flex;
  position: relative;
  padding: 25px 0px;
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  width: 100%;
  min-height: calc(100vh - 60px);
  scroll-margin-top: 60px;
  animation: ${Appear} 5s linear forwards;
  animation-timeline: view();
  animation-range: entry 0 cover 40%;
  @media (max-width: 920px) {
    flex-direction: column;
  }

  @media (max-width: 570px) {
    flex-direction: column;
  }
  .flex-column {
    width: 100%;
  }
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    min-width: 40vw;
    animation: ${Appear} 5s linear forwards;
    animation-timeline: view();
    animation-range: entry 0 cover 40%;
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
      filter: drop-shadow(2px 4px 6px black);
      // filter: drop-shadow(0 0 10px rgba(0, 0, 0 0.8));
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

export default function Landing() {

  const { t } = useTranslation();

  const menuItems = [
    { path: "#home", label: "Home" },
    { path: "#history", label: "History" },
    { path: "#contact-us", label: "Contact Us" },
    { path: "#faqs", label: "FAQs" },
  ];

  const tabsItems = [
    { id: "tab1", title: "General" },
    { id: "tab2", title: "Seguridad" },
    { id: "tab3", title: "Transacciones" },
  ];

  const [activeTab, setActiveTab] = useState("tab1");

  // const handleTabClick = (tab) => {
  //   setActiveTab(tab);
  // };

  return (
    <>
      <NavBar menuItems={menuItems} theme="ligth"></NavBar>
      <Container id="home">
        <div>
          <h1>{t("home")}</h1>
          <p>{t("homeDescription")}</p>
        </div>
        <div>
          <img src="src/assets/images/test.png" alt="" />
        </div>
      </Container>

      <Container id="history">
        <div>
          <h1>{t("history")}</h1>
          <p>{t("historyDescription")}</p>
          {/* <h1>¿Cómo funciona?</h1>
          <p>
            Con Swapify, puedes realizar intercambios de activos digitales en
            solo unos pocos clics. Gracias a nuestra tecnología avanzada y una
            interfaz fácil de usar, puedes transferir fondos, realizar pagos o
            cambiar monedas digitales de manera instantánea, sin complicaciones.
          </p> */}
        </div>
        <div>
          <img src="src/assets/images/test.png" alt="" />
        </div>
      </Container>

      <Container id="contact-us">
        <div className="flex-column">
          <h1>{t("contactTitle")}</h1>
          <p>{t("contactDescription")}</p>
          <ContactForm />
        </div>
      </Container>

      <Container id="faqs">
        <div className="flex-column">
          <h1>{t("faqs")}</h1>
          {/* <Tabs tabs={tabs} activeTab={activeTab} onTabClick={handleTabClick} /> */}
          <Tabs
            tabs={tabsItems}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
          <TabContent id="tab1" activeTab={activeTab}>
            <p className="faqs-text">
              <strong>¿Qué es Swapify?</strong>
              <br />
              Swapify es una plataforma innovadora para activos digitales.
            </p>
          </TabContent>
          <TabContent id="tab2" activeTab={activeTab}>
            <p className="faqs-text">
              <strong>¿Es seguro utilizar Swapify?</strong>
              <br />
              Sí, Swapify utiliza tecnología de cifrado avanzada.
            </p>
          </TabContent>
          <TabContent id="tab3" activeTab={activeTab}>
            <p className="faqs-text">
              <strong>¿Cuánto tiempo tarda una transacción?</strong>
              <br />
              Las transacciones suelen completarse en minutos.
            </p>
          </TabContent>
        </div>
      </Container>

      <Footer />
    </>
  );
}
