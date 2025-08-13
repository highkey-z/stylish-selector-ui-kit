import { useState } from "react";

const colors = [
  { name: "Black", value: "#000000" },
  { name: "White", value: "#FFFFFF" },
  { name: "Red", value: "#DC2626" },
  { name: "Blue", value: "#2563EB" },
  { name: "Green", value: "#16A34A" },
  { name: "Yellow", value: "#EAB308" },
  { name: "Purple", value: "#9333EA" },
  { name: "Pink", value: "#EC4899" },
  { name: "Orange", value: "#EA580C" },
  { name: "Gray", value: "#6B7280" },
  { name: "Brown", value: "#A16207" },
  { name: "Navy", value: "#1E3A8A" },
  { name: "Beige", value: "#F5F5DC" },
  { name: "Maroon", value: "#7F1D1D" },
  { name: "Teal", value: "#0F766E" },
  { name: "Silver", value: "#C0C0C0" },
];

export const ColorFilter = () => {
  const [selectedColors, setSelectedColors] = useState<string[]>([]);

  const toggleColor = (colorName: string) => {
    setSelectedColors(prev => 
      prev.includes(colorName) 
        ? prev.filter(c => c !== colorName)
        : [...prev, colorName]
    );
  };

  return (
    <div>
      <h3 className="text-lg font-semibold mb-4 text-foreground">Select Colors</h3>
      <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-3">
        {colors.map((color) => (
          <label 
            key={color.name} 
            className="flex flex-col items-center space-y-1 cursor-pointer group"
          >
            <div className="relative">
              <div 
                className={`
                  w-8 h-8 rounded-full border-2 transition-all duration-200
                  ${selectedColors.includes(color.name) ? 'border-primary scale-110' : 'border-border'}
                  ${color.name === 'White' ? 'border-gray-300' : ''}
                  group-hover:scale-105
                `}
                style={{ backgroundColor: color.value }}
              />
              {selectedColors.includes(color.name) && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                </div>
              )}
            </div>
            <input
              type="checkbox"
              checked={selectedColors.includes(color.name)}
              onChange={() => toggleColor(color.name)}
              className="sr-only"
            />
            <span className="text-xs text-muted-foreground text-center">{color.name}</span>
          </label>
        ))}
      </div>
    </div>
  );
};