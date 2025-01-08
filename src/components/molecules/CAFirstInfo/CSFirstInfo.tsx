import {
    StyledCardMain,
    StyledImage,
    StyledTitle,
    StyledText,
    StyledButton,
    StyledList,
    StyledListItem,
    CenteredContainer,
  } from './CAFirstInfo-styling';
  import { useState } from 'react';
  
  export const CAFirstInfo = () => {
    const [isExpanded, setIsExpanded] = useState(false);
  
    const toggleExpand = () => {
      setIsExpanded(!isExpanded);
    };
  
    return (
      <CenteredContainer>
        <StyledCardMain>
          <StyledTitle>Cryptocurrency Investment App</StyledTitle>
          <StyledText>
            Our Cryptocurrency Investment App empowers you to navigate the dynamic world of digital assets with ease. 
            Designed for both beginners and experienced investors, it provides a secure and intuitive platform for managing your portfolio. 
            Stay informed with real-time data, detailed market analyses, and expert forecasts to make confident investment decisions. 
            <br />
            <br />
            Trusted by thousands of users, our app combines advanced technology with user-friendly tools, making crypto investing simpler than ever. 
            Whether you’re tracking market trends or executing trades, you’ll benefit from enhanced security and a seamless experience, all in one place.
          </StyledText>
          <StyledImage src={'../../assets/productsCA01.jpg'} />
          <StyledButton onClick={toggleExpand}>{isExpanded ? 'Hide' : 'Show more'}</StyledButton>
          {isExpanded && (
            <StyledList>
              <StyledListItem>
                <i className="pi pi-angle-right" style={{ fontSize: '1.2rem', color: '#35c6f2', fontWeight: 'bold' }}></i>{' '}
                <b>Secure transactions</b> with industry-leading encryption and safety protocols.
              </StyledListItem>
              <StyledListItem>
                <i className="pi pi-angle-right" style={{ fontSize: '1.2rem', color: '#35c6f2', fontWeight: 'bold' }}></i>{' '}
                <b>Real-time market data</b> to keep you updated on cryptocurrency trends.
              </StyledListItem>
              <StyledListItem>
                <i className="pi pi-angle-right" style={{ fontSize: '1.2rem', color: '#35c6f2', fontWeight: 'bold' }}></i>{' '}
                <b>Advanced analytics</b> and forecasts for informed decision-making.
              </StyledListItem>
              <StyledListItem>
                <i className="pi pi-angle-right" style={{ fontSize: '1.2rem', color: '#35c6f2', fontWeight: 'bold' }}></i>{' '}
                <b>Portfolio tracking</b> to easily monitor your investments.
              </StyledListItem>
              <StyledListItem>
                <i className="pi pi-angle-right" style={{ fontSize: '1.2rem', color: '#35c6f2', fontWeight: 'bold' }}></i>{' '}
                <b>User-friendly interface</b> suitable for beginners and experienced traders alike.
              </StyledListItem>
              <StyledListItem>
                <i className="pi pi-angle-right" style={{ fontSize: '1.2rem', color: '#35c6f2', fontWeight: 'bold' }}></i>{' '}
                <b>Multi-device access</b> for seamless trading on desktop and mobile.
              </StyledListItem>
              <StyledListItem>
                <i className="pi pi-angle-right" style={{ fontSize: '1.2rem', color: '#35c6f2', fontWeight: 'bold' }}></i>{' '}
                <b>Expert support</b> available to guide you through the world of crypto.
              </StyledListItem>
              <StyledListItem>
                <i className="pi pi-flag-fill" style={{ fontSize: '1.2rem', color: '#35c6f2' }}></i>{' '}
                <b>Trusted by thousands of investors</b>, ensuring reliability and quality.
              </StyledListItem>
            </StyledList>
          )}
        </StyledCardMain>
      </CenteredContainer>
    );
  };
  