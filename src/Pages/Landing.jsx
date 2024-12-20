import styled from "styled-components";
import { NavBar } from "../components/NavBar";
import { Footer } from "../components/Footer";
import { themeTypography } from "../utils/themes";
import ContactForm from "../components/Contact";
import { useState } from "react";
import { Tabs } from "../components/Tabs";
import { TabContent } from "../components/TabContent";

// const handleScroll = (id) => {
//   const element = document.getElementById(id);
//   const yOffset = -80;
//   const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;

//   window.scrollTo({ top: y, behavior: "smooth" });
// };

const Container = styled.div`
  display: flex;
  position: relative;
  padding: 25px 0px;
  background-color: ${({ theme }) => theme.background};
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
  .flex-column {
    width: 100%;
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

export default function Landing() {
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
          <h1>¿Qué es Swapify?</h1>
          <p>
            Swapify es una plataforma innovadora que permite a los usuarios
            intercambiar, transferir y gestionar activos digitales de manera
            rápida y segura. Nuestra misión es simplificar las transacciones
            digitales, ofreciendo una solución accesible y confiable para
            individuos y empresas.
          </p>
        </div>
        <div>
          <img src="src/assets/images/test.png" alt="" />
        </div>
      </Container>

      <Container id="history">
        <div>
          <h1>Nuestra Historia</h1>
          <p>
            Swapify comenzó con la visión de transformar la forma en que las
            personas realizan transacciones digitales. Desde nuestros humildes
            inicios en 2024, hemos crecido hasta convertirnos en una plataforma
            confiable para miles de usuarios. Nuestro compromiso ha sido siempre
            garantizar transacciones rápidas, seguras y eficientes,
            proporcionando soluciones innovadoras a nuestros clientes.
          </p>
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
          <h1>¿Tienes preguntas? ¡Contáctanos!</h1>
          <p>
            Nuestro equipo está aquí para ayudarte. No dudes en comunicarte con
            nosotros si tienes alguna consulta o necesitas asistencia. Estamos
            disponibles las 24 horas del día, los 7 días de la semana.
          </p>
          <ContactForm />
        </div>
      </Container>

      <div id="faqs" style={{ display: "flex", flexDirection: "column", minWidth: "80vw", }}>
        <h1>Preguntas Frecuentes</h1>
        <Tabs
          tabs={tabsItems}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />

        <TabContent id="tab1" activeTab={activeTab}>
          <strong>&#191;Qué es Swapify?</strong>
          <br></br>Swapify es una plataforma innovadora para activos digitales.
        </TabContent>

        <TabContent id="tab2" activeTab={activeTab}>
          <strong>&#191;Es seguro utilizar Swapify?</strong>
          <br></br>Sí, Swapify utiliza tecnología de cifrado avanzada.
        </TabContent>
        
        <TabContent id="tab3" activeTab={activeTab}>
          <strong>&#191;Cuánto tiempo tarda una transacción?</strong>
          <br></br>Las transacciones suelen completarse en minutos.
        </TabContent>
    
      </div>

      <Footer />
    </>
  );
}
