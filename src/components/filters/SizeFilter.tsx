import { useState } from "react";

const menSizes = ["6", "6.5", "7", "7.5", "8", "8.5", "9", "9.5", "10", "10.5", "11", "11.5", "12", "13", "14"];
const womenSizes = ["5", "5.5", "6", "6.5", "7", "7.5", "8", "8.5", "9", "9.5", "10", "10.5", "11", "12"];

export const SizeFilter = () => {
  const [selectedGender, setSelectedGender] = useState<"men" | "women">("men");
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);

  const toggleSize = (size: string) => {
    setSelectedSizes(prev => 
      prev.includes(size) 
        ? prev.filter(s => s !== size)
        : [...prev, size]
    );
  };

  const handleGenderChange = (gender: "men" | "women") => {
    setSelectedGender(gender);
    setSelectedSizes([]); // Clear selected sizes when switching gender
  };

  const currentSizes = selectedGender === "men" ? menSizes : womenSizes;

  return (
    <div>
      <h3 className="text-lg font-semibold mb-4 text-foreground">Select Sizes</h3>
      
      <div className="flex gap-4 mb-6">
        <button
          onClick={() => handleGenderChange("men")}
          className={`
            px-4 py-2 rounded-lg font-medium transition-colors
            ${selectedGender === "men" 
              ? "bg-primary text-primary-foreground" 
              : "bg-secondary text-secondary-foreground hover:bg-accent"
            }
          `}
        >
          Men's Sizes
        </button>
        <button
          onClick={() => handleGenderChange("women")}
          className={`
            px-4 py-2 rounded-lg font-medium transition-colors
            ${selectedGender === "women" 
              ? "bg-primary text-primary-foreground" 
              : "bg-secondary text-secondary-foreground hover:bg-accent"
            }
          `}
        >
          Women's Sizes
        </button>
      </div>

      <div className="grid grid-cols-5 md:grid-cols-8 lg:grid-cols-10 gap-2">
        {currentSizes.map((size) => (
          <label 
            key={size} 
            className="cursor-pointer"
          >
            <input
              type="checkbox"
              checked={selectedSizes.includes(size)}
              onChange={() => toggleSize(size)}
              className="sr-only"
            />
            <div className={`
              w-12 h-12 border rounded-lg flex items-center justify-center 
              text-sm font-medium transition-all duration-200
              ${selectedSizes.includes(size) 
                ? "bg-primary text-primary-foreground border-primary" 
                : "bg-background text-foreground border-border hover:bg-accent"
              }
            `}>
              {size}
            </div>
          </label>
        ))}
      </div>
    </div>
  );
};