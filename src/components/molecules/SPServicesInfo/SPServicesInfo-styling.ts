import styled from 'styled-components';

export const StyledWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  max-width: 100%;
  margin: 40px 90px;
  padding: 30px 10px;
  background-color: #f9f9f9;
  border-radius: 8px;
  gap: 40px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;

  @media (max-width: 768px) {
    flex-direction: column;
    margin: 40px 20px;
    padding: 20px 0;
}
`;

export const StyledColumn = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    width: 100%;
}
`;

export const StyledImage = styled.img`
  width: 95%;
  height: 250px;
  margin-bottom: 20px;
  border-radius: 5px;
`;

export const StyledTitle = styled.h3`
  font-size: 2.2rem;
  font-weight: bold;
  margin-bottom: 10px;
  color: #333;
`;

export const StyledText = styled.p`
  font-size: 1.1rem;
  width: 80%;
  height: 140px;
  color: #777;
  margin-bottom: 10px;
`;

export const StyledDropdownButton = styled.button`
  font-size: 1rem;
  background-color: #35c6f2;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-bottom: 10px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #068dcc;
  }
`;

export const StyledDropdownContent = styled.div`
  width: 100%;
  padding: 12px;
  margin-left: 16px;

  &:nth-child(1){
    border: none;
  }

  ul {
    padding-left: 20px;
    list-style: none;
    color: #333;
  }

  li {
    display: flex;
    gap: 12px;
    margin: 25px 5px;
    font-size: 1.2rem;
    padding-bottom: 12px;
    border-bottom: 1px solid black;

    &:last-of-type {
      border: none;
    }
  }

  @media (max-width: 768px) {
    padding: 0;
    margin-left: 0;
    width: 80%;

    ul {
      padding-left: 0;
    }

    li {
      font-size: 1.1rem;
    }
}
`;

export const StyledContactButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 20px;
`;

export const StyledContactButton = styled.button`
  font-size: 1.1rem;
  background-color: #007bff;
  color: #fff;
  padding: 12px 5px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  margin-top: 20px;
  margin-left: 25%;
  width: 50%;
  text-align: center;
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: #0056b3;
  }
`;