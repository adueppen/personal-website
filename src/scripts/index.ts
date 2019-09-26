import {Workbox} from "workbox-window";

//used for hiding stuff that requires JS
document.querySelectorAll(".requiresJS").forEach(el => el.classList.remove("requiresJS"));

//re-enable transitions after page is loaded to prevent flash of light theme if another theme is in use
window.addEventListener("load", () => {
  document.querySelector("body").classList.remove("preload");
});

//use service worker, and display update message if needed
if ("serviceWorker" in navigator) {
  const wb = new Workbox("service-worker.js");
  wb.addEventListener("installed", event => {
    if (event.isUpdate) {
      document.getElementById("newContent").style.setProperty("display", "block");
    }
  });
  wb.register().catch(err => console.log(`Something broke with the service worker: ${err}.`));
}

//used for setting theme on both page load and theme selection
export function setTheme(theme: string): void {
  const themeData = {
    "light": {
      "bg": "#fafafa",
      "fg": "#000",
      "fgo": "#0002",
      "dv": "#7d98a1",
      "lc": "var(--middarkblue)"
    },
    "dark": {
      "bg": "#282828",
      "fg": "#fafafa",
      "fgo": "#fff2",
      "dv": "#d7dee2",
      "lc": "var(--blue)"
    },
    "black": {
      "bg": "#000",
      "fg": "#fafafa",
      "fgo": "#fff3",
      "dv": "#d7dee2",
      "lc": "var(--blue)"
    }
  };

  if (!Object.keys(themeData).includes(theme)) theme = "light"; //default to light theme in case of no/invalid value

  Object.entries(themeData[theme]).forEach(([property, value]) => {
    document.documentElement.style.setProperty(`--${property}`, value as string);
  });
  document.querySelector("meta[name='theme-color']").setAttribute("content", themeData[theme].bg);

  if (localStorage) localStorage.setItem("theme", theme);
  (document.querySelector(`input[value='${theme}']`) as HTMLInputElement).checked = true;
}

setTheme(localStorage.getItem("theme"));
