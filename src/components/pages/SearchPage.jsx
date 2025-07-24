import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRestaurants } from "@/hooks/useRestaurants";
import Header from "@/components/organisms/Header";
import SearchBar from "@/components/molecules/SearchBar";
import RestaurantGrid from "@/components/organisms/RestaurantGrid";
import RestaurantDetail from "@/components/organisms/RestaurantDetail";
import Loading from "@/components/ui/Loading";
import Error from "@/components/ui/Error";
import Empty from "@/components/ui/Empty";
import ApperIcon from "@/components/ApperIcon";

const SearchPage = () => {
  const { restaurants, loading, error, searchRestaurants, loadRestaurants } = useRestaurants();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);
  const [hasSearched, setHasSearched] = useState(false);

  useEffect(() => {
    const delayedSearch = setTimeout(() => {
      if (searchQuery.trim() || hasSearched) {
        searchRestaurants(searchQuery);
        setHasSearched(true);
      }
    }, 300);

    return () => clearTimeout(delayedSearch);
  }, [searchQuery, searchRestaurants, hasSearched]);

  const handleSearchChange = (query) => {
    setSearchQuery(query);
  };

  const handleRestaurantClick = (restaurant) => {
    setSelectedRestaurant(restaurant);
  };

  const handleCloseDetail = () => {
    setSelectedRestaurant(null);
  };

  const handleClearSearch = () => {
    setSearchQuery("");
    setHasSearched(false);
    loadRestaurants();
  };

  const popularCuisines = [
    { name: "Italian", icon: "Pizza" },
    { name: "Japanese", icon: "Fish" },
    { name: "Mexican", icon: "Pepper" },
    { name: "Chinese", icon: "Soup" },
    { name: "American", icon: "Beef" },
    { name: "Indian", icon: "Flame" }
  ];

  const handleCuisineClick = (cuisine) => {
    setSearchQuery(cuisine);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header 
        title="Find Your Perfect Restaurant"
        subtitle="Search by name, cuisine, or explore popular categories"
      />
      
      <main className="container mx-auto px-6 py-8 pb-20 md:pb-8">
        {/* Search Section */}
        <motion.div
          className="max-w-4xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex justify-center mb-8">
            <SearchBar
              value={searchQuery}
              onChange={handleSearchChange}
              placeholder="Search restaurants or cuisines..."
              className="w-full max-w-2xl"
            />
          </div>

          {/* Popular Cuisines */}
          {!hasSearched && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.3 }}
            >
              <h3 className="text-xl font-display font-semibold text-secondary mb-4 text-center">
                Popular Cuisines
              </h3>
              <div className="flex flex-wrap justify-center gap-3">
                {popularCuisines.map((cuisine) => (
                  <motion.button
                    key={cuisine.name}
                    onClick={() => handleCuisineClick(cuisine.name)}
                    className="flex items-center space-x-2 px-4 py-2 bg-white rounded-full shadow-md hover:shadow-lg border border-gray-200 hover:border-primary transition-all duration-200"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ApperIcon name={cuisine.icon} className="w-4 h-4 text-primary" />
                    <span className="text-sm font-medium text-gray-700">{cuisine.name}</span>
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}
        </motion.div>

        {/* Results Section */}
        {loading ? (
          <Loading />
        ) : error ? (
          <Error message={error} onRetry={() => searchRestaurants(searchQuery)} />
        ) : hasSearched ? (
          restaurants.length === 0 ? (
            <Empty 
              title="No restaurants found"
              message={`We couldn't find any restaurants matching "${searchQuery}". Try a different search term or explore our popular cuisines.`}
              actionLabel="Clear Search"
              onAction={handleClearSearch}
            />
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="mb-8">
                <h2 className="text-3xl font-display font-bold text-secondary mb-2">
                  {searchQuery ? `Results for "${searchQuery}"` : "All Restaurants"}
                </h2>
                <p className="text-gray-600 text-lg">
                  {restaurants.length} restaurant{restaurants.length !== 1 ? "s" : ""} found
                </p>
              </div>
              
              <RestaurantGrid 
                restaurants={restaurants}
                onRestaurantClick={handleRestaurantClick}
              />
            </motion.div>
          )
        ) : (
          <motion.div
            className="text-center py-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.3 }}
          >
            <div className="w-32 h-32 mx-auto mb-8 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center">
              <div className="w-24 h-24 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center shadow-lg">
                <ApperIcon name="Search" className="w-12 h-12 text-white" />
              </div>
            </div>
            <h3 className="text-2xl font-display font-bold gradient-text mb-4">
              Start Your Culinary Journey
            </h3>
            <p className="text-gray-600 text-lg max-w-md mx-auto">
              Search for restaurants by name or cuisine type, or browse our popular categories above.
            </p>
          </motion.div>
        )}
      </main>

      <AnimatePresence>
        {selectedRestaurant && (
          <RestaurantDetail
            restaurant={selectedRestaurant}
            onClose={handleCloseDetail}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default SearchPage;