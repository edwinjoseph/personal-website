import React from 'react';

import { Header } from '../shared/Header';

import { GlobalStyles } from '../../styles/Global';
import { AppContainer } from './App.styled';

export const App = () => {
  return (
    <AppContainer>
      <GlobalStyles />
      <Header />
    </AppContainer>
  );
};
