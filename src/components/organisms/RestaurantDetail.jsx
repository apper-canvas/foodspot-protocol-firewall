import { motion } from "framer-motion";
import ApperIcon from "@/components/ApperIcon";
import Button from "@/components/atoms/Button";
import RatingStars from "@/components/molecules/RatingStars";
import PriceRange from "@/components/molecules/PriceRange";
import CuisineTag from "@/components/molecules/CuisineTag";

const RestaurantDetail = ({ restaurant, onClose }) => {
  if (!restaurant) return null;

  return (
    <motion.div
      className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header with Image */}
        <div className="relative h-64">
          <img
            src={restaurant.image}
            alt={restaurant.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          
          {/* Close Button */}
          <Button
            variant="ghost"
            size="sm"
            onClick={onClose}
            className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm hover:bg-white text-gray-600 rounded-full p-0"
          >
            <ApperIcon name="X" className="w-5 h-5" />
          </Button>

          {/* Restaurant Name Overlay */}
          <div className="absolute bottom-4 left-6 right-6">
            <h2 className="text-3xl font-display font-bold text-white mb-2">
              {restaurant.name}
            </h2>
            <div className="flex items-center space-x-4">
              <CuisineTag cuisine={restaurant.cuisine} className="bg-white/20 text-white border-white/30" />
              <PriceRange priceRange={restaurant.priceRange} className="text-white" />
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6 max-h-96 overflow-y-auto">
          {/* Rating and Quick Stats */}
          <div className="flex items-center justify-between">
            <RatingStars rating={restaurant.rating} className="text-lg" />
            <div className="flex items-center space-x-4 text-sm text-gray-500">
              <div className="flex items-center space-x-1">
                <ApperIcon name="MapPin" className="w-4 h-4" />
                <span>2.1 km away</span>
              </div>
              <div className="flex items-center space-x-1">
                <ApperIcon name="Clock" className="w-4 h-4" />
                <span>25-35 min</span>
              </div>
            </div>
          </div>

          {/* Description */}
          <div>
            <h3 className="text-lg font-display font-semibold text-secondary mb-2">
              About
            </h3>
            <p className="text-gray-600 leading-relaxed">
              {restaurant.description}
            </p>
          </div>

          {/* Contact Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-3">
              <h3 className="text-lg font-display font-semibold text-secondary">
                Contact
              </h3>
              <div className="space-y-2">
                <div className="flex items-center space-x-3">
                  <ApperIcon name="MapPin" className="w-5 h-5 text-primary" />
                  <span className="text-gray-600">{restaurant.address}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <ApperIcon name="Phone" className="w-5 h-5 text-primary" />
                  <span className="text-gray-600">{restaurant.phone}</span>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <h3 className="text-lg font-display font-semibold text-secondary">
                Hours
              </h3>
              <div className="space-y-1 text-sm">
                {Object.entries(restaurant.hours).map(([day, hours]) => (
                  <div key={day} className="flex justify-between">
                    <span className="text-gray-600 capitalize">{day}:</span>
                    <span className="text-gray-800 font-medium">{hours}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex space-x-4 pt-4 border-t border-gray-100">
            <Button className="flex-1">
              <ApperIcon name="Phone" className="w-5 h-5 mr-2" />
              Call Now
            </Button>
            <Button variant="outline" className="flex-1">
              <ApperIcon name="Navigation" className="w-5 h-5 mr-2" />
              Directions
            </Button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default RestaurantDetail;