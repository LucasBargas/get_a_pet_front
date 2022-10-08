import React from 'react';
import NotFoundContainer from './styles';
import sadDog from '../../assets/images/sad_dog.png';

const NotFound = () => {
  return (
    <NotFoundContainer>
      <figure>
        <img src={sadDog} alt="Página não encontrada" />
      </figure>
      <h2>Página não encontrada!</h2>
    </NotFoundContainer>
  );
};

export default NotFound;
