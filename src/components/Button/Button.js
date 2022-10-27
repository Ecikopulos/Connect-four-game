import styled from "styled-components";

export const Button = styled.button`
  width: 108px;
  height: 39px;
  border: none;
  background-color: ${({ theme }) => theme.colors.darkPurple};
  color: white;
  text-transform: uppercase;
  border-radius: 20px;
  margin-inline: 30px;
  cursor: pointer;

  @media (min-width: 730px) {
    width: 140px;
    height: 50px;
    font-size: ${({ theme }) => theme.fontSize.l};
    margin-inline: 50px;
  }

  @media (min-width: 1000px) {
    margin-inline: 150px;
  }
  @media (min-width: 1000px) and (max-height: 845px) {
    margin-inline: 50px;
  }
`;
