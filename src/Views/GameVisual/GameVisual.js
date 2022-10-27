import React, { useEffect, useState } from "react";
import Board from "../../components/Board/Board";
import {
  ButtonsWrapper,
  Icon,
  ScoreWrapper,
  Shadow,
  Wrapper,
  FakeElement,
} from "./GameVisual.styles";
import { Logo } from "../../components/logo/Logo";
import { Button } from "../../components/Button/Button";
import { Link, useParams } from "react-router-dom";
import { WhiteSpace } from "../../components/whiteSpace/WhiteSpace";
import { TurnSpace } from "../../components/TurnSpace/TurnSpace";
import Tiles from "../../components/Tiles/Tiles";
import WinModal from "../../components/WinModal/WinModal";

const GameVisual = () => {
  const { type } = useParams();

  const [restart, setRestart] = useState(false);
  const [computerMove, setComputerMove] = useState(false);
  const [turn, setTurn] = useState("red");
  const [score, setScore] = useState({
    red: 0,
    yellow: 0,
  });
  const [winner, setWinner] = useState(null);
  const [time, setTime] = useState(18);

  const handleRestart = () => {
    setRestart((prevState) => !prevState);
    setScore({
      red: 0,
      yellow: 0,
    });
    type === "multiplayer" ? setTime(17) : null;
  };

  useEffect(() => {
    if (winner === "red") {
      setScore((prevState) => ({
        ...prevState,
        red: prevState.red + 1,
      }));
    }
    if (winner === "yellow") {
      setScore((prevState) => ({
        ...prevState,
        yellow: prevState.yellow + 1,
      }));
    }
  }, [winner]);

  useEffect(() => {
    if (type === "multiplayer") {
      setInterval(() => {
        setTime((prevState) => prevState - 1);
      }, 1000);
    }
  }, []);

  useEffect(() => {
    if (time === 0 && turn === "red") {
      setTime(15);
      setTurn("yellow");
    }
    if (time === 0 && turn === "yellow") {
      setTime(15);
      setTurn("red");
    }
  }, [time]);

  return (
    <Wrapper>
      {computerMove ? <FakeElement /> : null}
      <ButtonsWrapper>
        <Link to="/">
          <Button>menu</Button>
        </Link>
        <Button onClick={handleRestart}>restart</Button>
      </ButtonsWrapper>
      <ScoreWrapper>
        <WhiteSpace>
          <p>player 1</p>
          <h2>{score.red}</h2>
          <Icon isPlayer1 />
        </WhiteSpace>
        <WhiteSpace>
          <p>player 2</p>
          <h2>{score.yellow}</h2>
          {type === "multiplayer" ? <Icon /> : <Icon isComputer />}
        </WhiteSpace>
      </ScoreWrapper>
      <Logo />
      <Board />
      <Tiles
        restart={restart}
        setTurn={setTurn}
        turn={turn}
        setWinner={setWinner}
        setTime={setTime}
        type={type}
        setComputerMove={setComputerMove}
      />
      {type === "multiplayer" ? (
        <TurnSpace isTurn={turn}>
          {turn === "red" ? <p>player 1's turn</p> : <p>player 2's turn</p>}
          <h1>{time}s</h1>
        </TurnSpace>
      ) : null}
      <Shadow />
      {winner !== null ? (
        <WinModal
          winner={winner}
          setWinner={setWinner}
          setRestart={setRestart}
          setTime={setTime}
        />
      ) : null}
    </Wrapper>
  );
};

export default GameVisual;
