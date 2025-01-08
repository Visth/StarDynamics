import styled from 'styled-components';

export const StyledWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 100%;
  margin: 40px 90px;
  margin-bottom: 120px;

  @media (max-width: 768px) {
    flex-direction: column;
    margin: 40px 0;
}
`;

export const StyledContent = styled.div`
  max-width: 45%;
  min-height: 50vh;
  padding: 20px;
  border-radius: 8px;
  background-color: #f9f9f9;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;

  @media (max-width: 768px) {
    max-width: 90%;
}
  `;

export const StyledHeading = styled.h3`
  font-size: 1.5rem;
  margin-top: 16px;
  margin-bottom: 40px;
  color: #333;
  `;

export const StyledText = styled.p`
  font-size: 1rem;
  color: #777;
  line-height: 1.5;
  max-width: 500px;
  `;

export const StyledImage = styled.img`
  width: 45%;
  height: auto;
  border-radius: 12px;

  @media (max-width: 768px) {
    margin-top: 20px;
    width: 90%;
}
`;
