import styled from 'styled-components';

export const StyledFooterWrapper = styled.footer`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #1a1a1a;
  color: white;
  width: 100%;
  padding: 40px 70px;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 30px 20px;
}
`;

export const StyledCompanyName = styled.h2`
  font-size: 1.6rem;
  margin-bottom: 20px;
  color: #fff;
`;

export const StyledText = styled.p`
  font-size: 1rem;
  color: #777;
  line-height: 1.5;
  margin-bottom: 80px;
  max-width: 500px;

  @media (max-width: 768px) {
    margin-bottom: 10px;
}
`;

export const StyledLinksWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 120px;
  gap: 32px;

  @media (max-width: 768px) {
    flex-direction: row;
    gap: 30px;
    flex-wrap: wrap;
    margin-right: 0;
    margin-left: 20px;
}
`;

export const StyledLink = styled.a`
  color: #fff;
  text-decoration: none;
  font-size: 1rem;
  transition: color 0.3s ease;
  width: 80px;

  &:hover {
    color: #00bfff;
  }
`;
