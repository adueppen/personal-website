import { Workbox } from "workbox-window";

//used for hiding stuff that requires JS
document.querySelectorAll(".requiresJS").forEach(el => el.classList.remove("requiresJS"));

//re-enable transitions after page is loaded to prevent flash of light theme if another theme is in use
window.addEventListener("load", () => {
  document.querySelector("body").classList.remove("preload");
});

window.addEventListener("beforeinstallprompt", e => e.preventDefault()); //suppress PWA install infobar

//use service worker, and display update message if needed
if ("serviceWorker" in navigator) {
  const wb = new Workbox("/service-worker.js");
  wb.addEventListener("installed", event => {
    if (event.isUpdate) {
      document.getElementById("newContent").style.setProperty("display", "block");
    }
  });
  wb.register().catch(err => console.log(`Something broke with the service worker: ${err}.`));
}

type Theme = "light" | "dark" | "black";
type ThemeData = {
  [key in Theme]?: {
    [key: string]: string;
  }
}

//used for setting theme on both page load and theme selection
export function setTheme(theme: Theme): void {
  const syntaxData: ThemeData = {
    light: {
      ctc: "#545454",
      cbg: "#fefefe",
      ccm: "#696969",
      cpc: "#545454",
      cpr: "#007299",
      cvr: "#008000",
      cst: "#aa5d00",
      cfn: "#aa5d00",
      ckw: "#d91e18",
      cre: "#d91e18"
    },
    dark: {
      ctc: "#f8f8f2",
      cbg: "#2b2b2b",
      ccm: "#d4d0ab",
      cpc: "#fefefe",
      cpr: "#ffa07a",
      cvr: "#00e0e0",
      cst: "#abe338",
      cfn: "#ffd700",
      ckw: "#00e0e0",
      cre: "#ffd700"
    },
    black: {
      ...this.dark,
      cbg: "#1a1a1a"
    }
  }

  const themeData: ThemeData = {
    light: {
      bg: "#fafafa",
      fg: "#000",
      fgo: "#0002",
      dv: "#7d98a1",
      lc: "var(--middarkblue)",
      hbr: "100%",
      ...syntaxData.light
    },
    dark: {
      bg: "#222222",
      fg: "#fafafa",
      fgo: "#fff2",
      dv: "#d7dee2",
      lc: "var(--blue)",
      hbr: "75%",
      ...syntaxData.dark
    },
    black: {
      bg: "#000",
      fg: "#fafafa",
      fgo: "#fff3",
      dv: "#d7dee2",
      lc: "var(--blue)",
      hbr: "65%",
      ...syntaxData.black
    }
  };

  if (!Object.keys(themeData).includes(theme)) {  //default to preferred color scheme if no value in localStorage
    if (window.matchMedia('(prefers-color-scheme: light)').matches) theme = 'light';
    else if (window.matchMedia('(prefers-color-scheme: dark)').matches) theme = 'dark';
  }

  Object.entries(themeData[theme]).forEach(([property, value]) => {
    document.documentElement.style.setProperty(`--${property}`, value);
  });
  document.querySelector("meta[name='theme-color']").setAttribute("content", themeData[theme].bg);

  if (localStorage) localStorage.setItem("theme", theme);
  (document.querySelector(`input[value='${theme}']`) as HTMLInputElement).checked = true;
}

(window as any).setTheme = setTheme;
setTheme(localStorage.getItem("theme") as Theme);
