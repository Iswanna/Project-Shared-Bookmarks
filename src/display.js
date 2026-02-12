import { getData } from "./storage.js";
import { handleLike } from "./bookmark-likes.js";
import { copyToClipboard } from "./copyToClipboard.js";
import { sortBookmarksByTimestamp } from "./utils.js";

export function renderBookmarks(userId) {
  const containerForBookmarks = document.getElementById("bookmarks-container");
  const templateForOneBookmark = document.getElementById("bookmark-template");

  // Clear the container first so old data doesn't render
  containerForBookmarks.innerHTML = "";

  const bookmarksForOneUser = getData(userId);

  // Handle empty or null state
  if (bookmarksForOneUser === null || bookmarksForOneUser.length === 0) {
    containerForBookmarks.textContent = "No bookmarks found";
    return; // Stop the function here
  }

  // Sort the array of bookmark objects in a reverse chronological order (Newest first)
  const sortedBookmarks = sortBookmarksByTimestamp(bookmarksForOneUser);

  // Loop through and render
  sortedBookmarks.forEach((bookmark) => {
    // Create a clone of the template
    const cloneTemplate = templateForOneBookmark.content.cloneNode(true);

    // Find the "Title Element" (the <a> tag)
    const titleLink = cloneTemplate.querySelector(".bookmark-title");

    // Fill the title element with data
    titleLink.textContent = bookmark.title; // The text the user sees
    titleLink.href = bookmark.url; // The actual link

    // Find the "Description Element" and fill it with data
    const descriptionElement = cloneTemplate.querySelector(
      ".bookmark-description",
    );
    descriptionElement.textContent = bookmark.description;

    // Find the "Timestamp element" and fill it with data
    const timeStampElement = cloneTemplate.querySelector(".bookmark-timestamp");

    // Convert the number into a human-readable string (like "10/02/2026, 14:30")
    const date = new Date(bookmark.createdAt);
    // Fill the timestamp element with data
    timeStampElement.textContent = `Created at ${date.toLocaleString()}`;
    //Get the URL to be copied
    const copyBtn = cloneTemplate.querySelector(".copy-btn");

    copyBtn.addEventListener("click", () => {
      copyToClipboard(bookmark.url, copyBtn);
    });

    // Fill the Like Count (using || 0 as a fallback)
    const likeCountElement = cloneTemplate.querySelector(".like-count");
    likeCountElement.textContent = bookmark.likes || 0;

    // Set up the Like Button click event
    const likeBtn = cloneTemplate.querySelector(".like-btn");
    likeBtn.addEventListener("click", () => {
      // This calls your new likes.js logic!
      handleLike(userId, bookmark.createdAt);
    });

    // Append the clone to the container
    containerForBookmarks.appendChild(cloneTemplate);
  });
}
