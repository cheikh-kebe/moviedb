import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  max-width: 300px;
  margin: 0 auto;
  padding: 20px;
  color: var(--lightBlack);

  input {
    margin: 10px 0;
    padding: 10px;
    width: 100%;
    height: 40px;
    border: 2px solid var(--darkGrey);
    border-radius: 10px;
  }

  button {
    width: 80%;
  }

  .error {
    color: var(--red);
  }
`;
