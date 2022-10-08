import React from 'react';
import { NavLink } from 'react-router-dom';
import * as S from './styles';

const Footer = () => {
  const currentYear = new Date();

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <S.FooterContainer>
      <div>
        <NavLink to="/" id="bold" onClick={handleClick}>
          Adote um Pet
        </NavLink>{' '}
        &copy; {currentYear.getFullYear()}
      </div>
    </S.FooterContainer>
  );
};

export default Footer;
