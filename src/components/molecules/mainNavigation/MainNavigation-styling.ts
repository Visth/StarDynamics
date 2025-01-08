import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledWrapper = styled.header<{ isScrolled: boolean }>`
  padding: 0px 90px;
  display: flex;
  align-items: center;
  /* position: sticky; */
  justify-content: space-between;
  z-index: 999;
  top: 0;
  flex-wrap: nowrap;
  max-width: 100%;
  transition: background-color 0.3s ease;
  /* background: ${({ isScrolled }) =>
    isScrolled
      ? 'linear-gradient(93deg, rgba(164,204,236,0.9) 0%, rgba(171,234,246,0.9) 23%, rgba(189,237,244,0.9) 49%, rgba(198,232,232,0.9) 88%)'
      : 'transparent'}; */

  & > a > img {
    cursor: pointer;
    margin-right: 260px;
    transition: all 0.2s ease;

    &:hover {
      transform: scale(1.04);
    }
  }

  & > nav {
    white-space: nowrap;
    align-items: center;
    display: flex;
    width: 580px;
    justify-content: space-between;
    padding: 16px 0;
    
    & a {
      transition: opacity 0.15s ease-out;
    }

    @media (max-width: 1100px) {
      display: none;
      flex-direction: column;
    }

    &.active {
      width: 100vw;
      height: 100vh;
      display: flex;
      justify-content: start;
      background-color: white;
      padding-top: 10vh;

      & > button {
        position: fixed;
        bottom: 30px;
      }
    }
  }

  .mobile-nav-group {
    display: flex;
    justify-content: space-between;
    width: 100%;

    @media (min-width: 1100px) {
      display: none;
    }
  }

  @media (max-width: 1100px) {
    background-color: white;
    position: fixed;
    width: 100vw;
    padding: 6px 8px;
    flex-direction: column;

    & > div > a > img {
      margin: 6px 0 0;
      height: 50px;
    }

    & > a {
      display: none;
    }
  }

  .hamburger-menu {
    display: none;
    height: 70px;
    width: 70px;
    position: relative;
    margin-right: 40px;
    cursor: pointer;
    padding: 1rem;

    @media (max-width: 1100px) {
      display: unset;
    }
  }

  .ham-bar {
    width: 65%;
    height: 3px;
    background-color: white;
    border-radius: 25px;
    position: absolute;
    background-color: ${(props) => props.theme.color.blue};
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transition: transform 0.3s, opacity 0.4s, top 0.3s;
  }

  .bar-top {
    top: 30%;
  }

  .bar-bottom {
    top: 70%;
  }

  .hamburger-menu.active .bar-top {
    transform: translate(-50%, -50%) rotate(-225deg);
    top: 50%;
  }

  .hamburger-menu.active .bar-mid {
    opacity: 0;
  }

  .hamburger-menu.active .bar-bottom {
    transform: translate(-50%, -50%) rotate(-135deg);
    top: 50%;
  }
`;

export const StyledNavLink = styled(NavLink)`
  color: ${(props) => props.theme.color.almostBlack};
  font-size: ${(props) => props.theme.size.s};
  text-decoration: none;
  align-items: center;
  width: min-content;
  cursor: pointer;
  display: flex;
  margin-left: 18px;
  margin-right: 18px;
  padding-top: 20px;
  padding-bottom: 6px;
  height: 54px;

  &.active {
    font-weight: 500;
  }
  
  &:hover {
    margin-bottom: -2px;
    font-weight: 500;
    border-bottom: 2px solid #0049ef;

    .products-menu {
      display: flex;
    }
  }

  .products-menu {
    display: none;
    position: absolute;
    top: 72px;
    background: white;
    width: auto;
    flex-direction: column;
    border-radius: 4px;
    z-index: 2;
    box-shadow: 1px 2px 4px 0px #c7c7c7;
    
    .product-row {
      display: flex;
      flex-direction: row;
      
      &.reduce-margin {
        margin-top: -16px;
      }
    }

    .product {
      display: flex;
      flex-direction: row;
      margin: 16px;
      
      &.mt-zero {
        margin-top: 0 !important;
      }
      
      > div {
        display: flex;
        flex-direction: column;
        align-content: start;
        justify-content: start;
        
        &:first-child {
          padding: 0;
          margin: 0;
          height: 42px;
          width: 42px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        &:last-child {
          padding: 8px;
          padding-top: 4px;
          
          a {
            margin-top: -12px;
          }
        }
        
        p {
          max-width: 250px;
          word-wrap: break-word;
          overflow-wrap: break-word;
          white-space: normal;
          text-align: left;
        }
      }
      
      img {
        width: 32px;
        height: 32px;
      }
      
      h5 {
        font-size: 18px;
        color: #1a1a1a;
        font-weight: 500;
        padding-top: 6px;
      }
      
      p {
        font-size: 16px;
        color: #627079;
      }
      
      a {
        margin: 0;
        padding: 0;
        
        &:hover {
          border: none;
          text-decoration: underline;
        }
      }
    }

    &.products-menu-flat {
      //display: flex;
      .product-row {
        flex-direction: column;
        
        &:first-child {
          .product {
            &:first-child {
              margin-top: 16px;
            }
          }
        }
        
        .product {
          margin: 12px;
          align-items: center;
          
          a {
            margin-top: -7px;
          }
          
          div:first-child {
            width: 32px;
            height: 32px;
          }
          
          div:last-child {
            padding: 0 4px;
          }
          
          img {
            /* width: 24px;
            height: 24px; */
          }
        }
      }
    }
    
    &.services {
      .product-row {
        &:last-child {
          .product {
            margin-top: 0;
          }
        }
      }
    }
  }
`;

