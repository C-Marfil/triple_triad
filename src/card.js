(function exportCard() {

    class Card {
        constructor (name, up, down, left, right){
            this.name = name;
            this.up = up;
            this.down = down;
            this.left = left;
            this.right = right;
            this.deck = [];
            this.flipped = false;
            this.placed = false;
        };
        flipCard() {
            this.flipped = true;
        };
        placeCard(Grid) {
            Grid.cardPlaced.push(this);
            Grid.up = this.up;
            Grid.down = this.down;
            Grid.left = this.left;
            Grid.right = this.right;
            Grid.deck.push(this.deck[0]);
            this.placed = true;
        };
    };

    if (typeof module !== 'undefined' && module.exports) {
        module.exports = Card;
        } else {
        window.Card = Card;
        };
}());

