import styled from 'styled-components';

export const StyledWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  max-width: 100%;
  margin: 40px 90px;
  margin-bottom: 80px;

  @media (max-width: 768px) {
    flex-direction: column;
    margin: 40px 0px;
  }
`;

export const StyledSection = styled.div`
  width: 45%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: #f9f9f9;
  padding: 20px 25px 0px 25px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  border-radius: 8px;

  @media (max-width: 768px) {
    margin-bottom: 40px;
    width: 90%;
    align-self: center;
}
`;

export const StyledHeading = styled.h3`
  font-size: 1.6rem;
  margin-bottom: 10px;
  color: #333;

  @media (max-width: 768px) {
    font-size: 1.2rem;
}
`;

export const StyledText = styled.p`
  font-size: 1.1rem;
  color: #777;
  line-height: 1.5;
  margin-bottom: 24px;
  height: 120px;

  @media (max-width: 768px) {
font-size: 1rem;
}
`;

export const StyledImage = styled.img`
  width: 100%;
  height: auto;
  margin-bottom: 15px;
  border-radius: 5px;
`;