import styled from "styled-components";

export const InputWrapper = styled.section`
  display: grid;
  justify-items: center;
  grid-template-columns: 1fr;
  color: ${({ theme }) => theme.colors.white};
  padding: 12px 0 36px 0;
  background-color: black;
  margin-bottom: 46px;

  @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
    padding: 10px 0 28px 0;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    padding: 8px 0 22px 0;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    padding: 6px 0 16px 0;
  }
`;

export const Title = styled.h1`
  margin: 0 0 24px 0;
  font-size: 36px;

  @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
    margin: 0 0 18px 0;
    font-size: 30px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    margin: 0 0 14px 0;
    font-size: 24px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    margin: 0 0 10px 0;
    font-size: 18px;
  }
`;

export const Search = styled.h2`
  font-size: 26px;
  width: 100%;
  display: flex;
  justify-content: center;
  padding-top: 24px;
  margin: 0 0 12px 0;
  border-top: 1px solid ${({ theme }) => theme.colors.white};

  @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
    margin: 0 0 8px 0;
    padding-top: 18px;
    font-size: 20px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    margin: 0 0 6px 0;
    padding-top: 14px;
    font-size: 16px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    margin: 0 0 4px 0;
    padding-top: 10px;
    font-size: 14px;
  }
`;

export const Input = styled.input`
  font-size: 16px;
  padding: 6px;
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.colors.silver};

  @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
    font-size: 14px;
    padding: 4px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    font-size: 12px;
    padding: 3px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    padding: 2px;
  }
`;
