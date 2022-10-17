import React, { useEffect, useState } from 'react';
import * as S from './styles';
import { useParams, NavLink } from 'react-router-dom';
import api from '../../utils/api';
import useFlashMessage from '../../hooks/useFlashMessages';
import Loading from '../../components/Loading';
import Head from '../../components/Head';

const PetDetails = () => {
  const [pet, setPet] = useState({});
  const { setFlashMessage } = useFlashMessage();
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [loadingButton, setLoadingButton] = useState(false);
  const [token] = useState(localStorage.getItem('token') || '');

  useEffect(() => {
    const getPet = async () => {
      setLoading(true);
      api
        .get(`/pets/${id}`)
        .then((response) => {
          setPet(response.data);
          console.log(response.data);
          setLoading(false);
        })
        .catch((error) => console.log(error));
    };

    getPet();
  }, [id]);

  const handleSchedule = async () => {
    let msgType = 'success';

    setLoadingButton(true);
    const data = await api
      .patch(`pets/schedule/${pet._id}`, {
        headers: {
          Authorization: `Bearer ${JSON.parse(token)}`,
        },
      })
      .then((response) => response.data)
      .catch((err) => {
        msgType = 'error';
        return err.response.data;
      });

    setFlashMessage(data.message, msgType);
    setLoadingButton(false);
  };

  if (loading) return <Loading />;

  return (
    <>
      <Head title={`Adote um Pet - Pet - ${pet.name && pet.name}`} />
      {'name' in pet && (
        <S.PetContainer>
          <div>
            <h1>Conhecendo o Pet: {pet.name}</h1>
            <p>Se tiver interesse, marque uma visita para conhecê-lo!</p>
          </div>
          <S.PetPhotos>
            {pet.images.map((img, index) => (
              <img
                key={`image ${index}`}
                // eslint-disable-next-line no-undef
                src={`${process.env.REACT_APP_API}/images/pets/${img}`}
                alt={pet.name}
              />
            ))}
          </S.PetPhotos>
          <p>
            <span id="bold">Peso:</span> {pet.weight} kg
          </p>
          <p>
            <span id="bold">Idade:</span> {pet.age} anos
          </p>
          {token ? (
            <button onClick={handleSchedule} disabled={loadingButton}>
              {loadingButton ? 'Solicitando...' : 'Solicitar visita'}
            </button>
          ) : (
            <div>
              <p>Você precisa estar logado para solicitar uma visita.</p>
              <p>
                <NavLink id="bold" to="/entrar">
                  Acesse sua conta
                </NavLink>{' '}
                ou{' '}
                <NavLink id="bold" to="/registre-se">
                  cadastre-se
                </NavLink>
                .
              </p>
            </div>
          )}
        </S.PetContainer>
      )}
    </>
  );
};

export default PetDetails;
