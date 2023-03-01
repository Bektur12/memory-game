import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { CARDS } from "../utils/data";
import { Card } from "./UI/Card";

export const Cards = () => {
  const initialState = {
    icon: "",
    isFound: "",
    isActive: "",
  };
  const [cards, setCards] = useState(CARDS);
  console.log(cards, "cccc");
  const [selectedCards, setSelectedCards] = useState({
    first: initialState && null,
    second: initialState && null,
  });

  console.log(selectedCards);
  const handleChange = (card, index) => {
    const newCards = [...cards];
    if (!selectedCards.first) {
      newCards[index].isActive = true;
      setCards(newCards);
      return setSelectedCards({ ...selectedCards, first: { ...card, index } });
    }

    if (!selectedCards.second) {
      newCards[index].isActive = true;
      setCards(newCards);
      return setSelectedCards({ ...selectedCards, second: { ...card, index } });
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      const newCards = [...cards];
      if (selectedCards.first && selectedCards.second) {
        const firstOfIndex = selectedCards.first.index;
        const secondOfIndex = selectedCards.second.index;

        if (selectedCards.second.icon === selectedCards.first.icon) {
          newCards[firstOfIndex].isActive = false;
          newCards[firstOfIndex].isFound = true;

          newCards[secondOfIndex].isActive = false;
          newCards[secondOfIndex].isFound = true;
        }
        setSelectedCards({ first: null, second: null });
        setCards(newCards);
        newCards[firstOfIndex].isActive = false;
        newCards[secondOfIndex].isActive = false;
      }
    }, 800);
    return () => clearTimeout(timer);
  }, [cards, selectedCards]);

  return (
    <CardsContainer>
      {CARDS.map((item, i) => (
        <Card
          onClick={() => handleChange(item, i)}
          icon={item.icon}
          active={item.isActive}
          isFound={item.isFound}
        />
      ))}
    </CardsContainer>
  );
};

const CardsContainer = styled.div`
  display: flex;
  gap: 30px;
`;
