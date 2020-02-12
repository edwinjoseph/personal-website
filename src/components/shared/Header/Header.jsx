import React from 'react';
import logo from '../../../assets/images/logo.svg';
import { HeaderContainer, Logo, Link } from './Header.styled';

export const Header = () => {
  return (
    <HeaderContainer>
      <Logo src={logo} className="logo" alt="logo" />
      <p>Edit <code>src/App.tsx</code> and save to reload.</p>
      <Link
        className="link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer">
        Learn React
      </Link>
    </HeaderContainer>
  );
};
