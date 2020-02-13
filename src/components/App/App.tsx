import React from 'react';

import { HelmetProvider, Helmet } from 'react-helmet-async';

import { Header } from '../shared/Header';

import { imports as fonts } from '../../styles/config/typography';
import { GlobalStyles } from '../../styles/Global';
import { AppContainer } from './App.styled';

export const App = () => {
  return (
    <AppContainer>
      <HelmetProvider>
        <Helmet>
          ${fonts.map(font => (
            <link href={font} rel="prefetch" as="font" crossOrigin="true" />
          ))}
        </Helmet>
        <GlobalStyles />
        <Header />
      </HelmetProvider>
    </AppContainer>
  );
};
