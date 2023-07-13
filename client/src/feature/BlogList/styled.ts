import styled from "styled-components";

export const Container = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 48px;
  margin: 48px;

  @media (max-width: ${({ theme }) => theme.breakpoints.largest}) {
    grid-template-columns: repeat(3, 1fr);
    gap: 40px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
    grid-template-columns: repeat(2, 1fr);
    gap: 32px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    grid-template-columns: repeat(2, 1fr);
    gap: 26px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    gap: 24px;
    margin: 36px 80px;
    grid-template-columns: 1fr;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.smallest}) {
    gap: 20px;
    margin: 36px;
  }
`;
