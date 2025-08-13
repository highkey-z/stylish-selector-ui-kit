import { useState } from "react";

const brands = [
  "Nike", "Adidas", "Jordan", "Puma", "New Balance", "Vans", 
  "Converse", "Reebok", "ASICS", "Skechers", "Under Armour", "Fila"
];

export const BrandFilter = () => {
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);

  const toggleBrand = (brand: string) => {
    setSelectedBrands(prev => 
      prev.includes(brand) 
        ? prev.filter(b => b !== brand)
        : [...prev, brand]
    );
  };

  return (
    <div>
      <h3 className="text-lg font-semibold mb-4 text-foreground">Select Brands</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        {brands.map((brand) => (
          <label 
            key={brand} 
            className="flex items-center space-x-2 cursor-pointer hover:bg-accent p-2 rounded-md transition-colors"
          >
            <input
              type="checkbox"
              checked={selectedBrands.includes(brand)}
              onChange={() => toggleBrand(brand)}
              className="w-4 h-4 text-primary bg-background border-border rounded focus:ring-ring"
            />
            <span className="text-sm text-foreground">{brand}</span>
          </label>
        ))}
      </div>
    </div>
  );
};