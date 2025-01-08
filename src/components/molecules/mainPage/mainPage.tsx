import React, { useState, useEffect } from 'react';
import {
  StyledWrapper,
  StyledBanner,
  StyledTitle,
  StyledParagraphContainer,
  StyledParagraph,
  StyledButton
} from './mainPage-styling';
import { AboutInfo } from '../aboutInfo/aboutInfo';
import { AboutInfoMore } from '../aboutInfoMore/aboutInfoMore';

interface MainPageProps {
  footerRef: React.RefObject<HTMLDivElement>;
}

const paragraphs = [
  "With our team of developers, your brand becomes a part of the upcoming future.",
  "Check out our proprietary applications, such as the Streaming Platform and the Cryptocurrency Investment App.",
  "In the past we worked for: Onet, Ubisoft, Digits, Netflix, CodeAcademy and more"
];

export const MainPage: React.FC<MainPageProps> = ({ footerRef }) => {
  const [currentParagraphIndex, setCurrentParagraphIndex] = useState(0);

  const scrollToFooter = () => {
    footerRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentParagraphIndex(prevIndex => (prevIndex + 1) % paragraphs.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section>
      <StyledWrapper>
        <StyledBanner>
          <StyledTitle>Create your future with us</StyledTitle>
          <StyledParagraphContainer>
            <StyledParagraph key={currentParagraphIndex}>
              {paragraphs[currentParagraphIndex]}
            </StyledParagraph>
          </StyledParagraphContainer>
          <StyledButton onClick={scrollToFooter}>Contact us</StyledButton>
        </StyledBanner>
      </StyledWrapper>
      <AboutInfo />
      <AboutInfoMore />
    </section>
  );
};
