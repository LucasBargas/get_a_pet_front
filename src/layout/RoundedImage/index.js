import React from 'react';
import RoundedImageContainer from './styles';

const RoundedImage = ({ src, alt, wh }) => {
  return (
    <RoundedImageContainer wh={wh}>
      <img src={src} alt={alt} />
    </RoundedImageContainer>
  );
};

export default RoundedImage;
