import styled from "styled-components";
import { FcGoogle } from "react-icons/fc";
import axios from "axios";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  background-color: #ffffff;
  padding: 30px;
  width: 90%;
  max-width: 450px; /* Limitar el ancho máximo */
  border-radius: 20px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  box-shadow: 0 0 0 2px rgb(190, 190, 190), 0.3em 0.3em 1em rgba(0, 0, 0, 0.3);

  @media (max-width: 600px) {
    padding: 20px;
    gap: 8px;
  }

  ::placeholder {
    font-family: inherit;
  }

  .flex-column > label {
    color: #151717;
    font-weight: 600;
  }

  .inputForm {
    border: 1.5px solid #ecedec;
    border-radius: 10px;
    height: 50px;
    display: flex;
    align-items: center;
    padding-left: 10px;
    transition: 0.2s ease-in-out;
  }

  .input {
    margin-left: 10px;
    border-radius: 10px;
    border: none;
    width: 100%;
    height: 100%;
  }

  .input:focus {
    outline: none;
  }

  .inputForm:focus-within {
    border: 1.5px solid #2d79f3;
  }

  .flex-row {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
    justify-content: space-between;
  }

  .flex-row > div > label {
    font-size: 14px;
    color: black;
    font-weight: 400;
    padding-left: 5px;
  }

  .span {
    font-size: 14px;
    margin-left: 5px;
    color: #2d79f3;
    font-weight: 500;
    cursor: pointer;
  }

  .button-submit {
    margin: 20px 0 10px 0;
    background-color: #151717;
    border: none;
    color: white;
    font-size: 15px;
    font-weight: 500;
    border-radius: 10px;
    height: 50px;
    width: 100%;
    cursor: pointer;
  }

  .p {
    text-align: center;
    color: black;
    font-size: 14px;
    margin: 5px 0;
  }

  .btn {
    margin-top: 10px;
    width: 100%;
    height: 50px;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 500;
    gap: 10px;
    border: 1px solid #ededef;
    background-color: white;
    cursor: pointer;
    transition: 0.2s ease-in-out;

    svg {
      width: 20px;
      height: 20px;
    }
  }

  .btn:hover {
    border: 1px solid #2d79f3;
  }

  @media (max-width: 600px) {
    .button-submit,
    .btn {
      height: 45px;
      font-size: 14px;
    }
    .p {
      font-size: 12px;
    }
    .span {
      font-size: 12px;
    }
  }
`;

export default function Login() {
  
  const handleLoginGoogle = async () => {
    try {
      const response = await axios.get(
        "https://localhost:7275/api/Auth/google-login"
      );
      console.log(response);
      //url redirect
      window.location.href = response.data.url;
    } catch (error) {
      console.error("Error when signing in with Google:", error);
    }
  };

  return (
    <>
      <StyledForm>
        <div className="flex-column">
          <label>Email</label>
        </div>
        <div className="inputForm">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 32 32"
          >
            <g data-name="Layer 3" id="Layer_3">
              <path d="M30.853 13.87A15 15 0 10 1.124 17.95a15.1 15.1 0 0012.876 12.918 15.6 15.6 0 002.016.13 14.85 14.85 0 007.715-2.145 1 1 0 10-1.031-1.711 13.007 13.007 0 115.458-6.529 2.149 2.149 0 01-4.158-.759V4.938a1 1 0 00-2 0v1.726a8 8 0 10.2 10.325 4.135 4.135 0 007.83.274 15.2 15.2 0 00.823-7.455zM16 21a6 6 0 116-6 6.006 6.006 0 01-6 6z" />
            </g>
          </svg>
          <input
            placeholder="Enter your Email"
            className="input"
            type="text"
            autoComplete="current-email"
          />
        </div>

        <div className="flex-column">
          <label>Password</label>
        </div>
        <div className="inputForm">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="-64 0 512 512"
          >
            <path d="M336 512H48a48 48 0 01-48-48V240a48 48 0 0148-48h288a48 48 0 0148 48v224a48 48 0 01-48 48zm-288-288a16 16 0 00-16 16v224a16 16 0 0016 16h288a16 16 0 0016-16V240a16 16 0 00-16-16z" />
            <path d="M304 224a16 16 0 01-16-16V128a96 96 0 10-192 0v80a16 16 0 01-32 0V128c0-70.59375 57.40625-128 128-128s128 57.40625 128 128v80a16 16 0 01-16 16z" />
          </svg>
          <input
            placeholder="Enter your Password"
            className="input"
            type="password"
            autoComplete="current-password"
          />
        </div>

        <div className="flex-row">
          <div>
            <input type="radio" />
            <label>Remember me</label>
          </div>
          <span className="span">Forgot password?</span>
        </div>

        <button className="button-submit">Sign In</button>

        <p className="p">
          Don t have an account? <span className="span">Sign Up</span>
        </p>
        <p className="p line">Or With</p>

        <div className="flex-row">
          <button className="btn google" onClick={handleLoginGoogle}>
            <FcGoogle height={20} width={20} className="icon-google" />
            Google
          </button>
          <button className="btn apple" onClick={handleLoginGoogle}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 22.773 22.773"
            >
              <svg
                xmlSpace="preserve"
                // style="enable-background:new 0 0 22.773 22.773;"
                viewBox="0 0 22.773 22.773"
                y="0px"
                x="0px"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                xmlns="http://www.w3.org/2000/svg"
                id="Capa_1"
                width="20"
                height="20"
                version="1.1"
              >
                {" "}
                <g>
                  {" "}
                  <g>
                    {" "}
                    <path d="M15.769,0c0.053,0,0.106,0,0.162,0c0.13,1.606-0.483,2.806-1.228,3.675c-0.731,0.863-1.732,1.7-3.351,1.573 c-0.108-1.583,0.506-2.694,1.25-3.561C13.292,0.879,14.557,0.16,15.769,0z"></path>{" "}
                    <path d="M20.67,16.716c0,0.016,0,0.03,0,0.045c-0.455,1.378-1.104,2.559-1.896,3.655c-0.723,0.995-1.609,2.334-3.191,2.334 c-1.367,0-2.275-0.879-3.676-0.903c-1.482-0.024-2.297,0.735-3.652,0.926c-0.155,0-0.31,0-0.462,0 c-0.995-0.144-1.798-0.932-2.383-1.642c-1.725-2.098-3.058-4.808-3.306-8.276c0-0.34,0-0.679,0-1.019 c0.105-2.482,1.311-4.5,2.914-5.478c0.846-0.52,2.009-0.963,3.304-0.765c0.555,0.086,1.122,0.276,1.619,0.464 c0.471,0.181,1.06,0.502,1.618,0.485c0.378-0.011,0.754-0.208,1.135-0.347c1.116-0.403,2.21-0.865,3.652-0.648 c1.733,0.262,2.963,1.032,3.723,2.22c-1.466,0.933-2.625,2.339-2.427,4.74C17.818,14.688,19.086,15.964,20.67,16.716z"></path>{" "}
                  </g>
                </g>
              </svg>
            </svg>
            Apple
          </button>
        </div>
      </StyledForm>
    </>
  );
};
