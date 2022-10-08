import React, { useState } from 'react';
import { Navigate, NavLink } from 'react-router-dom';
import Input from '../../components/Input';
import * as S from '../Register/styles';

import useUserContext from '../../hooks/useUserContext';

const Login = () => {
  const [user, setUser] = useState({});
  const { loading, login } = useUserContext();

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    login(user);
  };

  return (
    <S.FormContainer loading={loading}>
      <h1>Entrar</h1>
      <form onSubmit={handleSubmit}>
        <Input
          label="Email"
          type="email"
          name="email"
          placeholder="Digite o seu email..."
          handleOnChange={handleChange}
        />
        <Input
          label="Senha"
          type="password"
          name="password"
          placeholder="Digite a sua senha..."
          handleOnChange={handleChange}
        />
        <button type="submit" disabled={loading}>
          {loading ? 'Carregando...' : 'Entrar'}
        </button>
      </form>

      <S.Redirect>
        Não possui uma conta?{' '}
        <NavLink id="bold" to="/registre-se">
          É só se registrar
        </NavLink>
        .
      </S.Redirect>
    </S.FormContainer>
  );
};

export default Login;
