import { useState } from "react";

const sports = [
  "Basketball", "Soccer", "Football", "Running", "Tennis", "Golf", 
  "Baseball", "Volleyball", "Cross Training", "Walking", "Skateboarding", "Cycling"
];

export const SportFilter = () => {
  const [selectedSports, setSelectedSports] = useState<string[]>([]);

  const toggleSport = (sport: string) => {
    setSelectedSports(prev => 
      prev.includes(sport) 
        ? prev.filter(s => s !== sport)
        : [...prev, sport]
    );
  };

  return (
    <div>
      <h3 className="text-lg font-semibold mb-4 text-foreground">Select Sports</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        {sports.map((sport) => (
          <label 
            key={sport} 
            className="flex items-center space-x-2 cursor-pointer hover:bg-accent p-2 rounded-md transition-colors"
          >
            <input
              type="checkbox"
              checked={selectedSports.includes(sport)}
              onChange={() => toggleSport(sport)}
              className="w-4 h-4 text-primary bg-background border-border rounded focus:ring-ring"
            />
            <span className="text-sm text-foreground">{sport}</span>
          </label>
        ))}
      </div>
    </div>
  );
};