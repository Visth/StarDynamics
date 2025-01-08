import { ThemeType } from '../../model/Model';
import React, { useContext } from 'react';
import styled from 'styled-components';
import { PageContext } from '../templates/MainTemplate';

const CodeThemeSwitch = styled.div<{ small: boolean }>`
  display: inline;

  & > button {
    color: ${(props) => props.theme.color.pink};
    transform: scale(${(props) => (props.small ? 0.8 : 1)});
    background: ${(props) => props.theme.color.white};
    justify-content: center;
    transition: all 0.18s ease-in-out;
    display: inline-flex;
    align-items: center;
    border-radius: 3px;
    margin-left: 6px;
    height: 30px;
    border: none;
    width: 30px;

    &:nth-of-type(1):hover {
      border: 1px solid #2d2d56 !important;
    }

    &:nth-of-type(2):hover {
      border: 1px solid ${(props) => props.theme.color.pink} !important;
    }

    &:nth-of-type(3):hover {
      border: 1px solid ${(props) => props.theme.color.turquoise} !important;
    }

    & > svg {
      cursor: pointer;
      height: 9px;
      transform: scale(3.4);

      &:first-of-type {
        transform: scale(3.4) rotate(180deg) translateY(0.1px);
      }
    }

    &:first-of-type {
      background: ${(props) => props.theme.color.gray};
      border: 1px solid #2a2a544b;
      color: ${(props) => props.theme.color.black};
    }

    &:last-of-type {
      background: ${(props) => props.theme.color.darkBlue};
      color: ${(props) => props.theme.color.pink};
    }
  }
`;
const CodeStyleSwitcher: React.FC<{}> = ({}) => {
  const { changeCodeTheme } = useContext(PageContext);

  const greaterThanSign = (color: string) => (
    <svg version="1.1" viewBox="0 0 752 752">
      <path
        fill={color}
        d="m317.07 277.39c37.191 33.926 74.379 67.852 111.57 101.78 16.879 15.395 42.074-9.6523 25.113-25.117-37.195-33.93-74.383-67.852-111.57-101.78-16.879-15.398-42.07 9.6523-25.113 25.117z"
      />
      <path
        fill={color}
        d="m428.28 354.05c-36.953 36.949-73.902 73.902-110.85 110.86-16.207 16.211 8.9062 41.324 25.117 25.113 36.949-36.949 73.898-73.898 110.85-110.85 16.211-16.211-8.9023-41.328-25.113-25.117z"
      />
    </svg>
  );

  return (
    <CodeThemeSwitch small={false} className="code-theme-switch">
      <button onClick={() => changeCodeTheme(ThemeType.GRAY)}>
        {greaterThanSign('#2a2a54')}
        {greaterThanSign('#2a2a54')}
      </button>
      <button onClick={() => changeCodeTheme(ThemeType.COLOR)}>
        {greaterThanSign('#ff0e9c')}
        {greaterThanSign('#ff0e9c')}
      </button>
      <button onClick={() => changeCodeTheme(ThemeType.HIGH_CONTRAST)}>
        {greaterThanSign('#00dfa3')}
        {greaterThanSign('#00dfa3')}
      </button>
    </CodeThemeSwitch>
  );
};

export default CodeStyleSwitcher;
