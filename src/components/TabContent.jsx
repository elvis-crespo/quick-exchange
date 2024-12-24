/* eslint-disable react/prop-types */
import styled from "styled-components";
import { themeTypography } from "../utils/themes";

const TabContentContainer = styled.div`
  background-color: ${({ theme }) => theme.background};
  background-color: ${({ theme }) => theme.navBackground};
  border-radius: 10px;
  box-shadow: 0 3px 5px -1px rgba(0, 0, 0, 0.2),
    0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12);
  color: ${({ theme }) => theme.text};
  display: ${({ hidden }) => (hidden ? "none" : "block")} !important;
  min-width: 80vw !important;
  padding: 2rem 1.5rem;
  margin-bottom: 1rem;
  text-align: left;
  width: 80vw !important;

  .faqs-text {
    font-family: ${themeTypography.fontFamily};
    padding: 0;
  }
`;

export const TabContent = ({ id, activeTab, children}) => {
  return (
    <TabContentContainer
      role="tabpanel"
      id={`tab-${id}`}
      aria-labelledby={`tab-${id}`}
      hidden={activeTab !== id}
    >
      {children}
    </TabContentContainer>
  );
}
