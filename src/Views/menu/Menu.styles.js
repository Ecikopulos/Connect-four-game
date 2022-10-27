import styled from "styled-components";
import { Logo } from "../../components/logo/Logo";
import playerIcon from "../../assets/images/player-vs-player.svg";
import cpuIcon from "../../assets/images/player-vs-cpu.svg";

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.purple};
  height: 100vh;
  position: relative;

  ${Logo} {
    top: 20%;
    left: 50%;
    transform: translateX(-50%);
  }

  @media (min-width: 500px) {
    position: absolute;
    width: 480px;
    height: 537px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border: solid 3px ${({ theme }) => theme.colors.black};
    border-radius: 20px;
    box-shadow: 0 8px 0 0 ${({ theme }) => theme.colors.black};
  } ;
`;

export const ButtonsContainer = styled.div`
  padding-top: 60%;
  width: 100%;
  text-align: center;
  @media (min-width: 500px) {
    padding-top: 190px;
  }
`;

export const Icon = styled.div`
  background-image: ${({ isPlayer }) =>
    isPlayer ? `url(${playerIcon}` : `url(${cpuIcon}`} );
  position: absolute;
  width: 82px;
  height: 46px;
  top: 50%;
  transform: translateY(-50%);
  right: 17px;
`;
