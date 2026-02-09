import { getUserIds, getData } from "./storage.js";

const userSelect = document.getElementById("select-user");
const appContainer = document.getElementById("app");
const displayMessage = document.createElement("p");

displayMessage.id = "status-message";
appContainer.appendChild(displayMessage);

console.log("select:", userSelect);

const initUser = () => {
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

function updateDisplay(userId) {
  displayMessage.textContent = "";

  if (!userId) {
    displayMessage.textContent = `Please, select a user`;
    return;
  }

  const bookmarkData = getData(userId);

  if (!bookmarkData || bookmarkData.length === 0) {
    displayMessage.textContent = `Bookmarks not found for this user`;
    return;
  }

  displayMessage.textContent = `Bookmarks for this user: ${bookmarkData.length}`;
}

initUser();
