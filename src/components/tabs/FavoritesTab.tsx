import { Heart } from "lucide-react";
import { useFavorites } from "../../hooks/useFavorites";
import { ShoeCard } from "../ShoeCard";

export const FavoritesTab = () => {
  const { favorites } = useFavorites();

  return (
    <div className="pb-20 px-4">
      <div className="max-w-4xl mx-auto space-y-6">
        <header className="text-center py-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Favorites</h1>
          <p className="text-muted-foreground">Your saved shoes</p>
        </header>

        {favorites.length === 0 ? (
          <div className="text-center py-16">
            <Heart className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-foreground mb-2">No favorites yet</h3>
            <p className="text-muted-foreground">Start adding shoes to your wishlist!</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {favorites.map((shoe) => (
              <ShoeCard key={shoe.id} shoe={shoe} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};