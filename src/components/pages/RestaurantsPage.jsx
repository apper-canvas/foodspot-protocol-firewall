import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRestaurants } from "@/hooks/useRestaurants";
import Header from "@/components/organisms/Header";
import RestaurantGrid from "@/components/organisms/RestaurantGrid";
import RestaurantDetail from "@/components/organisms/RestaurantDetail";
import Loading from "@/components/ui/Loading";
import Error from "@/components/ui/Error";
import Empty from "@/components/ui/Empty";

const RestaurantsPage = () => {
  const { restaurants, loading, error, loadRestaurants } = useRestaurants();
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);

  const handleRestaurantClick = (restaurant) => {
    setSelectedRestaurant(restaurant);
  };

  const handleCloseDetail = () => {
    setSelectedRestaurant(null);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <Header 
          title="Explore Amazing Restaurants"
          subtitle="Discover your next favorite dining spot from our curated collection"
        />
        <div className="container mx-auto">
          <Loading />
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-background">
        <Header 
          title="Explore Amazing Restaurants"
          subtitle="Discover your next favorite dining spot from our curated collection"
        />
        <div className="container mx-auto">
          <Error message={error} onRetry={loadRestaurants} />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header 
        title="Explore Amazing Restaurants"
        subtitle="Discover your next favorite dining spot from our curated collection"
      />
      
      <main className="container mx-auto px-6 py-8 pb-20 md:pb-8">
        {restaurants.length === 0 ? (
          <Empty 
            title="No restaurants available"
            message="We're working hard to bring you amazing dining options. Check back soon!"
            onAction={loadRestaurants}
            actionLabel="Refresh"
          />
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="mb-8">
              <h2 className="text-3xl font-display font-bold text-secondary mb-2">
                Featured Restaurants
              </h2>
              <p className="text-gray-600 text-lg">
                {restaurants.length} restaurants ready to serve you
              </p>
            </div>
            
            <RestaurantGrid 
              restaurants={restaurants}
              onRestaurantClick={handleRestaurantClick}
            />
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

export default RestaurantsPage;