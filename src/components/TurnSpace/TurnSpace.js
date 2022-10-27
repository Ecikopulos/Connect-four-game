import styled from "styled-components";
import red from "../../assets/images/turn-background-red.svg";
import yellow from "../../assets/images/turn-background-yellow.svg";

export const TurnSpace = styled.div`
  background-image: ${({ isTurn }) =>
    isTurn === "red" ? `url(${red}` : `url(${yellow}`} );
  transition: 0.2s background-image;
  width: 197px;
  height: 165px;
  position: absolute;
  left: 50%;
  top: ${({ theme }) => theme.boardPosition.mobile + 290 + "px"};
  transform: translateX(-50%);
  color: white;
  text-transform: uppercase;
  text-align: center;
  padding-top: 50px;
  z-index: 1;

  h1 {
    font-size: ${({ theme }) => theme.fontSize.xxxl};
    text-transform: lowercase;
  }

  @media(min-width: 730px) {
    top: ${({ theme }) => theme.boardPosition.tablet + 564 + "px"};
  }


  @media (min-width: 1000px) {
    top: ${({ theme }) => theme.boardPosition.desktop + 564 + "px"};
  }

  @media (min-width: 1000px) and (max-height: 845px) {
    top: ${({ theme }) => theme.boardPosition.desktop + 290 + "px"};
  }
`;
