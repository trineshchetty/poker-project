import {CARD_RANKS, SUITES} from "pokerhands/HandRanker";

function createDeck() {
  const suits = Object.keys(SUITES).map(key => SUITES[key])
  const labels = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]
  const rank = Object.keys(CARD_RANKS).map(key => CARD_RANKS[key])

  return labels
    .map((label, i) => {
      return suits.map(suite => {
        return {label, suite, rank: rank[i]}
      })
    }).reduce((labelAndSuites, acc) => {
      return acc.concat(labelAndSuites)
    }, [])
}

export function shuffleDeck(deck) {
  const clone = [...deck]
  const len = clone.length
  for (let x = len -1; x > 0; x--) {
    const y = Math.floor(Math.random() * x)
    const temp = clone[x]
    clone[x] = clone[y]
    clone[y] = temp
  }
  return clone
}

export function createShuffledDeck() {
  return shuffleDeck(createDeck())
}

// todo Task 1 - Picking from the Deck
export function pick(deck, pickCount) {
  // Ensure pickCount does not exceed the deck size
  const actualPickCount = Math.min(pickCount, deck.length);

  // Create a shallow copy of the deck to work with
  const remainingDeck = [...deck];

  // The array to hold the picked items
  const pick = [];

  while (pick.length < actualPickCount) {
    // Calculate a random index
    const randomIndex = Math.floor(Math.random() * remainingDeck.length);

    // Add the item at the random index to the pickedItems array
    pick.push(remainingDeck[randomIndex]);

    // Remove the picked item from the remainingDeck
    remainingDeck.splice(randomIndex, 1);
  }

  return [pick, remainingDeck];
}
