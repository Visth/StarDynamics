import styled from 'styled-components';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface StyledListProps {
  isMain?: boolean;
}

interface ServicesNewProps {
  footerRef: React.RefObject<HTMLDivElement>;
}

export const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledCardMain = styled.div`
  max-width: 100%;
  margin: 60px 90px 40px 90px;
  background-color: #f9f9f9;
  border-radius: 8px;
  padding: 20px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;

  @media (max-width: 768px) {
    width: 90%;
    align-self: center;
    margin: 0;
    margin-top: 100px;
}
`;

export const StyledCardsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 100%;
  margin: 40px 90px;
  margin-bottom: 120px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 50px;
}
`;

export const StyledCardWrapper = styled.div`
  width: 45%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    width: 100%;
}
`;

export const StyledCard = styled.div`
  width: 100%;
  background-color: #f9f9f9;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);

  @media (max-width: 768px) {
    width: 90vw;
}
`;

export const StyledListWithProps = styled.ul<StyledListProps>`
  width: 100%;
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 15px;
  margin-top: 15px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px;
  list-style-type: none;

  ${({ isMain }) =>
    isMain &&
    `
    margin-top: 20px;
    padding-left: 20px;
  `}
`;

export const StyledListItem = styled.li`
  display: flex;
  font-size: 1.1rem;
  color: #555;
  margin-bottom: 12px;
  line-height: 1.4;
  list-style: none;

  i {
    margin-top: 2px;
  }
`;

export const StyledContactButton = styled.button`
  width: 20%;
  margin-top: 40px;
  text-align: center;
`;

export const StyledImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 5px;
  margin-bottom: 20px;
`;

export const StyledTitle = styled.h3`
  display: flex;
  gap: 10px;
  font-size: 1.6rem;
  font-weight: bold;
  margin-bottom: 20px;
  color: #333;

  i {
    margin-top: 2px;
  }

  .product-icon {
    width: 30px;
    height: auto;
    margin-right: 10px;
  }
`;

export const StyledText = styled.p`
  font-size: 1.1rem;
  color: #555;
  margin-bottom: 20px;
  line-height: 1.6;
`;

export const StyledButton = styled.button`
  font-size: 1rem;
  background-color: #35c6f2;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-top: 10px;

  &:hover {
    background-color: #068dcc;
  }
`;

export const StyledAdditionalSectionMain = styled.div`
  margin-top: 28px;
`;

export const StyledAdditionalSection = styled.div`
  margin-top: 28px;
`;

export const ServicesNew: React.FC<ServicesNewProps> = ({ footerRef }) => {
  const [isExpanded1, setIsExpanded1] = useState(false);
  const [isExpanded2, setIsExpanded2] = useState(false);
  const [isExpandedMain, setIsExpandedMain] = useState(false);

  const navigate = useNavigate();

  const toggleExpandMain = () => setIsExpandedMain(!isExpandedMain);
  const toggleExpand1 = () => setIsExpanded1(!isExpanded1);
  const toggleExpand2 = () => setIsExpanded2(!isExpanded2);

  const scrollToFooter = () => {
    footerRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <StyledWrapper>
      <StyledCardMain>
        <StyledImage src={'../../assets/services01.jpg'} />
        <StyledTitle>Software & Web Development Services</StyledTitle>
        <StyledText>
          <b>Our company specializes in delivering top-notch programming services tailored to meet your needs.</b> We design and develop
          modern <b>responsive websites</b> that not only look stunning but also function seamlessly across all devices. Our expertise
          extends to <b>building robust CMS platforms</b>, enabling efficient content management for your business.
          <br />
          <br />
          <b>With years of experience in server</b> management, we ensure secure and scalable solutions for your digital infrastructure.
          Additionally, we create cutting-edge web applications tailored for optimal performance and user experience. For businesses on the
          go, <b>our team excels in developing mobile applications for both Android and iOS</b>, ensuring a seamless experience across
          platforms. Partner with us to turn your digital ideas into reality with innovation and precision.
        </StyledText>
        <StyledButton onClick={toggleExpandMain}>{isExpandedMain ? 'Show less' : 'Show more'}</StyledButton>
        {isExpandedMain && (
          <StyledAdditionalSectionMain>
            <ul>
              <StyledListItem>
                <i className="pi pi-angle-right" style={{ fontSize: '1.2rem', color: '#35c6f2', fontWeight: 'bold' }}></i>
                <p>
                  <b>Our team specializes</b> in building high-quality web and mobile applications, ensuring seamless user experiences and modern
                  designs across all platforms.
                </p>
              </StyledListItem>
              <StyledListItem>
                <i className="pi pi-angle-right" style={{ fontSize: '1.2rem', color: '#35c6f2', fontWeight: 'bold' }}></i>
                <p>
                  <b>From server management to complex backend architectures</b>, we deliver reliable and scalable solutions tailored to your
                  business needs.
                </p>
              </StyledListItem>
              <StyledListItem>
                <i className="pi pi-angle-right" style={{ fontSize: '1.2rem', color: '#35c6f2', fontWeight: 'bold' }}></i>
                <p>
                  <b>Whether you need</b> dedicated developers for your team or end-to-end project delivery, we adapt to your workflow for smooth
                  integration and results.
                </p>
              </StyledListItem>
              <StyledListItem>
                <i className="pi pi-angle-right" style={{ fontSize: '1.2rem', color: '#35c6f2', fontWeight: 'bold' }}></i>
                <p>
                  <b>We leverage the latest technologies and frameworks</b> to create cutting-edge software that gives you a competitive edge in
                  the market.
                </p>
              </StyledListItem>
              <StyledListItem>
                <i className="pi pi-angle-right" style={{ fontSize: '1.2rem', color: '#35c6f2', fontWeight: 'bold' }}></i>
                <p>
                  <b>Every project</b> we take on is tailored to your specific requirements, ensuring the software aligns perfectly with your goals
                  and challenges.
                </p>
              </StyledListItem>
              <StyledListItem>
                <i className="pi pi-angle-right" style={{ fontSize: '1.2rem', color: '#35c6f2', fontWeight: 'bold' }}></i>
                <p>
                  <b>With years of experience</b> in delivering successful projects, we have earned the trust of clients across various industries.
                </p>
              </StyledListItem>
              <StyledListItem>
                <i className="pi pi-angle-right" style={{ fontSize: '1.2rem', color: '#35c6f2', fontWeight: 'bold' }}></i>
                <p>
                  <b>From initial planning and development to deployment and maintenance</b>, we provide comprehensive support to ensure long-term
                  success for your software.
                </p>
              </StyledListItem>
            </ul>
            <StyledButton onClick={scrollToFooter}>Contact us</StyledButton>
          </StyledAdditionalSectionMain>
        )}
      </StyledCardMain>

      <StyledCardsContainer>
        <StyledCardWrapper>
          <StyledCard>
            <StyledImage src={'../../assets/services02.jpg'} />
            <StyledTitle>
              <i className="pi pi-play-circle" style={{ fontSize: '1.6rem', color: 'rgb(229,9,20)' }}></i>
              <p>Streaming Platform</p>
            </StyledTitle>
            <StyledText>
              <b>Experience the ultimate in entertainment with our Streaming Platform</b>, offering a vast library of movies and series in
              Full HD and 4K. Enjoy ad-free content, offline downloads, and simultaneous streaming on multiple devices. Join over 1.2
              million subscribers and elevate your viewing experience today!
            </StyledText>
            <StyledButton onClick={toggleExpand1}>{isExpanded1 ? 'Show less' : 'Show more'}</StyledButton>
            {isExpanded1 && (
              <StyledAdditionalSection>
                <ul>
                  <StyledListItem>
                    <i className="pi pi-angle-right" style={{ fontSize: '1.2rem', color: '#35c6f2', fontWeight: 'bold' }}></i>
                    <p>
                      <b>Extensive library</b> with over 155 TV series and 290 movies to choose from.
                    </p>
                  </StyledListItem>
                  <StyledListItem>
                    <i className="pi pi-angle-right" style={{ fontSize: '1.2rem', color: '#35c6f2', fontWeight: 'bold' }}></i>
                    <p>
                      <b>7-day free trial</b> for new customers to explore the platform risk-free.
                    </p>
                  </StyledListItem>
                  <StyledListItem>
                    <i className="pi pi-angle-right" style={{ fontSize: '1.2rem', color: '#35c6f2', fontWeight: 'bold' }}></i>
                    <p>
                      <b>Ad-free streaming</b> for uninterrupted viewing.
                    </p>
                  </StyledListItem>
                  <StyledListItem>
                    <i className="pi pi-angle-right" style={{ fontSize: '1.2rem', color: '#35c6f2', fontWeight: 'bold' }}></i>
                    <p>
                      <b>High-quality</b> playback in <b>Full HD</b> and stunning <b>4K Ultra HD</b> options.
                    </p>
                  </StyledListItem>
                  <StyledListItem>
                    <i className="pi pi-angle-right" style={{ fontSize: '1.2rem', color: '#35c6f2', fontWeight: 'bold' }}></i>
                    <p>
                      <b>Trusted by over 1.2 million subscribers</b>, ensuring a reliable and popular platform.
                    </p>
                  </StyledListItem>
                </ul>
                <StyledButton onClick={() => navigate('/streaming-platform-product')}>Show me this product</StyledButton>
              </StyledAdditionalSection>
            )}
          </StyledCard>
        </StyledCardWrapper>

        <StyledCardWrapper>
          <StyledCard>
            <StyledImage src={'../../assets/services03.jpg'} />
            <StyledTitle>
              <i className="pi pi-bitcoin" style={{ fontSize: '1.6rem', color: 'rgb(247,147,26)' }}></i>
              <p>Cryptocurrency Investment App</p>
            </StyledTitle>
            <StyledText>
              <b>Take control of your investments with our Cryptocurrency Investment App</b>, designed for real-time market tracking and
              secure transactions. Analyze trends, manage your portfolio, and make informed decisions with ease. Your gateway to smarter
              cryptocurrency investments starts here!
            </StyledText>
            <StyledButton onClick={toggleExpand2}>{isExpanded2 ? 'Show less' : 'Show more'}</StyledButton>
            {isExpanded2 && (
              <StyledAdditionalSection>
                <ul>
                  <StyledListItem>
                    <i className="pi pi-angle-right" style={{ fontSize: '1.2rem', color: '#35c6f2', fontWeight: 'bold' }}></i>
                    <p>
                      <b>Secure transactions</b> with industry-leading encryption and safety protocols.
                    </p>
                  </StyledListItem>
                  <StyledListItem>
                    <i className="pi pi-angle-right" style={{ fontSize: '1.2rem', color: '#35c6f2', fontWeight: 'bold' }}></i>
                    <p>
                      <b>Real-time market data</b> to keep you updated on cryptocurrency trends.
                    </p>
                  </StyledListItem>
                  <StyledListItem>
                    <i className="pi pi-angle-right" style={{ fontSize: '1.2rem', color: '#35c6f2', fontWeight: 'bold' }}></i>
                    <p>
                      <b>Advanced analytics and forecasts</b> for informed decision-making.
                    </p>
                  </StyledListItem>
                  <StyledListItem>
                    <i className="pi pi-angle-right" style={{ fontSize: '1.2rem', color: '#35c6f2', fontWeight: 'bold' }}></i>
                    <p>
                      <b>User-friendly interface</b> suitable for beginners and experienced traders alike.
                    </p>
                  </StyledListItem>
                  <StyledListItem>
                    <i className="pi pi-angle-right" style={{ fontSize: '1.2rem', color: '#35c6f2', fontWeight: 'bold' }}></i>
                    <p>
                      <b>Trusted by thousands of investors</b>, ensuring reliability and quality.
                    </p>
                  </StyledListItem>
                </ul>
                <StyledButton onClick={() => navigate('/cryptocurrency-app-product')}>Show me this product</StyledButton>
              </StyledAdditionalSection>
            )}
          </StyledCard>
        </StyledCardWrapper>
      </StyledCardsContainer>
    </StyledWrapper>
  );
};
