import React from 'react';
import * as S from '../Input/styles';

const Select = ({ label, name, options, value, handleOnChange }) => {
  return (
    <S.InputContainer>
      <label htmlFor={name}>{label}*</label>
      <select
        name={name}
        id={name}
        value={value || ''}
        onChange={handleOnChange}
      >
        <option>Selecione uma opção</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </S.InputContainer>
  );
};

export default Select;
