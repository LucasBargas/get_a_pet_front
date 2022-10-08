import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import Loading from '../../components/Loading';
import api from '../../utils/api';
import * as S from './styles';

const Homepage = () => {
  const [pets, setPets] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getUserPets = async () => {
      setLoading(true);
      api
        .get('/pets')
        .then((response) => {
          setPets(response.data);
          setLoading(false);
        })
        .catch((error) => console.log(error));
    };

    getUserPets();
  }, []);

  if (loading) return <Loading />;

  return (
    <S.HomepageContainer>
      <h1>Adote um Pet</h1>
      {pets.length > 0 && (
        <p>Veja os detalhes de pet um e conheça seus tutores.</p>
      )}
      {pets.length === 0 && (
        <p>Não há pets cadastrados ou disponíveis para adoção no momento.</p>
      )}
      <S.HomepageShowcase>
        {pets.length > 0 &&
          pets.map((pet) => (
            <S.PetCard key={pet._id}>
              <S.PetCardPhoto
                // eslint-disable-next-line no-undef
                photo={`${process.env.REACT_APP_API}/images/pets/${pet.images[0]}`}
              ></S.PetCardPhoto>
              <h2>{pet.name}</h2>
              <p>
                <span id="bold">Peso:</span> {pet.weight}kg
              </p>
              {pet.available ? (
                <NavLink to={`pet/${pet._id}`}>Mais detalhes</NavLink>
              ) : (
                <S.AdoptedFlag>Adotado</S.AdoptedFlag>
              )}
            </S.PetCard>
          ))}
      </S.HomepageShowcase>
    </S.HomepageContainer>
  );
};

export default Homepage;
