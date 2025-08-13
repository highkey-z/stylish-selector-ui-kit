import { useState } from "react";

const materials = [
  "Leather", "Canvas", "Mesh", "Suede", "Synthetic", "Knit", 
  "Rubber", "Patent Leather", "Nubuck", "Textile", "Flyknit", "Primeknit"
];

export const MaterialFilter = () => {
  const [selectedMaterials, setSelectedMaterials] = useState<string[]>([]);

  const toggleMaterial = (material: string) => {
    setSelectedMaterials(prev => 
      prev.includes(material) 
        ? prev.filter(m => m !== material)
        : [...prev, material]
    );
  };

  return (
    <div>
      <h3 className="text-lg font-semibold mb-4 text-foreground">Select Materials</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        {materials.map((material) => (
          <label 
            key={material} 
            className="flex items-center space-x-2 cursor-pointer hover:bg-accent p-2 rounded-md transition-colors"
          >
            <input
              type="checkbox"
              checked={selectedMaterials.includes(material)}
              onChange={() => toggleMaterial(material)}
              className="w-4 h-4 text-primary bg-background border-border rounded focus:ring-ring"
            />
            <span className="text-sm text-foreground">{material}</span>
          </label>
        ))}
      </div>
    </div>
  );
};