import { cn } from "@/utils/cn";

const CuisineTag = ({ cuisine, className }) => {
  return (
    <span className={cn(
      "inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-secondary/10 text-secondary border border-secondary/20",
      className
    )}>
      {cuisine}
    </span>
  );
};

export default CuisineTag;