import styled from 'styled-components';

const RoundedImageContainer = styled.div`
  text-align: center;
  padding-bottom: 1rem;

  img {
    width: ${({ wh }) => (wh ? `${wh}px` : '200px')};
    height: ${({ wh }) => (wh ? `${wh}px` : '200px')};
    border-radius: 100%;
    object-fit: cover;
  }
`;

export default RoundedImageContainer;
