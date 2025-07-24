import { motion } from "framer-motion";
import ApperIcon from "@/components/ApperIcon";

const Empty = ({ 
  title = "No restaurants found", 
  message = "Try adjusting your search or explore our featured restaurants.",
  actionLabel = "Clear Search",
  onAction 
}) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] px-6">
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="w-32 h-32 mx-auto mb-8 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center">
          <div className="w-24 h-24 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center shadow-lg">
            <ApperIcon name="Search" className="w-12 h-12 text-white" />
          </div>
        </div>
        
        <h3 className="text-3xl font-display font-bold gradient-text mb-4">
          {title}
        </h3>
        
        <p className="text-gray-600 mb-8 max-w-md mx-auto text-lg leading-relaxed">
          {message}
        </p>
        
        {onAction && (
          <motion.button
            onClick={onAction}
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-primary to-accent text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <ApperIcon name="RotateCcw" className="w-5 h-5" />
            <span>{actionLabel}</span>
          </motion.button>
        )}
        
        <div className="mt-8 flex justify-center space-x-4">
          <div className="w-2 h-2 bg-primary rounded-full animate-bounce"></div>
          <div className="w-2 h-2 bg-accent rounded-full animate-bounce" style={{ animationDelay: "0.1s" }}></div>
          <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
        </div>
      </motion.div>
    </div>
  );
};

export default Empty;