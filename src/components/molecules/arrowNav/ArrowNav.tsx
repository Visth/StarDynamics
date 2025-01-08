import React, { useRef, useEffect, useState } from 'react';
import styled from 'styled-components';

interface ArrowNavProps {
  upperRef: React.RefObject<HTMLDivElement>;
}

export const ArrowNav: React.FC<ArrowNavProps> = ({ upperRef }) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isAtSection, setIsAtSection] = useState(false);

  const handleClick = () => {
    if (isAtSection) {
      upperRef.current?.scrollIntoView({ behavior: 'smooth' });
    } else {
      sectionRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsAtSection(entry.isIntersecting);
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <>
      <ArrowButton onClick={handleClick} isAtSection={isAtSection}>
        {isAtSection ? '↑' : '↓'}
      </ArrowButton>
      <div ref={sectionRef}></div>
    </>
  );
};

const ArrowButton = styled.button<{ isAtSection: boolean }>`
  position: fixed;
  bottom: 30px;
  right: 30px;
  background-color: ${({ isAtSection }) => (isAtSection ? 'white' : 'transparent')};
  color: ${({ isAtSection }) => (isAtSection ? 'black' : '#0e0e0e')};
  border: 1px solid #0e0e0e;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  cursor: pointer;
  font-size: 24px;
  transition: 0.3s;
  z-index: 10;

  &:hover {
    background-color: ${({ isAtSection }) => (isAtSection ? 'white' : '#e9e9e9')};
  }
`;
