/**
 * Copies the URL to the user's clipboard and provides copied! message
 * @params {string} url - the URL to copy
 * @params {Button Element} copyButton - Specific copy URL clicked
 * @returns {Promise<void>}
 */

export const copyToClipboard = async (url, copyButton) => {
    try {
        await navigator.clipboard.writeText(url); //copies the text

        const originalText = copyButton.textContent;
        copyButton.textContent = `Copied!`;
        copyButton.disabled = true;

        setTimeout(() => {
          copyButton.textContent = originalText;
          copyButton.disabled = false;
        }, 2000);
    } catch (err) {
        console.error(`Clipboard error:`, err)
        alert(`Failed to copy to clipboard`)
    }

}