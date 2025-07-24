import { motion } from "framer-motion";
import ApperIcon from "@/components/ApperIcon";

const Header = ({ title, subtitle }) => {
  return (
    <motion.div
      className="bg-gradient-to-br from-primary via-accent to-primary/90 text-white py-16 px-6"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="max-w-7xl mx-auto text-center">
        <motion.div
          className="flex items-center justify-center space-x-3 mb-4"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1, duration: 0.3 }}
        >
          <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
            <ApperIcon name="UtensilsCrossed" className="w-6 h-6" />
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold">
            FoodSpot
          </h1>
        </motion.div>
        
        <motion.h2
          className="text-2xl md:text-3xl font-display font-semibold mb-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.3 }}
        >
          {title}
        </motion.h2>
        
        <motion.p
          className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.3 }}
        >
          {subtitle}
        </motion.p>
      </div>
    </motion.div>
  );
};

export default Header;