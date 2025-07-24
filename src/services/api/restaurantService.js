import restaurantData from "@/services/mockData/restaurants.json";

class RestaurantService {
  constructor() {
    this.restaurants = [...restaurantData];
  }

  async getAll() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([...this.restaurants]);
      }, 300);
    });
  }

  async getById(id) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const restaurant = this.restaurants.find(r => r.Id === parseInt(id));
        if (restaurant) {
          resolve({ ...restaurant });
        } else {
          reject(new Error("Restaurant not found"));
        }
      }, 200);
    });
  }

  async searchByName(query) {
    return new Promise((resolve) => {
      setTimeout(() => {
        if (!query.trim()) {
          resolve([...this.restaurants]);
          return;
        }
        
        const filtered = this.restaurants.filter(restaurant =>
          restaurant.name.toLowerCase().includes(query.toLowerCase()) ||
          restaurant.cuisine.toLowerCase().includes(query.toLowerCase())
        );
        resolve([...filtered]);
      }, 250);
    });
  }

  async getByCuisine(cuisine) {
    return new Promise((resolve) => {
      setTimeout(() => {
        const filtered = this.restaurants.filter(restaurant =>
          restaurant.cuisine.toLowerCase() === cuisine.toLowerCase()
        );
        resolve([...filtered]);
      }, 200);
    });
  }

  async create(restaurant) {
    return new Promise((resolve) => {
      setTimeout(() => {
        const maxId = Math.max(...this.restaurants.map(r => r.Id));
        const newRestaurant = {
          ...restaurant,
          Id: maxId + 1
        };
        this.restaurants.push(newRestaurant);
        resolve({ ...newRestaurant });
      }, 300);
    });
  }

  async update(id, data) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const index = this.restaurants.findIndex(r => r.Id === parseInt(id));
        if (index !== -1) {
          this.restaurants[index] = { ...this.restaurants[index], ...data };
          resolve({ ...this.restaurants[index] });
        } else {
          reject(new Error("Restaurant not found"));
        }
      }, 300);
    });
  }

  async delete(id) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const index = this.restaurants.findIndex(r => r.Id === parseInt(id));
        if (index !== -1) {
          const deleted = this.restaurants.splice(index, 1)[0];
          resolve({ ...deleted });
        } else {
          reject(new Error("Restaurant not found"));
        }
      }, 200);
    });
  }
}

export default new RestaurantService();