import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import * as S from '../../styles/Dashboard';
import api from '../../utils/api';
import Loading from '../../components/Loading';
import useFlashMessage from '../../hooks/useFlashMessages';
import RoundedImage from '../../layout/RoundedImage';

const MyPets = () => {
  const [pets, setPets] = useState([]);
  const [loading, setLoading] = useState(false);
  const [token] = useState(localStorage.getItem('token') || '');
  const { setFlashMessage } = useFlashMessage();

  useEffect(() => {
    const getUserPets = async () => {
      setLoading(true);
      api
        .get('/pets/mypets', {
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

  const handleConcludeAdoption = async (id) => {
    let msgType = 'success';

    const data = await api
      .patch(`/pets/conclude/${id}`, {
        headers: {
          Authorization: `Bearer ${JSON.parse(token)}`,
        },
      })
      .then((response) => {
        return response.data;
      })
      .catch((err) => {
        console.log(err);
        msgType = 'error';
        return err.response.data;
      });

    setFlashMessage(data.message, msgType);
  };

  const handleDeletePet = async (id) => {
    if (
      confirm('Haverá deleção do Pet cadastrado. Você tem certeza desta ação?')
    ) {
      let msgType = 'success';
      const data = await api
        .delete(`/pets/${id}`, {
          headers: {
            Authorization: `Bearer ${JSON.parse(token)}`,
          },
        })
        .then((response) => {
          const updatedPets = pets.filter((pet) => pet._id !== id);
          setPets(updatedPets);
          return response.data;
        })
        .catch((err) => {
          console.log(err);
          msgType = 'error';
          return err.response.data;
        });

      setFlashMessage(data.message, msgType);
    } else {
      return;
    }
  };

  if (loading) return <Loading />;

  return (
    <S.PetsContainer>
      <div id="header">
        <h1>Meus pets</h1>
        <NavLink to="/meus-pets/adicionar">Cadastrar pet</NavLink>
      </div>

      <S.PetsArea>
        {pets.length === 0 && <p>Não há pets cadastrados.</p>}

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
                <S.PetActions>
                  {pet.available ? (
                    <>
                      {pet.adopter && (
                        <button onClick={() => handleConcludeAdoption(pet._id)}>
                          Concluir adoção
                        </button>
                      )}
                      <NavLink to={`/meus-pets/editar/${pet._id}`}>
                        Editar
                      </NavLink>
                      <button onClick={() => handleDeletePet(pet._id)}>
                        Excluir
                      </button>
                    </>
                  ) : (
                    <p>Pet já adotado</p>
                  )}
                </S.PetActions>
              </S.PetCard>
            ))}
        </S.PetsShowcase>
      </S.PetsArea>
    </S.PetsContainer>
  );
};

export default MyPets;
