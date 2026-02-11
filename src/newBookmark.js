import { getData, setData } from "./storage.js";
import { updateDisplay } from "./userSelector.js";

/**
 * Initializes the new bookmark form logic
 * Checks for form existence, handles submission
 * saves to storage, and updates the display
 */

export const initNewBookmarkForm = () => {
  const form = document.getElementById("add-bookmark-form");
  const userSelect = document.getElementById("select-user");
  const urlInput = document.getElementById("bookmark-url");

  if (!form || !userSelect) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const userId = userSelect.value;
    if (!userId) {
      alert(`Please select a user`);
      return;
    }

    const formData = new FormData(form);
    const url = formData.get("url").trim();
    const title = formData.get("title").trim();
    const description = formData.get("description").trim();

    // URL validation
    try {
      new URL(url);
    } catch {
      alert(`Please enter a valid URL`);
      return;
    }

    const newBookmark = {
      url,
      title,
      description,
      createdAt: Date.now(),
      likes: 0,
    };

    const existingBookmarks = getData(userId);
    const updatedBookmarks = Array.isArray(existingBookmarks)
      ? [...existingBookmarks, newBookmark]
      : [newBookmark];

    setData(userId, updatedBookmarks);

    form.reset();

    if (urlInput) urlInput.focus();

    updateDisplay(userId);
  });
};
