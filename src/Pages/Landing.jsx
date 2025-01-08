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

const ScaleUp = keyframes`
    to {
      scale: 1.5;
    }
`;

const FadeAway = keyframes`
    to {
      opacity: ;
    }
`;
// const ScaleUp = keyframes`
//   from {
//     transform: scale(1);
//   }
//   to {
//     transform: scale(1.5);
//   }
// `;

// const FadeAway = keyframes`
//   from {
//     opacity: 1;
//   }
//   to {
//     opacity: 0;
//   }
// `;

const Container = styled.div`
  display: flex;
  position: relative;
  padding: 25px 0px;
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  width: 100%;
  min-height: calc(100vh - 60px);
  scroll-margin-top: 60px;
  // view-timeline: --scroll;
  // animation: ${ScaleUp} both linear;
  // animation-timeline: --scroll;
  // animation-range: exit 20% 90%;

  // animation: ${ScaleUp} 5s linear forwards;

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
    // animation: ${ScaleUp} 5s linear forwards, ${FadeAway} 5s linear forwards;
    // animation: ${ScaleUp} both linear, ${FadeAway} both linear;
    // animation-timeline: --scroll;
    // animation-range: exit 0% 100%, exit 50% 90%;

    h1 {
      font-family: ${themeTypography.fontFamily};
    }
    p {
      padding: 32px 119px;
      font-family: ${themeTypography.fontFamily};
      @media (max-width: 920px) {
        padding: 3rem 2.5rem;
      }

      @media (max-width: 570px) {
        padding: 2rem 1.5rem;
      }
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
    { path: "#home", label: "menu.home" },
    { path: "#history", label: "menu.history" },
    { path: "#contact-us", label: "menu.contactUs" },
    { path: "#faqs", label: "menu.faqs" },
  ];

  const tabsItems = [
    { id: "tab1", title: "menuFaq.general" },
    { id: "tab2", title: "menuFaq.security" },
    { id: "tab3", title: "menuFaq.transactions" },
    { id: "tab4", title: "menuFaq.account" },
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
              <strong>{t("faqs1.general.whatIsSwapify.question")}</strong>
              <br />
              {t("faqs1.general.whatIsSwapify.answer")}
            </p>
          </TabContent>
          <TabContent id="tab1" activeTab={activeTab}>
            <p className="faqs-text">
              <strong>{t("faqs1.general.howDoesSwapifyWork.question")}</strong>
              <br />
              {t("faqs1.general.howDoesSwapifyWork.answer")}
            </p>
          </TabContent>

          <TabContent id="tab2" activeTab={activeTab}>
            <p className="faqs-text">
              <strong>{t("faqs1.security.isSwapifySafe.question")}</strong>
              <br />
              {t("faqs1.security.isSwapifySafe.answer")}
            </p>
          </TabContent>
          <TabContent id="tab2" activeTab={activeTab}>
            <p className="faqs-text">
              <strong>
                {t("faqs1.security.howIsMyDataProtected.question")}
              </strong>
              <br />
              {t("faqs1.security.howIsMyDataProtected.answer")}
            </p>
          </TabContent>

          <TabContent id="tab3" activeTab={activeTab}>
            <p className="faqs-text">
              <strong>
                {t("faqs1.transactions.transactionTime.question")}
              </strong>
              <br />
              {t("faqs1.transactions.transactionTime.answer")}
            </p>
          </TabContent>
          <TabContent id="tab3" activeTab={activeTab}>
            <p className="faqs-text">
              <strong>
                {t("faqs1.transactions.transactionFees.question")}
              </strong>
              <br />
              {t("faqs1.transactions.transactionFees.answer")}
            </p>
          </TabContent>

          <TabContent id="tab4" activeTab={activeTab}>
            <p className="faqs-text">
              <strong>{t("faqs1.account.howToCreateAccount.question")}</strong>
              <br />
              {t("faqs1.account.howToCreateAccount.answer")}
            </p>
          </TabContent>
          <TabContent id="tab4" activeTab={activeTab}>
            <p className="faqs-text">
              <strong>{t("faqs1.account.accountIssues.question")}</strong>
              <br />
              {t("faqs1.account.accountIssues.answer")}
            </p>
          </TabContent>
        </div>
      </Container>

      <Footer />

      <div
        style={{
          display: "block",
          backgroundImage: `url(data:image/svg+xml;charset=US-ASCII,%3Csvg%20width%3D%2224%22%20height%3D%2224%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Ctitle%3EFoundation%20%2F%20Icon%20%2F%2024%20%2F%20Control%20%2F%20Arrow%20%2F%20Right%3C%2Ftitle%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cpath%20d%3D%22M0%200h24v24H0z%22%2F%3E%3Cpath%20fill%3D%22%23222%22%20d%3D%22M12%203l10.001%209.496-10%209.501-.689-.726L20%2012.996H2v-1h18l-8.688-8.271z%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E)`,
          backgroundRepeat: "no-repeat",
          backgroundColor: "#f4eddd",
          backgroundPosition: "50%",
          transform: "rotate(-90deg)",
          backgroundSize: "16px",
          position: "absolute",
          right: 0,
          top: "53%",
          height: "44px",
          width: "44px",
        }}
      ></div>
      <a
        style={{
          position: "fixed",
          width: "55px",
          height: "55px",
          bottom: "40px",
          right: "30px",
          backgroundColor: "#00bb2d",
          color: "#fff",
          borderRadius: "50%",
          textAlign: "center",
          fontSize: "30px",
          boxShadow: "2px 2px 3px #999",
          zIndex: 9999,
          overflow: "hidden",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        href="https://api.whatsapp.com/"
        className="float"
        target="_blank"
      >
        <i
          className="my-float"
          style={{
            display: "block",
            position: "absolute",
            width: "35px",
            height: "35px",
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' version='1.1' id='Layer_1' x='0px' y='0px' width='100px' height='100px' viewBox='0 0 100 100' style='enable-background:new 0 0 100 100;' xml:space='preserve'%3E%3Cpath id='WhatsApp' style='fill-rule:evenodd;clip-rule:evenodd;' fill='%23FFFFFF' d='M95,49.247c0,24.213-19.779,43.841-44.182,43.841 c-7.746,0-15.025-1.98-21.357-5.455L5,95.406l7.975-23.522c-4.023-6.607-6.34-14.355-6.34-22.637 c0-24.213,19.781-43.841,44.184-43.841S95,25.034,95,49.247z M50.818,12.388c-20.484,0-37.146,16.535-37.146,36.859 c0,8.065,2.629,15.534,7.076,21.611l-4.641,13.688l14.275-4.537c5.865,3.851,12.891,6.097,20.436,6.097 c20.482,0,37.146-16.534,37.146-36.858S71.301,12.388,50.818,12.388z M73.129,59.344c-0.273-0.447-0.994-0.717-2.076-1.254 c-1.084-0.537-6.41-3.138-7.4-3.495c-0.994-0.358-1.717-0.539-2.439,0.537c-0.721,1.076-2.797,3.495-3.43,4.212 c-0.631,0.718-1.262,0.808-2.346,0.27c-1.082-0.537-4.572-1.672-8.709-5.333c-3.219-2.848-5.393-6.364-6.025-7.441 c-0.631-1.075-0.066-1.656,0.475-2.191c0.488-0.482,1.084-1.255,1.625-1.882c0.543-0.628,0.723-1.075,1.082-1.793 c0.363-0.717,0.182-1.344-0.09-1.883c-0.27-0.537-2.438-5.825-3.34-7.977c-0.902-2.15-1.803-1.792-2.436-1.792 c-0.631,0-1.354-0.09-2.076-0.09s-1.896,0.269-2.889,1.344c-0.992,1.076-3.789,3.676-3.789,8.963c0,5.288,3.879,10.397,4.422,11.113 c0.541,0.716,7.49,11.92,18.5,16.223c11.012,4.302,11.012,2.867,12.998,2.688c1.984-0.179,6.406-2.599,7.311-5.108 C73.398,61.944,73.398,59.792,73.129,59.344z'/%3E%3C/svg%3E")`,
            backgroundSize: "contain",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            backgroundRepeat: "no-repeat",
          }}
        ></i>
      </a>
    </>
  );
}
