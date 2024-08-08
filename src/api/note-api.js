const BASE_URL = "https://yggdrasil.wouafwouaf.ovh/api/mondes"; // Assurez-vous que l'URL est correcte

export class WorldAPI {  // Renommé pour être plus descriptif
  static async fetchAllWorlds() {
    return fetch(BASE_URL)
      .then(response => {
        console.log("Response:", response);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.text().then(text => {
          console.log("Response Text:", text); // Log le texte brut de la réponse
          try {
            return JSON.parse(text);
          } catch (error) {
            console.error("Error parsing JSON:", error, "Response text:", text);
            throw new Error("Invalid JSON");
          }
        });
      })
      .then((data) => {
        return data;
      })
      .catch((error) => {
        console.error("There was a problem with the fetchAllWorlds operation:", error);
      });
  }

  static async fetchWorldById(id) {
    return fetch(`${BASE_URL}/${id}`)
      .then(response => {
        console.log("Response:", response);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.text().then(text => {
          console.log("Response Text:", text); // Log le texte brut de la réponse
          try {
            return JSON.parse(text);
          } catch (error) {
            console.error("Error parsing JSON:", error, "Response text:", text);
            throw new Error("Invalid JSON");
          }
        });
      })
      .then((data) => {
        return data;
      })
      .catch((error) => {
        console.error(`There was a problem with the fetchWorldById operation for ID ${id}:`, error);
      });
  }
}

// Example usage:

// Fetch all worlds
WorldAPI.fetchAllWorlds().then((data) => {  // Utilisation du nouveau nom de classe
  console.log("All worlds:", data);
});

// Fetch a world by ID
WorldAPI.fetchWorldById(1).then((data) => {  // Utilisation du nouveau nom de classe
  console.log("World with ID 1:", data);
});



