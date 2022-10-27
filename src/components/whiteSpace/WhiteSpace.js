import styled from "styled-components";

export const WhiteSpace = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  border: solid 3px ${({ theme }) => theme.colors.black};
  border-radius: 20px;
  box-shadow: 0 8px 0 0 ${({ theme }) => theme.colors.black};
  padding: 10px 36px;
  width: 169px;
  height: 81px;
  text-align: center;
  font-weight: bold;
  position: relative;
  text-transform: uppercase;
  margin-inline: 10px;

  h2 {
    font-size: ${({ theme }) => theme.fontSize.xxl};
  }

  &:last-child {
    flex-direction: row-reverse;
  }

  @media (max-width: 410px) {
    width: 150px;
  }

  @media (max-width: 370px) {
    width: 125px;
    height: 100px;
  }

  @media (min-width: 730px) {
    width: 250px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;

    h2 {
      font-size: ${({ theme }) => theme.fontSize.xxxl};
    }

    p {
      font-size: ${({ theme }) => theme.fontSize.l};
    }
  }

  @media (min-width: 1000px) {
    margin-inline: 330px;
    width: 160px;
    height: 200px;
    flex-direction: column;
    padding: 30px;

    &:last-child {
      flex-direction: column;
    }
  }

  @media (min-width: 1000px) and (max-height: 845px) {
    margin-inline: 200px;
  }
`;
