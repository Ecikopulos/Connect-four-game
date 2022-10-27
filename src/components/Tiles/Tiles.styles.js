import styled, { keyframes } from "styled-components";
import counter from "../../assets/images/counter-red-small.svg";
import counterY from "../../assets/images/counter-yellow-small.svg";
import BigCounter from "../../assets/images/counter-red-large.svg";
import BigCounterY from "../../assets/images/counter-yellow-large.svg";
import selectRed from "../../assets/images/marker-red.svg";
import selectYellow from "../../assets/images/marker-yellow.svg";

const fallAnimation = keyframes`
  from {
    transform: translateY(-290px);
  }

  to {
    transform: translateY(0);
  }
`;

const fallAnimationBig = keyframes`
  from {
    transform: translateY(-690px);
  }

  to {
    transform: translateY(0);
  }
`;

export const Marker = styled.div`
  background-image: ${({ isTurn }) =>
    isTurn === "red" ? `url(${selectRed}` : `url(${selectYellow}`} );
  height: 40px;
  width: 38px;
  transform: ${({ theme }) =>
    `translateY(${-(240 + (320 - theme.boardPosition.mobile)) + "px"})`};
  display: none;

  @media(min-width: 730px) {
    transform: ${({ theme }) =>
      `translate(50% , ${-(240 + (524 - theme.boardPosition.mobile)) + "px"})`};
  }

  @media (min-width: 1000px) and (max-height: 845px) {
    transform: ${({ theme }) =>
      `translate(0% , ${-(240 + (280 - theme.boardPosition.mobile)) + "px"})`};
  }

`;

export const PlayArea = styled.div`
  position: absolute;
  z-index: 0;
  height: 310px;
  width: 335px;
  padding: 7px 7px 25px 7px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  left: 50%;
  top: ${({ theme }) => theme.boardPosition.mobile + "px"};
  transform: translateX(-50%);

  @media (min-width: 730px) {
    width: 632px;
    height: 584px;
    padding: 18px 18px 50px 18px;
    top: ${({ theme }) => theme.boardPosition.tablet + "px"};
  }

  @media (min-width: 1000px) {
    top: ${({ theme }) => theme.boardPosition.desktop + "px"};
  }

  @media (min-width: 1000px) and (max-height: 845px) {
    height: 310px;
    width: 335px;
    padding: 7px 7px 25px 7px;
  }
`;

export const DivRow = styled.div`
  width: 41px;
  display: flex;
  flex-direction: column-reverse;
  overflow: hidden;

  @media (min-width: 730px) {
    width: 70px;
  }

  @media (min-width: 1000px) and (max-height: 845px) {
    width: 41px;
  }
`;

export const DivRowItem = styled.div`
  background-image: ${({ isCounter }) =>
    isCounter === "red"
      ? `url(${counter})`
      : isCounter === "yellow"
      ? `url(${counterY})`
      : null};
  width: 41px;
  height: 46px;
  animation: ${fallAnimation} 0.2s linear;

  @media (min-width: 730px) {
    background-image: ${({ isCounter }) =>
      isCounter === "red"
        ? `url(${BigCounter})`
        : isCounter === "yellow"
        ? `url(${BigCounterY})`
        : null};
    width: 70px;
    height: 75px;
    margin-bottom: 13px;
    animation: ${fallAnimationBig} 0.2s linear;

    &:first-child {
      margin: 0;
    }
  }

  @media (min-width: 1000px) and (max-height: 845px) {
    background-image: ${({ isCounter }) =>
      isCounter === "red"
        ? `url(${counter})`
        : isCounter === "yellow"
        ? `url(${counterY})`
        : null};
    width: 41px;
    height: 46px;
    margin-bottom: 0;
    animation: ${fallAnimation} 0.2s linear;
  }
`;

export const ClickArea = styled.div`
  position: absolute;
  z-index: 9;
  width: 335px;
  height: 310px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  left: 50%;
  top: 271px;
  transform: translateX(-50%);
  padding: 7px 7px 25px 7px;

  @media (min-width: 730px) {
    width: 632px;
    height: 584px;
    padding: 18px 18px 50px 18px;
    top: 210px;
  }

  @media (min-width: 1000px) {
    top: 130px;
  }

  @media (min-width: 1000px) and (max-height: 845px) {
    top: 130px;
    height: 310px;
    width: 335px;
    padding: 7px 7px 25px 7px;
  }
`;

export const DivRowClick = styled.div`
  display: flex;
  flex-direction: column-reverse;
  cursor: pointer;

  &:hover ${Marker} {
    display: block;
  }
`;

export const DivRowItemClick = styled.div`
  width: 41px;
  height: 46px;
  color: transparent;

  @media (min-width: 730px) {
    width: 70px;
    height: 75px;
  }

  @media (min-width: 1000px) and (max-height: 845px) {
    width: 41px;
    height: 46px;
  }
`;
