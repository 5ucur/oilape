// ==UserScript==
// @name     YouTube Custom Speed
// @version  1
// @grant    none
// ==/UserScript==

// This script adds a button to YouTube, which adds a custom speed slider (1-5 range, 0.1 increments)
// This script might break in the future and there is absolutely no warranty to this script

var customSpeedUsed = false;
if (document.URL.includes("youtube.com") && document.URL.includes("watch")) {
  var leftControls = document.getElementsByClassName("ytp-left-controls")[0];
  function addSpeedControl() {
    leftControls.lastChild.remove();
    if (customSpeedUsed) {
      return;
    }
    var parent = document.getElementById("start");

    var label=document.createElement("label");
    label.innerHTML = "Speed: 1.0";
    label.setAttribute("style", "color:#d7e7ff;font-size:14px");
    parent.appendChild(label);

    var range=document.createElement("input");
    range.type="range";
    range.value=1;
    range.min=1;
    range.max=5;
    range.step=0.1;
    range.oninput = () => {
      let rangeVal = range.value*10
      let rangeString = rangeVal.toString();
      label.innerHTML = "Speed: " + rangeString[0] + "." + rangeString[1];
      document.getElementsByTagName("video")[0].playbackRate = range.value;
    }
    range.setAttribute("style", "width: 30%");
    parent.appendChild(range);
    customSpeedUsed = true;
  }

  var btn=document.createElement("input");
  btn.type="button";
  btn.value="SpeedCtl";
  btn.onclick = addSpeedControl;
  btn.setAttribute("style", "font-size:14px;font-family:monospace;color:#44f5ff;background-color:#2f2a2c");
  leftControls.appendChild(btn);
}
