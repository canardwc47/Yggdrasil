const BASE_URL = "http://localhost:3200/mondes";

export class NoteAPI {
  static async fetchAll() {
    return fetch(BASE_URL)
      .then(response => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        return data;
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });
  }

  static async fetchById(id) {
    return fetch(`${BASE_URL}/${id}`)
      .then(response => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        return data;
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });
  }
}

// Example usage:

// Fetch all worlds
NoteAPI.fetchAll().then((data) => {
  console.log("All worlds:", data);
});

// Fetch a world by ID
NoteAPI.fetchById(1).then((data) => {
  console.log("World with ID 1:", data);
});

