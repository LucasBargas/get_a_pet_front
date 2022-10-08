import styled, { css } from 'styled-components';

const PetPhotosRow = styled.section`
  display: flex;
  gap: .25rem;
  flex-wrap: wrap;
  
  ${({ noRow }) =>
    noRow &&
    css`

    flex-wrap: nowrap;
    justify-content: center;
  `}
`;

export default PetPhotosRow;
