import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../../utils/api';
import useFlashMessage from '../../hooks/useFlashMessages';
import PetForm from '../../components/PetForm';

const AddPet = () => {
  const [token] = useState(localStorage.getItem('token') || '');
  const { setFlashMessage } = useFlashMessage();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const registerPet = async (pet) => {
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
      .post(`/pets/create`, formData, {
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

  return (
    <PetForm
      loading={loading}
      title="Adicionar Pet"
      paragraph="Depois ele ficará disponível para adoção."
      btnText="Adicionar"
      handleSubmit={registerPet}
    />
  );
};

export default AddPet;
