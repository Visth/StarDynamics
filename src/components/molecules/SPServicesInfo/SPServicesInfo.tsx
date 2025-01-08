import React, { useState } from 'react';
import {
  StyledWrapper,
  StyledColumn,
  StyledImage,
  StyledTitle,
  StyledText,
  StyledDropdownButton,
  StyledDropdownContent,
} from './SPServicesInfo-styling';
import SPsingle from '../../../../public/assets/SPsingle.jpg';
import SPstandard from '../../../../public/assets/SPstandard.jpg';
import SPpremium from '../../../../public/assets/SPpremium.jpg';

interface DPPServicesInfoProps {
  footerRef: React.RefObject<HTMLDivElement>;
}

export const SPServicesInfo: React.FC<DPPServicesInfoProps> = ({ footerRef }) => {
  const [isOpen, setIsOpen] = useState([false, false, false]);

  const toggleDropdown = (index: number) => {
    const updatedState = [...isOpen];
    updatedState[index] = !updatedState[index];
    setIsOpen(updatedState);
  };

  const scrollToFooter = () => {
    footerRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <StyledWrapper>
      <StyledColumn>
        <StyledImage src={SPsingle} />
        <StyledTitle>Single Plan</StyledTitle>
        <StyledText>
          Single Plan is a great option for individuals. Enjoy Full HD streaming, ad-free, on one device. It’s the most affordable
          subscription in our package.
        </StyledText>
        <StyledDropdownButton onClick={() => toggleDropdown(0)}>{isOpen[0] ? 'Hide' : 'Show More'}</StyledDropdownButton>
        {isOpen[0] && (
          <StyledDropdownContent>
            <ul>
              <li>
                <p>
                  Cost per month: <b>19.99$</b>
                </p>
              </li>
              <li>
                <p>
                  Simultaneous devices: <b>1</b>
                </p>
              </li>
              <li>
                <i className="pi pi-check-circle" style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#22a143' }}></i>
                <p>Ad-free streaming</p>
              </li>
              <li>
                <i className="pi pi-check-circle" style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#22a143' }}></i>
                <p>Full HD quality</p>
              </li>
              <li>
                <i className="pi pi-times-circle" style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#ba0b2b' }}></i>
                <p>4K Ultra HD quality</p>
              </li>
              <li>
                <i className="pi pi-times-circle" style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#ba0b2b' }}></i>
                <p>Download videos</p>
              </li>
              <li>
                <i className="pi pi-times-circle" style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#ba0b2b' }}></i>
                <p>Priority customer support</p>
              </li>
            </ul>
            {/* <StyledContactButton onClick={scrollToFooter}>Contact Us</StyledContactButton> */}
          </StyledDropdownContent>
        )}
      </StyledColumn>

      <StyledColumn>
        <StyledImage src={SPstandard} />
        <StyledTitle>Standard Plan</StyledTitle>
        <StyledText>
          Standard Plan lets you watch on two devices simultaneously, ad-free, in Full HD quality, with the ability to download movies.
        </StyledText>
        <StyledDropdownButton onClick={() => toggleDropdown(1)}>{isOpen[1] ? 'Hide' : 'Show More'}</StyledDropdownButton>
        {isOpen[1] && (
          <StyledDropdownContent>
            <ul>
              <li>
                <p>
                  Cost per month: <b>24.99$</b>
                </p>
              </li>
              <li>
                <p>
                  Simultaneous devices: <b>2</b>
                </p>
              </li>
              <li>
                <i className="pi pi-check-circle" style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#22a143' }}></i>
                <p>Ad-free streaming</p>
              </li>
              <li>
                <i className="pi pi-check-circle" style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#22a143' }}></i>
                <p>Full HD quality (1080p)</p>
              </li>
              <li>
                <i className="pi pi-times-circle" style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#ba0b2b' }}></i>
                <p>4K Ultra HD quality</p>
              </li>
              <li>
                <i className="pi pi-check-circle" style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#22a143' }}></i>
                <p>Download videos</p>
              </li>
              <li>
                <i className="pi pi-times-circle" style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#ba0b2b' }}></i>
                <p>Priority customer support</p>
              </li>
            </ul>
            {/* <StyledContactButton onClick={scrollToFooter}>Contact Us</StyledContactButton> */}
          </StyledDropdownContent>
        )}
      </StyledColumn>

      <StyledColumn>
        <StyledImage src={SPpremium} />
        <StyledTitle>Premium Plan</StyledTitle>
        <StyledText>
          Premium Plan is the perfect choice for families. Stream on up to four devices at the same time, ad-free, in stunning 4K quality,
          and download movies for offline viewing.
        </StyledText>
        <StyledDropdownButton onClick={() => toggleDropdown(2)}>{isOpen[2] ? 'Hide' : 'Show More'}</StyledDropdownButton>
        {isOpen[2] && (
          <StyledDropdownContent>
            <ul>
              <li>
                <p>
                  Cost per month: <b>34.99$</b>
                </p>
              </li>
              <li>
                <p>
                  Simultaneous devices: <b>4</b>
                </p>
              </li>
              <li>
                <i className="pi pi-check-circle" style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#22a143' }}></i>
                <p>Ad-free streaming</p>
              </li>
              <li>
                <i className="pi pi-check-circle" style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#22a143' }}></i>
                <p>Full HD quality (1080p)</p>
              </li>
              <li>
                <i className="pi pi-check-circle" style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#22a143' }}></i>
                <p>4K Ultra HD quality</p>
              </li>
              <li>
                <i className="pi pi-check-circle" style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#22a143' }}></i>
                <p>Download videos</p>
              </li>
              <li>
                <i className="pi pi-check-circle" style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#22a143' }}></i>
                <p>Priority customer support</p>
              </li>
            </ul>
            {/* <StyledContactButton onClick={scrollToFooter}>Contact Us</StyledContactButton> */}
          </StyledDropdownContent>
        )}
      </StyledColumn>
    </StyledWrapper>
  );
};
