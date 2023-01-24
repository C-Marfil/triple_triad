(function exportGrid() {
  class Grid {
    constructor() {
      this.cardPlaced = [];
      this.busy = false;
      this.up = null;
      this.down = null;
      this.left = null;
      this.right = null;
      this.deck = [];

      this.above = null;
      this.below = null;
      this.toLeft = null;
      this.toRight = null;
    }
    evaluateLeft(Grid) {
      const cardOnGrid = this.cardPlaced[0];

      if (Grid.toLeft > Grid.left) {
        cardOnGrid.flipped = true;
        return console.log(
          `${this.deck[0].name} +1 points and + 1 point for flipping!`
        );
      } else {
        return console.log(`${this.deck[0].name} + 1 point!`);
      }
    }
    evaluateRight(Grid) {
      const cardOnGrid = this.cardPlaced[0];
      if (Grid.toRight > Grid.right && Grid.rigth === true) {
        cardOnGrid.flipped = true;
        return console.log("you flipped!");
      } else {
        return console.log(`${this.deck[0].name} + 1 point!`);
      }
    }
    evaluateUp(Grid) {
      const cardOnGrid = this.cardPlaced[0];
      if (Grid.above > Grid.up && Grid.up === true) {
        cardOnGrid.flipped = true;
        return console.log("you flipped!");
      } else {
        return console.log(`${this.deck[0].name} + 1 point!`);
      }
    }
    evaluateDown(Grid) {
      const cardOnGrid = this.cardPlaced[0];

      if (Grid.below > Grid.down && Grid.down === true) {
        cardOnGrid.flipped = true;
        return console.log(
          `${this.deck[0].name} +1 points and + 1 point for flipping!`
        );
      } else {
        return console.log(`${this.deck[0].name} + 1 point!`);
      }
    }

    updatePoints() {
      if (this.cardPlaced[0].flipped === true) {
        this.deck[0].points -= 1;
      } else {
        this.deck[0].points += 1;
      }
    }
  }

  if (typeof module !== "undefined" && module.exports) {
    module.exports = Grid;
  } else {
    window.Grid = Grid;
  }
})();
