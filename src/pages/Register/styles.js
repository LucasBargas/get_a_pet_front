import styled, { css } from 'styled-components';

export const FormContainer = styled.section`
  max-width: 450px;
  margin: 0 auto;
  background: ${({ theme }) => theme.colors.lightColor};

  button {
    display: block;
    border: none;
    font-weight: bold;
    width: 100%;
    padding: .5rem;
    font-size: 1rem;
    background: ${({ theme }) => theme.colors.greenColor};
    color: ${({ theme }) => theme.colors.lightColor};
    transition: .4s;

    &:hover {
      background: #25b468;
    }

    ${({ loading }) =>
      loading &&
      css`
      cursor: wait;
    `}
  }

  p {
    margin-bottom: 1rem;
  }
`;

export const Redirect = styled.div`
  margin-top: 1rem;

  a:hover {
    text-decoration: underline;
  }
`;
