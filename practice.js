/*

Part 1:
Determine if the poker hand is flush, meaning if the five cards are of the same suit.
Your function will be passed a list/array of 5 strings, 
each representing a poker card in the format "5H" (5 of hearts), 
meaning the value of the card followed by the initial of its suit 
(Hearts, Spades, Diamonds or Clubs). No jokers included.

Your function should return true if the hand is a flush, false otherwise.
The possible card values are 2, 3, 4, 5, 6, 7, 8, 9, 10, J, Q, K, A
Ex:
["AS", "3S", "gS", "KS", "4S"7 ==> true ["AD", "4S", "7H", "KS", "105"] ==> false
*/
function handIsFlush(hand) {
  // the suit of the first card
  const suit = hand[0].slice(-1);

  // check if all other cards have the same suit
  for (const card of hand) {
    // last card of the surrent string not equal to our initial last card
    if (card.slice(-1) !== suit) {
      return false;
    }
  }
  return true;
}
// testing
const hand1 = ["AS", "3S", "9S", "KS", "4S"];
const hand2 = ["AD", "4S", "7H", "KS", "10S"];
console.log(handIsFlush(hand1)); //  true
console.log(handIsFlush(hand2)); //  false

/*
Part 2:
Your job is to find out how much candy each child has, 
and give them each additional candy until they too have as much as the child(ren) with the most candy.

Your job is to give all the kids the same amount of candies as the kid with the most candies and 
then return the total number candies that have been given out. 
If there are no kids, or only one, return -1.

In the first case (look below) the most candies are given to second kid (i.e second place in
List/array), 8. Because of that we will give the first kid 3 so he can have 8 and the third kid 2 and
the fourth kid 4, so all kids will have 8 candies.So we end up handing out 3 + 2 + 4 = 9.

Ex:
(5, 8, 6, 4) => 9
(1, 2, 4, 6) => 11
(1, 6)=> 5
() => -1
(6) => -1 (because only one kid)
*/

function distributeCandiesEvenly(candies) {
    // no sudent or 1 student
  if (!candies || candies.length <= 1 ) return -1;
  //   find max
  const maxCandies = Math.max(...candies);
  // calculate total number of candies to give out
  let total = 0;
  for (let i = 0; i < candies.length; i++) {
    total += maxCandies - candies[i];
  }
  return total;
}
console.log(distributeCandiesEvenly([5, 8, 6, 4])) //9
console.log(distributeCandiesEvenly([4])) //-1
console.log(distributeCandiesEvenly([])) //-1

const numbers = [1, 2, 3, 4, 5];

const printItems = (arr) => {
  for (let item in arr) {
    console.log(item);
  }
};

// console.log(printItems(numbers));

const findFirstEvenNum = (arr) => {
  let num = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      num = arr[i];
      break;
    }
  }
  return num;
};

console.log(findFirstEvenNum([5, 8, 6, 4]))

const findFirstEvenNum2 = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      return arr[i];
    }
  }
};
console.log(findFirstEvenNum2([5, 8, 6, 4]))


const newArr = [...[1, 2, 3], ...[4, 5, 6]];

console.log(newArr)

/*
A new movie has just been released! There are a lot of people at the cinema box office standing in a huge line. Each of them has a single 100, 50 or 25 dollar bill. A movie ticket costs 25 dollars.

Harry is currently working as a clerk. He wants to sell a ticket to every single person in this line.

Can Harry sell a ticket to every person and give change if he initially has no money and sells the tickets strictly in the people queue order?

Return YES, if Harry can sell a ticket to every person and give change with the bills he has at hand at that moment. Otherwise return NO.

EXAMPLES:
tickets([25, 25, 50]); // => YES

tickets([25, 100]); // => NO. Harry will not have enough money to give change to 100 dollars

tickets([25, 25, 50, 50, 100]); // => NO. Harry will not have the right bills to give 75 dollars of change (you can't make two bills of 25 from one of 50)
*/