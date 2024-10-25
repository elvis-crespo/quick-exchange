/* eslint-disable react/prop-types */
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { toggleTheme } from "../redux/themeReducer";
import { useDispatch, useSelector } from "react-redux";
import DarkModeToggle from "../utils/DarkModeToggle";
import { themeTypography } from "../utils/themes";

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
        @media (max-width: 920px) {
          display: none;
        }
        a {
          text-decoration: none;
          color: ${({ theme }) => theme.text};
          font-size: 16px;
          padding: 0px 17px;
          transition: letter-spacing 0.3s ease;
          font-family: ${themeTypography.fontFamily};
          &:hover {
            // color: #1b2736;
            letter-spacing: 1px;
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
      cursor: pointer;
      transition: scale 0.2 ease;
      font-family: ${themeTypography.fontFamily};
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
    navigate("/login");
  };

  const theme = useSelector((state) => state.theme);
  return (
    <Container>
      <nav>
        <div className="logo">
          <a href="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              // width="300"
              zoomAndPan="magnify"
              viewBox="0 0 224.87999 149.999998"
              height="100"
              preserveAspectRatio="xMidYMid meet"
              version="1.0"
            >
              <defs>
                <g />
                <clipPath id="79ef7b26c4">
                  <path
                    d="M 0 0.0390625 L 224.761719 0.0390625 L 224.761719 149.960938 L 0 149.960938 Z M 0 0.0390625 "
                    clipRule="nonzero"
                  />
                </clipPath>
                <clipPath id="3d1c87dbd5">
                  <path
                    d="M 62.082031 46.199219 L 223.53125 46.199219 L 223.53125 104.496094 L 62.082031 104.496094 Z M 62.082031 46.199219 "
                    clipRule="nonzero"
                  />
                </clipPath>
                <clipPath id="975f0e34cf">
                  <path
                    d="M 96.925781 46.199219 L 221.101562 46.199219 C 221.890625 46.199219 222.617188 46.617188 223.015625 47.296875 C 223.417969 47.972656 223.425781 48.8125 223.042969 49.5 L 194.285156 101.191406 C 193.152344 103.230469 191.003906 104.496094 188.671875 104.496094 L 64.492188 104.496094 C 63.707031 104.496094 62.976562 104.078125 62.578125 103.398438 C 62.179688 102.71875 62.171875 101.878906 62.554688 101.191406 L 91.308594 49.5 C 92.445312 47.464844 94.59375 46.199219 96.925781 46.199219 Z M 96.925781 46.199219 "
                    clipRule="nonzero"
                  />
                </clipPath>
              </defs>
              <g clipPath="url(#3d1c87dbd5)">
                <g clipPath="url(#975f0e34cf)">
                  <path
                    fill="#eab308"
                    d="M 60.714844 46.199219 L 224.898438 46.199219 L 224.898438 104.496094 L 60.714844 104.496094 Z M 60.714844 46.199219 "
                    fillOpacity="1"
                    fillRule="nonzero"
                  />
                </g>
              </g>
              <g fill="#000000" className="black" fillOpacity="1">
                <g transform="translate(-0.000000000000021305, 89.068805)">
                  <g>
                    <path d="M 12.078125 -25.234375 C 15.742188 -25.234375 19.160156 -24.296875 22.328125 -22.421875 L 19.609375 -17.25 C 16.523438 -18.90625 13.910156 -19.734375 11.765625 -19.734375 C 10.128906 -19.734375 9.3125 -19.164062 9.3125 -18.03125 C 9.3125 -17.414062 9.757812 -16.898438 10.65625 -16.484375 C 11.550781 -16.066406 12.640625 -15.691406 13.921875 -15.359375 C 15.210938 -15.023438 16.5 -14.601562 17.78125 -14.09375 C 19.0625 -13.582031 20.144531 -12.773438 21.03125 -11.671875 C 21.925781 -10.566406 22.375 -9.210938 22.375 -7.609375 C 22.375 -5.117188 21.40625 -3.171875 19.46875 -1.765625 C 17.53125 -0.367188 15.007812 0.328125 11.90625 0.328125 C 7.5 0.328125 3.773438 -0.84375 0.734375 -3.1875 L 3.28125 -8.25 C 6.195312 -6.195312 9.128906 -5.171875 12.078125 -5.171875 C 13.898438 -5.171875 14.8125 -5.738281 14.8125 -6.875 C 14.8125 -7.519531 14.367188 -8.054688 13.484375 -8.484375 C 12.609375 -8.910156 11.539062 -9.289062 10.28125 -9.625 C 9.019531 -9.96875 7.757812 -10.394531 6.5 -10.90625 C 5.238281 -11.414062 4.171875 -12.207031 3.296875 -13.28125 C 2.421875 -14.351562 1.984375 -15.707031 1.984375 -17.34375 C 1.984375 -19.832031 2.921875 -21.769531 4.796875 -23.15625 C 6.671875 -24.539062 9.097656 -25.234375 12.078125 -25.234375 Z M 12.078125 -25.234375 " />
                  </g>
                </g>
              </g>
              <g fill="#000000" className="black" fillOpacity="1">
                <g transform="translate(21.030181, 89.068805)">
                  <g>
                    <path d="M 34.453125 0 L 26.5625 0 L 21.671875 -15.78125 L 16.796875 0 L 8.859375 0 L -0.234375 -24.859375 L 7.890625 -24.859375 L 13 -7.65625 L 17.984375 -24.859375 L 25.59375 -24.859375 L 30.71875 -7.65625 L 35.75 -24.859375 L 43.546875 -24.859375 Z M 34.453125 0 " />
                  </g>
                </g>
              </g>
              <g fill="#000000" className="black" fillOpacity="1">
                <g transform="translate(61.614981, 89.068805)">
                  <g>
                    <path d="M 14.34375 -25.234375 C 17.757812 -25.234375 20.410156 -24.441406 22.296875 -22.859375 C 24.191406 -21.273438 25.15625 -19.066406 25.1875 -16.234375 L 25.1875 0 L 17.390625 0 L 17.390625 -2.859375 C 15.753906 -0.703125 13.21875 0.375 9.78125 0.375 C 7.164062 0.375 5.085938 -0.347656 3.546875 -1.796875 C 2.015625 -3.242188 1.25 -5.117188 1.25 -7.421875 C 1.25 -9.796875 2.070312 -11.632812 3.71875 -12.9375 C 5.363281 -14.238281 7.722656 -14.90625 10.796875 -14.9375 L 17.34375 -14.9375 L 17.34375 -15.3125 C 17.34375 -16.539062 16.929688 -17.5 16.109375 -18.1875 C 15.296875 -18.882812 14.09375 -19.234375 12.5 -19.234375 C 10.25 -19.234375 7.773438 -18.539062 5.078125 -17.15625 L 2.8125 -22.421875 C 6.84375 -24.296875 10.6875 -25.234375 14.34375 -25.234375 Z M 12.21875 -5.03125 C 13.476562 -5.03125 14.582031 -5.34375 15.53125 -5.96875 C 16.488281 -6.601562 17.09375 -7.425781 17.34375 -8.4375 L 17.34375 -10.65625 L 12.3125 -10.65625 C 9.914062 -10.65625 8.71875 -9.765625 8.71875 -7.984375 C 8.71875 -7.054688 9.023438 -6.332031 9.640625 -5.8125 C 10.253906 -5.289062 11.113281 -5.03125 12.21875 -5.03125 Z M 12.21875 -5.03125 " />
                  </g>
                </g>
              </g>
              <g fill="#000000" className="black" fillOpacity="1">
                <g transform="translate(86.657548, 89.068805)">
                  <g>
                    <path d="M 18.8125 -25.140625 C 22.320312 -25.140625 25.144531 -23.960938 27.28125 -21.609375 C 29.414062 -19.253906 30.484375 -16.15625 30.484375 -12.3125 C 30.484375 -8.53125 29.4375 -5.484375 27.34375 -3.171875 C 25.257812 -0.867188 22.476562 0.28125 19 0.28125 C 15.738281 0.28125 13.203125 -0.921875 11.390625 -3.328125 L 11.390625 8.953125 L 3.40625 8.953125 L 3.40625 -24.859375 L 11.390625 -24.859375 L 11.390625 -21.59375 C 13.234375 -23.957031 15.707031 -25.140625 18.8125 -25.140625 Z M 16.875 -6.046875 C 18.539062 -6.046875 19.890625 -6.648438 20.921875 -7.859375 C 21.953125 -9.078125 22.46875 -10.640625 22.46875 -12.546875 C 22.46875 -14.453125 21.953125 -16.003906 20.921875 -17.203125 C 19.890625 -18.398438 18.539062 -19 16.875 -19 C 15.28125 -19 13.96875 -18.398438 12.9375 -17.203125 C 11.90625 -16.003906 11.390625 -14.453125 11.390625 -12.546875 C 11.390625 -10.609375 11.894531 -9.039062 12.90625 -7.84375 C 13.925781 -6.644531 15.25 -6.046875 16.875 -6.046875 Z M 16.875 -6.046875 " />
                  </g>
                </g>
              </g>
              <g fill="#ffffff" className="white" fillOpacity="1">
                <g transform="translate(118.141013, 89.068805)">
                  <g>
                    <path d="M 4.171875 -35.03125 C 4.953125 -35.8125 5.957031 -36.203125 7.1875 -36.203125 C 8.425781 -36.203125 9.4375 -35.8125 10.21875 -35.03125 C 11 -34.25 11.390625 -33.242188 11.390625 -32.015625 C 11.390625 -30.785156 11 -29.769531 10.21875 -28.96875 C 9.4375 -28.164062 8.425781 -27.765625 7.1875 -27.765625 C 5.957031 -27.765625 4.953125 -28.164062 4.171875 -28.96875 C 3.390625 -29.769531 3 -30.785156 3 -32.015625 C 3 -33.242188 3.390625 -34.25 4.171875 -35.03125 Z M 11.109375 0 L 3.1875 0 L 3.1875 -24.859375 L 11.109375 -24.859375 Z M 11.109375 0 " />
                  </g>
                </g>
              </g>
              <g fill="#ffffff" className="white" fillOpacity="1">
                <g transform="translate(129.85508, 89.068805)">
                  <g>
                    <path d="M 15.40625 -28.28125 C 14.570312 -28.3125 13.882812 -28.085938 13.34375 -27.609375 C 12.8125 -27.128906 12.546875 -26.441406 12.546875 -25.546875 L 12.546875 -23.75 L 18.171875 -23.75 L 18.171875 -18.5 L 12.546875 -18.5 L 12.546875 0 L 4.65625 0 L 4.65625 -18.5 L 1.296875 -18.5 L 1.296875 -23.75 L 4.65625 -23.75 L 4.65625 -26.0625 C 4.65625 -28.738281 5.546875 -30.828125 7.328125 -32.328125 C 9.117188 -33.835938 11.394531 -34.59375 14.15625 -34.59375 C 16.800781 -34.59375 19.125 -34.007812 21.125 -32.84375 L 18.3125 -27.265625 C 17.382812 -27.941406 16.414062 -28.28125 15.40625 -28.28125 Z M 15.40625 -28.28125 " />
                  </g>
                </g>
              </g>
              <g fill="#ffffff" className="white" fillOpacity="1">
                <g transform="translate(145.028097, 89.068805)">
                  <g>
                    <path d="M 27.078125 -24.859375 L 16.328125 2.578125 C 14.484375 7.066406 11.285156 9.3125 6.734375 9.3125 C 4.085938 9.3125 1.675781 8.46875 -0.5 6.78125 L 2.8125 1.34375 C 3.914062 2.226562 5.007812 2.671875 6.09375 2.671875 C 7.5 2.671875 8.523438 2.007812 9.171875 0.6875 L 9.78125 -0.546875 L -0.546875 -24.859375 L 7.65625 -24.859375 L 13.75 -8.34375 L 19.140625 -24.859375 Z M 27.078125 -24.859375 " />
                  </g>
                </g>
              </g>
            </svg>
          </a>
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
