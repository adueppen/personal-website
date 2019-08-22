//todo: I'll probably implement dark mode stuff somewhere in here

export function swapColor() {
  let docEl = document.documentElement;
  let style = docEl.style;
  if (getComputedStyle(docEl).getPropertyValue("--bg") === "#fff") {
    style.setProperty("--bg", "#000");
    style.setProperty("--text", "#fff");
  } else {
    style.setProperty("--bg", "#fff");
    style.setProperty("--text", "#000");
  }
}
