import styled from 'styled-components';

export const StyledWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  /* margin-top: 20px; */
  max-width: 100%;
  margin: 40px 90px;
  min-height: 60vh;
  padding: 50px 0;
  box-sizing: border-box;

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    margin: 0;
  }
`;

export const StyledContent = styled.div`
  padding: 30px 30px 25px 30px;
  width: 45%;
  border-radius: 8px;
  background-color: #f9f9f9;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  margin-bottom: 60px;

  @media (max-width: 768px) {
    width: 90%;
    align-self: center;
  }
`;

export const StyledHeading = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 10px;
  color: #333;
  transition: color 0.3s ease;
  margin-top: 60px;

  &:first-of-type {
    margin-top: 0;
  }

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

export const StyledText = styled.div`
  font-size: 1rem;
  color: #777;
  line-height: 1.5;
  margin-top: 10px;
  max-width: 500px;
`;

export const StyledTextSubHeading = styled.div`
  font-size: 1rem;
  color: #777;
  line-height: 1.5;
  margin-top: 10px;
  max-width: 500px;
  cursor: pointer;

  &:hover {
    color: #005eff;
  }
`;

export const StyledList = styled.ul`
  margin-top: 20px;
  padding-left: 20px;
  list-style-type: disc;
`;

export const StyledListItem = styled.li`
  margin-bottom: 12px;
  font-size: 0.95rem;
  color: #555;
  line-height: 1.6;
`;

export const StyledImage = styled.img`
  width: 45%;
  height: auto;
  /* height: 480px; */
  border-radius: 12px;

  @media (max-width: 768px) {
    width: 90%;
    align-self: center;
  }
`;

export const StyledArrow = styled.span<{ expanded: boolean }>`
  cursor: pointer;
  margin-left: 10px;
  font-size: 1.5rem;
  color: #005eff;

  /* color: ${props => (props.expanded ? '#ff5c5c' : '#005eff')};  */
`;