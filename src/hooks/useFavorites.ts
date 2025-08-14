import { useState } from "react";

interface Shoe {
  id: number;
  name: string;
  brand: string;
  price: number;
  image: string;
}

export const useFavorites = () => {
  const [favorites, setFavorites] = useState<Shoe[]>([]);

  const toggleFavorite = (shoe: Shoe) => {
    setFavorites(prev => {
      const exists = prev.find(fav => fav.id === shoe.id);
      if (exists) {
        return prev.filter(fav => fav.id !== shoe.id);
      } else {
        return [...prev, shoe];
      }
    });
  };

  return { favorites, toggleFavorite };
};