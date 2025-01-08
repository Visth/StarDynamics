import styled from 'styled-components';

export const formInput = `
  border: none;
  border-radius: 4px;
  padding: 16px 10px;
  outline: none;
`;

export const StyledContainer = styled.div`
  background-color: #1a1a1a;
  border-radius: 5px;
  max-height: 400px;
  max-width: 700px;
  padding: 30px;
  z-index: 99;

  & .send-success {
    padding: 140px 30px;
    font-size: 14px;
  }

  & form {
    width: 100%;
    color: #fff;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
    gap: 4px;
    margin: 20px 0 10px;

    & input {
      ${formInput}
    }

    & textarea {
      ${formInput};
      resize: none;
      height: 80px;
    }

    & > *:first-child,
    & > *:last-child {
      grid-column: 1 / span 3;
    }

    & > *:nth-child(3),
    & > *:nth-child(5) {
      border-radius: 0 4px 4px 0;
    }

    & > *:nth-child(6) {
      grid-column: 1 / span 3;
    }

    & > *:nth-child(2),
    & > *:nth-child(4) {
      border-radius: 4px 0 0 4px;
      grid-column: 1 / span 2;
    }

    @media (max-width: 1100px) {
      & > *:nth-child(2) {
        grid-column: 1 / span 3;
      }
      & > *:nth-child(4) {
        grid-column: 1 / span 3;
        grid-row: 3;
      }
      & > *:nth-child(3),
      & > *:nth-child(5) {
        grid-row: 4;
      }
      & > *:nth-child(3) {
        grid-column: 1 / span 2;
      }
    }
  }

  & button {
    width: 100%;

    &:hover {
      background-color: white;
    }
  }

  & .row {
    float: right;
  }

  @media (min-width: 1100px) {
    margin-right: 50px;
  }

  @media (max-width: 1100px) {
    max-height: fit-content;
  }
`;
