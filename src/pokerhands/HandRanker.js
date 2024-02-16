export const CARD_RANKS = {
  ACE: 14,
  TWO: 2,
  THREE: 3,
  FOUR: 4,
  FIVE: 5,
  SIX: 6,
  SEVEN: 7,
  EIGHT: 8,
  NINE: 9,
  TEN: 10,
  JACK: 11,
  QUEEN: 12,
  KING: 13
}

export const SUITES = {
  SPADES: "spades",
  DIAMONDS: "diamonds",
  CLUBS: "clubs",
  HEARTS: "hearts"
}

export const HAND_STRENGTH = {
  highCard: 0,
  onePair: 1,
  twoPair: 2,
  threeOfAKind: 3,
  straight: 4,
  flush: 5,
  fullHouse: 6,
  fourOfAKind: 7,
  straightFlush: 8,
  royalFlush: 9
}

// todo Task 2 - Ranking the Hand
export function fiveCardHandRanker(hand) {
  // Helper functions (to be implemented)
  const isFlush = () => hand.every(card => card.suite === hand[0].suite);

  const isStraight = () => {
    const ranks = hand.map(card => card.rank).sort((a, b) => a - b);
    return ranks.slice(1).every((rank, i) => rank - ranks[i] === 1);
  };

  const counts = hand.reduce((acc, {rank}) => {
    acc[rank] = (acc[rank] || 0) + 1;
    return acc;
  }, {});

  const duplicates = Object.values(counts).reduce((acc, count) => {
    acc[count] = (acc[count] || 0) + 1;
    return acc;
  }, {});

  // Determine hand rank
  if (isFlush() && isStraight() && counts[CARD_RANKS.ACE]) {
    return { hand, handStrength: HAND_STRENGTH.royalFlush, description: "Royal Flush" };
  } else if (isFlush() && isStraight()) {
    return { hand, handStrength: HAND_STRENGTH.straightFlush, description: "Straight Flush" };
  } else if (duplicates[4]) {
    return { hand, handStrength: HAND_STRENGTH.fourOfAKind, description: "Four of a Kind" };
  } else if (duplicates[3] && duplicates[2]) {
    return { hand, handStrength: HAND_STRENGTH.fullHouse, description: "Full House" };
  } else if (isFlush()) {
    return { hand, handStrength: HAND_STRENGTH.flush, description: "Flush" };
  } else if (isStraight()) {
    return { hand, handStrength: HAND_STRENGTH.straight, description: "Straight" };
  } else if (duplicates[3]) {
    return { hand, handStrength: HAND_STRENGTH.threeOfAKind, description: "Three of a Kind" };
  } else if (duplicates[2] > 1) {
    return { hand, handStrength: HAND_STRENGTH.twoPair, description: "Two Pair" };
  } else if (duplicates[2]) {
    return { hand, handStrength: HAND_STRENGTH.onePair, description: "One Pair" };
  } else {
    const highestCard = hand.sort((a, b) => b.rank - a.rank)[0];
    return { hand, handStrength: HAND_STRENGTH.highCard, description: `High Card ${highestCard.label}` };
  }
}
