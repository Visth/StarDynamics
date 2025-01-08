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
  width: 50%;
  font-size: 1.1rem;
  line-height: 1.6;
  text-align: justify;

  @media (max-width: 768px) {
    width: 100%;
    font-size: 1rem;
  }
`;

export const StyledSectionImage = styled.img`
  width: 45%;
  height: auto;

  @media (max-width: 768px) {
    margin-top: 40px;
    width: 100%;
  }
`;

import React from 'react';

export const DocsSP: React.FC = () => {
  return (
    <StyledContainer>
      <StyledHeaderSection>
        <StyledHeader>Documentation of Streaming Platform</StyledHeader>
        <StyledContentText>
          Our Streaming Platform provides seamless access to a vast library of movies, TV series, and original content. Built with modern
          technologies, it ensures a high-quality viewing experience with low latency and rich features for content discovery and
          management.
        </StyledContentText>
        <StyledImage src="../../assets/docsSP01.png" />
      </StyledHeaderSection>

      <StyledSectionBoxContainer>
        <StyledSubHeader>Technical Overview</StyledSubHeader>
        <StyledSectionBox>
          <StyledSectionText>
            - The frontend is developed using <b>React</b> and <b>TypeScript</b>, providing a responsive and interactive user experience.
            <br />- The backend is powered by <b>Node.js</b> and <b>Express</b>, enabling efficient handling of user requests and dynamic
            content delivery.
            <br />- Streaming services are integrated using adaptive bitrate streaming technologies such as <b>HLS</b> and <b>MPEG-DASH</b>.
            <br />- Content metadata and user data are stored securely in <b>PostgreSQL</b>, with <b>Redis</b> used for session management
            and caching.
            <br />- The platform is hosted on a scalable <b>AWS</b> infrastructure, ensuring high availability and performance.
            <br />
          </StyledSectionText>
          <StyledSectionImage src="../../assets/docsSP02.jpg" />
        </StyledSectionBox>
      </StyledSectionBoxContainer>

      <StyledSubContentContainer>
        <StyledSubHeader>Key Features</StyledSubHeader>
        <StyledContentText>
          - Access to a rich library of <b>movies</b> and <b>TV shows</b>, including exclusive original content.
          <br />- Advanced search and recommendation algorithms for <b>personalized content discovery</b>.<br />-{' '}
          <b>High-definition streaming</b> with support for adaptive bitrate to ensure quality across varying internet speeds.
          <br />- <b>User profiles</b> and parental controls for customized and safe viewing experiences.
          <br />- <b>Offline viewing</b> capabilities with secure content download options.
          <br />
        </StyledContentText>
      </StyledSubContentContainer>
    </StyledContainer>
  );
};
