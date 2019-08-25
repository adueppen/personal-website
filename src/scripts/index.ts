import { Workbox } from "workbox-window";

if ("serviceWorker" in navigator) {
  const wb = new Workbox("service-worker.js");

  wb.addEventListener("installed", event => {
    if (event.isUpdate) {
      if (confirm("New content is available! Click OK to refresh. I promise that this annoying popup is temporary.")) {
        window.location.reload();
      }
    }
  });

  wb.register().catch(err => console.log(err, " something broke with the SW"));
}

//todo: make dark mode stuff actually work nicely

export function swapColor() {
  let docEl = document.documentElement;
  let style = docEl.style;
  let themeColor = document.querySelector("meta[name='theme-color']");
  if (getComputedStyle(docEl).getPropertyValue("--bg") === "#fff") {
    style.setProperty("--bg", "#000");
    style.setProperty("--text", "#fff");
    themeColor.setAttribute("content", "#000");
  } else {
    style.setProperty("--bg", "#fff");
    style.setProperty("--text", "#000");
    themeColor.setAttribute("content", "#fff");
  }
}
