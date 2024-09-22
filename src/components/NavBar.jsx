/* eslint-disable react/prop-types */
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { toggleTheme } from "../redux/themeReducer";
import { useDispatch, useSelector } from "react-redux";
import DarkModeToggle from "../utils/DarkModeToggle";

const Container = styled.div`
  position: sticky;
  top: 0;
  z-index: 1000;
  // position: relative;
  padding: 0 32px;
  background-color: ${({ theme }) => theme.navBackground};
  width: 100%;
  nav {
    background-color: ${({ theme }) => theme.navBackground};
    border-bottom: 1px solid #d2d2d2;
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
        color: ${({ theme }) => theme.text};
        font-size: 24px;
        font-weight: bold;
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
        @media (max-width: 920px) {
          display: none;
        }
        a {
          text-decoration: none;
          color: ${({ theme }) => theme.text};
          font-size: 16px;
          padding: 0px 17px;
          transition: letter-spacing 0.3s ease;
          // transition: border-bottom 1s ease;
          &:hover {
            color: #1b2736;
            letter-spacing: 1px;
            // border-bottom: 1px solid red;
          }
        }
      }

      @media (max-width: 920px) {
        display: none;
      }
    }
    a.action_btn {
      margin-right: 5px;
      text-decoration: none;
      background-color: ${({ theme }) => theme.buttonBackground};
      color: ${({ theme }) => theme.text};
      padding: 8px 17px;
      border: none;
      outline: none;
      border-radius: 20px;
      font-size: 14px;
      font-weight: bold;
      cursor: pointer;
      transition: scale 0.2 ease;

      &:hover {
        scale: 1.05;
        color: white;
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

  svg {
    path {
    }
  }

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
  // .open {
  //   height: 240px;
  // }
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
  // const themeState = useSelector((state) => state.theme);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const handleClickLogin = (e) => {
     e.preventDefault();
    navigate("/lo");
  };
const theme = useSelector((state) => state.theme);
  return (
    <Container>
      <nav>
        <div className="logo">
          <a href="">NAVBAR</a>
        </div>
        <ul>
          {menuItems.map((item) => (
            <li key={item.path}>
              {/* <NavLink to={item.path}>{item.label}</NavLink> */}
              <a href={item.path}>{item.label}</a>
            </li>
          ))}
        </ul>

        <DarkModeToggle
          isDarkMode={theme === "dark" ? true : false}
          onToggle={() => dispatch(toggleTheme())}
        />
        
        <a className="action_btn" onClick={handleClickLogin}>
          Login
        </a>

        <ToggleBtn onClick={() => setIsOpen(!isOpen)}>
          <svg
            className="open"
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 512 512"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              className="path_selector"
              d={
                isOpen
                  ? "M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z"
                  : "M448 160H320V128H448v32zM48 64C21.5 64 0 85.5 0 112v64c0 26.5 21.5 48 48 48H464c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48H48zM448 352v32H192V352H448zM48 288c-26.5 0-48 21.5-48 48v64c0 26.5 21.5 48 48 48H464c26.5 0 48-21.5 48-48V336c0-26.5-21.5-48-48-48H48z"
              }
            ></path>
          </svg>
        </ToggleBtn>
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
