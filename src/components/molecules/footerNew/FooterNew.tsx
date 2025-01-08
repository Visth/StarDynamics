import React from 'react';
import { StyledFooterWrapper, StyledCompanyName, StyledLinksWrapper, StyledLink, StyledText } from './FooterNew-styling';
import { ContactUsForm } from '../contactUsForm/ContactUsForm';

const FooterNew: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <StyledFooterWrapper>
      <div>
        <StyledCompanyName>© {currentYear} StarDynamics</StyledCompanyName>
        <StyledText>
          <b>Ready to elevate your digital presence?</b> Our team specializes in creating stunning front-end solutions and intuitive mobile applications tailored to your needs. Whether you’re looking to build from scratch or enhance your existing product, we’re here to help. Let’s turn your vision into a reality – <b>contact us today!</b>
        </StyledText>
      </div>
      <ContactUsForm />
      <StyledLinksWrapper>
        <StyledLink href="#">Home</StyledLink>
        <StyledLink href="#">Products</StyledLink>
        <StyledLink href="#">Docs</StyledLink>
        <StyledLink href="#">Services</StyledLink>
        <StyledLink href="#">About us</StyledLink>
      </StyledLinksWrapper>
    </StyledFooterWrapper>
  );
};

export default FooterNew;
