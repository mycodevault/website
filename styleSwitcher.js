function swapColorStyleSheet(colorStyleSheetName) {
    // Set the new stylesheet and store it in localStorage
    document.getElementById('colorOptions').setAttribute('href', colorStyleSheetName);
    localStorage.setItem("colorCssKey", colorStyleSheetName);
}

function loadCustomStyles() {
    // Retrieve the saved stylesheet from localStorage
    const savedStyleSheet = localStorage.getItem("colorCssKey");

    // If a stylesheet is saved, apply it
    if (savedStyleSheet) {
        document.getElementById('colorOptions').setAttribute('href', savedStyleSheet);
    }
}

