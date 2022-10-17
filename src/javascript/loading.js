window.onload = function () {
  document.querySelector("html").style.overflowY = "hidden";
  document.querySelector("body").style.overflowY = "hidden";
  setTimeout(() => {
    document.querySelector(".loading-layer").style.opacity = "0";
  }, 1100);
  setTimeout(() => {
    document.querySelector("html").style.overflowY = "visible";
    document.querySelector("body").style.overflowY = "visible";
  }, 1110);
  setTimeout(() => {
    document.querySelector(".loading-layer").style.display = "none";
  }, 1300);
};
