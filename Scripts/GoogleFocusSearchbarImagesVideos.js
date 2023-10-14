// ==UserScript==
// @name     Google Focus Searchbar Images & Videos
// @version  1
// @grant    none
// ==/UserScript==

// This script adds the functionality of pressing `/` to focus the search bar in Image and Video searches,
// just like in the general "All" search.
// The script might break in the future and there is absolutely no warranty to the script

if (document.URL.includes("google.com") && 
    (document.URL.includes("tbm=isch") || document.URL.includes("tbm=vid"))
   ) {
  searchbar = document.getElementById("REsRA");
  if (searchbar === null) {
    searchbar = document.getElementById("APjFqb");
  }    
  if (searchbar !== null) {
    addEventListener("keypress", (event) => {
      if (event.code === "NumpadDivide") {
        event.preventDefault();
        searchbar.selectionStart = searchbar.selectionEnd = searchbar.value.length;
        searchbar.focus();
      } else {
        console.log(event.code);
      }
    });
  }
}
