// ==UserScript==
// @name     DrawShield Go To Catalog
// @version  1
// @grant    none
// ==/UserScript==

// This script adds the functionality of pressing F1 on the DrawShield create page
// to visit the Visual Catalog in a new tab.
// This might break in the future and there's absolutely no warranty to this script.

if (document.URL.includes("drawshield.net/create/index.html")) {
  document.addEventListener("keydown", (e) => {
    if (e.code == "F1") {
      window.open("https://drawshield.net/catalog/", "_blank");
    }
  });
}
