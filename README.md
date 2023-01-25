

# TRIPLE TRIAD **UNFINISHED**
![example](https://github.com/C-Marfil/TripleTriad/blob/main/images/example.png)

This repo and project was developed in the first few weeks of my Bootcamp - it is displayed here to:

- Demonstrate the huge amount of progress I've made through the course.
- Demonstrate that my problem solving skills are on point.
- Demonstrate that I am extremely passionate about the tools I use to bring ideas into fruition.

**DISCLAIMER:**
 The code is the least DRY, readeable code I've ever produced. However, it stands as proof for the reasons above. I am aware it is not quality code, but I will be creating a counterpart using React to compare my evolution.

## The Problem

I love games - and by games I don't just mean videogames, I mean any set of rules that allow you to interact with a system in a playful way. Especially if the goal is to challenge yourself to improve, to get better at the game.

It's no surprise that one of my favourite games of all time is Triple Triad, a mini game within Final Fantasy VIII. Its premise is simple: you've got a set of square cards which sides are numbered 1 to 9, the values of your cards should be always higher than your enemy's.

How could I recreate the game with my rookie knowledge on JS and JQuery?

## The starting point

I love JS Classes, so I quickly came with an initial solution - I would create classes for each element involved in the game.

<details>
 <summary>Cards </summary>
When called, it takes its values (up, down, left, right).

| param     | value |
| --------- | --------- |
| up | this.up  |
| down     | this.down    |
| left  | this.left   |
| right  | this.right   |
| deck  | []]   |
| flipped | false   |
| placed  | false   |

**Setter:** *flipped(truthy)*
Sets this.flipped to true when called.

**Method:** *placeCard(Grid)*
This method is called when a card is placed, and passes the values of the card onto the Grid that it takes when called.
</details>

<details>
 <summary>Grid </summary>
When a Card is placed on them, their directional values will take those of the Card instance.
There will be 9 predefined Grids.

| param     | value |
| --------- | --------- |
| cardPlaced | []  |
| busy | false  |
| up | null  |
| down     | null    |
| left  | null   |
| right  | null   |
| deck  | []]   |
**The properties below will take the values of the Cards in adjacent Grids**
| above | null   |
| below  | null  |
| toLeft | null  |
| toRight | null  |

**Methods:** 
*evaluateLeft(Grid)*, *evaluateRight(Grid)*, *evaluateUp(Grid)*, *evaluateDown(Grid)*
These Methods will evaluate, upon placement, the values of the Card it holds vs the values of the 
relevant adjacent Grids (that the methods take).
The Cards that lose, will trigger their *flipped(truthy)* setter, becoming *flipped=true*.

*updatePoints*
This method is called whenever a Card within a Deck is flipped, altering the points of the player.
</details>

<details>
 <summary>Deck </summary>
A Deck takes a name when declared.

| param     | value |
| --------- | --------- |
| name |  name |
| points | 0  |
| winner | false  |
| cards     | []    |

**Methods:** 
*returnCard(Card, Catalogue)* *addCard(Card, Catalogue)*
These methods allow you to take and return cards into your Deck from the Catalogue.

*ownCard(Card)* *disownCard(Card)*
These methods allow you to pass your Deck to the Card instances it holds. This is so the points they
gather affect your Deck only.
</details>

<details>
 <summary>Catalogue </summary>
A Catalogue that contains all of the obtained Cards.

| param     | value |
| --------- | --------- |
| cards |  [...all the cards] |

**Methods:** 
*obtainCard(Card, Deck)*
This method runs when the player has won. It allows you to steal a Card from your opponent and add it to your Catalogue.
</details>

## The Real Problem

How do I get all of these to appear in a GUI and interact the way I want it to???
I only know JQuery!?

The answer came to me after days of thinking, in a dream. Not a very DRY dream.

I created another Class:

<details>
 <summary>Controller </summary>
It takes your Deck, an enemy Deck and all the 9 Grids to be used in this match.

| param     | value |
| --------- | --------- |
| G1 | Grid1  |
**and so on...**
| G9 | Grid9  |
| deck | Deck  |
| enemy    | EnemyDeck    |


**Methods:** 
*renderCards()*, 
This method renders the cards in their *deck* and *enemydeck* divs, giving them their class name so I can interact with them through CSS.

*sendCardsThroughGrids(Grid1, Grid2...)*
This method is the one that checks for Cards placed in Grids after each time a card is placed.
Example:
 1. **I place a Card in Grid1, this Card's down value is 6**
 2. **There's a Card in Grid4, its Up value is 5**
 3. **Upon placement, this method will update Grid4's Above param to 6.**
*-This method's work ends here.*
 4. **When evaluated, the Card in Grid4 will be *flipped=true***
 5. **Points will be given to the Deck that owns the Card placed in Grid1**
</details>

So now I have the working bones of the game and a set of two decks rendered in my GUI, I've also placed the traditional tabletop in which the game is played. 

How do I handle user imput to select a card and place it in the Grid the user wants????!!!

This is the point where I was not sure at all how to make it work. Then I had the dream.
Without knowing it, I had dreamt about "state" and had figured out a way of handling it - months before I would start learning React!

So I added these two params to the Controller class:

| selectedCard | null   |
| selectedGrid  | null   |

Then I placed invisible buttons on top of each one of the 6 Cards in each Deck, as well as 9 buttons representing the Grids.

When a player selects one of its cards via buttons, the event handler sets *selectedCard* to the Card underneath the button, which appears in whatever Grid the player selects.

🤯 🤯 🤯 🤯 🤯 🤯 🤯 🤯

## Conclusion

Shortly after I had figured out how to do it, I had to carry on learning and left the project behind. However, it will always remain as a testament to my first steps into programming, and the first time I realised this is what I want to do for the rest of my life.

Knowing how to use React, a version of this project will be the first thing I'll be working on after I graduate, as I send you all my CV and this portfolio.

Thank you for reading!
C
