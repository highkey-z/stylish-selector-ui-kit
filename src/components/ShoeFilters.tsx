import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { BrandFilter } from "./filters/BrandFilter";
import { ColorFilter } from "./filters/ColorFilter";
import { SizeFilter } from "./filters/SizeFilter";
import { MaterialFilter } from "./filters/MaterialFilter";
import { PriceFilter } from "./filters/PriceFilter";
import { SportFilter } from "./filters/SportFilter";
import { FilterButton } from "./filters/FilterButton";

export const ShoeFilters = () => {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);

  const toggleFilter = (filterName: string) => {
    setActiveFilter(activeFilter === filterName ? null : filterName);
  };

  const filters = [
    { name: "Brands", component: BrandFilter, icon: "tag" },
    { name: "Colors", component: ColorFilter, icon: "palette" },
    { name: "Sizes", component: SizeFilter, icon: "ruler" },
    { name: "Materials", component: MaterialFilter, icon: "shirt" },
    { name: "Price", component: PriceFilter, icon: "dollar-sign" },
    { name: "Sports", component: SportFilter, icon: "zap" },
  ];

  return (
    <div className="w-full max-w-4xl mx-auto p-6 space-y-4">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-2">Shoe Filters</h1>
        <p className="text-muted-foreground">Find your perfect pair</p>
      </div>
      
      {filters.map((filter) => {
        const isActive = activeFilter === filter.name;
        const FilterComponent = filter.component;
        
        return (
          <div key={filter.name} className="space-y-2">
            <FilterButton
              name={filter.name}
              icon={filter.icon}
              isActive={isActive}
              onClick={() => toggleFilter(filter.name)}
            />
            
            {isActive && (
              <div className="bg-filter-panel border border-filter-panel-border rounded-lg p-6 animate-accordion-down shadow-sm">
                <FilterComponent />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};