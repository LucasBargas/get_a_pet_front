import { useContext } from 'react';
import { UserCtx } from '../context/UserContext';

const useUserContext = () => {
  const { loading, register, authenticated, login, logout } =
    useContext(UserCtx);

  return { loading, register, authenticated, login, logout };
};

export default useUserContext;
