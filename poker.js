
/**
 * @typedef {Object} Card
 * @property {string} suit - Suit of the card - Either "club", "spade", "diamond" or "heart"
 * @property {number} rank - Number rank of the card - So 1 for Ace, 2 for Two, 3 for Three, and so on, until 10 for Ten, then 11 for Jack,
    12 for Queen and 13 for King
 */

// define variables
let suit = ["club", "spade", "diamond", "heart"];
let rank = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13,];
let Card = {suit, rank};

// first attempt:
for (Card=0; Card <= 5; Card++) {
    let hand = ["card1", "card2", "card3", "card4", "card5"]
    }

// second attempt. I never user "param" before:
// let hand = (Card * 5);
let returns = ["highcard", "pair", "twopair", "threeofakind", "straight", "flush", "fullhouse", "fourofakind", "straightflush", "royalflush"];

/**
 * Given a poker hand of 5 cards, examines the cards and returns a string describing the type of win.
 *
 * @param {Array.<Card>} hand - Array of the card objects that make up the poker hand.
 * @returns {string} - Returns a string for the type of the win detected:
 *		"highcard" - Five cards which do not form any of the combinations below
 *		"pair" - A hand with two cards of equal rank and three cards which are different from these and from each other
 *		"twopair" - A hand with two pairs of different ranks
 *		"threeofakind" - Three cards of the same rank plus two unequal cards
 *		"straight" - Five cards of mixed suits in sequence
 *		"flush" - Five cards of the same suit
 *		"fullhouse" - Three cards of one rank and two cards of another rank
 *		"fourofakind" - Four cards of the same rank and the fifth card can be anything
 *		"straightflush" - Five cards of the same suit in sequence
 *		"royalflush" - A 10, Jack, Queen, King and Ace ranked cards of the same suit
 */
function evaluatePokerHand( hand ) {
	// Here is an example of how to access the card data. You may wish to use this for debugging purposes.
	// You can delete this for loop or modify it for your own purposes
	for ( let index=0; index<hand.length; ++index ) {
		const card = hand[index];
		console.log( `Card ${index+1}: ${card.suit} x ${card.rank}` );
	}

    if (card1.rank == card2.rank || card3.rank == card4.rank || card1.rank == card3.rank || card2.rank == card5.rank){
        return (returns[1]);
    }else if (card1.rank == card2.rank && card3.rank == card4.rank && card3.rank != card5.rank && card2.rank != card5.rank){
        return (returns[2]);
    }else if (card1.rank == card2.rank && card2.rank==card3.rank && card4.rank!=card5.rank ) {
        return (returns[3]);
    }else if ("club" * 4 == true || "spade" * 4== true || "diamond" * 4 == True || "heart" * 4 == true ) {
        return (returns[7]);
    }else {
        return (returns[0]);
    }

	
}

module.exports = evaluatePokerHand;
