import React from 'react';
import { StyledWrapper, StyledSection, StyledHeading, StyledText, StyledImage } from './aboutInfoMore-styling';

export const AboutInfoMore: React.FC = () => {
  return (
    <StyledWrapper>
      <StyledSection>
        <StyledHeading>Did you know…?</StyledHeading>
        <StyledText>
          <b>Over 80%</b> of mobile users prefer apps with sleek and responsive designs and a well-designed mobile app can{' '}
          <b>increase customer retention rates by 60%.</b>
        </StyledText>
        <StyledImage src={'../../assets/home02.jpg'} />
      </StyledSection>

      <StyledSection>
        <StyledHeading>Why try our Streaming Platform?</StyledHeading>
        <StyledText>
          Our platform offers tailored recommendations powered by advanced AI, ensuring viewers always find something they'll love. With a
          vast library of movies and shows, there's something for everyone to enjoy anytime, anywhere.
        </StyledText>
        <StyledImage src={'../../assets/home03.jpg'} />
      </StyledSection>
    </StyledWrapper>
  );
};
