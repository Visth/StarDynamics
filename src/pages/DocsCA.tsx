import styled from 'styled-components';

export const StyledContainer = styled.div`
  max-width: 100%;
  margin: 40px 90px;
  margin-top: 60px;
  /* padding: 40px 20px; */
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    margin: 100px 20px;
  }
`;

export const StyledHeaderSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  flex-direction: column;
  background-color: #f9f9f9;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  padding: 20px;
  border-radius: 8px;
  text-align: center;
  margin-bottom: 30px;
`;

export const StyledHeader = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 30px;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const StyledContentText = styled.p`
  width: 90%;
  font-size: 1.2rem;
  line-height: 1.6;
  margin-bottom: 40px;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

export const StyledImage = styled.img`
  width: 100%;
  height: 60vh;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    height: 30vh;
  }
`;

export const StyledSectionBoxContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 8px;
  align-items: center;
  padding: 20px;
  background-color: #f9f9f9;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  margin-top: 80px;
`;

export const StyledSectionBox = styled.div`
  width: 95%;
  display: flex;
  justify-content: space-between;
  border-radius: 8px;
  align-items: center;
  padding: 20px;
  margin-top: 10px;

  @media (max-width: 768px) {
    width: 100%;
    flex-direction: column;
  }
`;

export const StyledSubContentContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 8px;
  align-items: center;
  padding: 20px;
  background-color: #f9f9f9;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  margin-top: 80px;
`;

export const StyledSubHeader = styled.h2`
  font-size: 1.8rem;
  font-weight: bold;
  margin-top: 10px;
  margin-bottom: 20px;
`;

export const StyledSectionText = styled.p`
  width: 75%;
  font-size: 1.1rem;
  line-height: 1.6;
  text-align: justify;

  @media (max-width: 768px) {
    width: 100%;
    font-size: 1rem;
  }
`;

export const StyledSectionImage = styled.img`
  width: 20%;
  height: auto;

  @media (max-width: 768px) {
    margin-top: 10px;
    width: 50%;
  }
`;

import React from 'react';
import docsCA01 from '../../public/assets/docsCA01.jpg';
import docsCA02 from '../../public/assets/docsCA02TEST.jpg';

export const DocsCA: React.FC = () => {
  return (
    <StyledContainer>
      <StyledHeaderSection>
        <StyledHeader>Documentation of Cryptocurrency Investment App</StyledHeader>
        <StyledContentText>
          Our Cryptocurrency Investment App empowers users with advanced tools for managing digital assets and making informed investment
          decisions. The platform is built with a modern tech stack to ensure reliability, speed, and security. It provides real-time market
          data, advanced analytics, and a user-friendly interface to simplify complex trading and portfolio management processes.
        </StyledContentText>
        <StyledImage src={docsCA01} />
      </StyledHeaderSection>

      <StyledSectionBoxContainer>
        <StyledSubHeader>Technical Overview</StyledSubHeader>
        <StyledSectionBox>
          <StyledSectionText>
            The frontend of the app is developed using <strong>React</strong> and <strong>TypeScript</strong>, ensuring a responsive and
            dynamic user experience. The backend is powered by <strong>Node.js</strong> with <strong>Express</strong>, enabling robust and
            scalable APIs. For data storage, the app uses <strong>PostgreSQL</strong> for structured data and <strong>Redis</strong> for
            caching. Real-time price updates are powered by WebSocket integrations, and the app is deployed on a secure <strong>AWS</strong>{' '}
            cloud infrastructure.
          </StyledSectionText>
          <StyledSectionImage src={docsCA02} />
        </StyledSectionBox>
      </StyledSectionBoxContainer>

      <StyledSubContentContainer>
        <StyledSubHeader>Key Features</StyledSubHeader>
        <StyledContentText>
          - Real-time cryptocurrency price tracking and charting.
          <br />
          - Portfolio management with detailed performance analytics.
          <br />
          - Integration with major exchanges for seamless trading.
          <br />
          - Advanced security measures including two-factor authentication and encrypted data storage.
          <br />
          - Comprehensive learning resources for new and experienced investors.
          <br />
        </StyledContentText>
      </StyledSubContentContainer>
    </StyledContainer>
  );
};
