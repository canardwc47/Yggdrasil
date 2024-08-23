// src/api/world-API.js
import { BASE_URL } from "../config";

export const WorldAPI = {
  async fetchAllWorld() {
    console.log("Fetching all worlds...");
    return fetch(BASE_URL)
      .then(response => {
        if (!response.ok) {
          throw new Error("Failed to fetch worlds");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Data fetched: ", data);
        return data;
      })
      .catch(error => {
        console.error("Error fetching all worlds:", error);
        return null;
      });
  },

  async fetchWorldById(id) {
    try {
      const response = await fetch(`${BASE_URL}/${id}`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      console.log("World fetched by ID:", data);
      return data;
    } catch (error) {
      console.error(`Error fetching world with id ${id}:`, error);
      return null;
    }
  },

  async fetchHabitantById(id) {
    try {
      const response = await fetch(BASE_URL); // Suppose que BASE_URL retourne db.json
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      const habitant = data.habitants.find(h => h.id === id);

      if (!habitant) {
        console.error(`Habitant with id ${id} not found.`);
        return null;
      }

      return habitant;
    } catch (error) {
      console.error(`Error fetching habitant with id ${id}:`, error);
      return null;
    }
  }
};














