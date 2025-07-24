import { motion } from "framer-motion";
import RestaurantCard from "@/components/organisms/RestaurantCard";

const RestaurantGrid = ({ restaurants, onRestaurantClick }) => {
  return (
    <motion.div
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      {restaurants.map((restaurant, index) => (
        <motion.div
          key={restaurant.Id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1, duration: 0.3 }}
        >
          <RestaurantCard
            restaurant={restaurant}
            onClick={onRestaurantClick}
          />
        </motion.div>
      ))}
    </motion.div>
  );
};

export default RestaurantGrid;