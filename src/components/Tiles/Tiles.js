import React, { useEffect, useState } from "react";
import {
  PlayArea,
  DivRowItem,
  DivRow,
  DivRowItemClick,
  DivRowClick,
  ClickArea,
  Marker,
} from "./Tiles.styles";

let array = [];
let firstRender = true;
let winner = false;
const initialRow = {
  0: [],
  1: [],
  2: [],
  3: [],
  4: [],
  5: [],
  6: [],
};

const Tiles = ({
  restart,
  turn,
  setTurn,
  setWinner,
  setTime,
  type,
  setComputerMove,
}) => {
  const [row, setRow] = useState(initialRow);
  const [index, setIndex] = useState(-1);
  const [cpuTurn, setCpuTurn] = useState(false);
  const fakeArray = ["", "", "", "", "", ""];

  const handleCheck = (array) => {
    return new Set(array).size === 1;
  };

  const addCounter = (rowNumber) => {
    if (row[rowNumber].length < 6) {
      setRow((prevState) => {
        return {
          ...prevState,
          [rowNumber]: [...row[rowNumber], turn],
        };
      });
      setTime(15);
      if (turn === "yellow") {
        setTurn("red");
      } else {
        setTurn("yellow");
      }
      if (type === "computer") {
        setComputerMove(true);
        setCpuTurn((prevState) => !prevState);
      }
    }
    setIndex(rowNumber);
  };

  useEffect(() => {
    firstRender = true;
  }, []);

  useEffect(() => {
    setRow(initialRow);
    setTurn("red");
    winner = false;
  }, [restart]);

  useEffect(() => {
    if (
      row[0].length === 6 &&
      row[1].length === 6 &&
      row[2].length === 6 &&
      row[3].length === 6 &&
      row[4].length === 6 &&
      row[5].length === 6 &&
      row[6].length === 6
    ) {
      return setWinner("draw");
    }
  }, [turn]);

  useEffect(() => {
    if (!firstRender && index !== -1 && winner === false) {
      array = row[index].slice();
      array = array.slice(array.length - 1);

      if (row[index].length === 4) {
        const check = handleCheck(row[index]);
        if (check === true) {
          winner = true;
          return setWinner(row[index][3]);
        }
        setIndex(-1);
        return;
      }
      if (row[index].length === 5) {
        let array = row[index];
        array = array.slice(1);
        const check = handleCheck(array);
        if (check === true) {
          winner = true;
          return setWinner(row[index][3]);
        }
        setIndex(-1);
        return;
      }
      if (row[index].length === 6) {
        let array = row[index];
        array = array.slice(2);
        const check = handleCheck(array);
        if (check === true) {
          winner = true;
          return setWinner(row[index][3]);
        }
        setIndex(-1);
        return;
      }

      //check WinCon in +3 range
      if (index === 0 || index === 1 || index === 2 || index === 3) {
        if (row[index].length > 0) {
          array = row[index].slice();
          array = array.slice(array.length - 1);
          array.push(
            row[index + 1][row[index].length - 1],
            row[index + 2][row[index].length - 1],
            row[index + 3][row[index].length - 1]
          );
          const check = handleCheck(array);
          if (check === true) {
            winner = true;
            return setWinner(array[array.length - 1]);
          }
          setIndex(-1);
        }
      }
      //checkWinCon in -1 and +2 range
      if (index === 1 || index === 2 || index === 3 || index === 4) {
        if (row[index].length > 0) {
          array = row[index].slice();
          array = array.slice(array.length - 1);
          array.push(
            row[index - 1][row[index].length - 1],
            row[index + 1][row[index].length - 1],
            row[index + 2][row[index].length - 1]
          );
          const check = handleCheck(array);
          if (check === true) {
            winner = true;
            return setWinner(array[array.length - 1]);
          }
          setIndex(-1);
        }
      }
      //checkWinCon in -2 and +1 range
      if (index === 2 || index === 3 || index === 4 || index === 5) {
        if (row[index].length > 0) {
          array = row[index].slice();
          array = array.slice(array.length - 1);
          array.push(
            row[index - 2][row[index].length - 1],
            row[index - 1][row[index].length - 1],
            row[index + 1][row[index].length - 1]
          );
          const check = handleCheck(array);
          if (check === true) {
            winner = true;
            return setWinner(array[array.length - 1]);
          }
          setIndex(-1);
        }
      }
      //checkWinCon in -3 range
      if (index === 6 || index === 5 || index === 4 || index === 3) {
        if (row[index].length > 0) {
          array = row[index].slice();
          array = array.slice(array.length - 1);
          array.push(
            row[index - 3][row[index].length - 1],
            row[index - 2][row[index].length - 1],
            row[index - 1][row[index].length - 1]
          );
          const check = handleCheck(array);
          if (check === true) {
            winner = true;
            return setWinner(array[array.length - 1]);
          }
          setIndex(-1);
        }
      }
    }
  }, [index]);

  const equals = (a, b) => JSON.stringify(a) === JSON.stringify(b);

  useEffect(() => {
    let compare;
    let a;
    let b;
    if (!firstRender && winner === false) {
      for (let i = 0; i < 7; i++) {
        for (let x = 0; x < 3; x++) {
          a = row[i];
          a = row[i].slice(x);
          b = ["yellow", "yellow", "yellow"];
          compare = equals(a, b);
          if (compare) {
            setRow((prevState) => {
              return {
                ...prevState,
                [i]: [...row[i], turn],
              };
            });
            setTurn("red");
            setIndex(i);
            return setComputerMove(false);
          }
        }

        for (let x = 0; x < 3; x++) {
          a = row[i];
          a = row[i].slice(x);
          b = ["red", "red", "red"];
          compare = equals(a, b);
          if (compare) {
            setRow((prevState) => {
              return {
                ...prevState,
                [i]: [...row[i], turn],
              };
            });
            setTurn("red");
            setIndex(i);
            return setComputerMove(false);
          }
        }
      }

      const randomRow = Math.floor(Math.random() * 7);
      if (row[randomRow].length < 6) {
        setRow((prevState) => {
          return {
            ...prevState,
            [randomRow]: [...row[randomRow], turn],
          };
        });
      } else {
        return setCpuTurn((prevState) => !prevState);
      }
      setTurn("red");
      setIndex(randomRow);
    } else if (winner === true) {
      winner = false;
    }
    setComputerMove(false);
  }, [cpuTurn]);

  useEffect(() => {
    firstRender = false;
  }, []);

  return (
    <>
      <PlayArea>
        <DivRow>
          {row[0].map((item) => (
            <DivRowItem isCounter={item}></DivRowItem>
          ))}
        </DivRow>

        <DivRow>
          {row[1].map((item) => (
            <DivRowItem isCounter={item}></DivRowItem>
          ))}
        </DivRow>

        <DivRow>
          {row[2].map((item) => (
            <DivRowItem isCounter={item}></DivRowItem>
          ))}
        </DivRow>

        <DivRow>
          {row[3].map((item) => (
            <DivRowItem isCounter={item}></DivRowItem>
          ))}
        </DivRow>

        <DivRow>
          {row[4].map((item) => (
            <DivRowItem isCounter={item}></DivRowItem>
          ))}
        </DivRow>

        <DivRow>
          {row[5].map((item) => (
            <DivRowItem isCounter={item}></DivRowItem>
          ))}
        </DivRow>

        <DivRow>
          {row[6].map((item) => (
            <DivRowItem isCounter={item}></DivRowItem>
          ))}
        </DivRow>
      </PlayArea>
      <ClickArea>
        <DivRowClick onClick={() => addCounter(0)}>
          <Marker isTurn={turn} />
          {fakeArray.map((item) => (
            <DivRowItemClick isCounter={item}></DivRowItemClick>
          ))}
        </DivRowClick>

        <DivRowClick onClick={() => addCounter(1)}>
          <Marker isTurn={turn} />
          {fakeArray.map((item) => (
            <DivRowItemClick isCounter={item}></DivRowItemClick>
          ))}
        </DivRowClick>

        <DivRowClick onClick={() => addCounter(2)}>
          <Marker isTurn={turn} />
          {fakeArray.map((item) => (
            <DivRowItemClick isCounter={item}></DivRowItemClick>
          ))}
        </DivRowClick>

        <DivRowClick onClick={() => addCounter(3)}>
          <Marker isTurn={turn} />
          {fakeArray.map((item) => (
            <DivRowItemClick isCounter={item}></DivRowItemClick>
          ))}
        </DivRowClick>

        <DivRowClick onClick={() => addCounter(4)}>
          <Marker isTurn={turn} />
          {fakeArray.map((item) => (
            <DivRowItemClick isCounter={item}></DivRowItemClick>
          ))}
        </DivRowClick>

        <DivRowClick onClick={() => addCounter(5)}>
          <Marker isTurn={turn} />
          {fakeArray.map((item) => (
            <DivRowItemClick isCounter={item}></DivRowItemClick>
          ))}
        </DivRowClick>

        <DivRowClick onClick={() => addCounter(6)}>
          <Marker isTurn={turn} />
          {fakeArray.map((item) => (
            <DivRowItemClick isCounter={item}></DivRowItemClick>
          ))}
        </DivRowClick>
      </ClickArea>
    </>
  );
};

export default Tiles;
