// ==UserScript==
// @name     GoogleImages add "gameplay"
// @version  1
// @grant    none
// ==/UserScript==

// This script adds a button to add "gameplay" to a Google image search
// It does nothing if the query already ends with "gameplay"
// It might break in the future; there's absolutely no warranty to this script

if (document.URL.includes("google.com") && document.URL.includes("tbm=isch")) {
  var searchbar = document.getElementById("REsRA");
  if (!searchbar.value.endsWith(" gameplay")) {
    function addGameplaySearch() {
      var searchbar = document.getElementById("REsRA");
      var gosearchbtn = document.getElementById("BIqFsb");
      searchbar.value = searchbar.value + " gameplay";
      gosearchbtn.click();
    }
    var toolbox = document.getElementsByClassName("tAcEof")[0];
    var btn=document.createElement("input");
    btn.type="button";
    btn.value="+ 'gameplay'";
    btn.className="plusgameplay";
    btn.onclick = addGameplaySearch;
    btn.setAttribute("style", "font-size:14px;font-family:arial;color:#aaadb2;background:#202124;cursor:pointer;border:none;");
    toolbox.appendChild(btn);

    btn.addEventListener('mouseover', () => {
      btn.style.color = '#91bbff';
    });

    btn.addEventListener('mouseout', () => {
      btn.style.color = '#aaadb2';
    });
  }
}
