import { CAAbout } from '../components/molecules/CAAbout/CAAbout';
import { CAChart } from '../components/molecules/CAChart/CAChart';
import { CAFirstInfo } from '../components/molecules/CAFirstInfo/CSFirstInfo';
import React from 'react';

interface DigitalProductPassportNewProps {
  footerRef: React.RefObject<HTMLDivElement>;
}

export const CryptocurrencyAppProduct: React.FC<DigitalProductPassportNewProps> = ({ footerRef }) => {
  return (
    <>
      <CAChart />
      <CAFirstInfo />
      <CAAbout />
    </>
  );
};
