import { TarotCardType } from "../types/tarotCardType";

export const selectRandomCards = (
  tarotCards: TarotCardType[],
  count: number
): TarotCardType[] => {
  const selected: TarotCardType[] = [];
  const cardIndexes = new Set<number>();

  while (cardIndexes.size < count) {
    const randomIndex = Math.floor(Math.random() * tarotCards.length);
    if (!cardIndexes.has(randomIndex)) {
      cardIndexes.add(randomIndex);
      selected.push(tarotCards[randomIndex]);
    }
  }
  return selected;
};
