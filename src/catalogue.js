(function exportCatalogue() {
  class Catalogue {
    constructor() {
      this.cards = [];
    }
    obtainCard(Card, Deck) {
      if (Deck.winner === true) {
        this.cards.push(Card);
      }
    }
  }

  if (typeof module !== "undefined" && module.exports) {
    module.exports = Catalogue;
  } else {
    window.Catalogue = Catalogue;
  }
})();
