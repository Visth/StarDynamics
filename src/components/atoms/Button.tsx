import React, { useContext } from 'react';
import styled, { css } from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { PageContext } from '../templates/MainTemplate';

const StyledButton = styled.button<Props>`
  cursor: ${(props) => (props.link || props.asButton ? 'pointer' : 'default')};
  padding: ${(props) => (props.small ? '6px 10px' : 'auto')};
  text-decoration: none;
  border: 1px solid ${(props) => props.theme.color[props.bordercolor]};
  background-color: ${(props) => (props.backgroundColor ? props.theme.color[props.backgroundColor] : 'transparent')};
  height: ${(props) => props.height || (props.isMobile ? '44' : '60')}px;
  width: ${(props) => props.width || (props.isMobile ? '160' : '240')}px;
  transition: all 0.18s ease-in-out;
  border-radius: ${(props) => (props.small ? '3px' : '5px')};
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;

  & a,
  & p {
    color: ${(props) =>
      props.backgroundColor ? 'white' : props.theme.color[props.bordercolor == 'gray' ? 'almostBlack' : props.bordercolor]};
    font-size: ${(props) => props.theme.size[props.small ? 'xs' : 's']};
    font-weight: 600;
    text-decoration: none;
    white-space: nowrap;
  }

  &:hover {
    background-color: ${(props) => props.theme.color[props.bordercolor]};
    box-shadow: 0px 2px 5px 0px ${(props) => props.theme.color[props.bordercolor]};

    & a,
    & p {
      color: white;
    }

    ${({ backgroundColor }) =>
      backgroundColor &&
      css`
        background-color: transparent;

        & a,
        & p {
          color: ${(props) => props.theme.color[backgroundColor]};
        }
      `};
  }

  ${({ gridArea }) =>
    gridArea &&
    css`
      grid-area: ${gridArea};
    `};

  ${({ width }) =>
    width &&
    css`
      width: ${width};
    `};

  ${({ height }) =>
    height &&
    css`
      height: ${height};
    `};
`;

interface Props {
  bordercolor: 'pink' | 'blue' | 'black' | 'gray';
  type?: 'button' | 'submit' | 'reset';
  backgroundColor?: 'pink' | 'blue';
  asButton?: boolean;
  asLink?: boolean;
  onClick?: Function;
  gridArea?: string;
  small?: boolean;
  height?: string;
  text?: string;
  width?: string;
  link?: string;
  className?: string;
  isMobile?: boolean;
}

const Button: React.FC<Props> = (props) => {
  const { link = '', asLink = false, asButton = false, onClick = false, text } = props;
  const { isMobile } = useContext(PageContext);
  const navigate = useNavigate();

  const handleNavClick = () => {
    if (window.location.pathname.includes('privacy')) window.close();

    if (asButton) {
      const el = document.getElementById(link);
      el &&
        window.scrollTo(
          0,
          el.offsetTop -
            (isMobile ? 90 : link === 'axelote-prime' ? -10 : link === 'manage-authentication' || link === 'videos-section' ? 0 : 70)
        );
      return;
    }

    if (link.includes('axelote.com')) {
      navigate('/' + link);
    }
  };

  return (
    <StyledButton
      href={asLink ? link : null}
      target={asLink && link.includes('axelote.com') ? '_blank' : null}
      as={asLink ? 'a' : 'button'}
      isMobile={isMobile}
      {...props}
      onClick={(evt) => (onClick ? onClick(evt) : handleNavClick())}>
      {<p>{text}</p>}
    </StyledButton>
  );
};

export default Button;
