import styled from "styled-components";

export const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: ${({ theme }) => theme.primary};
  height: 100%;
  text-align: left;
  padding: 1rem;
  position: absolute;
  z-index: 101;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};

  @media (max-width: ${({ theme }) => theme.small}) {
    width: 60%;
    padding: 0;
  }
  a {
    font-size: 1rem;
    text-transform: uppercase;
    padding: 1rem 0;
    font-weight: bold;
    color: ${({ theme }) => theme.color};
    text-decoration: none;
    transition: color 0.3s linear;

    @media (max-width: ${({ theme }) => theme.small}) {
      font-size: 35px;
      text-align: center;
    }

    &:hover {
      color: ${({ theme }) => theme.heroTitle};
    }
  }
`;
