import styled from "styled-components";
import { NavBar } from "../components/NavBar"
import { Footer } from "../components/Footer";
import { themeTypography } from "../utils/themes";
import ContactForm from "../components/Contact";
import { useState } from "react";

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
  .tabs {
    min-width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    margin: 24px 0px;
  }
  .tab-link {
    padding: 0.5rem 1rem;
    margin-right: 0.5rem;
    border: none;
    cursor: pointer;
    font-weight: bold;
    border-radius: 8px;
  }
  .tab-link.active {
    background-color: #eab308;
  }
  .tab-content {
    min-width: 80vw;
    // display: none;
    background-color: ${({ theme }) => theme.navBackground};
    padding: 2rem 1.5rem;
    border-radius: 10px;
    // display: flex;
    align-items: flex-start;
    gap: 1rem;
  }
  .faqs-text {
    font-family: ${themeTypography.fontFamily};
    padding: 0;
  }
`;

export default function Landing() {
  
  const menuItems = [
    { path: "#home", label: "Home" },
    { path: "#history", label: "History" },
    { path: "#contact-us", label: "Contact Us" },
    { path: "#faqs", label: "FAQs" },
  ];

  const [activeTab, setActiveTab] = useState('tab1');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

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
      <Container id="faqs">
        <div className="flex-column">
          <h1>Preguntas Frecuentes</h1>
          <div className="tabs">
            <button
              className={`tab-link ${activeTab === "tab1" ? "active" : ""}`}
              onClick={() => handleTabClick("tab1")}
            >
              General
            </button>
            <button
              className={`tab-link ${activeTab === "tab2" ? "active" : ""}`}
              onClick={() => handleTabClick("tab2")}
            >
              Seguridad
            </button>
            <button
              className={`tab-link ${activeTab === "tab3" ? "active" : ""}`}
              onClick={() => handleTabClick("tab3")}
            >
              Transacciones
            </button>
          </div>

          <div className="tab-content">
            {activeTab === "tab1" && (
              <div id="tab1">
                <p className="faqs-text">
                  <strong>&#191;Qué es Swapify?</strong>
                  <br></br>Swapify es una plataforma innovadora para activos
                  digitales.
                </p>
              </div>
            )}
            {activeTab === "tab2" && (
              <div id="tab2">
                <p className="faqs-text">
                  <strong>&#191;Es seguro utilizar Swapify?</strong>
                  <br></br>Sí, Swapify utiliza tecnología de cifrado avanzada.
                </p>
              </div>
            )}
            {activeTab === "tab3" && (
              <div id="tab3">
                <p className="faqs-text">
                  <strong>&#191;Cuánto tiempo tarda una transacción?</strong>
                  <br></br>Las transacciones suelen completarse en minutos.
                </p>
              </div>
            )}
          </div>
        </div>
      </Container>
      <Footer />
    </>
  );
}
