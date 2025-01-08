import React from 'react';
import { StyledWrapper, StyledSection, StyledHeading, StyledText, StyledImage } from './aboutInfoMore-styling';
import home02 from '../../../../public/assets/home02.jpg';
import home03 from '../../../../public/assets/home03.jpg';

export const AboutInfoMore: React.FC = () => {
  return (
    <StyledWrapper>
      <StyledSection>
        <StyledHeading>Did you know…?</StyledHeading>
        <StyledText>
          <b>Over 80%</b> of mobile users prefer apps with sleek and responsive designs and a well-designed mobile app can{' '}
          <b>increase customer retention rates by 60%.</b>
        </StyledText>
        <StyledImage src={home02} />
      </StyledSection>

      <StyledSection>
        <StyledHeading>Why try our Streaming Platform?</StyledHeading>
        <StyledText>
          Our platform offers tailored recommendations powered by advanced AI, ensuring viewers always find something they'll love. With a
          vast library of movies and shows, there's something for everyone to enjoy anytime, anywhere.
        </StyledText>
        <StyledImage src={home03} />
      </StyledSection>
    </StyledWrapper>
  );
};
