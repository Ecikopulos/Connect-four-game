import styled from 'styled-components';

export const MenuButton = styled.button`
  position: relative;
  cursor: pointer;
  width: 335px;
  max-width: 90%;
  height: 72px;
  text-transform: uppercase;
  color: ${({ theme, isRed }) =>
    isRed ? theme.colors.white : theme.colors.black};
  text-align: left;
  font-size: ${({ theme }) => theme.fontSize.m};
  font-weight: bold;
  border: solid 3px ${({ theme }) => theme.colors.black};
  border-radius: 20px;
  box-shadow: 0 8px 0 0 ${({ theme }) => theme.colors.black};
  margin-top: 30px;
  padding-left: 20px;
  background-color: ${({ theme, isRed, isYellow }) =>
    isRed
      ? theme.colors.red
      : isYellow
      ? theme.colors.yellow
      : theme.colors.white};
  transition: 0.3s transform;

  &:hover {
    transform: scale(1.1);
  }

  @media (min-width: 500px) {
    &:hover {
      transform: scale(1.2);
    }
  }
`;
