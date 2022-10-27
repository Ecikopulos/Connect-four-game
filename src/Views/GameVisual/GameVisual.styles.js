import styled from "styled-components";
import { Logo } from "../../components/logo/Logo";
import player1 from "../../assets/images/player-one.svg";
import player2 from "../../assets/images/player-two.svg";
import computer from "../../assets/images/cpu.svg";

export const FakeElement = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  z-index: 25;
`;

export const Wrapper = styled.div`
  position: relative;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.purple};
  overflow-y: hidden;
  z-index: 10;

  ${Logo} {
    top: 50px;
    left: 50%;
    transform: translate(-50%, -20%);
  }

  @media (max-height: 730px) {
    height: 140vh;
  }

  @media (max-height: 750px) {
    ${Logo} {
      top: 20px;
    }
  }

  @media (min-width: 730px) {
    ${Logo} {
      top: 30px;
    }
  }

  @media (min-width: 1000px) {
    ${Logo} {
      top: 30px;
    }
  }

  @media (min-width: 1000px) and (max-height: 845px) {
    height: 100vh;
  }
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  position: absolute;
  top: 50px;
  left: 50%;
  transform: translateX(-50%);

  @media (max-height: 750px) {
    top: 20px;
  }

  @media (min-width: 730px) {
    top: 25px;
  }

  @media (min-width: 1000px) {
    top: 25px;
  }
`;

export const ScoreWrapper = styled.div`
  display: flex;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 100px;

  @media (max-height: 750px) {
    top: 70px;
  }

  @media (min-width: 730px) {
    top: 80px;
  }

  @media (min-width: 1000px) {
    top: 40%;
    transform: translate(-50%, -50%);
  }

  @media (min-width: 1000px) and (max-height: 845px) {
    top: 300px;
  }
`;

export const Icon = styled.div`
  width: 54px;
  height: 59px;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  background-image: ${({ isPlayer1, isComputer }) =>
    isPlayer1
      ? `url(${player1})`
      : isComputer
      ? `url(${computer})`
      : `url(${player2})`};
  left: ${({ isPlayer1 }) => (isPlayer1 ? "0" : "100%")};

  @media (min-width: 1000px) {
    top: 0;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

export const Shadow = styled.div`
  position: absolute;
  border-radius: 60px;
  top: ${({ theme }) => theme.boardPosition.mobile + 300 + "px"};
  background-color: ${({ theme }) => theme.colors.darkPurple};
  width: 100%;
  height: 100%;
  z-index: -3;

  @media (min-width: 730px) {
    top: ${({ theme }) => theme.boardPosition.tablet + 550 + "px"};
  }
  @media (min-width: 1000px) {
    top: ${({ theme }) => theme.boardPosition.desktop + 550 + "px"};
  }

  @media (min-width: 1000px) and (max-height: 845px) {
    top: ${({ theme }) => theme.boardPosition.mobile + 200 + "px"};
    //430
  }
`;
