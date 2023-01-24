const Card = require("../src/card.js");

describe("Card properties and methods", () => {
  let card;
  let G1;
  beforeEach(() => {
    card = new Card(3, 3, 3, 3);
    G1 = {
      cardPlaced: [],
      deck: [],
      up: null,
      down: null,
      left: null,
      right: null,
    };
  });

  describe("A card being an Object", () => {
    it("Checks cards are instance of Object", () => {
      expect(card).toBeInstanceOf(Object);
    });
  });

  describe("Card methods", () => {
    it("Checks that a card can be placed", () => {
      card.placeCard(G1);

      expect(card.placed).toBe(true);
      expect(G1.cardPlaced).toContain(card);
    });

    it("Checkt that a card can be flipped", () => {
      card.flipped = true;

      expect(card.flipped).toBe(true);
    });

    it("Checks that Grids take the cards values", () => {
      card.placeCard(G1);

      expect(G1.up).toBe(3);
    });
  });
});
// const Controller = require('./src/controller.js');
// const Card = require('./src/card.js');
// const Catalogue = require('./src/catalogue.js');
// const Deck = require('./src/deck.js');
// const Grid = require('./src/grid.js');
// const catalogue = new Catalogue();
// const deck = new Deck('carlos');
// const diablo = new Card('diablo', 3, 3, 3, 3);
// const fatChocobo = new Card('FatChocobo', 3, 4, 5, 4);
// const G1 = new Grid();
// const G2 = new Grid();
// const G3 = new Grid();
// deck.addCard(diablo, catalogue);
// deck.addCard(fatChocobo, catalogue);
// const controller = new Controller(deck, G1, G2, G3);
