import React, { ReactElement, ReactNode, useEffect, useState } from 'react';
import GlobalStyle from '../../styles/GlobalStyle';
import styled, { ThemeProvider } from 'styled-components';
import { theme } from '../../styles/Theme';
import { createContext } from 'react';
import { asyncLocalStorage } from '../../utils/Utils';
import { ContextType, ThemeType } from '../../model/Model';

const StyledWrapper = styled.div`
  background: none;
  
  & h6 {
    background-color: ${process.env.IS_V1 ? 'red' : 'orange'};
  }
`;
interface Props {
  children: React.ReactNode;
}

export const PageContext = createContext<ContextType>({} as ContextType);

const MainTemplate: React.FC<Props> = ({ children }): JSX.Element => {
  const [activeCodeTheme, setCodeTheme] = useState<ThemeType>(ThemeType.HIGH_CONTRAST);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  const handleMobile = () => setIsMobile(window.innerWidth < 1100 || screen.width < 1100);

  const changeCodeTheme = (theme: ThemeType) => {
    asyncLocalStorage.setItem('codeTheme', theme);
    setCodeTheme(theme);
  };

  useEffect(() => {
    const fetchCodeTheme = async () => {
      const cachedTheme = await asyncLocalStorage.getItem('codeTheme');
      cachedTheme && setCodeTheme(cachedTheme as ThemeType);
    };

    fetchCodeTheme();
    handleMobile();

    window.addEventListener('resize', handleMobile);
    return () => window.removeEventListener('resize', handleMobile);
  });

  return (
    <PageContext.Provider value={{ activeCodeTheme, changeCodeTheme, isMobile }}>
      <StyledWrapper>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          {children}
        </ThemeProvider>
      </StyledWrapper>
    </PageContext.Provider>
  );
};

export default MainTemplate;
