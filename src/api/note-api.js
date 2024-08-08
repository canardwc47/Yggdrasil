const BASE_URL = "http://localhost:3200/api/mondes"; // Utilisez le port sur lequel votre API est en cours d'exécution

export class WorldAPI {
  static async fetchAllWorlds() {
    return fetch(BASE_URL)
      .then(response => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .catch((error) => {
        console.error("There was a problem with the fetchAllWorlds operation:", error);
      });
  }
}



