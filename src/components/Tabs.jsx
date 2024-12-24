/* eslint-disable react/prop-types */

import { useTranslation } from "react-i18next";
import styled from "styled-components";

const TabsContainer = styled.div`
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  flex-direction: row !important;
  flex-wrap: wrap;
  margin: 24px 0px;
`;

const TabLink = styled.button`
  border: none;
  box-shadow: 0 3px 5px -1px rgba(0, 0, 0, 0.2),
    0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12);
  border-radius: 8px;
  cursor: pointer;
  font-weight: bold;
  margin-right: 0.5rem;
  transition: background-color 0.3s ease, transform 0.3s ease;
  padding: 0.5rem 1rem;

  &:hover {
    transform: scale(1.05);
  }
  &.active {
    background-color: #eab308;
  }
`;
//   .tab-link.active {
//     background-color: #eab308;
//   }

export const Tabs = ({ tabs, activeTab, setActiveTab }) => {

  const { t } = useTranslation();

  return (
    <>
      <TabsContainer>
        {tabs.map((tab) => (
          <TabLink
            key={tab.id}
            className={`tab-link ${activeTab === tab.id ? "active" : ""}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {t(tab.title)}
          </TabLink>
        ))}
      </TabsContainer>
    </>
  );
};
