import styled from "styled-components";
import consent from "../../assets/images/icon-check.svg";
import { Link } from "react-router-dom";

export const Wrapper = styled.div`
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.purple};
`;

export const Array = styled.div`
  position: absolute;
  width: 480px;
  max-width: 90%;
  height: 570px;
  max-height: 85%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${({ theme }) => theme.colors.white};
  border: solid 3px ${({ theme }) => theme.colors.black};
  border-radius: 20px;
  box-shadow: 0 8px 0 0 ${({ theme }) => theme.colors.black};
  padding: 30px 15px;

  @media (min-height: 650px) {
    max-height: 90%;
  }

  h1,
  h2 {
    text-transform: uppercase;
  }

  h1 {
    font-size: ${({ theme }) => theme.fontSize.xxl};
    align-self: center;
    text-align: center;

    @media (min-height: 650px) {
      font-size: ${({ theme }) => theme.fontSize.xxxl};
    }
  }

  h2 {
    color: ${({ theme }) => theme.colors.purple};
    font-size: ${({ theme }) => theme.fontSize.l};
    margin: 16px 0 16px 0;

    @media (min-height: 650px) {
      margin: 30px 0 16px 0;
    }
  }

  p,
  ol {
    font-size: ${({ theme }) => theme.fontSize.s};
    font-weight: bold;

    @media (min-height: 650px) {
      font-size: ${({ theme }) => theme.fontSize.m};
    }
  }

  ol {
    list-style: none;

    span {
      padding-right: 5px;
    }

    li {
      margin-bottom: 5px;
    }
  }
`;

export const Button = styled(Link)`
  position: absolute;
  background-image: url(${consent});
  width: 76px;
  height: 76px;
  border: none;
  background-repeat: no-repeat;
  left: 50%;
  bottom: -38px;
  transform: translateX(-50%);
`;
