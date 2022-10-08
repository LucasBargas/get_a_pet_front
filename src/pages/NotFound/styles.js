import styled from 'styled-components';

const NotFoundContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 2.5rem 0;

  img {
    display: block;
    width: 100%;
    max-width: 200px;
  }

  h2 {
    margin-top: 1rem;
  }
`;

export default NotFoundContainer;
