import { motion } from "framer-motion";
import Card from "@/components/atoms/Card";
import RatingStars from "@/components/molecules/RatingStars";
import PriceRange from "@/components/molecules/PriceRange";
import CuisineTag from "@/components/molecules/CuisineTag";
import ApperIcon from "@/components/ApperIcon";

const RestaurantCard = ({ restaurant, onClick }) => {
  return (
    <Card 
      className="cursor-pointer group"
      onClick={() => onClick(restaurant)}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
    >
      {/* Restaurant Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={restaurant.image}
          alt={restaurant.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Favorite button */}
        <motion.button
          className="absolute top-3 right-3 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <ApperIcon name="Heart" className="w-5 h-5 text-gray-600 hover:text-primary transition-colors duration-200" />
        </motion.button>
      </div>

      {/* Restaurant Info */}
      <div className="p-5 space-y-3">
        {/* Restaurant Name */}
        <h3 className="text-xl font-display font-semibold text-secondary group-hover:text-primary transition-colors duration-200 line-clamp-1">
          {restaurant.name}
        </h3>

        {/* Cuisine and Price */}
        <div className="flex items-center justify-between">
          <CuisineTag cuisine={restaurant.cuisine} />
          <PriceRange priceRange={restaurant.priceRange} />
        </div>

        {/* Rating */}
        <div className="flex items-center justify-between">
          <RatingStars rating={restaurant.rating} />
          <div className="flex items-center space-x-1 text-sm text-gray-500">
            <ApperIcon name="MapPin" className="w-4 h-4" />
            <span>2.1 km</span>
          </div>
        </div>

        {/* Quick Info */}
        <div className="flex items-center space-x-4 text-sm text-gray-500 pt-2 border-t border-gray-100">
          <div className="flex items-center space-x-1">
            <ApperIcon name="Clock" className="w-4 h-4" />
            <span>25-35 min</span>
          </div>
          <div className="flex items-center space-x-1">
            <ApperIcon name="Truck" className="w-4 h-4" />
            <span>Free delivery</span>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default RestaurantCard;