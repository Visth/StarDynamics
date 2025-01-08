import styled from 'styled-components';

export const StyledCardMain = styled.div`
  max-width: 100%;
  margin: 40px 90px;
  margin-top: 60px;
  background-color: #f9f9f9;
  padding: 20px;
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;

  @media (max-width: 768px) {
    margin: 100px 20px;
    padding: 20px 10px;
}
`;

export const StyledTitle = styled.h3`
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
  color: #333;
  margin-bottom: 20px;
`;

export const StyledText = styled.p`
  font-size: 1.1rem;
  color: #555;
  margin-bottom: 20px;
  line-height: 1.6;
  text-align: center;
`;

export const StyledChartContainer = styled.div`
  width: 100%;
  height: 400px;
  position: relative;
`;

export const StyledLegend = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  font-size: 1rem;
  color: #555;

  span {
    display: inline-block;
    margin-right: 10px;
    font-weight: bold;
  }
`;

export const StyledPopup = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  background: linear-gradient(145deg, #ffffff, #f0f0f0);
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.2);
  padding: 20px;
  border-radius: 15px;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  animation: fadeIn 0.3s ease-in-out;

  h4 {
    font-size: 1.5rem;
    color: #333;
    margin-bottom: 10px;
  }

  p {
    font-size: 1rem;
    color: #555;
    margin: 5px 0;
  }

  button {
    margin-top: 15px;
    padding: 10px 20px;
    background-color: #627eea;
    color: #fff;
    border: none;
    border-radius: 8px;
    font-size: 1rem;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #4d63b1;
    }
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translate(-50%, -55%);
    }
    to {
      opacity: 1;
      transform: translate(-50%, -50%);
    }
  }
`;

export const StyledOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
  animation: fadeInOverlay 0.3s ease-in-out;

  @keyframes fadeInOverlay {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;