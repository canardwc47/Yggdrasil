const BASE_URL = "https://yggdrasil.wouafwouaf.ovh/api/mondes";

export class WorldAPI {
  static async fetchAllWorlds() {
    return fetch(BASE_URL)
      .then(response => {
        console.log("Response:", response);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.text().then(text => {
          console.log("Response Text:", text);
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

}

