const Catalogue = require('../src/catalogue.js');

describe('Card properties and methods', () => {
    let catalogue;
    let card;
    let deck;
    beforeEach(() => {
        catalogue = new Catalogue();
        card = {};
        deck = {cards: [], winner: true};
    });

    describe('A Catalogue being an Object', () => {
        it('Checks catalogue is instance of Object', () => {
            expect(catalogue).toBeInstanceOf(Object);
        });
    });

    describe('Catalogue methods', () => {
        it('Checks catalogue can obtain cards from loser Decks', () => {
            catalogue.obtainCard(card, deck);

            expect(catalogue.cards).toContain(card);
        });
    });
});