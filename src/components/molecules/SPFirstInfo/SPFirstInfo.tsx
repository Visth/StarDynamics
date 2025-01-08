import {
  StyledCardMain,
  StyledImage,
  StyledTitle,
  StyledText,
  StyledButton,
  StyledList,
  StyledListItem,
  CenteredContainer,
} from './SPFirstInfo-styling';
import { useState } from 'react';

export const SPFirstInfo = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <CenteredContainer>
      <StyledCardMain>
        <StyledTitle>Streaming Platform</StyledTitle>
        <StyledText>
          Our streaming platform offers a vast selection of entertainment, with over 155 TV series and 290 movies ready to stream anytime.
          From gripping dramas to family-friendly favorites, there’s something for everyone in our growing library. New customers can enjoy
          a 7-day free trial to explore the platform and experience its premium features at no cost.
          <br />
          <br />
          Join a community of satisfied viewers – over 1.2 million subscribers have already trusted us for their entertainment needs. With
          options for Full HD and stunning 4K Ultra HD streaming, your viewing experience is always top-notch. Enjoy ad-free content, the
          ability to download your favorites, and watch seamlessly on multiple devices.
        </StyledText>
        <StyledImage src={'../../assets/productsSP02.jpg'} />
        <StyledButton onClick={toggleExpand}>{isExpanded ? 'Hide' : 'Show more'}</StyledButton>
        {isExpanded && (
          <StyledList>
            <StyledListItem>
              <i className="pi pi-angle-right" style={{ fontSize: '1.2rem', color: '#35c6f2', fontWeight: 'bold' }}></i>{' '}
              <b>Extensive library</b> with over 155 TV series and 290 movies to choose from.
            </StyledListItem>
            <StyledListItem>
              <i className="pi pi-angle-right" style={{ fontSize: '1.2rem', color: '#35c6f2', fontWeight: 'bold' }}></i>{' '}
              <b>7-day free trial</b> for new customers to explore the platform risk-free.
            </StyledListItem>
            <StyledListItem>
              <i className="pi pi-angle-right" style={{ fontSize: '1.2rem', color: '#35c6f2', fontWeight: 'bold' }}></i>{' '}
              <b>Ad-free streaming</b> for uninterrupted viewing.
            </StyledListItem>
            <StyledListItem>
              <i className="pi pi-angle-right" style={{ fontSize: '1.2rem', color: '#35c6f2', fontWeight: 'bold' }}></i> <b>High-quality</b>{' '}
              playback in <b>Full HD</b> and stunning <b>4K Ultra HD</b> options.
            </StyledListItem>
            <StyledListItem>
              <i className="pi pi-angle-right" style={{ fontSize: '1.2rem', color: '#35c6f2', fontWeight: 'bold' }}></i>{' '}
              <b>Simultaneous streaming</b> on multiple devices, perfect for families.
            </StyledListItem>
            <StyledListItem>
              <i className="pi pi-angle-right" style={{ fontSize: '1.2rem', color: '#35c6f2', fontWeight: 'bold' }}></i>{' '}
              <b>Download feature</b> to watch your favorite content offline.
            </StyledListItem>
            <StyledListItem>
              <i className="pi pi-angle-right" style={{ fontSize: '1.2rem', color: '#35c6f2', fontWeight: 'bold' }}></i>{' '}
              <b>Personalized recommendations</b> powered by advanced algorithms to match your tastes.
            </StyledListItem>
            <StyledListItem>
              <i className="pi pi-angle-right" style={{ fontSize: '1.2rem', color: '#35c6f2', fontWeight: 'bold' }}></i>{' '}
              <b>User-friendly interface</b> for seamless browsing and effortless streaming.
            </StyledListItem>
            <StyledListItem>
              <i className="pi pi-flag-fill" style={{ fontSize: '1.2rem', color: '#35c6f2' }}></i>{' '}
              <b>Trusted by over 1.2 million subscribers</b>, ensuring a reliable and popular platform.
            </StyledListItem>
          </StyledList>
        )}
      </StyledCardMain>
    </CenteredContainer>
  );
};
