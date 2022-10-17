import React from 'react';
import NotFoundContainer from './styles';
import sadDog from '../../assets/images/sad_dog.png';
import Head from '../../components/Head';

const NotFound = () => {
  return (
    <>
      <Head title="Adote um Pet - Página não encontrada" />
      <NotFoundContainer>
        <figure>
          <img src={sadDog} alt="Página não encontrada" />
        </figure>
        <h2>Página não encontrada!</h2>
      </NotFoundContainer>
    </>
  );
};

export default NotFound;
