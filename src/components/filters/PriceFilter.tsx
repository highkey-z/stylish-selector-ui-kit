import { useState } from "react";

export const PriceFilter = () => {
  const [priceRange, setPriceRange] = useState([0, 1000]);

  const handleMinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newMin = parseInt(e.target.value);
    setPriceRange([newMin, Math.max(newMin, priceRange[1])]);
  };

  const handleMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newMax = parseInt(e.target.value);
    setPriceRange([Math.min(priceRange[0], newMax), newMax]);
  };

  return (
    <div>
      <h3 className="text-lg font-semibold mb-4 text-foreground">Price Range</h3>
      
      <div className="space-y-6">
        <div className="relative">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-muted-foreground">$0</span>
            <span className="text-sm text-muted-foreground">$1000</span>
          </div>
          
          <div className="relative h-6">
            {/* Track */}
            <div className="absolute top-1/2 transform -translate-y-1/2 w-full h-2 bg-price-track rounded-full"></div>
            
            {/* Range */}
            <div 
              className="absolute top-1/2 transform -translate-y-1/2 h-2 bg-price-thumb rounded-full"
              style={{
                left: `${(priceRange[0] / 1000) * 100}%`,
                width: `${((priceRange[1] - priceRange[0]) / 1000) * 100}%`
              }}
            ></div>
            
            {/* Min handle */}
            <input
              type="range"
              min="0"
              max="1000"
              value={priceRange[0]}
              onChange={handleMinChange}
              className="absolute top-1/2 transform -translate-y-1/2 w-full h-6 bg-transparent appearance-none cursor-pointer slider-thumb"
              style={{ zIndex: priceRange[0] > 1000 - 100 ? 5 : 1 }}
            />
            
            {/* Max handle */}
            <input
              type="range"
              min="0"
              max="1000"
              value={priceRange[1]}
              onChange={handleMaxChange}
              className="absolute top-1/2 transform -translate-y-1/2 w-full h-6 bg-transparent appearance-none cursor-pointer slider-thumb"
              style={{ zIndex: priceRange[1] < 100 ? 5 : 1 }}
            />
          </div>
        </div>
        
        <div className="flex items-center justify-between">
          <div className="text-center">
            <p className="text-sm text-muted-foreground mb-1">Min Price</p>
            <p className="text-lg font-semibold text-foreground">${priceRange[0]}</p>
          </div>
          <div className="text-center">
            <p className="text-sm text-muted-foreground mb-1">Max Price</p>
            <p className="text-lg font-semibold text-foreground">${priceRange[1]}</p>
          </div>
        </div>
      </div>
    </div>
  );
};