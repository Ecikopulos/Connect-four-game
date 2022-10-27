import React from 'react';
import { Array, Button, Wrapper } from "./rules.styles";

const Rules = () => {
  return (
    <Wrapper>
      <Array>
        <h1>rules</h1>
        <h2>objective</h2>
        <p>Be the first player to connect 4 of the same colored discs in a row (either
          vertically, horizontally, or diagonally).</p>
        <h2>how to play</h2>
        <ol>
          <li><span>1</span> Red goes first in the first game</li>
          <li><span>2</span> Players must alternate turns, and only one disc can be dropped in each turn</li>
          <li><span>3</span> The game ends when there is a 4-in-a-row or a stalemate</li>
          <li><span>4</span>The starter of the previous game goes second on the next game</li>
        </ol>
        <Button to='/'/>
      </Array>
    </Wrapper>
  );
};

export default Rules;
