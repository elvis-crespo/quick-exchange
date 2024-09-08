import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  position: relative;
  padding: 0 32px;
  nav {
    width: 100%;
    height: 80px;
    max-width: 1200px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 auto;
    div.logo {
      a {
        text-decoration: none;
        color: #fff;
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
        color: #fff;
        a {
          text-decoration: none;
          color: #fff;
          font: 16px;
          &:hover {
            color: red;
          }
        }
      }
    }
    a.action_btn {
      //Botón de login
      margin-right: 5px;
      text-decoration: none;
      font: 16px;
      background-color: #96e095;
      color: #000;
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
    }
  }
`;

const ToggleBtn = styled.div`
  display: block;
  color: #fff;
  font-size: 24px;
  cursor: pointer;
`;

const DropDownMenu = styled.div`
  display: none;
  position: absolute;
  right: 27px;
  top: 60px;
  height: 0;
  width: 300px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
  border-radius: 10px;
  overflow: hidden;
  transition: height 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  .open {
    height: 240px;
  }
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
`;

export const NavBar = () => {
  return (
    <>
      <Container>
        <nav>
          <div className="logo">
            <a href="">NAVBAR</a>
          </div>
          <ul>
            <li>
              <NavLink to="/home">Home</NavLink>
            </li>
            <li>
              <NavLink to="/history">History</NavLink>
            </li>
            <li>
              <NavLink to="/contact-us">Contact Us</NavLink>
            </li>
          </ul>
          <a href="#" className="action_btn">
            Login
          </a>
          <ToggleBtn>
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
                d="M448 160H320V128H448v32zM48 64C21.5 64 0 85.5 0 112v64c0 26.5 21.5 48 48 48H464c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48H48zM448 352v32H192V352H448zM48 288c-26.5 0-48 21.5-48 48v64c0 26.5 21.5 48 48 48H464c26.5 0 48-21.5 48-48V336c0-26.5-21.5-48-48-48H48z"
              ></path>
            </svg>
          </ToggleBtn>
        </nav>
      </Container>

      <DropDownMenu>
        <li><NavLink to="/home">Home</NavLink></li>
        <li><NavLink to="/history">History</NavLink></li>
        <li><NavLink to="/contact-us">Contact Us</NavLink></li>
        <li><a href="#" className="action_btn">Login</a></li>
      </DropDownMenu>
    </>
  );
};
