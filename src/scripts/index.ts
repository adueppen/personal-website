import { Workbox } from "workbox-window";

if ("serviceWorker" in navigator) {
  const wb = new Workbox("service-worker.js");

  wb.addEventListener("installed", event => {
    if (event.isUpdate) {
      document.getElementById("newContent").style.setProperty("display", "block");
    }
  });

  wb.register().catch(err => console.log(`Something broke with the service worker: ${err}.`));
}

export function setTheme(theme: string) {
  let bg: string, fg: string, _theme: string = (theme == null ? "light" : theme);
  const style = document.documentElement.style;

  if (_theme === "light") {
    bg = "#fff";
    fg = "#000";
  } else if (_theme === "dark") {
    bg = "#282828";
    fg = "#fff";
  } else {
    bg = "#000";
    fg = "#fff";
  }

  document.querySelector("meta[name='theme-color']").setAttribute("content", bg);
  style.setProperty("--bg", bg);
  style.setProperty("--fg", fg);

  if (localStorage) localStorage.setItem("theme", _theme);
  (document.querySelector(`input[value='${_theme}']`) as HTMLInputElement).checked = true;
}

setTheme(localStorage && localStorage.getItem("theme"));

/*export function drawBG() {
  const canvas: HTMLCanvasElement = document.getElementById("bgCanvas") as HTMLCanvasElement;
  const context = canvas.getContext("2d");
}*/
