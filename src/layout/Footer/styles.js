import styled from 'styled-components';

export const FooterContainer = styled.footer`
  display: flex;
  justify-content: center;
  padding: 3rem 1rem;
  box-shadow: 0px -3px 4px -4px rgba(102, 102, 102, .75);
  background: ${({ theme }) => theme.colors.lightGrey};
  color: ${({ theme }) => theme.colors.darkGrey};
`;
