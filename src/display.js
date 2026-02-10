import { getData } from "./storage.js";

export function renderBookmarks(userId) {
    const containerForBookmarks = document.getElementById('bookmarks-container');
    const templateForOneBookmark = document.getElementById('bookmark-template');

    // Clear the container first so old data doesn't render
    containerForBookmarks.innerHTML = '';

    const bookmarksForOneUser = getData(userId);

    // Handle emtpy or null state
    if (bookmarksForOneUser === null || bookmarksForOneUser.length === 0) {
        containerForBookmarks.textContent = "No bookmarks found";
        return; // Stop the function here
    }
 
    // Sort the array of bookmark objects in a reverse chronological order (Newest first)
    const sortedBookmarks = [...bookmarksForOneUser].sort((a, b) => b.createdAt - a.createdAt);

    // Loop through and render
    sortedBookmarks.forEach((bookmark) => {
        // Create a clone of the template
        const cloneTemplate = templateForOneBookmark.content.cloneNode(true);
        
        // Find the "Title Element" (the <a> tag)
        const titleLink = cloneTemplate.querySelector('.bookmark-title');

        // Fill the title element with data
        titleLink.textContent = bookmark.title; // The text the user sees
        titleLink.href = bookmark.url;          // The actual link

        // Find the "Description Element" and fill it with data
        const descriptionElement = cloneTemplate.querySelector('.bookmark-description');
        descriptionElement.textContent = bookmark.description;

        // Find the "Timestamp element" and fill it with data
        const timeStampElement = cloneTemplate.querySelector('.bookmark-timestamp');
        
        // Convert the number into a human-readable string (like "10/02/2026, 14:30")
        const date = new Date(bookmark.createdAt);
        // Fill the timestamp element with data
        timeStampElement.textContent = `Added on ${date.toLocaleString()}`;

        // Append the clone to the container
        containerForBookmarks.appendChild(cloneTemplate);

    });

}

