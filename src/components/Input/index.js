import React from 'react';
import * as S from './styles';

const Input = ({
  label,
  type,
  name,
  placeholder,
  value,
  handleOnChange,
  multiple,
}) => {
  return (
    <S.InputContainer>
      <label htmlFor={name}>{label}*</label>
      <input
        type={type}
        name={name}
        id={name}
        value={value}
        onChange={handleOnChange}
        placeholder={placeholder}
        {...(multiple ? { multiple } : '')}
      />
    </S.InputContainer>
  );
};

export default Input;
