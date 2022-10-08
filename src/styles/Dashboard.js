import styled from 'styled-components';

export const PetsContainer = styled.section`
  #header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    a {
      background: ${({ theme }) => theme.colors.blueColor};
      color: ${({ theme }) => theme.colors.lightColor};
      font-weight: bold;
      padding: .5rem .8rem;
      border-radius: 5px;
      border: 2px solid transparent;
      transition: .4s;

      &:hover {
        border-color: ${({ theme }) => theme.colors.blueColor};
        color: ${({ theme }) => theme.colors.blueColor};
        background: ${({ theme }) => theme.colors.lightColor};
      }
    }
  }
`;

export const PetsArea = styled.div`
  p {
    margin-top: .25rem;
  }
`;

export const PetsShowcase = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding-top: 1.875rem;
`;

export const PetCard = styled.div`
  padding: 1rem 0;
  display: flex;
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme.colors.blueColor};

  span {
    margin-left: 1rem;
  }
`;

export const PetActions = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: .5rem;
  width: 100%;

  a, button {
    font-size: 1rem;
    background: ${({ theme }) => theme.colors.lightColor};
    color: ${({ theme }) => theme.colors.blueColor};
    font-weight: bold;
    padding: .5rem .8rem;
    border-radius: 5px;
    border: 2px solid ${({ theme }) => theme.colors.blueColor};
    transition: .4s;

    &:hover {
      color: ${({ theme }) => theme.colors.lightColor};
      background: ${({ theme }) => theme.colors.blueColor};
    }
  }
`;
