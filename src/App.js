import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      FIRST_PLAYER_SYMBOL: "X",
      SECOND_PLAYER_SYMBOL: "0",
      currentPlayer: "X",
      board: ["", "", "", "", "", "", "", "", ""],
      winingCombo: [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [3, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
      ],
      Game_Over: false
    };
  }

  handleClick = index => {
    const board = [...this.state.board];
    const FIRST_PLAYER_SYMBOL = this.state.FIRST_PLAYER_SYMBOL;
    const SECOND_PLAYER_SYMBOL = this.state.SECOND_PLAYER_SYMBOL;
    let currentPlayer = this.state.currentPlayer;
    let Game_Over = this.state.Game_Over;
    if (!Game_Over && board[index] === "") {
      board[index] = currentPlayer;
      currentPlayer =
        currentPlayer === FIRST_PLAYER_SYMBOL
          ? SECOND_PLAYER_SYMBOL
          : FIRST_PLAYER_SYMBOL;
      this.setState({
        board,
        currentPlayer
      });
    }
    if (this.checkWinner(board)) {
      alert("Game OVER!!!");
      this.setState({
        Game_Over: true
      });
    }
    return false;
  };

  checkWinner = symbols => {
    const winingCombo = [...this.state.winingCombo];
    return winingCombo.find(function(combo) {
      return symbols[combo[0]] !== "" &&
        symbols[combo[1]] !== "" &&
        symbols[combo[2]] !== "" &&
        symbols[combo[0]] === symbols[combo[1]] &&
        symbols[combo[1]] === symbols[combo[2]]
        ? true
        : false;
    });
  };

  render() {
    return (
      <div className="App">
        <div className="board">
          {this.state.board.map((cell, index) => {
            return (
              <div
                key={index}
                className="square"
                onClick={() => this.handleClick(index)}
              >
                {cell}
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default App;
