import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Loading from '../../components/Loading';
import PetForm from '../../components/PetForm';
import api from '../../utils/api';
import useFlashMessages from '../../hooks/useFlashMessages';
import Head from '../../components/Head';

const EditPet = () => {
  const { id } = useParams();
  const [token] = useState(localStorage.getItem('token') || '');
  const { setFlashMessage } = useFlashMessages();
  const [pet, setPet] = useState({});
  const [pageLoading, setPageLoading] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const getPetById = async () => {
      setPageLoading(true);
      await api
        .get(`/pets/${id}`, {
          headers: {
            Authorization: `Bearer ${JSON.parse(token)}`,
          },
        })
        .then((response) => {
          setPet(response.data);
          setPageLoading(false);
        })
        .catch((error) => console.log(error));
    };

    getPetById();
  }, [id, token]);

  const updatePet = async (pet) => {
    let msgType = 'success';

    const formData = new FormData();

    setLoading(true);

    Object.keys(pet).forEach((key) => {
      if (key === 'images') {
        for (let i = 0; i < pet[key].length; i++) {
          formData.append('images', pet[key][i]);
        }
      } else {
        formData.append(key, pet[key]);
      }
    });

    const data = await api
      .patch(`/pets/${pet._id}`, formData, {
        Authorization: `Bearer ${JSON.parse(token)}`,
        'Content-Type': 'multipart/form-data',
      })
      .then((response) => response.data)
      .catch((error) => {
        msgType = 'error';
        return error.response.data;
      });

    setFlashMessage(data.message, msgType);
    setLoading(false);

    if (msgType !== 'error') {
      navigate('/meus-pets');
    }
  };

  if (pageLoading) return <Loading />;

  return (
    <>
      <Head title="Adote um Pet - Editar Pet" />
      {'name' in pet && (
        <PetForm
          loading={loading}
          title={`Editando o pet: ${pet.name}`}
          paragraph="Depois da edição os dados serão aualizados no sistema"
          btnText="Editar"
          handleSubmit={updatePet}
          petData={pet}
        />
      )}
    </>
  );
};

export default EditPet;
