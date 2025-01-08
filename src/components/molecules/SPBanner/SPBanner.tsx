import React from 'react';
import { StyledWrapper, StyledLeftSection, StyledTitle, StyledText, StyledButton, StyledImage } from './SPBanner-styling';
// import QR_IMG from '../../../../public/assets/dppappweb1.png';

export const SPBanner: React.FC = () => {
  return (
    <StyledWrapper>
      <StyledLeftSection>
        <StyledTitle>Check out our newest app on Your phone!</StyledTitle>
        <StyledText>
          Enjoy your favorite movies and shows anytime, anywhere, with a user-friendly interface designed for seamless navigation. Discover
          personalized recommendations powered by smart algorithms to match your unique taste. Download content for offline viewing and
          never miss out, even without an internet connection. 
          <br/>
          <br/>
          Start exploring our vast library today – your next favorite movie is just a tap away!
        </StyledText>
        <StyledButton>Download App</StyledButton>
      </StyledLeftSection>

      <StyledImage src={'../../assets/productsSP01-test.png'} />
    </StyledWrapper>
  );
};
