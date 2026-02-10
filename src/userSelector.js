import { getUserIds, getData } from "./storage.js";
import { renderBookmarks } from "./display.js";

const userSelect = document.getElementById("select-user");
const userContainer = document.getElementById("user-container");
const displayMessage = document.createElement("p");
const container = document.getElementById("bookmarks-container");

displayMessage.id = "status-message";
userContainer.appendChild(displayMessage);

/**
 * Initializes users selections dropdown
 * Fetches data from storage.js and populates the options
 * Sets User 1 as the default user, and listens to events for changes
 * @returns {void}
 */

export const initUser = () => {
  const ids = getUserIds();

  ids.forEach((id) => {
    const option = document.createElement("option");
    option.value = id;
    option.textContent = `User ${id}`;
    userSelect.appendChild(option);
  });

  const defaultUserId = "1";
  if (ids.includes(defaultUserId)) {
    userSelect.value = defaultUserId;
    updateDisplay(defaultUserId);
  }

  userSelect.addEventListener("change", (e) => {
    updateDisplay(e.target.value);
  });
};

/**
 * Updates the UI based on selected users bookmark data
 * @param {string} userId
 * @returns {void}
 */

export function updateDisplay(userId) {
  displayMessage.textContent = "";

  if (!userId) {
    displayMessage.textContent = `Please select a user`;
    if (container) container.innerHTML = "";
    return;
  }

  const bookmarkData = getData(userId);

  if (!bookmarkData || bookmarkData.length === 0) {
    displayMessage.textContent = `No bookmarks found for User ${userId}`;
    if (container) container.innerHTML = "";
    return;
  }
  renderBookmarks(userId);
  displayMessage.textContent = `Bookmarks for this user: ${bookmarkData.length}`;
}
