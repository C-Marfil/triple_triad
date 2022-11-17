// const Card = require("./card");
// const Player = require("./player");
// const Player1 = require("./player");
// const Player2 = require("./player");

// class Grid {
//     constructor (gridNumber) {
//         this.G = null;
//         this.gUp = null;
//         this.gRight = null;
//         this.gLeft = null;
//         this.gDown = null;
//         this.placedCard = [];
//     };
//     turnAround(objective){
//         if( objective.player === Player1) {
//             Player1.points -= 1;
//         };
//         if(objective.player === Player2) {
//             Player2.points -= 1;
//         };
//     };
// };

// class G1 extends Grid {
//     constructor () {
//         this.toRight = [];
//         this.below = [];
//         this.player = null;
//     };
//     placeCard() {
//         if(G1.placedCard.length >= 1) {
//             throw('Card already placed in grid');
//         };
//         G1.placedCard.push(Card);
//         G1.player = Card.player;
//         G1.gUp = Card.up;
//         G1.gRight = Card.right;
//         G1.gLeft = Card.left;
//         G1.gDown = Card.down;

//         G1.sendCard();
//         G1.evaluate();
//     };
//     sendCard(placedCard) {
//         G2.toLeft.push(placedCard);
//         G4.above.push(placedCard);
//     };
//     evaluate() {
//         if(this.below[1].gUp < this.gDown) {
//             G1.player.points += 1;
//             G4.turnAround();
//         };
//         if (this.toRight[1].gLeft < this.gRight){
//             G1.player.points += 1;
//             G2.turnAround(G2);
//         };
//     };
// };
// class G2 extends Grid {
//     constructor(){
//         this.toLeft = [];
//         this.toRight = [];
//         this.below = [];
//         this.player = null;
//     };
//     placeCard() {
//         let card = Card;
//         if(G2.placedCard.length >= 1) {
//             throw('Card already placed in grid');
//         };
//         G2.placedCard.push(card);
//         G2.player = card.player;
//         G2.gUp = card.up;
//         G2.gRight = card.right;
//         G2.gLeft = card.left;
//         G2.gDown = card.down;

//         G2.sendCard();
//         G2.evaluate();
//     };
//     sendCard(placedCard) {
//         G1.toRight.push(placedCard);
//         G5.above.push(placedCard);
//         G3.toLeft.push(placedCard);
//     };
//     evaluate() {
//         if(below[1].gUp < this.gDown) {
//             G2.player.points += 1;
//             G2.turnAround(G5);
//         }; 
//         if (toRight[1].gLeft < this.gRight){
//             G2.player.points += 1;
//             G2.turnAround(G3);
//         };
//         if(toLeft[1].gRight < this.gLeft){
//             G2.player.points += 1;
//             G2.turnAround(G1);
//         };
//     };
// };
// class G3 extends Grid {
//     constructor(){
//         this.toLeft = [];
//         this.below = [];
//         this.player = null;
//     };
//     placeCard(Card) {
//         if(G3.placedCard.length >= 1) {
//             throw('Card already placed in grid');
//         };
//         G3.placedCard.push(Card);
//         G3.gUp = Card.up;
//         G3.player = G3.placedCard[1].player;
//         G3.gRight = Card.right;
//         G3.gLeft = Card.left;
//         G3.gDown = Card.down;

//         G3.sendCard();
//         G3.evaluate();
//     };
//     sendCard(placedCard) {
//         G2.toRight.push(placedCard);
//         G6.above.push(placedCard);
//     };
//     evaluate() {
//         if(this.below[1].gUp < this.gDown) {
//             G3.player.points += 1;
//             G6.turnAround(G6);
//         }; 
//         if (this.toLeft[1].gRight < this.gLeft){
//             G3.player.points += 1;
//             G2.turnAround(G2);
//         };
//     };
// };
// class G4 extends Grid {
//     constructor () {
//         this.toRight = [];
//         this.below = [];
//         this.above = [];
//         this.player = null;
//     };
//     placeCard(Card) {
//         if(G4.placedCard.length >= 1) {
//             throw('Card already placed in grid');
//         };
//         G4.placedCard.push(Card);
//         G4.player = G4.placedCard[1].player;
//         G4.gUp = Card.up;
//         G4.gRight = Card.right;
//         G4.gLeft = Card.left;
//         G4.gDown = Card.down;

//         G4.sendCard();
//         G4.evaluate();
//     };
//     sendCard(placedCard) {
//         G5.toLeft.push(placedCard);
//         G7.above.push(placedCard);
//         G1.below.push(placeCard);
//     };
//     evaluate() {
//         if(this.below[1].gUp < this.gDown) {
//             G4.player.points += 1;
//             G4.turnAround(G7);
//         };
//         if (this.toRight[1].gLeft < this.gRight){
//             G4.player.points += 1;
//             G4.turnAround(G5);
//         };
//         if(this.above[1].gDown < this.gUp) {
//             G4.player.points += 1;
//             G4.turnAround(G1);
//         };
//     };
// };
// class G5 extends Grid {
//     constructor(){
//         this.toLeft = [];
//         this.toRight = [];
//         this.below = [];
//         this.above = [];
//         this.player = null;
//     };
//     placeCard(Card) {
//         if(G5.placedCard.length >= 1) {
//             throw('Card already placed in grid');
//         };
//         G5.placedCard.push(Card);
//         G5.player = G5.placedCard[1].player;
//         G5.gUp = Card.up;
//         G5.gRight = Card.right;
//         G5.gLeft = Card.left;
//         G5.gDown = Card.down;

//         G5.sendCard();
//         G5.evaluate();
//     };
//     sendCard(placedCard) {
//         G4.toRight.push(placedCard);
//         G8.above.push(placedCard);
//         G6.toLeft.push(placedCard);
//         G2.below.push(placedCard);
//     };
//     evaluate() {
//         if(this.below[1].gUp < this.gDown) {
//             Player1.points += 1;
//             G8.turnAround();
//         }; 
//         if (this.toRight[1].gLeft < this.gRight){
//             Player1.points += 1;
//             G6.turnAround();
//         };
//         if(this.toLeft[1].gRight < this.gLeft){
//             Player1.points += 1;
//             G4.turnAround();
//         };
//         if(this.above[1].gDown < this.gUp){
//             Player1.points += 1;
//             G3.turnAround();
//         };
//     };
//     turnAround(){
//         Player2.points -= 1;
//     };
// };
// class G6 extends Grid {
//     constructor(){
//         this.toLeft = [];
//         this.below = [];
//         this.above = [];
//     };
//     placeCard(Card) {
//         if(G6.placedCard.length >= 1) {
//             throw('Card already placed in grid');
//         };
//         G6.placedCard.push(Card);
//         G6.gUp = Card.up;
//         G6.gRight = Card.right;
//         G6.gLeft = Card.left;
//         G6.gDown = Card.down;

//         G6.sendCard();
//         G6.evaluate();
//     };
//     sendCard(placedCard) {
//         G5.toRight.push(placedCard);
//         G9.above.push(placedCard);
//         G3.below.push(placedCard);
//     };
//     evaluate() {
//         if(this.below[1].gUp < this.gDown) {
//             Player1.points += 1;
//             G9.turnAround();
//         }; 
//         if (this.toLeft[1].gRight < this.gLeft){
//             Player1.points += 1;
//             G5.turnAround();
//         };
//         if (this.above[1].gDown < this.gUp) {
//             Player1.points += 1;
//             G3.turnAround();
//         };
//     };
//     turnAround(){
//         Player2.points -= 1;
//     };
// }; 
// class G7 extends Grid {
//     constructor () {
//         this.toRight = [];
//         this.above = [];
//     };
//     placeCard(Card) {
//         if(G7.placedCard.length >= 1) {
//             throw('Card already placed in grid');
//         };
//         G7.placedCard.push(Card);
//         G7.gUp = Card.up;
//         G7.gRight = Card.right;
//         G7.gLeft = Card.left;
//         G7.gDown = Card.down;

//         G7.sendCard();
//         G7.evaluate();
//     };
//     sendCard(placedCard) {
//         G8.toLeft.push(placedCard);
//         G4.below.push(placeCard);
//     };
//     evaluate() {
//         if (this.toRight[1].gLeft < this.gRight){
//             Player1.points += 1;
//             G8.turnAround();
//         };
//         if(this.above[1].gDown < this.gUp) {
//             Player1.points += 1;
//             G4.turnAround();
//         };
//     };
//     turnAround(){
//         Player2.points -= 1;
//     };
// };
// class G8 extends Grid {
//     constructor(){
//         this.toLeft = [];
//         this.toRight = [];
//         this.above = [];
//     };
//     placeCard(Card) {
//         if(G8.placedCard.length >= 1) {
//             throw('Card already placed in grid');
//         };
//         G8.placedCard.push(Card);
//         G8.gUp = Card.up;
//         G8.gRight = Card.right;
//         G8.gLeft = Card.left;
//         G8.gDown = Card.down;

//         G8.sendCard();
//         G8.evaluate();
//     };
//     sendCard(placedCard) {
//         G7.toRight.push(placedCard);
//         G9.toLeft.push(placedCard);
//         G5.below.push(placedCard);
//     };
//     evaluate() {
//         if (this.toRight[1].gLeft < this.gRight){
//             Player1.points += 1;
//             G9.turnAround();
//         };
//         if(this.toLeft[1].gRight < this.gLeft){
//             Player1.points += 1;
//             G7.turnAround();
//         };
//         if(this.above[1].gDown < this.gUp){
//             Player1.points += 1;
//             G5.turnAround();
//         };
//     };
//     turnAround(){
//         Player2.points -= 1;
//     };
// };
// class G9 extends Grid {
//     constructor(){
//         this.toLeft = [];
//         this.above = [];
//     };
//     placeCard(Card) {
//         if(G9.placedCard.length >= 1) {
//             throw('Card already placed in grid');
//         };
//         G9.placedCard.push(Card);
//         G9.gUp = Card.up;
//         G9.gRight = Card.right;
//         G9.gLeft = Card.left;
//         G9.gDown = Card.down;

//         G9.sendCard();
//         G9.evaluate();
//     };
//     sendCard(placedCard) {
//         G8.toRight.push(placedCard);
//         G6.below.push(placedCard);
//     };
//     evaluate() {
//         if (this.toLeft[1].gRight < this.gLeft){
//             Player1.points += 1;
//             G8.turnAround();
//         };
//         if (this.above[1].gDown < this.gUp) {
//             Player1.points += 1;
//             G6.turnAround();
//         };
//     };
//     turnAround(){
//         Player2.points -= 1;
//     };
// };


// module.exports = {Grid, G2, G1};