/* eslint-disable react/prop-types */
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { toggleTheme } from "../redux/themeReducer";
import { useDispatch, useSelector } from "react-redux";
import DarkModeToggle, { Toggle } from "../utils/DarkModeToggle";
import { themeTypography } from "../utils/themes";
import { Logo } from "../assets/images/Logo";
import i18n from "../utils/i18n";
import { Language, ToggleIcon } from "./Icons/Icons";
import { useTranslation } from "react-i18next";

const Container = styled.div`
  position: sticky;
  top: 0;
  z-index: 10;
  padding: 0 32px;
  background-color: ${({ theme }) => theme.navBackground};
  width: 100%;
  box-shadow: 0 3px 5px -1px rgba(0, 0, 0, 0.2),
    0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12);
  nav {
    background-color: ${({ theme }) => theme.navBackground};
    // border-bottom: 1px solid #d2d2d2;
    width: 100%;
    height: 60px;
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    // padding: 0 auto;
    div.logo {
      a {
        text-decoration: none;
        margin-left: 5px;
        svg {
          g.black {
            fill: ${({ theme }) => (theme.text === "#fff" ? "#fff" : "#000")};
            fill-opacity: 1;
          }
          g.white {
            fill: ${({ theme }) => (theme.text === "#fff" ? "#000" : "#fff")};
            fill-opacity: 1;
          }
        }
      }
    }
    ul {
      display: flex;
      gap: 30px;
      justify-content: space-between;
      align-items: center;
      li {
        list-style: none;
        display: block;
        z-index: 20;
        @media (max-width: 920px) {
          display: none;
        }
        a {
          text-decoration: none;
          color: ${({ theme }) => theme.text};
          font-size: 16px;
          padding: 0px 17px;
          font-family: ${themeTypography.fontFamily};
        }
      }

      @media (max-width: 920px) {
        display: none;
      }
    }
    .menu-backdrop {
      position: absolute;
      background-color: #eab308;
      backdrop-filter: blur(10px);
      border-radius: 4px;
      transform: translate(var(--left), var(--top));
      left: 0;
      top: 0;
      width: var(--width);
      height: var(--height);
      transition: all 0.3s ease-in-out;
      opacity: 0;
      box-shadow: 0 3px 5px -1px rgba(0, 0, 0, 0.2),
        0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12);
      // z-index: 999;
    }

    a.action_btn {
      box-shadow: 0 3px 5px -1px rgba(0, 0, 0, 0.2),
        0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12);
      margin-right: 5px;
      text-decoration: none;
      background-color: ${({ theme }) => theme.buttonBackground};
      color: ${({ theme }) => theme.text};
      padding: 8px 17px;
      border: none;
      outline: none;
      border-radius: 20px;
      font-size: 14px;
      cursor: pointer;
      transition: scale 0.2 ease;
      font-family: ${themeTypography.fontFamily};

      &:hover {
        scale: 1.05; 
        // color: white;
      }

      &active {
        scale: 0.95;
      }

      @media (max-width: 920px) {
        display: none;
      }
    }
  }
`;

const ToggleBtn = styled.div`
  display: none;
  color: ${({ theme }) => theme.text};
  font-size: 24px;
  cursor: pointer;

  @media (max-width: 920px) {
    display: block;
  }
`;

const DropDownMenu = styled.div`
  // display: ${(props) => (props.isOpen ? "block" : "none")};
  display: none;
  position: absolute;
  right: 27px;
  top: 60px;
  // height: 0;
  height: ${({ dataisopen }) => (dataisopen ? "240px" : "0")};
  width: 300px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
  border-radius: 10px;
  overflow: hidden;
  transition: height 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  a.action_btn {
    width: 100%;
    display: flex;
    justify-content: center;
  }
  li {
    padding: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media (max-width: 920px) {
    display: block;
  }

  @media (max-width: 570px) {
    left: 36px;
    width: unset;
  }
`;

export const NavBar = ({ menuItems }) => {
  
  const [isOpen, setIsOpen] = useState(false);
  const theme = useSelector((state) => state.theme.theme);
  
  const { t } = useTranslation();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // const handleClickChangeLanguage = () => {
  //   const newLanguage = i18n.language === "en" ? "es" : "en";
  //   i18n.changeLanguage(newLanguage);
  //   console.log(newLanguage);
  // }  
  const handleClickLogin = (e) => {
    e.preventDefault();
    navigate("/login");
  };
  
  
  const menuBackdrop = document.querySelector("#menu-backdrop");
  const listItem = document.querySelectorAll("li");

  listItem.forEach((item) => {
    
    item.addEventListener("mouseenter", () => {
      const { left, top, width, height } = item.getBoundingClientRect();
      console.log(left, top, width, height);
      menuBackdrop.style.setProperty("--left", `${left}px`);
      menuBackdrop.style.setProperty("--top", `${top}px`);
      menuBackdrop.style.setProperty("--width", `${width}px`);
      menuBackdrop.style.setProperty("--height", `${height}px`);

      menuBackdrop.style.opacity = 1;
      menuBackdrop.style.visibility = "visible";
    });

    item.addEventListener("mouseleave", () => {
      menuBackdrop.style.opacity = 0;
      menuBackdrop.style.visibility = "hidden";
    });

  });

  return (
    <Container>
      <nav>
        <Logo />

        <ul>
          {menuItems.map((item) => (
            <li key={item.path}>
              {/* <NavLink to={item.path}>{item.label}</NavLink> */}
              <a href={item.path}>{t(item.label)}</a>
            </li>
          ))}
        </ul>

        <div id="menu-backdrop" className="menu-backdrop"></div>

        <DarkModeToggle
          isDarkMode={theme === "dark" ? true : false}
          onToggle={() => dispatch(toggleTheme())}
        />

        <a className="action_btn" onClick={handleClickLogin}>
          Login
        </a>

        <ToggleBtn onClick={() => setIsOpen(!isOpen)}>
          <ToggleIcon/>
        </ToggleBtn>

        <Toggle customRight="100px" style={{ boxShadow: "none", backgroundColor: "transparent" }}>
          <Language 
            onClick={() => i18n.changeLanguage(i18n.language === "en" ? "es" : "en")} 
            currentColor={theme === "dark" ? "#fff" : "#000"}
          />
        </Toggle>
      </nav>

      <DropDownMenu dataisopen={isOpen}>
        <li>
          <NavLink to="/home">Home</NavLink>
        </li>
        <li>
          <NavLink to="/history">History</NavLink>
        </li>
        <li>
          <NavLink to="/contact-us">Contact Us</NavLink>
        </li>
        <li>
          <a onClick={handleClickLogin} href="#" className="action_btn">
            Login
          </a>
        </li>
      </DropDownMenu>
    </Container>
  );
};
