import ApperIcon from "@/components/ApperIcon";
import { cn } from "@/utils/cn";

const RatingStars = ({ rating, className }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div className={cn("flex items-center space-x-1", className)}>
      {/* Full stars */}
      {Array.from({ length: fullStars }).map((_, index) => (
        <ApperIcon
          key={`full-${index}`}
          name="Star"
          className="w-4 h-4 fill-accent text-accent"
        />
      ))}
      
      {/* Half star */}
      {hasHalfStar && (
        <div className="relative">
          <ApperIcon name="Star" className="w-4 h-4 text-gray-300" />
          <div className="absolute inset-0 overflow-hidden w-1/2">
            <ApperIcon name="Star" className="w-4 h-4 fill-accent text-accent" />
          </div>
        </div>
      )}
      
      {/* Empty stars */}
      {Array.from({ length: emptyStars }).map((_, index) => (
        <ApperIcon
          key={`empty-${index}`}
          name="Star"
          className="w-4 h-4 text-gray-300"
        />
      ))}
      
      <span className="text-sm font-medium text-gray-600 ml-2">
        {rating.toFixed(1)}
      </span>
    </div>
  );
};

export default RatingStars;