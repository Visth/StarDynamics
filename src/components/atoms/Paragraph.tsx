import React, {useContext, useEffect} from 'react';
import styled from 'styled-components';
import {nextId} from '../../utils/Utils';
import {useNavigate} from 'react-router-dom';
import {PageContext} from '../templates/MainTemplate';

interface Props {
    text: string;
    className?: string;
    size: 'xs' | 's' | 'm' | 'l';
    linkHref?: string;
    isMobile?: boolean;
    marginTop?: string;
    marginBottom?: string;
}

const StyledParagraph = styled.p<Props>`
  color: ${(props) => props.theme.color.black};
  font-size: ${(props) => props.theme.size[(props.isMobile ? 'mobile_' : '') + props.size]};
  margin-bottom: 12px;
  line-height: 150%;
  z-index: 999;
  position: relative;
  margin-top: ${(props) => props.marginTop};
  margin-bottom: ${(props) => props.marginBottom};

  & > a {
    color: ${(props) => props.theme.color.blue};
    cursor: pointer;
    text-decoration: none;
  }
`;

const P: React.FC<Props> = (props) => {
    const {isMobile} = useContext(PageContext);
    const navigate = useNavigate();
    const id = nextId();

    const handleLinkClick = () => navigate('/' + props.linkHref);

    useEffect(() => {
        const link = document.querySelector(`#${id}>a`);
        props.linkHref && link.addEventListener('click', handleLinkClick);
        return () => props.linkHref && link.removeEventListener('click', handleLinkClick);
    });

    return <StyledParagraph id={id} isMobile={isMobile} {...props} dangerouslySetInnerHTML={{__html: props.text}}/>;
};

export default P;
