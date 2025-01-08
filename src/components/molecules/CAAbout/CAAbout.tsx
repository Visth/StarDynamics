import React from 'react';
import { StyledWrapper, StyledContent, StyledHeading, StyledText, StyledImage } from './CAAbout-styling';
import productsCA02 from "../../../../public/assets/productsCA02.jpg"

export const CAAbout: React.FC = () => {
  return (
    <StyledWrapper>
      <StyledContent>
        <StyledHeading>About Cryptocurrency Investment App</StyledHeading>
        <StyledText>
          <b>Discover the future of finance</b> with our Cryptocurrency Investment App, designed to make investing in digital currencies
          simple and secure. Whether you're a beginner or a seasoned investor, our app provides the tools you need to manage your portfolio
          and track real-time market trends.
        </StyledText>
        <br />
        <br />
        <StyledText>
          <b>Trusted by over 500,000 users</b>, our platform combines advanced analytics, AI-driven recommendations, and a user-friendly
          interface to empower your investment journey. Join a growing community of crypto enthusiasts and start building your digital
          assets today.
        </StyledText>
      </StyledContent>

      <StyledImage src={productsCA02} />
    </StyledWrapper>
  );
};
