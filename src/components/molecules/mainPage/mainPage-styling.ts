import styled, { keyframes } from 'styled-components';

export const StyledWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  max-width: 100%;
  /* height: 80vh; */
`;

export const StyledBanner = styled.div`
  background: linear-gradient(135deg, #005eff, #00d4ff);
  background: rgb(67,121,164);
background: linear-gradient(149deg, rgba(67,121,164,1) 0%, rgba(94,187,204,1) 33%, rgba(189,237,244,1) 83%, rgba(198,232,232,1) 92%); 
  padding: 40px;
  border-radius: 10px;
  text-align: left;
  min-height: 70vh;
  display: flex;
  width: 100%;
  margin: 40px 90px;
  margin-top: 60px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  @media (max-width: 768px) {
    width: 100%;
    margin: 0;
  }
`;

export const StyledTitle = styled.h2`
  font-size: 2.6rem;
  margin-bottom: 24px;
  color: #fff;
`;

const slideInRight = keyframes`
  0% {
    opacity: 0;
    transform: translateX(100%);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
`;

const slideOutLeft = keyframes`
  0% {
    opacity: 1;
    transform: translateX(0);
  }
  100% {
    opacity: 0;
    transform: translateX(-100%);
  }
`;

export const StyledParagraphContainer = styled.div`
  position: relative;
  width: 80%;
  height: 5.8rem;
  overflow: hidden;
  margin-bottom: 80px;
`;

export const StyledParagraph = styled.p`
  font-size: 1.4rem;
  color: #fff;
  line-height: 1.8;
  position: absolute;
  width: 100%;
  animation: ${slideInRight} 1.2s forwards, ${slideOutLeft} 1.2s 4.5s forwards;
`;

export const StyledButton = styled.button`
  padding: 15px 30px;
  font-size: 1.2rem;
  color: white;
  background-color: #136f70;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #179999;
  }
`;
