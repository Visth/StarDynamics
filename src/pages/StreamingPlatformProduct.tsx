import { SPAbout } from '../components/molecules/SPAbout/SPAbout';
import { SPBanner } from '../components/molecules/SPBanner/SPBanner';
import { SPFirstInfo } from '../components/molecules/SPFirstInfo/SPFirstInfo';
import { SPServicesInfo } from '../components/molecules/SPServicesInfo/SPServicesInfo';
import React from 'react';

interface DigitalProductPassportNewProps {
  footerRef: React.RefObject<HTMLDivElement>;
}

export const StreamingPlatformProduct: React.FC<DigitalProductPassportNewProps> = ({ footerRef }) => {
  return (
    <>
      <SPBanner />
      <SPServicesInfo footerRef={footerRef} />
      <SPFirstInfo />
      <SPAbout />
    </>
  );
};
