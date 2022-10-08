import React, { useEffect, useState } from 'react';
import Input from '../../components/Input';
import Loading from '../../components/Loading';
import api from '../../utils/api';
import useFlashMessages from '../../hooks/useFlashMessages';
import * as S from '../Register/styles';
import RoundedImage from '../../layout/RoundedImage';
import { Navigate } from 'react-router-dom';

const Profile = () => {
  const [user, setUser] = useState({});
  const [preview, setPreview] = useState();
  const [token] = useState(localStorage.getItem('token') || '');
  const { setFlashMessage } = useFlashMessages();
  const [pageLoading, setPageLoading] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const checkUser = async () => {
      setPageLoading(true);
      await api
        .get('/users/checkuser', {
          headers: {
            Authorization: `Bearer ${JSON.parse(token)}`,
          },
        })
        .then((response) => {
          setUser(response.data);
          setPageLoading(false);
        })
        .catch((error) => console.log(error));
    };

    checkUser();
  }, [token]);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onFileChange = (e) => {
    setPreview(e.target.files[0]);
    setUser({ ...user, [e.target.name]: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let msgType = 'success';

    const formData = new FormData();

    setLoading(true);

    Object.keys(user).forEach((key) => {
      formData.append(key, user[key]);
    });

    const data = await api
      .patch(`/users/edit/${user._id}`, formData, {
        headers: {
          Authorization: `Bearer ${JSON.parse(token)}`,
          'Content-Type': 'multipart/form-data',
        },
      })
      .then((response) => response.data)
      .catch((error) => {
        msgType = 'error';
        return error.response.data;
      });

    setFlashMessage(data.message, msgType);
    setLoading(false);
  };

  if (pageLoading) return <Loading />;

  return (
    <S.FormContainer loading={loading}>
      <h1>Perfil</h1>
      {(user.image || preview) && (
        <RoundedImage
          src={
            preview
              ? URL.createObjectURL(preview)
              : // eslint-disable-next-line no-undef
                `${process.env.REACT_APP_API}/images/users/${user.image}`
          }
          alt={user.name}
        />
      )}

      <form onSubmit={handleSubmit}>
        <Input
          label="Imagem"
          type="file"
          name="image"
          handleOnChange={onFileChange}
        />
        <Input
          label="Nome"
          type="text"
          name="name"
          placeholder="Digite o seu nome..."
          value={user.name || ''}
          handleOnChange={handleChange}
        />
        <Input
          label="Email"
          type="email"
          name="email"
          placeholder="Digite o seu email..."
          value={user.email || ''}
          handleOnChange={handleChange}
        />
        <Input
          label="Telefone"
          type="text"
          name="phone"
          placeholder="Digite um número para contato..."
          value={user.phone || ''}
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
          {loading ? 'Carregando...' : 'Editar'}
        </button>
      </form>
    </S.FormContainer>
  );
};

export default Profile;
