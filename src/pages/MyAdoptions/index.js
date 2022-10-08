import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import * as S from '../../styles/Dashboard';
import * as C from './styles';
import api from '../../utils/api';
import Loading from '../../components/Loading';
import useFlashMessage from '../../hooks/useFlashMessages';
import RoundedImage from '../../layout/RoundedImage';

const MyAdoptions = () => {
  const [pets, setPets] = useState([]);
  const [loading, setLoading] = useState(false);
  const [token] = useState(localStorage.getItem('token') || '');
  const { setFlashMessage } = useFlashMessage();

  useEffect(() => {
    const getUserPets = async () => {
      setLoading(true);
      api
        .get('/pets/myadoptions', {
          headers: {
            Authorization: `Bearer ${JSON.parse(token)}`,
          },
        })
        .then((response) => {
          setPets(response.data);
          setLoading(false);
        })
        .catch((error) => console.log(error));
    };

    getUserPets();
  }, [token]);

  if (loading) return <Loading />;

  return (
    <S.PetsContainer>
      <div id="header">
        <h1>Minhas adoções</h1>
      </div>

      <S.PetsArea>
        {pets.length === 0 && <p>Ainda não há pets adotados.</p>}

        <S.PetsShowcase>
          {pets.length > 0 &&
            pets.map((pet) => (
              <S.PetCard key={pet._id}>
                <RoundedImage
                  // eslint-disable-next-line no-undef
                  src={`${process.env.REACT_APP_API}/images/pets/${pet.images[0]}`}
                  alt={pet.name}
                  wh="75"
                />
                <span id="bold">{pet.name}</span>
                <C.OwnerInfo>
                  <p>
                    <span id="bold">Ligue para:</span> {pet.user.phone}
                  </p>
                  <p>
                    <span id="bold">Fale com:</span> {pet.user.name}
                  </p>
                </C.OwnerInfo>
                <S.PetActions>
                  {pet.available ? (
                    <p>Adoção em processo.</p>
                  ) : (
                    <p>Parabéns por concluir a adoção.</p>
                  )}
                </S.PetActions>
              </S.PetCard>
            ))}
        </S.PetsShowcase>
      </S.PetsArea>
    </S.PetsContainer>
  );
};

export default MyAdoptions;
