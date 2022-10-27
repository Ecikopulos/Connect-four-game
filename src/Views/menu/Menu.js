import React from "react";
import { ButtonsContainer, Icon, Wrapper } from "./Menu.styles";
import { Logo } from "../../components/logo/Logo";
import { MenuButton } from "../../components/menuButton/MenuButton";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <Wrapper>
      <Logo />
      <ButtonsContainer>
        <Link to="/game/computer">
          <MenuButton isRed>
            play vs Cpu
            <Icon />
          </MenuButton>
        </Link>
        <Link to="/game/multiplayer">
          <MenuButton isYellow>
            play vs player
            <Icon isPlayer />
          </MenuButton>
        </Link>
        <Link to="/rules">
          <MenuButton>game rules</MenuButton>
        </Link>
      </ButtonsContainer>
    </Wrapper>
  );
};

export default Menu;
