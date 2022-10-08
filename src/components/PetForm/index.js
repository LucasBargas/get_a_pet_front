import React, { useState } from 'react';
import RoundedImage from '../../layout/RoundedImage';
import * as S from '../../pages/Register/styles';
import Input from '../Input';
import Select from '../Select';
import PetPhotosRow from './styles';

const PetForm = ({
  handleSubmit,
  loading,
  title,
  paragraph = false,
  petData,
  btnText,
}) => {
  const [pet, setPet] = useState(petData || {});
  const [preview, setPreview] = useState([]);
  const colors = ['Branco', 'Preto', 'Cinza', 'Caramelo', 'Mesclado'];

  const onFileChange = (e) => {
    setPreview(Array.from(e.target.files));
    setPet({ ...pet, images: [...e.target.files] });
  };

  const handleChange = (e) => {
    setPet({ ...pet, [e.target.name]: e.target.value });
  };

  const handleColor = (e) => {
    setPet({ ...pet, color: e.target.options[e.target.selectedIndex].text });
  };

  const submit = async (e) => {
    e.preventDefault();
    await handleSubmit(pet);
  };

  return (
    <S.FormContainer loading={loading}>
      <h1>{title}</h1>
      {paragraph && <p>{paragraph}</p>}

      <PetPhotosRow
        noRow={
          preview.length === 1 || (pet.images && pet.images.length === 1)
            ? true
            : false
        }
      >
        {preview.length > 0
          ? preview.map((image, index) => (
              <RoundedImage
                wh="80"
                src={URL.createObjectURL(image)}
                alt={pet.name}
                key={`${pet.name}+${index}`}
              />
            ))
          : 'images' in pet &&
            pet.images.map((image, index) => (
              <RoundedImage
                wh="80"
                // eslint-disable-next-line no-undef
                src={`${process.env.REACT_APP_API}/images/pets/${image}`}
                alt={pet.name}
                key={`${pet.name}+${index}`}
              />
            ))}
      </PetPhotosRow>

      <form onSubmit={submit}>
        <Input
          label="Fotos dos Pets"
          type="file"
          name="images"
          handleOnChange={onFileChange}
          multiple={true}
        />
        <Input
          label="Nome do Pet"
          type="text"
          name="name"
          placeholder="Digite o nome do pet"
          value={pet.name || ''}
          handleOnChange={handleChange}
        />
        <Input
          label="Idade do Pet"
          type="number"
          name="age"
          placeholder="Digite a idade do pet"
          value={pet.age || ''}
          handleOnChange={handleChange}
        />
        <Input
          label="Peso do Pet"
          type="number"
          name="weight"
          placeholder="Digite o peso do pet"
          value={pet.weight || ''}
          handleOnChange={handleChange}
        />
        <Select
          label="Selecione a cor do pet"
          name="color"
          options={colors}
          value={pet.color || ''}
          handleOnChange={handleColor}
        />
        <button type="submit" disabled={loading}>
          {loading ? 'Carregando...' : btnText}
        </button>
      </form>
    </S.FormContainer>
  );
};

export default PetForm;
