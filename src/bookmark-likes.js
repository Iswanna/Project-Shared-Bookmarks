import { getData, setData } from "./storage.js";
import { renderBookmarks } from "./display.js";

/**
 * Increments the like count for a specific bookmark and saves it.
 * @param {string} userId - The current user ID.
 * @param {number} timestamp - The unique createdAt ID of the bookmark.
 */
export function handleLike(userId, timestamp) {
  // 1. Get the latest data from storage
  const allBookmarks = getData(userId);

  // 2. Loop through bookmarks and update ONLY the one that matches the timestamp
  const updatedBookmarks = allBookmarks.map((bookmark) => {
    if (bookmark.createdAt === timestamp) {
      // Create a copy of the bookmark with incremented likes
      return {
        ...bookmark,
        likes: (bookmark.likes || 0) + 1,
      };
    }
    // Return unchanged if it doesn't match
    return bookmark;
  });

  // 3. Save the entire updated array back to storage
  setData(userId, updatedBookmarks);

  // 4. Refresh the UI so the user sees the new count immediately
  renderBookmarks(userId);
}
