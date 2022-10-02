import styled from "styled-components";

export const Wrapper = styled.div`
  background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0) 41%,
      rgba(0, 0, 0, 0) 100%
    ),
    url(${({ image }) => image}), var(--darkGrey);
  background-size: 100% cover;
  background-position: center;
  height: 600px;
  position: relative;
  animation: animateHeroImage 2s;

  @keyframes animateHeroImage {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @media screen and (max-width: 720px) {
    background-size: 100%;
    height: 300px;
  }
  @media screen and (max-width: 480px) {
    background-size: 700px;
  }
`;

export const Content = styled.div`
  padding: 20px;
  max-width: var(--maxWidth);
  margin: 0;
`;

export const Text = styled.div`
  border-radius: 20px;
  z-index: 100;
  max-width: 100%;
  position: absolute;
  bottom: 40px;
  padding: 8px;
  margin-right: 20px;
  min-height: 100px;
  color: var(--white);
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(12px);
  --webkit-backdrop-filter: blur(12px);

  h1 {
    font-size: var(--fontSuperBig);
    @media screen and (max-width: 720px) {
      font-size: var(--fontBig);
    }
  }
  p {
    font-size: var(--fontMedium);
    color: #161a1d;
    @media screen and (max-width: 720px) {
      font-size: var(--fontSmall);
    }
  }
`;
