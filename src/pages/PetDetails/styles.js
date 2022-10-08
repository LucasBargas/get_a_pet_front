import styled from 'styled-components';

export const PetContainer = styled.section`
  text-align: center;

  h1 {
    margin-bottom: .5rem;
  }

  p {
    margin-bottom: 1rem;
  }

  button {
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

  a:hover {
    text-decoration: underline;
  }
`;

export const PetPhotos = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  object-fit: cover;
  margin-bottom: 1rem;
  gap: .75rem;

  img {
    border-radius: 4px;
    max-height: 430px;
  }
`;
