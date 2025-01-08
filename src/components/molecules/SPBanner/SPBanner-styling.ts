import styled from 'styled-components';

export const StyledWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70vh;
  margin: 40px 90px;
  margin-top: 60px;
  padding: 50px;
  /* background: linear-gradient(90deg, #f7c6d9, #c6e7f7); */
  background: rgb(212,90,123);
background: linear-gradient(149deg, rgba(212,90,123,0.5438375179173232) 55%, rgba(136,232,236,1) 92%); 
  border-radius: 10px;

  @media (max-width: 768px) {
    flex-direction: column;
    width: 90%;
    height: auto;
    padding: 0;
    margin: 0 5%;
    margin-top: 100px;
}
`;

export const StyledLeftSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 50%;

  @media (max-width: 768px) {
    max-width: 100%;
    padding: 20px 30px;
}
`;

export const StyledTitle = styled.h2`
  font-size: 2.8rem;
  font-weight: bold;
  margin-bottom: 40px;
  color: #333;

  @media (max-width: 768px) {
    font-size: 2rem;
}
`;

export const StyledText = styled.p`
  font-size: 1.1rem;
  line-height: 1.4;
  color: #555;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 1rem;
}
`;

export const StyledButton = styled.button`
  font-size: 1rem;
  background-color: #ff6584;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #e55473;
  }
`;

export const StyledImage = styled.img`
  width: 420px;
  height: auto;
  margin-right: 40px;
`;
