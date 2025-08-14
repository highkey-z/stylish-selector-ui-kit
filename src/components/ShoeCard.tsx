import { Heart } from "lucide-react";
import { useFavorites } from "../hooks/useFavorites";

interface Shoe {
  id: number;
  name: string;
  brand: string;
  price: number;
  image: string;
}

interface ShoeCardProps {
  shoe: Shoe;
}

export const ShoeCard = ({ shoe }: ShoeCardProps) => {
  const { favorites, toggleFavorite } = useFavorites();
  const isFavorite = favorites.some(fav => fav.id === shoe.id);

  return (
    <div className="bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative">
        <img
          src={shoe.image}
          alt={shoe.name}
          className="w-full h-48 object-cover"
        />
        <button
          onClick={() => toggleFavorite(shoe)}
          className="absolute top-3 right-3 p-2 bg-background/80 backdrop-blur-sm rounded-full hover:bg-background transition-colors"
        >
          <Heart
            className={`w-4 h-4 transition-colors ${
              isFavorite ? "fill-red-500 text-red-500" : "text-muted-foreground"
            }`}
          />
        </button>
      </div>
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <div>
            <h3 className="font-semibold text-foreground">{shoe.name}</h3>
            <p className="text-sm text-muted-foreground">{shoe.brand}</p>
          </div>
          <span className="font-bold text-foreground">${shoe.price}</span>
        </div>
      </div>
    </div>
  );
};