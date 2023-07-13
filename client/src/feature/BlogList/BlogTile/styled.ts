import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 4px;
  padding: 16px 24px;
  border: 1px solid ${({ theme }) => theme.colors.gray};

  @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
    gap: 8px;
    padding: 14px 20px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    gap: 6px;
    padding: 12px 16px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    gap: 4px;
    padding: 10px 16px;
  }
`;

export const Text = styled.span`
  font-weight: 500;
  font-size: 18px;
  color: ${({ theme }) => theme.colors.stormGray};
  margin: 0px;
  text-align: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
    font-size: 16px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    font-size: 14px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    font-size: 12px;
  }
`;

export const FullTitle = styled.h3`
  font-weight: 400;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.black};
  margin: 0;
  line-height: 120%;
  text-align: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
    font-size: 14px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    font-size: 12px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    font-size: 11px;
  }
`;

export const FullArticle = styled.article`
  font-weight: 400;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.black};
  margin: 0;
  line-height: 120%;
  text-align: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
    font-size: 14px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    font-size: 12px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    font-size: 11px;
  }
`;
