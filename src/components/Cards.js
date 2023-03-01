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
  const [count, setCount] = useState({ attempts: 0, correct: 0 });

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
          setCount({
            attempts: count.attempts + 1,
            correct: count.correct + 1,
          });

          if (count.correct + 1 === 4) {
            return alert("Все правильно");
          }
        }
        setCards(newCards);
        setSelectedCards({ first: null, second: null });
        newCards[firstOfIndex].isActive = false;
        newCards[secondOfIndex].isActive = false;
      }
    }, 1000);
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
  width: 590px;
  height: 590px;
  padding: 20px;
  border-radius: 10px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(4, 1fr);
  justify-content: center;
  gap: 30px;
  background-color: bisque;
`;
