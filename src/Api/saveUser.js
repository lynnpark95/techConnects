
import { getDatabase, ref, update } from "firebase/database";

  // New function for database update
  export const saveUserData = async (userData, uid) => {
    try {
        // Firebase save in DB
    const db = getDatabase();
    const userRef = ref(db, `users/${uid}`);
      await update(userRef, userData);
      console.log("User data saved successfully");

    console.log("User data and events saved successfully");
    } catch (error) {
      console.error("Error saving user data:", error.message);
      // Handle the error as needed
    }
  };
