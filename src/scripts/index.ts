import {Workbox} from "workbox-window";

if ("serviceWorker" in navigator) {
  const wb = new Workbox("service-worker.js");

  wb.addEventListener("installed", event => {
    if (event.isUpdate) {
      document.getElementById("newContent").style.setProperty("display", "block");
    }
  });

  wb.register().catch(err => console.log(`Something broke with the service worker: ${err}.`));
}

export function setTheme(theme: string): void {
  let bg: string, fg: string, fgo: string, dv: string;
  let _theme: string = (theme == null ? "light" : theme);
  const style = document.documentElement.style;

  if (_theme === "light") {
    bg = "#fafafa";
    fg = "#000";
    fgo = "#0002";
    dv = "#7d98a1";
  } else if (_theme === "dark") {
    bg = "#282828";
    fg = "#fafafa";
    fgo = "#fff2";
    dv = "#d7dee2";
  } else {
    bg = "#000";
    fg = "#fafafa";
    fgo = "#fff3";
    dv = "#d7dee2";
  }

  document.querySelector("meta[name='theme-color']").setAttribute("content", bg);
  style.setProperty("--bg", bg);
  style.setProperty("--fg", fg);
  style.setProperty("--fgo", fgo);
  style.setProperty("--dv", dv);

  if (localStorage) localStorage.setItem("theme", _theme);
  (document.querySelector(`input[value='${_theme}']`) as HTMLInputElement).checked = true;
}

setTheme(localStorage && localStorage.getItem("theme"));

window.addEventListener("load", () => {
  document.querySelector("body").classList.remove("preload");
  document.querySelectorAll(".requiresJS").forEach(el => el.classList.remove("requiresJS"));
});

/*export function drawBG() {
  const canvas: HTMLCanvasElement = document.getElementById("bgCanvas") as HTMLCanvasElement;
  const context = canvas.getContext("2d");
}*/
