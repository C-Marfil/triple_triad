const Deck = require("../src/deck.js");

describe("Decks properties and methods", () => {
  let deck;
  let card;
  let catalogue;
  beforeEach(() => {
    deck = new Deck("Carlos");
    card = { player: null, deck: [] };
    catalogue = { cards: [card] };
  });

  describe("A Deck being an Object", () => {
    it("Checks Decks are instance of Object", () => {
      expect(deck).toBeInstanceOf(Object);
    });
  });

  describe("Decks methods", () => {
    it("Checks that Decks can retrieve cards from catalogue", () => {
      deck.addCard(card, catalogue);

      expect(deck.cards).toContain(card);
      expect(catalogue.cards).toEqual([]);
    });

    it("Checks that Decks can return cards to catalogue", () => {
      deck.addCard(card, catalogue);
      deck.returnCard(card, catalogue);

      expect(catalogue.cards).toContain(card);
    });

    it("Checks that Decks can own cards", () => {
      deck.ownCard(card);

      expect(card.deck).toContain(deck);
    });

    it("Checks that a card can be disowned by a Deck", () => {
      deck.disownCard(card);

      expect(card.deck).toEqual([]);
    });
  });
});
