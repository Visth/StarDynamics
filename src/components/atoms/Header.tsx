import React, { useContext } from 'react';
import styled, { css } from 'styled-components';
import { PageContext } from '../templates/MainTemplate';

enum tags {
  xs = 'h6',
  s = 'h5',
  m = 'h4',
  l = 'h3',
  xl = 'h2',
  xxl = 'h1',
}

const StyledHeader = styled.header<Props>`
  font-size: ${(props) => props.theme.size[(props.isMobile ? 'mobile_' : '') + props.size]};
  line-height: ${(props) => props.theme.line_height[(props.isMobile ? 'mobile_' : '') + props.size]};
  color: ${(props) => props.theme.color[props.white ? 'white' : 'black']};
  margin: -10px 0;
  font-weight: 500;
  z-index: 999;
  position: relative;

  & ::after,
  ::before {
    text-transform: uppercase;
    position: absolute;
    margin-left: 4px;
    font-size: 20px;
  }

  &::first-letter {
    text-transform: uppercase;
  }

  & .label-simple {
    position: relative;

    &::after {
      content: 'simple';
      color: ${(props) => props.theme.color.turquoise};
      top: calc(-50% + ${(props) => (props.size == 'l' ? 0 : 4)}px);
    }
  }

  & .label-prime {
    position: relative;

    &::after {
      content: 'prime';
      color: ${(props) => props.theme.color.pink};
      top: calc(-50% + ${(props) => (props.size == 'l' ? 0 : 4)}px);
    }
  }

  ${({ orderNumber }) =>
    orderNumber &&
    css`
      margin-left: 44px;
      position: relative;

      &::before {
        content: '${orderNumber}';
        border: 2px solid ${({ theme }) => theme.color.pink};
        color: ${({ theme }) => theme.color.pink};
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 20px;
        margin: 0;
        height: 35px;
        width: 35px;
        left: -44px;
        top: 4px;

        @media (max-width: 1100px) {
          transform: scale(0.8) !important;
          left: -38px;
          top: 2px;
        }
      }
    `};
`;

StyledHeader.defaultProps = {
  white: true,
  size: 'xl',
};

interface Props {
  text: string;
  size?: 's' | 'm' | 'l' | 'xl' | 'xxl';
  id?: string;
  orderNumber?: number;
  white?: boolean;
  className?: string;
  isMobile?: boolean;
}

const Header: React.FC<Props> = (props) => {
  const { isMobile } = useContext(PageContext);
  const { size = 'xl' } = props;
  return <StyledHeader as={tags[size]} {...props} isMobile={isMobile} dangerouslySetInnerHTML={{ __html: props.text }} />;
};

export default Header;
