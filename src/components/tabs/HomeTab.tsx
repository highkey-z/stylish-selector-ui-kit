import { ShoeCard } from "../ShoeCard";

const featuredShoes = [
  { id: 1, name: "Air Jordan 1 Retro", brand: "Jordan", price: 170, image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=300" },
  { id: 2, name: "Stan Smith", brand: "Adidas", price: 80, image: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=300" },
  { id: 3, name: "Air Force 1", brand: "Nike", price: 90, image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=300" },
];

const trendingShoes = [
  { id: 4, name: "Ultraboost 22", brand: "Adidas", price: 190, image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300" },
  { id: 5, name: "Chuck Taylor All Star", brand: "Converse", price: 55, image: "https://images.unsplash.com/photo-1514989940723-e8e51635b782?w=300" },
  { id: 6, name: "Gel-Kayano", brand: "ASICS", price: 160, image: "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=300" },
];

export const HomeTab = () => {
  return (
    <div className="pb-20 px-4">
      <div className="max-w-4xl mx-auto space-y-8">
        <header className="text-center py-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Shoe Store</h1>
          <p className="text-muted-foreground">Discover your perfect pair</p>
        </header>

        <section>
          <h2 className="text-2xl font-semibold text-foreground mb-4">Featured Drops</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {featuredShoes.map((shoe) => (
              <ShoeCard key={shoe.id} shoe={shoe} />
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-foreground mb-4">Trending Styles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {trendingShoes.map((shoe) => (
              <ShoeCard key={shoe.id} shoe={shoe} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};