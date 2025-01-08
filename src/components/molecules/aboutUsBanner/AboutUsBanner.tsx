import React from 'react';
import { StyledBannerWrapper, StyledContent, StyledTitle, StyledText, StyledImage } from './AboutUsBanner-styling';

export const AboutUsBanner: React.FC = () => {
  return (
    <StyledBannerWrapper>
      <StyledContent>
        <StyledTitle>About Us</StyledTitle>
        <StyledText>
          We are a team of highly skilled software developers and project managers passionate about delivering exceptional digital
          solutions. With years of experience across diverse industries, we excel in creating web and mobile applications, managing complex
          backend systems, and leading projects to success.
        </StyledText>
      </StyledContent>
      <StyledImage src={'../../assets/aboutus01.jpg'} />
    </StyledBannerWrapper>
  );
};
