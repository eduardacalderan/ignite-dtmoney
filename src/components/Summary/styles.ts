import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  margin-top: -6.7rem;

  div {
    background-color: var(--shape);
    padding: 1.5625rem 2rem;
    border-radius: 0.3125rem;
    color: var(--title);

    header {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    strong {
      display: block;
      margin-top: 1rem;
      font-size: 2rem;
      font-weight: 500;
      line-height: 3.375rem;
    }

    &.green-background {
      background-color: var(--green);
      color: #fff;
    }
  }

  @media (max-width: 888px) {
    grid-template-columns: none;
    max-width: 870px;
    margin: 0 auto;
  }
`;
