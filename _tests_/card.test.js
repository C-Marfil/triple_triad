const Card = require('../src/card.js');

describe('Card properties and methods', () => {
    let card;
    let G1;
    beforeEach(() => {
        card = new Card(3, 3, 3, 3);
        G1 = {cardPlaced: [], 
            deck: [],
            up: null,
            down: null,
            left: null,
            right: null};
    });

    describe('A card being an Object', () => {
        it('Checks cards are instance of Object', () => {
            expect(card).toBeInstanceOf(Object);
        });
    });

    describe('Card methods', () => {
        it('Checks that a card can be placed', () => {
            card.placeCard(G1);

            expect(card.placed).toBe(true);
            expect(G1.cardPlaced).toContain(card);
        });
        
        it('Checkt that a card can be flipped', () => {
            card.flipCard();

            expect(card.flipped).toBe(true);
        });

        it('Checks that Grids take the cards values', () => {
            card.placeCard(G1);

            expect(G1.up).toBe(3);
        });
    });
});