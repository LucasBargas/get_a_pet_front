import styled from 'styled-components';

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;

  label {
    margin-bottom: .25rem;
    font-weight: bold;
    font-size: .875rem;
    color: ${({ theme }) => theme.colors.blueColor};
  }

  input {
    padding: .75rem;
    border: 1px solid ${({ theme }) => theme.colors.darkGrey};

    &::placeholder {
      color: #7b7b7b;
      font-size: .875rem;
    }
  }
`;
