(function exportDeck() {

    class Deck {
        constructor (name){
            this.name = name;
            this.points = 0;
            this.winner = false;
            this.cards = [];
        };
        returnCard(Card, Catalogue) {
            this.cards.pop(Card);
            Catalogue.cards.push(Card);
        };
        ownCard(Card){
            Card.deck.push(this);
        };
        disownCard(Card){
            Card.deck.pop(this);
        };
        addCard(Card, Catalogue) {
            Catalogue.cards.pop(Card);
            this.cards.push(Card);
        };
    };

    if (typeof module !== 'undefined' && module.exports) {
        module.exports = Deck;
        } else {
        window.Deck = Deck;
        };
}());
