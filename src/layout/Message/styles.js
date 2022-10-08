import styled, { css } from 'styled-components';

export const MessageContainer = styled.section`
  width: 60%;
  padding: 1em;
  margin: 1rem auto 0 auto;
  border: 1px solid ${({ theme }) => theme.colors.darkGrey};
  border-radius: 5px;
  text-align: center;

 &.success {
  color: ${({ theme }) => theme.colors.blueColor};
  border: 1px solid ${({ theme }) => theme.colors.blueColor};
 }

 &.error {
  color: tomato;
  border: 1px solid tomato;
 }

  @media (max-width: 600px) {
    width: 90%;
  }
`;
