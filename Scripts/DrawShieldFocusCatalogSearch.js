// ==UserScript==
// @name     DrawShield Focus Catalog Search
// @version  1
// @grant    none
// ==/UserScript==

// This script autofocuses the search box on the DrawShield catalog page.
// This might break in the future and there's absolutely no warranty to this script.

if (document.URL.includes("drawshield.net/catalog")) {
  document.getElementById("combo-dropdownundefined").focus();
}
