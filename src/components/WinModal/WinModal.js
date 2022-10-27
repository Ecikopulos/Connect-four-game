import React from "react";
import styled from "styled-components";
import { Button } from "../Button/Button";

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  border: solid 3px ${({ theme }) => theme.colors.black};
  border-radius: 20px;
  box-shadow: 0 8px 0 0 ${({ theme }) => theme.colors.black};
  text-align: center;
  font-weight: bold;
  text-transform: uppercase;
  width: 285px;
  height: 175px;
  position: absolute;
  z-index: 20;
  left: 50%;
  top: ${({ theme }) => theme.boardPosition.mobile + 280 + "px"};
  transform: translateX(-50%);
  padding: 17px;

  h1 {
    font-size: ${({ theme }) => theme.fontSize.xxxl};
  }

  @media (min-width: 730px) {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    width: 385px;
    height: 275px;
    top: ${({ theme }) => theme.boardPosition.tablet + 460 + "px"};
  }

  @media (min-width: 1000px) {
    top: ${({ theme }) => theme.boardPosition.desktop + 460 + "px"};
  }
  @media (min-width: 1000px) and (max-height: 845px) {
    top: ${({ theme }) => theme.boardPosition.mobile + 100 + "px"};
  }
`;

const FakeElement = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  z-index: 19;
`;

const WinModal = ({ winner, setWinner, setRestart, setTime }) => {
  const handlePlayAgain = () => {
    setRestart((prevState) => !prevState);
    setWinner(null);
    setTime(17);
  };

  return (
    <FakeElement>
      <Wrapper>
        {winner === "red" ? (
          <p>player 1</p>
        ) : winner === "yellow" ? (
          <p>player 2</p>
        ) : null}
        {winner === "draw" ? <h1>draw</h1> : <h1>wins</h1>}
        <Button onClick={handlePlayAgain}>play again</Button>
      </Wrapper>
    </FakeElement>
  );
};

export default WinModal;
