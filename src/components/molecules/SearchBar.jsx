import { useState } from "react";
import { motion } from "framer-motion";
import ApperIcon from "@/components/ApperIcon";
import Input from "@/components/atoms/Input";
import { cn } from "@/utils/cn";

const SearchBar = ({ 
  value, 
  onChange, 
  placeholder = "Search restaurants...", 
  className 
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleClear = () => {
    onChange("");
  };

  return (
    <div className={cn("relative w-full max-w-md", className)}>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
          <ApperIcon 
            name="Search" 
            className={cn(
              "h-5 w-5 transition-colors duration-200",
              isFocused ? "text-primary" : "text-gray-400"
            )} 
          />
        </div>
        
        <Input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder={placeholder}
          className="pl-12 pr-12 h-14 text-lg shadow-lg border-2 focus:shadow-xl"
        />
        
        {value && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={handleClear}
            className="absolute inset-y-0 right-0 pr-4 flex items-center hover:bg-gray-100 rounded-r-lg transition-colors duration-200"
          >
            <ApperIcon name="X" className="h-5 w-5 text-gray-400 hover:text-gray-600" />
          </motion.button>
        )}
      </div>
    </div>
  );
};

export default SearchBar;