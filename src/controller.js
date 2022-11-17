(function exportController() {

    class Controller {
        constructor (Deck, Grid1, Grid2, Grid3) {
            this.G1 = Grid1;
            this.G2 = Grid2;
            this.G3 = Grid3;
            this.deck = Deck;
        };

        renderCards() {
        const cards = this.deck.cards;
        const cardsDiv = document.querySelector('#deck1');

        cards.forEach(card => {
            const newCard = document.createElement('div');
            newCard.className = 'card';
            newCard.id = `${card.name}`;

            cardsDiv.appendChild(newCard);
        });
    };

        sendCardsThroughGrid() {
            if (this.G1.cardPlaced === []) {
                return 'empty';
            } else if (this.G1.cardPlaced[0].placed === true) {
               this.G2.toLeft = this.G1.cardPlaced[0].right;
               this.G3.above = this.G1.cardPlaced[0].down; 
            };
            if (this.G2.cardPlaced === []) {
                return 'empty';
            } else if (this.G2.cardPlaced[0].placed === true) {
                this.G1.toRight = this.G2.cardPlaced[0].left;
            };
            if (this.G3.cardPlaced === []) {
                return 'empty';
            } else if (this.G3.cardPlaced[0].placed === true) {
                this.G1.below = this.G3.up;
            };
        };
    };


    if (typeof module !== 'undefined' && module.exports) {
        module.exports = Controller;
        } else {
        window.Controller = Controller;
        };
}());