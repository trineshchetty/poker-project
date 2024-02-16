import {useCallback, useEffect, useState} from "react";
import {createShuffledDeck, pick} from "pokerhands/Deck";

export function useDeck() {
  const [deck, setDeck] = useState(undefined)
  const [hand, setHand] = useState(undefined)
  const [deal, setDeal] = useState([])

  useEffect(() => {
    if (hand && deal.length === 0) {
      setDeal(prevDeal => [...prevDeal, hand]);
    }
  }, [hand])

  const shuffleDeck = useCallback(() => {
    setDeck(createShuffledDeck())
  }, [setDeck])

  const dealDeck = useCallback(() => {
    const [newHand, remainingDeck] = pick(deck, 5)
  
    setDeck(remainingDeck)
    setHand(newHand)
  }, [setDeck, setHand, deck, deal])

  return [deck, hand, shuffleDeck, dealDeck, deal]
}

