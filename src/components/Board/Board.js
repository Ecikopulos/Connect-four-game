import React from "react";
import styled from "styled-components";
import whiteBoardImg from "../../assets/images/board-layer-white-small.svg";
import blackBoardImg from "../../assets/images/board-layer-black-small.svg";
import BigWhiteBoardImg from "../../assets/images/board-layer-white-large.svg";
import BigBlackBoardImg from "../../assets/images/board-layer-black-large.svg";

const Wrapper = styled.div`
  div {
    position: absolute;
    width: 335px;
    left: 50%;
    top: ${({ theme }) => theme.boardPosition.mobile + "px"};
    transform: translateX(-50%);

    @media (min-width: 730px) {
      width: 632px;
      top: ${({ theme }) => theme.boardPosition.tablet + "px"};
    }

    @media (min-width: 1000px) {
      width: 632px;
      top: ${({ theme }) => theme.boardPosition.desktop + "px"};
    }

    @media (min-width: 1000px) and (max-height: 845px) {
      width: 335px;
    }
  }
`;

const WhiteBoard = styled.div`
  background-image: url(${whiteBoardImg});
  height: 310px;
  z-index: 1;

  @media (min-width: 730px) {
    background-image: url(${BigWhiteBoardImg});
    height: 584px;
  }

  @media (min-width: 1000px) and (max-height: 845px) {
    background-image: url(${whiteBoardImg});
    height: 310px;
  } ;
`;

const BlackBoard = styled.div`
  background-image: url(${blackBoardImg});
  height: 320px;
  z-index: -1;

  @media (min-width: 730px) {
    background-image: url(${BigBlackBoardImg});
    height: 594px;
  }

  @media (min-width: 1000px) and (max-height: 845px) {
    background-image: url(${blackBoardImg});
    height: 320px;
  } ;
`;

const Board = () => {
  return (
    <Wrapper>
      <BlackBoard />
      <WhiteBoard />
    </Wrapper>
  );
};

export default Board;
