import styled from "styled-components";

export const CenteredContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: center;
  width: 100%;
  margin-top: 40px;
`;

export const StyledCardMain = styled.div`
  max-width: 100%;
  margin: 40px 90px;
  background-color: #f9f9f9;
  padding: 20px;
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;

  @media (max-width: 768px) {
    width: 90%;
    margin: 0;
    padding: 20px 10px;
}
`;

export const StyledImage = styled.img`
  width: 100%;
  height: auto;
  background-color: #d3d3d3;
  border-radius: 5px;
  margin-bottom: 20px;
`;

export const StyledTitle = styled.h3`
  display: flex;
  justify-content: center;
  font-size: 2.4rem;
  font-weight: bold;
  margin-top: 26px;
  margin-bottom: 20px;
  color: #333;

  @media (max-width: 768px) {
    font-size: 2rem;
    margin-top: 5px;
    text-align: center;
}
`;

export const StyledText = styled.p`
  font-size: 1.1rem;
  color: #555;
  margin-bottom: 20px;
  line-height: 1.6;
`;

export const StyledButton = styled.button`
  font-size: 1rem;
  background-color: #35c6f2;
  color: #fff;
  margin-left: 16px;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-top: 20px;

  &:hover {
    background-color: #068dcc;
  }
`;

export const StyledList = styled.ul`
  margin-top: 20px;
  padding-left: 20px;

  @media (max-width: 768px) {
    padding-left: 5px;
}
`;

export const StyledListItem = styled.li`
  font-size: 1.2rem;
  color: #555;
  margin-bottom: 16px;
  list-style: none;

  @media (max-width: 768px) {
    font-size: 1.1rem;
}
`;

export const StyledContactButton = styled(StyledButton)`
  width: 20%;
  margin-top: 40px;
  text-align: center;
`;