import { ChevronDown, ChevronUp, Tag, Palette, Ruler, Shirt, DollarSign, Zap } from "lucide-react";

interface FilterButtonProps {
  name: string;
  icon: string;
  isActive: boolean;
  onClick: () => void;
}

const iconMap = {
  tag: Tag,
  palette: Palette,
  ruler: Ruler,
  shirt: Shirt,
  "dollar-sign": DollarSign,
  zap: Zap,
};

export const FilterButton = ({ name, icon, isActive, onClick }: FilterButtonProps) => {
  const IconComponent = iconMap[icon as keyof typeof iconMap];
  
  return (
    <button
      onClick={onClick}
      className={`
        w-full p-4 bg-filter-button hover:bg-filter-button-hover 
        border border-filter-button-border rounded-lg 
        flex items-center justify-between 
        transition-all duration-200 ease-in-out
        ${isActive ? 'bg-accent border-primary' : ''}
        group hover:shadow-sm
      `}
    >
      <div className="flex items-center gap-3">
        <IconComponent className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors" />
        <span className="text-lg font-medium text-foreground">{name}</span>
      </div>
      
      {isActive ? (
        <ChevronUp className="w-5 h-5 text-muted-foreground" />
      ) : (
        <ChevronDown className="w-5 h-5 text-muted-foreground" />
      )}
    </button>
  );
};