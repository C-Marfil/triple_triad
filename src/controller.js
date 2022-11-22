(function exportController() {

    class Controller {
        constructor (Deck, EnemyDeck, Grid1, Grid2, Grid3) {
            this.G1 = Grid1;
            this.G2 = Grid2;
            this.G3 = Grid3;
            this.deck = Deck;
            this.enemy = EnemyDeck;
            this.card0 = null;
            this.card1 = null;
            this.selectedCard = null;
            this.selectedGrid = null;

            document.querySelector('#selectrival1').addEventListener('click', () => {
                this.selectedCard = this.enemy.cards[0];
            });
            document.querySelector('#selectcard1').addEventListener('click', () => {
                this.selectedCard = this.deck.cards[0];
            });
            document.querySelector('#G1').addEventListener('click', () => {
                const selectedCard = this.selectedCard;
                const gridButton1 = document.querySelector('#G1');
                const cardElement = document.querySelector(`#${selectedCard.name}`);
                this.selectedGrid = this.G1;

                if(this.selectedGrid.busy === false && selectedCard !== null) {
                    selectedCard.placeCard(G1);
                    gridButton1.style.backgroundImage = `url('/images/ttcard${selectedCard.name}.png')`;
                    cardElement.style.backgroundImage = `url()`;
                    this.sendCardsThroughGrid(G1, G2, G3);
                    this.selectedGrid.evaluateLeft(G2);
                    // this.selectedGrid.evaluateDown(G4);
                    
                    
                } else {
                    return alert('This Grid is already occupied!');
                };
            });
            document.querySelector('#selectrival2').addEventListener('click', () => {
                this.selectedCard = this.enemy.cards[1];
            });
            document.querySelector('#selectcard2').addEventListener('click', () => {
                this.selectedCard = this.deck.cards[1];
            });
            document.querySelector('#G2').addEventListener('click', () => {
                const selectedCard = this.selectedCard;
                const gridButton1 = document.querySelector('#G2');
                const cardElement = document.querySelector(`#${selectedCard.name}`);
                this.selectedGrid = this.G2;

                if(this.selectedGrid.busy === false && selectedCard !== null) {
                    selectedCard.placeCard(G2);
                    gridButton1.style.backgroundImage = `url('/images/ttcard${selectedCard.name}.png')`;
                    cardElement.style.backgroundImage = `url()`;
                    this.sendCardsThroughGrid(G1, G2, G3);
                    this.selectedGrid.evaluateLeft(G1);
                    this.selectedGrid.evaluateRight(G3);
                    this.G2.updatePoints();
                    // this.selectedGrid.evaluateDown(G5);
                    
                    
                } else {
                    return alert('This Grid is already occupied!');
                };
            });
    };
        set card0(newCard) {
            if (this.deck === null) {
                this.card0 = null;
            } else {
            const firstInCards = this.deck.cards[0];
            this._card0 = firstInCards;
            };
        };
        set card1(newCard) {
            if(this.deck === null) {
                this.card1 = null;
            }else{
                const secondInCards = this.deck.cards[1];
            this._card1 = secondInCards;
            };
        };

        renderCards() {
        const cards = this.deck.cards;
        const cardsDiv = document.querySelector('#deck1');
        const cards2 = this.enemy.cards;
        const cardsDiv2 = document.querySelector('#deck2');
        
        cards2.forEach(card => {
            const newCard2 = document.createElement('div');
            newCard2.className = 'enemycard';
            newCard2.id = `${card.name}`;

            cardsDiv2.appendChild(newCard2);
        })
        cards.forEach(card => {
            const newCard = document.createElement('div');
            newCard.className = 'card';
            newCard.id = `${card.name}`;

            cardsDiv.appendChild(newCard);
        });
    };

        sendCardsThroughGrid(Grid1, Grid2, Grid3) {
            if (Grid1.cardPlaced.length === 0) {
                return 'empty';
            } else if (Grid1.cardPlaced.length === 1) {
               this.G2.toLeft = this.G1.cardPlaced[0].right;
               this.G3.above = this.G1.cardPlaced[0].down; 
            };
            if (Grid2.cardPlaced.length === 0) {
                return 'empty';
            } else if (Grid2.cardPlaced[0].length === 1) {
                this.G1.toRight = this.G2.cardPlaced[0].left;
            };
            if (Grid3.cardPlaced.length === 0) {
                return 'empty';
            } else if (Grid3.cardPlaced[0].length === 1) {
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