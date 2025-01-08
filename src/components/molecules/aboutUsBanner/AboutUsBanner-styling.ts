import styled from 'styled-components';

export const StyledBannerWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 40px;
  max-width: 100%;
  margin: 60px 90px 120px 90px;
  height: 60vh;
  border-radius: 8px;
  background: linear-gradient(135deg, #e0f7fa, #bbdefb);

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
    margin: 0;
    margin-top: 100px;
    padding: 20px 30px;
    flex-direction: column;
}
`;

export const StyledContent = styled.div`
  width: 45%;

  @media (max-width: 768px) {
    width: 100%;
}
`;

export const StyledTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 20px;
  color: #333;

  @media (max-width: 768px) {
    margin-top: 20px;
    font-size: 2.2rem;
    align-self: center;
}
`;

export const StyledText = styled.p`
  font-size: 1.2rem;
  color: #555;
  line-height: 1.6;
  margin-top: 40px;

  @media (max-width: 768px) {
    margin-top: 10px;
    margin-bottom: 20px;
}
`;

export const StyledImage = styled.img`
  width: 45%;
  height: auto;
  border-radius: 10px;

  @media (max-width: 768px) {
    width: 100%;
}
`;
