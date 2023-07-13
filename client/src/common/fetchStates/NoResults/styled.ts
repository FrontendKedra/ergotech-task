import styled from "styled-components";
import { ReactComponent as Icon } from "./icons/NoResult.svg";

export const Wrapper = styled.div`
  display: grid;
  justify-items: center;
  margin-top: 25vh;
  gap: 6px;
`;

export const Header = styled.header`
  font-weight: 500;
  font-size: 26px;
  color: ${({ theme }) => theme.colors.black};
  text-align: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.largest}) {
    font-size: 22px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
    font-size: 20px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    font-size: 18px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    font-size: 16px;
  }
`;

export const Image = styled(Icon)`
  width: 440px;
  height: 290px;

  @media (max-width: ${({ theme }) => theme.breakpoints.largest}) {
    width: 380px;
    height: 250px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
    width: 334px;
    height: 220px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    width: 257px;
    height: 180px;
  }
`;
