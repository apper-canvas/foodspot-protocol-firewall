import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/utils/cn";

const Card = React.forwardRef(({ 
  className, 
  children, 
  hover = true,
  ...props 
}, ref) => {
  return (
    <motion.div
      ref={ref}
      className={cn(
        "bg-white rounded-xl shadow-card overflow-hidden transition-all duration-200",
        hover && "hover:shadow-card-hover hover:-translate-y-1",
        className
      )}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={hover ? { y: -4 } : undefined}
      {...props}
    >
      {children}
    </motion.div>
  );
});

Card.displayName = "Card";

export default Card;