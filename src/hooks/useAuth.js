import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import authUser from '../helpers/authUser';
import api from '../utils/api';
import useFlashMessages from './useFlashMessages';

const useAuth = () => {
  const [loading, setLoading] = useState(false);
  const [authenticated, setAuthenticated] = useState(false);
  const navigate = useNavigate();
  const { setFlashMessage } = useFlashMessages();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      api.defaults.headers.Authorization = `Bearer ${JSON.parse(token)}`;
      setAuthenticated(true);
      return;
    }
  }, []);

  const register = async (user) => {
    let msgText = 'Cadastro realizado com sucesso';
    let msgType = 'success';

    try {
      setLoading(true);
      const data = await api
        .post('/users/register', user)
        .then((response) => response.data);

      await authUser(setAuthenticated, data.token, navigate);
      return;
    } catch (error) {
      msgText = error.response.data.message;
      msgType = 'error';
      return;
    } finally {
      setFlashMessage(msgText, msgType);
      setLoading(false);
    }
  };

  const login = async (user) => {
    let msgText = 'Login realizado com sucesso';
    let msgType = 'success';

    try {
      setLoading(true);
      const data = await api
        .post('/users/login', user)
        .then((response) => response.data);

      await authUser(setAuthenticated, data.token, navigate);
      return;
    } catch (error) {
      msgText = error.response.data.message;
      msgType = 'error';
      return;
    } finally {
      setFlashMessage(msgText, msgType);
      setLoading(false);
    }
  };

  const logout = () => {
    const msgText = 'Você desconectou com sucesso!';
    const msgType = 'success';

    setAuthenticated(false);
    localStorage.removeItem('token');
    api.defaults.headers.Authorization = undefined;
    navigate('/entrar');

    setFlashMessage(msgText, msgType);
  };

  return {
    loading,
    register,
    authenticated,
    login,
    logout,
  };
};

export default useAuth;
