/**
 * Copies the URL to the user's clipboard and shows a temporary "Copied!"
 * @param {string} url - The URL to copy.
 * @param {HTMLButtonElement} copyButton - The button that was clicked
 * @returns {Promise<void>}
 */

export const copyToClipboard = async (url, copyButton) => {
  try {
    if (!copyButton) return;

    await navigator.clipboard.writeText(url); //copies the text

    const originalText = copyButton.textContent;
    copyButton.textContent = `Copied!`;
    copyButton.disabled = true;
    copyButton.setAttribute("aria-live", "polite");

    setTimeout(() => {
      copyButton.textContent = originalText;
      copyButton.disabled = false;
    }, 2000);
  } catch (err) {
    console.error(`Clipboard error:`, err);
    alert(`Failed to copy to clipboard`);
  }
};
