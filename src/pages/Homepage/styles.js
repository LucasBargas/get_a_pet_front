import styled from 'styled-components';

export const HomepageContainer = styled.section`
  h1 {
    margin-bottom: .5rem;
  }
`;

export const HomepageShowcase = styled.div`
  padding-top: 2.325rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem 2rem;

  @media (max-width: 900px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 700px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 500px) {
    max-width: 80%;
    margin: 0 auto;
    grid-template-columns: 1fr;
  }

  @media (max-width: 420px) {
    max-width: 90%;
    margin: 0 auto;
    grid-template-columns: 1fr;
  }

  @media (max-width: 400px) {
    max-width: 100%;
    margin: 0 auto;
    grid-template-columns: 1fr;
  }
`;

export const PetCard = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;

  h2 {
    color: ${({ theme }) => theme.colors.blueColor};
    margin-bottom: 1rem;
    font-size: 1.5rem;
  }

  a {
    margin-top: .75rem;
    font-size: 1rem;
    background: ${({ theme }) => theme.colors.yellowColor};
    color: ${({ theme }) => theme.colors.blueColor};
    font-weight: bold;
    padding: .875rem .8rem;
    border-radius: 5px;
    transition: .4s;

    &:hover {
      color: ${({ theme }) => theme.colors.lightColor};
      background: #FFD400;
    }
  }
`;

export const PetCardPhoto = styled.div`
  width: 100%;
  height: 225px;
  background-size: cover;
  background-position: center;
  background-image: url(${({ photo }) => photo});
  border-radius: 4px;
  margin-bottom: 1rem;
`;

export const AdoptedFlag = styled.p`
  color: ${({ theme }) => theme.colors.greenColor};
  font-weight: bold;
  margin-top: .75rem;
  padding: .875rem .8rem;
  font-size: 1rem;
`;
