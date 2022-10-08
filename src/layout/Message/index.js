import React, { useEffect, useState } from 'react';
import bus from '../../utils/bus';
import * as S from './styles';

const Message = () => {
  const [visibiliy, setVisibility] = useState(false);
  const [msg, setMsg] = useState('');
  const [type, setType] = useState('oi');

  useEffect(() => {
    bus.addListener('flash', ({ message, type }) => {
      setVisibility(true);
      setMsg(message);
      setType(type);

      setTimeout(() => {
        setVisibility(false);
      }, 3000);
    });
  }, []);

  return (
    <>
      {visibiliy && (
        <S.MessageContainer className={type}>{msg}</S.MessageContainer>
      )}
    </>
  );
};

export default Message;
