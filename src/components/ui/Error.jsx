import { motion } from "framer-motion";
import ApperIcon from "@/components/ApperIcon";

const Error = ({ message = "Something went wrong", onRetry }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] px-6">
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-error to-red-600 rounded-full flex items-center justify-center shadow-lg">
          <ApperIcon name="AlertTriangle" className="w-12 h-12 text-white" />
        </div>
        
        <h3 className="text-2xl font-display font-semibold text-secondary mb-3">
          Oops! Something went wrong
        </h3>
        
        <p className="text-gray-600 mb-8 max-w-md mx-auto leading-relaxed">
          {message}. Don't worry, we're working on it. Please try again.
        </p>
        
        {onRetry && (
          <motion.button
            onClick={onRetry}
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-primary to-accent text-white px-8 py-3 rounded-lg font-medium shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <ApperIcon name="RefreshCw" className="w-5 h-5" />
            <span>Try Again</span>
          </motion.button>
        )}
      </motion.div>
    </div>
  );
};

export default Error;