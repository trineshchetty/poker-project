import React from "react";
import styles from "./styles.module.css";
import "./cards.css";
import Card from "./Card";

const Hand = ({ selectable, cardBack, deal, onSelectCard }) => {
  const createHand = () => {
    if (!deal) return;

    console.log(deal)

    return deal.map(({ label, suite, selected }) => {
      return (
        <div>Test</div>
        // <div className={styles.handItem} key={`${label}${suite}`}>
        //   <Card
        //     selectable={selectable}
        //     cardBack={cardBack}
        //     label={label}
        //     suite={suite}
        //     selected={selected}
        //     onSelectCard={onSelectCard}
        //   />
        // </div>
      );
    });
  };

  return (
    <div className="playingCards simpleCards">
      <div className={styles.handContainer}>{createHand()}</div>
    </div>
  );
};

export default Hand;