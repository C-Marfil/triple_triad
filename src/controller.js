(function exportController() {
  class Controller {
    constructor(Deck, EnemyDeck, Grid1, Grid2, Grid3, Grid4, Grid5, Grid6, Grid7, Grid8, Grid9) {
      this.G1 = Grid1;
      this.G2 = Grid2;
      this.G3 = Grid3;
      this.G4 = Grid4;
      this.G5 = Grid5;
      this.G6 = Grid6;
      this.G7 = Grid7;
      this.G8 = Grid8;
      this.G9 = Grid9;
      this.deck = Deck;
      this.enemy = EnemyDeck;
      this.selectedCard = null;
      this.selectedGrid = null;

      document.querySelector("#selectrival1").addEventListener("click", () => {
        this.selectedCard = this.enemy.cards[0];
      });
      document.querySelector("#selectcard1").addEventListener("click", () => {
        this.selectedCard = this.deck.cards[0];
      });
      document.querySelector("#G1").addEventListener("click", () => {
        const selectedCard = this.selectedCard;
        const gridButton1 = document.querySelector("#G1");
        const cardElement = document.querySelector(`#${selectedCard.name}`);
        this.selectedGrid = this.G1;

        if (this.selectedGrid.busy === false && selectedCard !== null) {
          selectedCard.placeCard(G1);
          gridButton1.style.backgroundImage = `url('/images/ttcard${selectedCard.name}.png')`;
          cardElement.style.backgroundImage = `url()`;
          this.sendCardsThroughGrid(G1, G2, G4);
          this.selectedGrid.evaluateLeft(G2);
          this.selectedGrid.evaluateDown(G4);
        } else {
          return alert("This Grid is already occupied!");
        }
      });
      document.querySelector("#selectrival2").addEventListener("click", () => {
        this.selectedCard = this.enemy.cards[1];
      });
      document.querySelector("#selectcard2").addEventListener("click", () => {
        this.selectedCard = this.deck.cards[1];
      });
      document.querySelector("#G2").addEventListener("click", () => {
        const selectedCard = this.selectedCard;
        const gridButton1 = document.querySelector("#G2");
        const cardElement = document.querySelector(`#${selectedCard.name}`);
        this.selectedGrid = this.G2;

        if (this.selectedGrid.busy === false && selectedCard !== null) {
          selectedCard.placeCard(G2);
          gridButton1.style.backgroundImage = `url('/images/ttcard${selectedCard.name}.png')`;
          cardElement.style.backgroundImage = `url()`;
          this.sendCardsThroughGrid(G1, G2, G3);
          this.selectedGrid.evaluateLeft(G1);
          this.selectedGrid.evaluateRight(G3);
          this.G2.updatePoints();
          // this.selectedGrid.evaluateDown(G5);
        } else {
          return alert("This Grid is already occupied!");
        }
      });
      document.querySelector("#selectrival3").addEventListener("click", () => {
        this.selectedCard = this.enemy.cards[2];
      });
      document.querySelector("#selectcard3").addEventListener("click", () => {
        this.selectedCard = this.deck.cards[2];
      });
      document.querySelector("#G3").addEventListener("click", () => {
        const selectedCard = this.selectedCard;
        const gridButton3 = document.querySelector("#G3");
        const cardElement = document.querySelector(`#${selectedCard.name}`);
        this.selectedGrid = this.G3;

        if (this.selectedGrid.busy === false && selectedCard !== null) {
          selectedCard.placeCard(G3);
          gridButton3.style.backgroundImage = `url('/images/ttcard${selectedCard.name}.png')`;
          cardElement.style.backgroundImage = `url()`;
          this.sendCardsThroughGrid(G2, G6);
          this.selectedGrid.evaluateLeft(G2);
          this.selectedGrid.evaluateDown(G6);
        } else {
          return alert("This Grid is already occupied!");
        }
      });
      document.querySelector("#selectrival4").addEventListener("click", () => {
        this.selectedCard = this.enemy.cards[3];
      });
      document.querySelector("#selectcard4").addEventListener("click", () => {
        this.selectedCard = this.deck.cards[3];
      });
      document.querySelector("#G4").addEventListener("click", () => {
        const selectedCard = this.selectedCard;
        const gridButton4 = document.querySelector("#G4");
        const cardElement = document.querySelector(`#${selectedCard.name}`);
        this.selectedGrid = this.G4;

        if (this.selectedGrid.busy === false && selectedCard !== null) {
          selectedCard.placeCard(G4);
          gridButton4.style.backgroundImage = `url('/images/ttcard${selectedCard.name}.png')`;
          cardElement.style.backgroundImage = `url()`;
          this.sendCardsThroughGrid(G1, G5, G7);
          this.selectedGrid.evaluateUp(G1);
          this.selectedGrid.evaluateRight(G5);
          this.selectedGrid.evaluateDown(G7);
        } else {
          return alert("This Grid is already occupied!");
        }
      });
      document.querySelector("#selectrival5").addEventListener("click", () => {
        this.selectedCard = this.enemy.cards[4];
      });
      document.querySelector("#selectcard5").addEventListener("click", () => {
        this.selectedCard = this.deck.cards[4];
      });
      document.querySelector("#G5").addEventListener("click", () => {
        const selectedCard = this.selectedCard;
        const gridButton5 = document.querySelector("#G5");
        const cardElement = document.querySelector(`#${selectedCard.name}`);
        this.selectedGrid = this.G5;

        if (this.selectedGrid.busy === false && selectedCard !== null) {
          selectedCard.placeCard(G5);
          gridButton5.style.backgroundImage = `url('/images/ttcard${selectedCard.name}.png')`;
          cardElement.style.backgroundImage = `url()`;
          this.sendCardsThroughGrid(G2, G4, G6, G8);
          this.selectedGrid.evaluateUp(G2);
          this.selectedGrid.evaluateLeft(G4);
          this.selectedGrid.evaluateRight(G6);
          this.selectedGrid.evaluateDown(G8);
        } else {
          return alert("This Grid is already occupied!");
        }
      });
      document.querySelector("#selectrival6").addEventListener("click", () => {
        this.selectedCard = this.enemy.cards[5];
      });
      document.querySelector("#selectcard6").addEventListener("click", () => {
        this.selectedCard = this.deck.cards[5];
      });
      document.querySelector("#G6").addEventListener("click", () => {
        const selectedCard = this.selectedCard;
        const gridButton6 = document.querySelector("#G6");
        const cardElement = document.querySelector(`#${selectedCard.name}`);
        this.selectedGrid = this.G6;

        if (this.selectedGrid.busy === false && selectedCard !== null) {
          selectedCard.placeCard(G6);
          gridButton6.style.backgroundImage = `url('/images/ttcard${selectedCard.name}.png')`;
          cardElement.style.backgroundImage = `url()`;
          this.sendCardsThroughGrid(G3, G5, G9);
          this.selectedGrid.evaluateUp(G3);
          this.selectedGrid.evaluateLeft(G5);
          this.selectedGrid.evaluateDown(G9);
        } else {
          return alert("This Grid is already occupied!");
        }
      });
      document.querySelector("#G7").addEventListener("click", () => {
        const selectedCard = this.selectedCard;
        const gridButton7 = document.querySelector("#G7");
        const cardElement = document.querySelector(`#${selectedCard.name}`);
        this.selectedGrid = this.G7;

        if (this.selectedGrid.busy === false && selectedCard !== null) {
          selectedCard.placeCard(G7);
          gridButton7.style.backgroundImage = `url('/images/ttcard${selectedCard.name}.png')`;
          cardElement.style.backgroundImage = `url()`;
          this.sendCardsThroughGrid(G4, G8);
          this.selectedGrid.evaluateUp(G4);
          this.selectedGrid.evaluateRight(G8);
        } else {
          return alert("This Grid is already occupied!");
        }
      });
      document.querySelector("#G9").addEventListener("click", () => {
        const selectedCard = this.selectedCard;
        const gridButton9 = document.querySelector("#G9");
        const cardElement = document.querySelector(`#${selectedCard.name}`);
        this.selectedGrid = this.G9;

        if (this.selectedGrid.busy === false && selectedCard !== null) {
          selectedCard.placeCard(G9);
          gridButton9.style.backgroundImage = `url('/images/ttcard${selectedCard.name}.png')`;
          cardElement.style.backgroundImage = `url()`;
          this.sendCardsThroughGrid(G6, G8);
          this.selectedGrid.evaluateUp(G6);
          this.selectedGrid.evaluateLeft(G8);
        } else {
          return alert("This Grid is already occupied!");
        }
      });
      document.querySelector("#G8").addEventListener("click", () => {
        const selectedCard = this.selectedCard;
        const gridButton8 = document.querySelector("#G8");
        const cardElement = document.querySelector(`#${selectedCard.name}`);
        this.selectedGrid = this.G8;

        if (this.selectedGrid.busy === false && selectedCard !== null) {
          selectedCard.placeCard(G8);
          gridButton8.style.backgroundImage = `url('/images/ttcard${selectedCard.name}.png')`;
          cardElement.style.backgroundImage = `url()`;
          this.sendCardsThroughGrid(G7, G5, G9);
          this.selectedGrid.evaluateLeft(G7);
          this.selectedGrid.evaluateUp(G5);
          this.selectedGrid.evaluateRight(G9);
        } else {
          return alert("This Grid is already occupied!");
        }
      });
    }
    set card0(newCard) {
      if (this.deck === null) {
        this.card0 = null;
      } else {
        const firstInCards = this.deck.cards[0];
        this._card0 = firstInCards;
      }
    }
    set card1(newCard) {
      if (this.deck === null) {
        this.card1 = null;
      } else {
        const secondInCards = this.deck.cards[1];
        this._card1 = secondInCards;
      }
    }

    renderCards() {
      const cards = this.deck.cards;
      const cardsDiv = document.querySelector("#deck1");
      const cards2 = this.enemy.cards;
      const cardsDiv2 = document.querySelector("#deck2");

      cards2.forEach((card) => {
        const newCard2 = document.createElement("div");
        newCard2.className = "enemycard";
        newCard2.id = `${card.name}`;

        cardsDiv2.appendChild(newCard2);
      });
      cards.forEach((card) => {
        const newCard = document.createElement("div");
        newCard.className = "card";
        newCard.id = `${card.name}`;

        cardsDiv.appendChild(newCard);
      });
    }

    sendCardsThroughGrid(Grid1, Grid2, Grid3) {
      if (Grid1.cardPlaced.length === 0) {
        return "empty";
      } else if (Grid1.cardPlaced.length === 1) {
        this.G2.toLeft = this.G1.cardPlaced[0].right;
        this.G3.above = this.G1.cardPlaced[0].down;
      }
      if (Grid2.cardPlaced.length === 0) {
        return "empty";
      } else if (Grid2.cardPlaced[0].length === 1) {
        this.G1.toRight = this.G2.cardPlaced[0].left;
      }
      if (Grid3.cardPlaced.length === 0) {
        return "empty";
      } else if (Grid3.cardPlaced[0].length === 1) {
        this.G1.below = this.G3.up;
      }
    }
  }

  if (typeof module !== "undefined" && module.exports) {
    module.exports = Controller;
  } else {
    window.Controller = Controller;
  }
})();
