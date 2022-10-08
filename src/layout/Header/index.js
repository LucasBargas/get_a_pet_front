import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import * as S from './styles';
import { TbLogout } from 'react-icons/tb';
import { BiMenu } from 'react-icons/bi';
import Logo from '../../assets/images/logo.png';
import useUserContext from '../../hooks/useUserContext';

const Header = () => {
  const [navMobile, setNavMobile] = useState(false);
  const { authenticated, logout } = useUserContext();

  return (
    <S.HeaderContainer>
      <S.HeaderContainerLogo>
        <NavLink to="/" title="Adote um Pet">
          <img src={Logo} alt="Adote um Pet - Logo" />
          <span id="bold">Adote um Pet</span>
        </NavLink>
      </S.HeaderContainerLogo>

      <S.HeaderContainerNav open={navMobile}>
        <ul>
          <li>
            <NavLink onClick={() => setNavMobile(false)} end to="/">
              Adotar
            </NavLink>
          </li>
          {authenticated ? (
            <>
              <li>
                <NavLink onClick={() => setNavMobile(false)} to="/meus-pets">
                  Meus pets
                </NavLink>
              </li>
              <li>
                <NavLink
                  onClick={() => setNavMobile(false)}
                  to="/minhas-adocoes"
                >
                  Minhas adoções
                </NavLink>
              </li>
              <li>
                <NavLink onClick={() => setNavMobile(false)} to="/perfil">
                  Perfil
                </NavLink>
              </li>
              <li onClick={logout}>
                <button onClick={() => setNavMobile(false)}>
                  <TbLogout />
                </button>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink onClick={() => setNavMobile(false)} to="/registre-se">
                  Registre-se
                </NavLink>
              </li>
              <li>
                <NavLink onClick={() => setNavMobile(false)} to="/entrar">
                  Entrar
                </NavLink>
              </li>
            </>
          )}
        </ul>
        <S.ButtonMobile onClick={() => setNavMobile(!navMobile)}>
          <BiMenu />
        </S.ButtonMobile>
      </S.HeaderContainerNav>
    </S.HeaderContainer>
  );
};

export default Header;
