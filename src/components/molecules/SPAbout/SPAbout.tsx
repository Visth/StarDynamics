import React from 'react';
import { StyledWrapper, StyledContent, StyledHeading, StyledText, StyledImage } from './SPAbout-styling';
import productsSP03 from '../../../../public/assets/productsSP03.jpg';

export const SPAbout: React.FC = () => {
  return (
    <StyledWrapper>
      <StyledContent>
        <StyledHeading>Series of the Month: Game of Thrones</StyledHeading>
        <StyledText>
          <b>Step into the epic world of Westeros</b>, where noble families vie for control of the Iron Throne in a gripping tale of power,
          betrayal, and loyalty. With its unforgettable characters and shocking twists,{' '}
          <b>Game of Thrones is a must-watch for fans of fantasy and drama alike.</b>
        </StyledText>
        <br />
        <br />
        <StyledText>
          <b>Over 2 million viewers</b> on our platform have already experienced this groundbreaking series, making it the most-watched show
          in our library.
        </StyledText>
      </StyledContent>

      <StyledImage src={productsSP03} />
    </StyledWrapper>
  );
};
