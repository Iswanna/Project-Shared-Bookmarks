# Testing Documentation - Shared Bookmarks

This document outlines the testing procedures followed to ensure all project requirements and rubric points have been met.

**Live Site:** https://cyf-shared-bookmarks-iswat-and-chioma.netlify.app/

## Automated Unit Testing

**Rubric Point:** _Unit tests must be written for at least one non-trivial function._

- **Location:** `src/utils.test.js`
- **Function Tested:** `sortBookmarksByTimestamp(bookmarks)` inside `src/utils.js`.
- **Reasoning:** Sorting a collection of objects by a dynamic timestamp and returning a new, immutable array is a non-trivial logical operation critical to the core user experience.
- **Verification:** Run `npm install` and then `npm test`. The test verifies correct sorting order, handling of empty arrays, and data immutability.

---

## Manual Testing Procedures

### 1. User Selection

**Rubric Point:** _The website must contain a drop-down which lists five users._

- **Action:** Open the website and click the "Select User" dropdown.
- **Verification:** Observe that "User 1" through "User 5" are available options.

### 2. User Filtering

**Rubric Point:** _Selecting a user must display the list of bookmarks for the relevant user._

- **Action:** Select "User 1," add a bookmark, then select "User 2."
- **Verification:** Confirm that "User 1's" bookmarks disappear and are replaced by the list for "User 2" (or an empty state message).

### 3. Empty State Handling

**Rubric Point:** _If there are no bookmarks for the selected user, a message is displayed to explain this._

- **Action:** Select a user who has no saved bookmarks e.g. User 5.
- **Verification:** Observe that the UI displays a clear message such as "No bookmarks found for User 5."

### 4. Reverse Chronological Order

**Rubric Point:** _The list of bookmarks must be shown in reverse chronological order._

- **Action:** Add a bookmark at 2:00 PM and another at 2:05 PM.
- **Verification:**
  - **Unit Test:** Automated verification in `src/utils.test.js`.
  - **Manual:** Observe that the 2:05 PM bookmark appears at the top of the list.

### 5. Bookmark Data Display

**Rubric Point:** _Each bookmark has a title, description and created at timestamp displayed._

- **Action:** View any rendered bookmark in the list.
- **Verification:** Confirm the presence of the Title text, Description paragraph, and a readable timestamp string (e.g., `Created at 11/02/2026, 15:49:58`).

### 6. Hyperlinked Titles

**Rubric Point:** _Each bookmark’s title is a link to the bookmark’s URL._

- **Action:** Click the title of any bookmark.
- **Verification:** Confirm that the browser opens the correct URL (verified via the `<a>` tag's `href` attribute).

### 7. Copy to Clipboard

**Rubric Point:** _Each bookmark's "Copy to clipboard" button must copy the URL of the bookmark._

- **Action:** Click the "Copy URL" button and paste (Ctrl+V) into a notepad or address bar.
- **Verification:** Confirm the pasted text matches the bookmark's URL exactly.

### 8. Like Counter Independence & Persistence

**Rubric Point:** _Each bookmark's like counter works independently, and persists data across sessions._

- **Action:** Click the Like button on "Bookmark A" three times, then refresh the page.
- **Verification:**
  - "Bookmark A" should still show 3 likes.
  - Other bookmarks should still show 0 likes (verifying independence).

### 9. New Bookmark Form

**Rubric Point:** _The website must contain a form with inputs for a URL, a title, and a description. The form should have a submit button._

- **Action:** Inspect the "Create a New Bookmark" section.
- **Verification:** Confirm the existence of a URL input, Title input, Description textarea, and a Submit button (`Add Bookmark` button).

### 10. Selective Data Storage

**Rubric Point:** _Submitting the form adds a new bookmark for the relevant user only._

- **Action:** Select "User 4" and add a bookmark.
- **Verification:** Check Local Storage or switch to "User 5." Confirm the new bookmark only exists under User 4's data.

### 11. Immediate UI Update

**Rubric Point:** _After creating a new bookmark, the list of bookmarks for the current user is shown, including the new bookmark._

- **Action:** Fill out and submit the "Create a New Bookmark" form.
- **Verification:** Observe the list updating instantly to include the new entry without a manual page refresh.

### 12. Accessibility Compliance

**Rubric Point:** _The website must score 100 for accessibility in Lighthouse._

- **Action:** Open Chrome DevTools > Lighthouse. Select "Navigation" and "Accessibility." Run Report on the live URL.
- **Verification:** Confirm a score of **100**.
