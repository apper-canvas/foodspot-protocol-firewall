import { cn } from "@/utils/cn";

const PriceRange = ({ priceRange, className }) => {
  const levels = ["$", "$", "$", "$"];
  const activeLevel = priceRange.length;

  return (
    <div className={cn("flex items-center", className)}>
      {levels.map((symbol, index) => (
        <span
          key={index}
          className={cn(
            "text-sm font-bold transition-colors duration-200",
            index < activeLevel 
              ? "text-accent" 
              : "text-gray-300"
          )}
        >
          {symbol}
        </span>
      ))}
    </div>
  );
};

export default PriceRange;