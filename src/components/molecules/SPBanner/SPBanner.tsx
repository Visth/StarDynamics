import React from 'react';
import { StyledWrapper, StyledLeftSection, StyledTitle, StyledText, StyledButton, StyledImage } from './SPBanner-styling';
import productsSP01test from '../../../../public/assets/productsSP01-test_TEST.jpg';

export const SPBanner: React.FC = () => {
  return (
    <StyledWrapper>
      <StyledLeftSection>
        <StyledTitle>Check out our newest app on Your phone!</StyledTitle>
        <StyledText>
          Enjoy your favorite movies and shows anytime, anywhere, with a user-friendly interface designed for seamless navigation. Discover
          personalized recommendations powered by smart algorithms to match your unique taste. Download content for offline viewing and
          never miss out, even without an internet connection.
          <br />
          <br />
          Start exploring our vast library today – your next favorite movie is just a tap away!
        </StyledText>
        <StyledButton>Download App</StyledButton>
      </StyledLeftSection>

      <StyledImage src={productsSP01test} />
    </StyledWrapper>
  );
};
