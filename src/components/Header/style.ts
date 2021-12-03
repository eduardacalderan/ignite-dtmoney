import styled from "styled-components";

export const Container = styled.header`
  background-color: var(--blue);
`;

export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  padding: 2rem 1rem 8rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    background-color: var(--light-blue);
    color: white;
    font-size: 1rem;
    border: none;
    border-radius: 0.3125rem;
    padding: 0.75rem 2rem;
    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }

    @media (max-width: 420px) {
      margin-top: 3rem;
    }
  }

  @media (max-width: 420px) {
    display: flex;
    flex-direction: column;
    padding: 2rem 1rem 2rem;
  }
`;
