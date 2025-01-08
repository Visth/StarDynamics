import SimpleSection from '../components/molecules/simpleSection/SimpleSection';
import React from 'react';
import { RouteType } from '../model/Model';
import StartJustNow from '../components/molecules/startJustNow/StartJustNow';
import styled from 'styled-components';
import illu1 from '../../public/assets/illu1.webp';
import illu2 from '../../public/assets/illu2.webp';
import illu3 from '../../public/assets/illu3.webp';
import illu4 from '../../public/assets/illu4.webp';
import illu5 from '../../public/assets/illu5.webp';
import illu6 from '../../public/assets/illu6.webp';
import shape_ping from '../../public/assets/shape_ping.webp';
import { illustration } from '../styles/GlobalStyle';
import { Helmet } from 'react-helmet';

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;

  & section .simple-section::before,
  & section .simple-section::after {
    ${illustration}
  }

  & .section-a {
    position: relative;
    margin-top: 160px;

    & > .simple-section::after {
      content: url(${illu1});
      transform: translate(130px, -66px);

      @media (max-width: 1480px) {
        transform: translate(14px, -148px) scale(0.75);
      }
    }

    & > div {
      display: flex;
      flex-direction: column;
      justify-content: start;
    }

    @media (max-width: 1100px) {
      & .buttons-container {
        margin-top: 300px;
        z-index: 1;
        position: relative;
        left: -46px;
        top: -20px;

        & > button {
          width: 200px;
          background-color: white;

          &:hover {
            background-color: ${(props) => props.theme.color.pink};
          }
        }
      }

      & p {
        max-width: 280px;
      }

      & > div {
        transform: translateX(-20px);
      }

      & > div::after {
        transform: scale(0.38) !important;
        top: -180px;
        left: 50%;
        margin-left: -300px;
      }
    }
  }

  & .section-b {
    position: relative;
    margin-top: 516px;
    margin-right: -56px;

    & .simple-section {
      max-width: 770px;
      display: flex;
      flex-direction: column;
    }

    & .simple-section::before {
      content: url(${illu2});
      transform: translate(-890px, -140px);

      @media (max-width: 1650px) {
        transform: translate(-800px, -96px) scale(0.8);
      }
    }

    & .simple-section::after {
      content: url(${shape_ping});
      transform: translate(-447px, 265px);

      @media (max-width: 1480px) {
        transform: translate(-437px, 265px);
      }
    }

    & h2 {
      letter-spacing: 0.6px;
      font-weight: 300;
      font-size: 34px;
    }

    @media (max-width: 1480px) {
      margin-top: 380px;

      & .simple-section {
        padding: 0;
      }
    }

    @media (max-width: 1100px) {
      margin-top: 80px;
      margin-right: 0;

      & > .simple-section::after {
        display: none;
      }

      & > .simple-section::before {
        transform: scale(0.45) !important;
        left: 50%;
        margin-left: -300px;
      }

      & h2 {
        max-width: 350px;
        letter-spacing: -1px;
        font-size: 26px;
      }

      & p {
        max-width: 200px;
      }

      & .buttons-container {
        margin-top: 250px;
      }
    }
  }

  & .section-c {
    position: relative;
    align-self: end;
    margin-top: 495px;
    margin-right: 118px;

    & > div::before {
      content: url(${illu3});
      transform: translate(-990px, -50px);

      @media (max-width: 1600px) {
        transform: translate(-930px, -80px) scale(0.9);
      }
    }

    @media (max-width: 1450px) {
      margin-right: 59px;
    }

    @media (max-width: 1100px) {
      align-self: center;
      margin-right: 0;
      margin-top: 140px;

      & > div::before {
        top: -278px;
        right: -130px;
        transform: scale(0.45) rotateY(3.142rad) !important;
      }

      & .images-container {
        gap: 70px;
        margin: 170px 0 80px 0;
      }

      & p {
        max-width: 220px;
      }
    }
  }

  & .section-d {
    position: relative;
    margin-top: 420px;

    & > div::before {
      content: url(${illu4});
      transform: translate(-30px, -140px);

      @media (max-width: 1480px) {
        transform: translate(-30px, -140px) scale(0.9);
      }

      @media (max-width: 1100px) {
        right: calc(50% - 340px);
        top: 30px;
      }
    }

    & p {
      max-width: 580px;
    }

    @media (max-width: 1100px) {
      margin-top: 120px;
      margin-right: 0;

      & p {
        max-width: 360px;
      }

      & .buttons-container {
        margin-top: 310px;
      }
    }
  }

  & .section-e {
    position: relative;
    margin-top: 250px;
    margin-right: 50px;

    & > div::before {
      content: url(${illu5});
      transform: translate(-700px, -60px);

      @media (max-width: 1480px) {
        transform: translate(-700px, -60px) scale(0.9);
      }

      @media (max-width: 1100px) {
        right: calc(50% - 314px);
        top: 40px;
      }
    }

    @media (max-width: 1100px) {
      margin-right: 0;
      margin-top: 120px;

      & p {
        max-width: 320px;
      }

      & .buttons-container {
        margin-top: 290px;
      }
    }
  }

  & .section-f {
    position: relative;
    margin-top: 450px;
    display: flex;
    justify-content: space-between;

    & > div:first-of-type::before {
      content: url(${illu6});
      transform: translate(-160px, -130px);

      @media (max-width: 1480px) {
        transform: translate(-380px, -130px) scale(0.85);
      }

      @media (max-width: 1100px) {
        right: calc(50% - 260px);
        top: -150px;
      }
    }

    @media (max-width: 1100px) {
      margin-right: 0;
      margin-top: 120px;
      display: flex;
      flex-direction: column;

      & p {
        max-width: 150px;
      }

      & .buttons-container {
        margin-top: 140px;
      }
    }
  }

  & section:nth-of-type(7) {
    margin-bottom: 120px;

    @media (max-width: 1100px) {
      margin-bottom: 50px;
    }
  }
`;

const Homepage: React.FC = () => {
  return (
    <StyledContainer>
      <Helmet>
        <link rel="canonical" href="https://axelote.com" />
      </Helmet>
      <section className="section-a">
        <SimpleSection
          headerText="Make your life <span class='pink'> easier</span>,<br/><span class='blue'> Develop </span>faster"
          headerSize="xxl"
          paragraphText="Create applications without API - query database directly."
          secondButton={{ text: 'learn more', link: 'section-b', asButton: true }}
        />
      </section>

      <section className="flex-right section-b" id="section-b">
        <SimpleSection
          headerText="Use our tools to create your applications faster, more efficiently, and cheaper"
          paragraphText="Reduce time and costs - make things simpler!"
          firstButton={{ text: 'get started', link: RouteType.GETTING_STARTED, asLink: true }}
          secondButton={{ text: 'find out more', link: 'section-c', asButton: true }}
        />
      </section>

      <section className="flex-right section-c" id="section-c">
        <SimpleSection
          headerText="How it <span class='pink'>works</span>"
          withImages
          paragraphText="See how easy it is to create projects using <strong>Axelote</strong>"
          firstButton={{ text: 'get started', link: RouteType.GETTING_STARTED, asLink: true }}
          secondButton={{ text: 'find out more', link: 'section-d', asButton: true }}
        />
      </section>

      <section className="section-d" id="section-d">
        <SimpleSection
          headerText="documentation"
          paragraphText="We provide extensive documentation to make using <strong>Axelote</strong> easy"
          firstButton={{ text: 'documentation', link: RouteType.DOCUMENTATION, asLink: true }}
          secondButton={{ text: 'find out more', link: 'section-e', asButton: true }}
        />
      </section>

      <section className="flex-right section-e" id="section-e">
        <SimpleSection
          headerText="axelote Prime"
          paragraphText="Integrate Axelote with SSO and get our priority support"
          firstButton={{ text: 'axelote prime', link: RouteType.OFFER, asLink: true }}
          secondButton={{ text: 'find out more', link: 'section-f', asButton: true }}
        />
      </section>

      <section className="section-f" id="section-f">
        <SimpleSection
          headerText="tutorials"
          paragraphText="Discover our partners’ courses <br/>"
          firstButton={{ text: 'tutorials', link: RouteType.TUTORIALS, asLink: true }}
          secondButton={{ text: 'meet axelote', link: 'start-just-now', asButton: true }}
        />
      </section>

      <StartJustNow />
    </StyledContainer>
  );
};

export default Homepage;
