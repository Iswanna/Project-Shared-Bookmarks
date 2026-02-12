# Testing Documentation - Shared Bookmarks

## Unit Tests

- **Rubric Item:** "The list of bookmarks must be shown in reverse chronological order"
- **Test Location:** `src/utils.test.js`
- **Method:** We used Jest to verify that a mock array of bookmarks with different `createdAt` timestamps is correctly reordered newest-to-oldest by the `sortBookmarksByTimestamp` function.

## Manual Testing for Rubric Points

### 1. Drop-down lists five users

- **Action:** Open the website.
- **Expected Result:** The `<select>` element contains options for User 1 through User 5.

### 2. Empty state message

- **Action:** Select a user with no data (e.g., User 5).
- **Expected Result:** The message "No bookmarks found for User 5" is displayed.

### 3. Creating a new bookmark

- **Action:** Select a user, fill in URL, Title, and Description, and click "Add Bookmark".
- **Expected Result:** The new bookmark appears at the top of the list instantly.

### 4. Persistence

- **Action:** Add a bookmark, like it, then refresh the browser.
- **Expected Result:** The bookmark and its like count remain exactly as they were.

### 5. Copy to Clipboard

- **Action:** Click the "Copy URL" button on any bookmark.
- **Expected Result:** The URL is copied to the system clipboard; verify by pasting into the address bar.

### 6. Accessibility (Lighthouse)

- **Action:** Run Chrome Lighthouse (Navigation mode) on the deployed site.
- **Expected Result:** Score of 100% in the Accessibility category.
