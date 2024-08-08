const BASE_URL = "https://yggdrasil.wouafwouaf.ovh/api/mondes";

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


