import styled, { css } from 'styled-components';

export const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1.5rem;
  height: 5.25rem;
  background: ${({ theme }) => theme.colors.yellowColor};
`;

export const HeaderContainerLogo = styled.div`
  a {
    display: flex;
    align-items: center;

    img {
      display: block;
      width: 3.25rem;
    }

    span {
      font-size: 1.5rem;
      margin-left: .75rem;
    }
  }
`;

export const HeaderContainerNav = styled.nav`
  ul {
    display: flex;
    align-items: center;

    li {
      margin-left: .5rem;

      @media (max-width: 820px) {
        margin: 0;
        display: flex;
        justify-content: center;
        text-align: center;
      }

      a {
        display: block;
        padding: .5rem .8rem;
        font-weight: bold;
        color: ${({ theme }) => theme.colors.blueColor};
        transition: .3s;

        &:hover, &.active {
          background: ${({ theme }) => theme.colors.blueColor};
          color: ${({ theme }) => theme.colors.lightColor};
          border-radius: 5px;

          @media (max-width: 820px) {
            border-radius: 0;
          }
        }

        @media (max-width: 820px) {
          width: 100%;
          padding: 1rem .8rem;
        }
      }

      button {
        display: flex;
        align-items: center;
        justify-content: center;
        border: none;
        border-radius: 100%;
        height: 40px;
        width: 40px;
        background: transparent;
        color: ${({ theme }) => theme.colors.blueColor};
        font-size: 1.5rem;
        transition: .3s;

        &:hover {
          background: ${({ theme }) => theme.colors.blueColor};
          color: ${({ theme }) => theme.colors.lightColor};
        }
      }
    }

    @media (max-width: 820px) {
      display: block;
      position: fixed;
      left: 0;
      top: 5.25rem;
      width: 100%;
      height: 0;
      overflow-y: hidden;
      visibility: hidden;
      text-align: center;
      background: #f5d325;
      padding: 1rem 0 0 0;
      transition: .3s;

      ${({ open }) =>
        open &&
        css`
        height: 100vh;
        visibility: visible;
        transition: .3s;
      `}
    }
  }
`;

export const ButtonMobile = styled.button`
  display: none;
  padding: .25rem 0 .25rem .25rem;
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.blueColor};
  background: transparent;

  @media (max-width: 820px) {
    display: block;
  }
`;
