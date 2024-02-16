import {useCallback, useState} from "react";
import {fiveCardHandRanker as handRanker} from "pokerhands/HandRanker";

export function useHandRanker() {
  const [handRank, setHandRank] = useState(undefined)
  const rankHand = useCallback((hand) => {
    setHandRank(handRanker(hand))
  }, [setHandRank])

  return [handRank, rankHand]
}

