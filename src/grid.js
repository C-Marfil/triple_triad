(function exportGrid() {

    class Grid {
        constructor (){
            this.cardPlaced = [];
            this.busy = false;
            this.up = null;
            this.down = null;
            this.left = null;
            this.right = null;
            this.deck = [];

            this.above = null;
            this.below = null;
            this.toLeft = null;
            this.toRight = null;
            
        };

        updatePoints() {
            if(this.cardPlaced[0].flipped === true){
                this.deck[0].points -= 1;
            } else {
                this.deck[0].points += 1;
            };
        };
    };

    if (typeof module !== 'undefined' && module.exports) {
        module.exports = Grid;
        } else {
        window.Grid = Grid;
        };
}());