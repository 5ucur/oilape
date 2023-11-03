// ==UserScript==
// @name     GNU Terry Pratchett
// @version  1
// @grant    none
// ==/UserScript==

// This script adds a footer to every page that has "x-clacks-overhead: gnu terry pratchett"
// in its headers, allowing for sites that include other people.
// Relies on a hack to get headers, might break in the future, absolutely no warranty to the script.

var req = new XMLHttpRequest();
req.open('GET', document.location, true);
req.send(null);
req.onload = function() {
	const headers = req.getAllResponseHeaders().toLowerCase();
  console.log("a", headers);
  if (headers.includes("x-clacks-overhead: gnu") && headers.includes("terry pratchett")) {
    var toInsert = document.createElement("div");
    toInsert.innerHTML = "GNU Terry Pratchett";
    toInsert.style.position = "absolute";
    toInsert.style.color = "#ffffff";
    toInsert.style.backgroundColor = "#332626";
    toInsert.style.bottom = "0px";
    toInsert.style.textAlign = "center";
    toInsert.style.width = "100%";
    toInsert.style.height = "3%";
    toInsert.onclick = () => {toInsert.remove()};
    document.body.appendChild(toInsert);
  }
}
