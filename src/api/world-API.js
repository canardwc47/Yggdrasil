import { BASE_URL } from "../config";

export class WorldAPI {
  static async fetchAllWorld() {
    console.log("hello")
    return fetch(BASE_URL)
      .then(response => response.json())
      .then((data)  => {
        console.log(data)
        return data;
    })
  }

   static async fetchWorldById(id) {
     try {
       const response = await fetch(`${BASE_URL}/${id}`);
       if (!response.ok) {
         throw new Error(`HTTP error! status: ${response.status}`);
       }
       const data = await response.json();
       console.log(data);
       return data;
    } catch (error) {
      console.error(`Error fetching world with id ${id}:`, error);
      return null;
    }
 }
}






