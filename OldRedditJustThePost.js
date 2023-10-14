// ==UserScript==
// @name     Just The Post for Reddit
// @version  0
// @grant    none
// ==/UserScript==

// This script writes the title and content of a Reddit post (old reddit only) to a blank page
// A single image post will retain its image; a gallery post will retain the currently visible image
// or the gallery itself if currently visible, but it will not be interactive.
// The current webpage is kept, meaning that to go back, you reload the page
// This script might break in the future and there is absolutely no waranty to its functionality

function simpleRead() {
  var innerH = document.querySelector(".expando").innerHTML;
  if (innerH.includes('class="error"')) {
    return
  } else {
    let title = document.title.split(":")[0].trim();
    title = ["<h1>", title, "</h1>"].join("");
    document.documentElement.innerHTML = '';
    document.body.innerHTML=[title, innerH].join("\n<hr>\n");
  }
}

if (document.URL.includes("reddit.com")) {
  var a = document.querySelector(".top-matter");
  if (!(document.querySelector(".expando").innerHTML.includes('class="error"'))) {
    var btn=document.createElement("input");
    btn.type="button";
    btn.value="JustThePost";
    btn.className="jtp";
    btn.onclick = simpleRead;
    btn.setAttribute("style", "font-size:14px;font-family:monospace;color:#44f5ff;background-color:#2f2a2c");
    a.appendChild(btn);
  }
}
