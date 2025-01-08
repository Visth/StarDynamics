import React, { useRef } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import ScrollToTop from '../components/atoms/ScrollToTop';
import MainTemplate from '../components/templates/MainTemplate';
import MainNavigation from '../components/molecules/mainNavigation/MainNavigation';
import FooterNew from '../components/molecules/footerNew/FooterNew';
import { RouteType } from '../model/Model';
import { MainPage } from '../components/molecules/mainPage/mainPage';
import { StreamingPlatformProduct } from './StreamingPlatformProduct';
import { ServicesNew } from './ServicesNew';
import { AboutUsNew } from './AboutUsNew';
import { DocsCA } from './DocsCA';
import { DocsSP } from './DocsSP';
import { ArrowNav } from '../components/molecules/arrowNav/ArrowNav';
import { Helmet } from 'react-helmet';
import 'primeicons/primeicons.css';
import { CryptocurrencyAppProduct } from './CryptocurrencyAppProduct';

const PageSelector: React.FC<{ route: RouteType }> = ({ route }) => {
  const upperRef = useRef<HTMLDivElement>(null);
  const footerRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <div ref={upperRef}></div>
      <MainNavigation />
      <main>
        {
          {
            [RouteType.HOMEPAGE]: <MainPage footerRef={footerRef} />,
            [RouteType.STREAMING_PLATFORM_PRODUCT]: <StreamingPlatformProduct footerRef={footerRef} />,
            [RouteType.CRYPTOCURRENCY_APP_PRODUCT]: <CryptocurrencyAppProduct footerRef={footerRef}/>,
            [RouteType.SERVICES]: <ServicesNew footerRef={footerRef} />,
            [RouteType.ABOUT_US]: <AboutUsNew />,
            [RouteType.STREAMING_PLATFORM_DOCS]: <DocsSP />,
            [RouteType.CRYPTOCURRENCY_APP_DOCS]: <DocsCA />,
          }[route]
        }
      </main>
      <ArrowNav upperRef={upperRef} />
      <div ref={footerRef}>
        <FooterNew />
      </div>
    </>
  );
};

const App: React.FC = () => {
  return (
    <MainTemplate>
      <Helmet>
        <title>StarDynamics</title>
      </Helmet>
      <BrowserRouter>
        <ScrollToTop /> {/* Dodaj tutaj */}
        <Routes>
          {(Object.values(RouteType) as RouteType[]).map((route) => (
            <Route
              key={route}
              path={'/' + route}
              element={<PageSelector route={route} />}
            />
          ))}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </MainTemplate>
  );
};

export default App;
