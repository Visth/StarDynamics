import React, { useState } from 'react';
import {
  StyledWrapper,
  StyledContent,
  StyledHeading,
  StyledText,
  StyledList,
  StyledListItem,
  StyledImage,
  StyledArrow,
} from './aboutInfo-styling';
import home01 from '../../../../public/assets/home01.jpg';

export const AboutInfo: React.FC = () => {
  const [isFirstListExpanded, setFirstListExpanded] = useState(false);
  const [isSecondListExpanded, setSecondListExpanded] = useState(false);

  const toggleFirstList = () => setFirstListExpanded(!isFirstListExpanded);
  const toggleSecondList = () => setSecondListExpanded(!isSecondListExpanded);

  return (
    <StyledWrapper>
      <StyledContent>
        <StyledHeading>
          <span onClick={toggleSecondList}>Benefits of working with us</span>
          <StyledArrow onClick={toggleSecondList} expanded={isSecondListExpanded}>
            {isSecondListExpanded ? (
              <i className="pi pi-arrow-up" style={{ fontSize: '1.2rem', fontWeight: 'bold', alignSelf: 'center' }}></i>
            ) : (
              <i className="pi pi-arrow-down" style={{ fontSize: '1.2rem', fontWeight: 'bold', alignSelf: 'center' }}></i>
            )}
          </StyledArrow>
        </StyledHeading>
        {/* <StyledText>Nasze narzędzie umożliwia:</StyledText> */}
        <StyledText>
          <StyledList>
            <StyledListItem>We create intuitive and modern mobile apps that delight users.</StyledListItem>
            <StyledListItem>
              We specialize in precise and aesthetic front-end development – giving your brand a professional look.
              {isSecondListExpanded ? null : (
                <span style={{ cursor: 'pointer', color: '#005eff' }} onClick={toggleSecondList}>
                  {' '}
                  (more...)
                </span>
              )}
            </StyledListItem>
            {isSecondListExpanded && (
              <>
                <StyledListItem>We provide full technical support and app development at every stage.</StyledListItem>
                <StyledListItem>We tailor solutions to your needs, creating unique functionalities.</StyledListItem>
                <StyledListItem>With our expertise and experience, your app reaches the market faster and more effectively.</StyledListItem>
              </>
            )}
          </StyledList>
        </StyledText>

        <StyledHeading>
          <span onClick={toggleFirstList}>Our products advantages</span>
          <StyledArrow onClick={toggleFirstList} expanded={isFirstListExpanded}>
            {isFirstListExpanded ? (
              <i className="pi pi-arrow-up" style={{ fontSize: '1.2rem', fontWeight: 'bold', alignSelf: 'center' }}></i>
            ) : (
              <i className="pi pi-arrow-down" style={{ fontSize: '1.2rem', fontWeight: 'bold', alignSelf: 'center' }}></i>
            )}{' '}
            {/* Jedna strzałka zmieniająca kierunek */}
          </StyledArrow>
        </StyledHeading>
        {/* <StyledText>Streaming Platform</StyledText> */}
        <StyledText>
          <StyledList>
            <StyledListItem>
              <b>Streaming Platform:</b> Delivers high-quality movies streaming, even with weaker internet connections.
            </StyledListItem>
            <StyledListItem>
              <b>Streaming Platform:</b>An easy-to-use interface ensures a great experience for every user.
              {isFirstListExpanded ? null : (
                <span style={{ cursor: 'pointer', color: '#005eff' }} onClick={toggleFirstList}>
                  {' '}
                  (more...)
                </span>
              )}
            </StyledListItem>
            {isFirstListExpanded && (
              <>
                <StyledListItem>
                  <b>Streaming Platform:</b> Advanced content personalization tools increase viewer engagement.
                </StyledListItem>
                <StyledListItem>
                  <b>Cryptocurrency Investment App:</b> Secure solutions for managing cryptocurrency wallets – your data is protected.
                </StyledListItem>
                <StyledListItem>
                  <b>Cryptocurrency Investment App:</b> Clear analyses and forecasts help make accurate investment decisions.
                </StyledListItem>
              </>
            )}
          </StyledList>
        </StyledText>
      </StyledContent>

      <StyledImage src={home01} />
    </StyledWrapper>
  );
};
