// ==UserScript==
// @name     DrawShield draw command
// @version  1
// @grant    none
// ==/UserScript==

// This script adds the functionality of pressing Ctrl + Enter on the DrawShield create page
// to draw the coat of arms, instead of clicking the "Draw Shield" button
// This might break in the future and there's absolutely no warranty to this script

if (document.URL.includes("drawshield.net/create/index.html")) {
  document.addEventListener("keydown", (e) => {
    if (e.ctrlKey && e.code.includes("Enter")) {
      document.getElementById("draw-btn").click()
    }
  });
}
