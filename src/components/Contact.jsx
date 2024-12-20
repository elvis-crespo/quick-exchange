import styled from "styled-components";
import { themeTypography } from "../utils/themes";

const FormContainer = styled.div`
  width: 400px;
  background: linear-gradient(#212121, #212121) padding-box,
    linear-gradient(145deg, transparent 35%, #e81cff, #40c9ff) border-box;
  background: ${({ theme }) => theme.navBackground};
  border: 2px solid transparent;
  padding: 32px 24px;
  font-size: 14px;
  color: white;
  display: flex;
  flex-direction: column;
  border-radius: 16px;
  // transition: all 0.3s cubic-bezier(0.55, 0, 0.55, 0.2), width 0.1s linear,
  //   min-width 0.1s linear, max-width 0.1s linear;
  box-shadow: 0 3px 5px -1px rgba(0, 0, 0, 0.2),
    0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12);
`;
  
  const FormGroup = styled.div`
  font-family: ${themeTypography.fontFamily};
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding-top: 16px;
  label {
    color: ${({ theme }) => theme.text};
    align-self: flex-start;
    padding-left: 30px;
  }
`;

const TextInput = styled.input`
  width: 90%;
  gap: 8px;
  padding: 12px 16px;
  border-radius: 8px;
  color: #fff;
  font-family: inherit;
  background-color: transparent;
  border: 1px solid #414141;
  &:focus {
    outline: none;
    border-color: #e81cff;
  }
`;

const TextArea = styled.textarea`
  width: 90%;
  padding: 12px 16px;
  border-radius: 8px;
  resize: none;
  color: #fff;
  height: 96px;
  border: 1px solid #414141;
  background-color: transparent;
  font-family: inherit;
  &:focus {
    outline: none;
    border-color: #e81cff;
  }
`;

const FormSubmitButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: inherit;
  color: ${({ theme }) => theme.text};
  font-weight: line;
  width: 40%;
  background: #eab308;
  border: 1px solid #414141;
  padding: 12px 16px;
  font-size: inherit;
  gap: 8px;
  margin-top: 8px;
  cursor: pointer;
  border-radius: 6px;
  box-shadow: 0 3px 5px -1px rgba(0, 0, 0, 0.2),
    0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12);
  &:hover {
    background-color: #fff;
    scale: 1.05;
    color: #000;
    transition: all 0.3s ease-in-out;
  }
  &:active {
    scale: 0.95;
  }
`;


const ContactForm = () => {
  return (
    <FormContainer>
      <form className="form">
        <FormGroup>
          <label htmlFor="email">Company Email</label>
          <TextInput type="text" id="email" name="email" required />
        </FormGroup>
        <FormGroup>
          <label htmlFor="textarea">How Can We Help You?</label>
          <TextArea
            id="textarea"
            name="textarea"
            rows="10"
            cols="50"
            required
          />
         <FormSubmitButton type="submit">Submit</FormSubmitButton>
        </FormGroup>
      </form>
    </FormContainer>
  );
};

export default ContactForm;
