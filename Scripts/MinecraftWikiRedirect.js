// ==UserScript==
// @name     New Minecraft Wiki Redirect
// @version  1
// @grant    none
// ==/UserScript==

// This script autoredirects from a Fandom Minecraft wiki page, to a minecraft.wiki one.
// The Fandom page will still technically be visited.
// This script might break in the future and there is absolutely no warranty for this script.

if (document.URL.includes("minecraft.fandom.com")) {
  let current = [
      window.location.protocol,
      window.location.hostname,
      window.location.pathname
  ]
  current[1] = "minecraft.wiki";
  if (current[2].startsWith("/wiki/")) {
      current[2].replace("/wiki/", "/w/");
  }
  current.splice(1, 0, "//");
  window.open(current.join(""), '_self').focus();
}
