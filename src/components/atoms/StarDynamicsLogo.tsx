import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import icon from '../../../public/assets/icon.png';

interface Props {
  white?: boolean;
}

const StyledDiv = styled.div`
  display: flex;

  i {
    margin-right: 12px;
  }

  @media (max-width: 1100px) {
    i {
      margin-top: 16px;
    }
  }
`;

const StyledName = styled(NavLink)<{}>`
  color: #40434a;
  font-size: ${(props) => props.theme.size.l};
  display: flex;
  align-items: center;
  text-decoration: none;
  font-weight: 600;
`;

const StarDynamicsLogo: React.FC<Props> = ({ white = false }) => {
  return (
    <StyledDiv>
      <i className="pi pi-star" style={{ fontSize: '2rem' }}></i>
      <StyledName to={'/'}>StarDynamics</StyledName>
    </StyledDiv>
  );
};

export default StarDynamicsLogo;
