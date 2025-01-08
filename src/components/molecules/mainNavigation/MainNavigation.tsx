import React, { useContext, useEffect, useState } from 'react';
import { StyledNavLink, StyledWrapper } from './MainNavigation-styling';
import StarDynamicsLogo from '../../atoms/StarDynamicsLogo';
import { PageContext } from '../../templates/MainTemplate';
import { useLocation, useNavigate } from 'react-router-dom';
import { RouteType } from '../../../model/Model';

const MainNavigation: React.FC = () => {
  const [mobileMenuActive, setMobileMenuActive] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState(true);
  const { isMobile } = useContext(PageContext);
  const { hash } = useLocation();

  const toggleMenu = () => (!isMobile ? setMobileMenuActive(false) : setMobileMenuActive(!mobileMenuActive));

  useEffect(() => {
    const element = document.getElementById(hash.replace('#', ''));
    element &&
      window.scroll({
        top: element.offsetTop + window.innerHeight * 1.75,
        behavior: 'smooth',
      });
  }, [hash]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      setIsScrolled(scrollTop > 0);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <StyledWrapper id="main-navigation" isScrolled={isScrolled}>
      <div className="mobile-nav-group">
        <div className={`hamburger-menu ${mobileMenuActive && isMobile ? 'active' : ''}`} onClick={toggleMenu}>
          <div className="ham-bar bar-top"></div>
          <div className="ham-bar bar-mid"></div>
          <div className="ham-bar bar-bottom"></div>
        </div>
        {isMobile && <StarDynamicsLogo />}
        <div />
      </div>

      {!isMobile && <StarDynamicsLogo />}

      <nav className={mobileMenuActive && isMobile ? 'active' : ''}>
        <StyledNavLink to={`/${RouteType.HOMEPAGE}`} onClick={toggleMenu}>
          <span>Home</span>
        </StyledNavLink>
        <StyledNavLink to={`/#`} onClick={toggleMenu}>
          <span>Products</span>
          <div className="products-menu">
            <div className="product-row">
              <div className="product">
                <div>
                  <i className="pi pi-play-circle" style={{ fontSize: '1.6rem', color: 'rgb(229,9,20)' }}></i>
                </div>
                <div>
                  <StyledNavLink to={`/${RouteType.STREAMING_PLATFORM_PRODUCT}`}>
                    <h5>Streaming Platform</h5>
                  </StyledNavLink>
                  <p>Watch newest TV shows and series for only 19.99$ right now!</p>
                </div>
              </div>
            </div>
            <div className="product-row reduce-margin">
              <div className="product">
                <div>
                  <i className="pi pi-bitcoin" style={{ fontSize: '1.6rem', color: 'rgb(247,147,26)' }}></i>
                </div>
                <div>
                  <StyledNavLink to={`/${RouteType.CRYPTOCURRENCY_APP_PRODUCT}`}>
                    <h5>Cryptocurrency Investment App</h5>
                  </StyledNavLink>
                  <p>Use our tools to help You with effective investing in ALL cryptocurrencies.</p>
                </div>
              </div>
            </div>
          </div>
        </StyledNavLink>
        <StyledNavLink to={`/#`} onClick={toggleMenu}>
          <span>Docs</span>
          <div className="products-menu products-menu-flat">
            <div className="product-row">
              <div className="product">
                <div>
                  <i className="pi pi-play-circle" style={{ fontSize: '1.6rem', color: 'rgb(229,9,20)' }}></i>
                </div>
                <div>
                  <StyledNavLink to={`/${RouteType.STREAMING_PLATFORM_DOCS}`}>
                    <h5>Streaming Platform</h5>
                  </StyledNavLink>
                </div>
              </div>
              <div className="product mt-zero">
                <div>
                  <i className="pi pi-bitcoin" style={{ fontSize: '1.6rem', color: 'rgb(247,147,26)' }}></i>
                </div>
                <div>
                  <StyledNavLink to={`/${RouteType.CRYPTOCURRENCY_APP_DOCS}`}>
                    <h5>Cryptocurrency Investment App</h5>
                  </StyledNavLink>
                </div>
              </div>
            </div>
          </div>
        </StyledNavLink>
        <StyledNavLink to={`/${RouteType.SERVICES}`} onClick={toggleMenu}>
          <span>Services</span>
        </StyledNavLink>
        <StyledNavLink to={`/${RouteType.ABOUT_US}`} onClick={toggleMenu}>
          <span>About us</span>
        </StyledNavLink>
      </nav>
    </StyledWrapper>
  );
};

export default MainNavigation;
