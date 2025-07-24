import { useState, useEffect } from "react";
import restaurantService from "@/services/api/restaurantService";

export const useRestaurants = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const loadRestaurants = async () => {
    try {
      setLoading(true);
      setError("");
      const data = await restaurantService.getAll();
      setRestaurants(data);
    } catch (err) {
      setError(err.message || "Failed to load restaurants");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadRestaurants();
  }, []);

  const searchRestaurants = async (query) => {
    try {
      setLoading(true);
      setError("");
      const data = await restaurantService.searchByName(query);
      setRestaurants(data);
    } catch (err) {
      setError(err.message || "Failed to search restaurants");
    } finally {
      setLoading(false);
    }
  };

  const getRestaurantById = async (id) => {
    try {
      const restaurant = await restaurantService.getById(id);
      return restaurant;
    } catch (err) {
      throw new Error(err.message || "Failed to get restaurant details");
    }
  };

  return {
    restaurants,
    loading,
    error,
    loadRestaurants,
    searchRestaurants,
    getRestaurantById
  };
};