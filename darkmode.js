// Listen for messages from the popup
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  // If the popup sends a "toggle" message, enable or disable dark mode
  if (request.message === 'toggle') {
    toggleDarkMode();
  }
});

// Toggle dark mode on or off
function toggleDarkMode() {
  // Get the <html> element of the current tab
  chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
    const tab = tabs[0];
    const tabId = tab.id;
    chrome.tabs.executeScript(tabId, {code: "document.documentElement.classList.toggle('dark-mode')" });
  });
}
