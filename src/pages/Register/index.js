import React, { useState } from 'react';
import { Navigate, NavLink } from 'react-router-dom';
import Input from '../../components/Input';
import * as S from './styles';

import useUserContext from '../../hooks/useUserContext';

const Register = () => {
  const [user, setUser] = useState({});
  const { loading, register } = useUserContext();

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    register(user);
  };

  return (
    <S.FormContainer loading={loading}>
      <h1>Registre-se</h1>
      <form onSubmit={handleSubmit}>
        <Input
          label="Nome"
          type="text"
          name="name"
          placeholder="Digite o seu nome..."
          handleOnChange={handleChange}
        />
        <Input
          label="Email"
          type="email"
          name="email"
          placeholder="Digite o seu email..."
          handleOnChange={handleChange}
        />
        <Input
          label="Telefone"
          type="text"
          name="phone"
          placeholder="Digite um número para contato..."
          handleOnChange={handleChange}
        />
        <Input
          label="Senha"
          type="password"
          name="password"
          placeholder="Digite a sua senha..."
          handleOnChange={handleChange}
        />
        <Input
          label="Confirmar senha"
          type="password"
          name="confirmpassword"
          placeholder="Confirme a sua senha..."
          handleOnChange={handleChange}
        />
        <button type="submit" disabled={loading}>
          {loading ? 'Carregando...' : 'Registrar'}
        </button>
      </form>

      <S.Redirect>
        Já possui uma conta?{' '}
        <NavLink id="bold" to="/entrar">
          É só entrar
        </NavLink>
        .
      </S.Redirect>
    </S.FormContainer>
  );
};

export default Register;
