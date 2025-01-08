import styled from 'styled-components';

export const StyledTeamWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  margin: 120px 0px;
`;

export const StyledRow = styled.div<{ isReversed: boolean; isEven: boolean }>`
  display: flex;
  flex-direction: ${({ isReversed }) => (isReversed ? 'row-reverse' : 'row')};
  align-items: center;
  justify-content: space-between;
  height: 30vh;
  padding: 10px 30px;
  width: 80%;
  border-radius: 8px;
  align-self: center;
  /* background-color: ${({ isEven }) => (isEven ? '' : '')}; */
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  gap: 30px;

  @media (max-width: 768px) {
    flex-direction: column;
    width: 90%;
    height: auto;
    padding: 20px;
}
`;

export const StyledImage = styled.img`
  width: 20%;
  height: 60%;
  border-radius: 12px;

  @media (max-width: 768px) {
    width: 100%;
}
`;

export const StyledTextWrapper = styled.div<{ isEven: boolean }>`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: left;
`;

export const StyledName = styled.h2<{ isEven: boolean }>`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 10px;
  text-align: ${({ isEven }) => (isEven ? 'right' : 'left')};
  color: #333;

  @media (max-width: 768px) {
    font-size: 1.6rem;  
    text-align: left;
  }
    `;

export const StyledDescription = styled.p`
  font-size: 1.2rem;
  color: #555;
  line-height: 1.5;

  @media (max-width: 768px) {
    font-size: 1.1rem;
}
`;

export const StyledTechStack = styled.div`
  font-size: 1.1rem;
  font-weight: bold;
  color: #444;
  margin-top: 10px;
  line-height: 1.4;
`;
