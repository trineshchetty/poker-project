import React from "react";
import styles from "./styles.module.css";
import "./cards.css";


const Card = ({onSelectCard, suite, label, cardBack, selectable, selected}) => {

    const getUnicodeSuit = suit => {
        switch (suit) {
            case "spades":
              return "\u2660";
            case "hearts":
              return "\u2665";
            case "diamonds":
              return "\u2666";
            case "clubs":
              return "\u2663";
            default:
              return null;
          }
    }


  const handleCardSelect = () => {
    if (!onSelectCard) return;

    onSelectCard(label, suite);
  };

    return (
        <div className={styles.cardContainer} onClick={handleCardSelect}>
          <div className={`card rank-${label} ${suite}`}>
            <span className="rank">{label}</span>
            <span className="suit">{getUnicodeSuit(suite)}</span>
          </div>
          {selectable && selected && (
            <div className={styles.checkedMask}>&#10003;</div>
          )}
          {cardBack && (
            <div className={styles.backMask}>
              <div className="card back" />
            </div>
          )}
        </div>
      )
}

export default Card