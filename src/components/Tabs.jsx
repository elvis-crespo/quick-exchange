/* eslint-disable react/prop-types */

import styled from "styled-components";


const TabsContainer = styled.div`
  flex-direction: row !important;
  margin: 24px 0px;
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
 `;

const TabLink = styled.button`
  padding: 0.5rem 1rem;
  margin-right: 0.5rem;
  border: none;
  cursor: pointer;
  font-weight: bold;
  border-radius: 8px;
  box-shadow: 0 3px 5px -1px rgba(0, 0, 0, 0.2),
    0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12);
  transition: background-color 0.3s ease, transform 0.3s ease;

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
  return (
    <>
      <TabsContainer>
        {tabs.map((tab) => (
          <TabLink
            key={tab.id}
            className={`tab-link ${activeTab === tab.id ? "active" : ""}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.title}
          </TabLink>
        ))}
      </TabsContainer>
    </>
  );
};
