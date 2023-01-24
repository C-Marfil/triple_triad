const Grid = require("../src/grid.js");

describe("Grid properties and methods", () => {
  let grid;
  let card;
  let deck;
  let card2;

  beforeEach(() => {
    grid = new Grid();
    card = { up: 1, down: 2, left: 3, right: 4, deck: [deck] };
    card2 = { flipped: true };
    deck = { points: 0, cards: [card] };
    grid1 = new Grid();
  });

  describe("A Grid being an Object", () => {
    it("Checks cards are instance of Grid", () => {
      expect(grid).toBeInstanceOf(Object);
    });
  });

  describe("Grids methods", () => {
    it("Checks grids can add deck points", () => {
      grid.cardPlaced.push(card);
      grid.deck.push(deck);
      grid.updatePoints();

      expect(deck.points).toBe(1);
    });

    it("Checks grids can substract points", () => {
      grid.cardPlaced.push(card2);
      grid.deck.push(deck);
      grid.updatePoints();

      expect(deck.points).toBe(-1);
    });
  });
});
