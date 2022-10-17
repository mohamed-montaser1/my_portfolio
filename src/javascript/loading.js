window.onload = function () {
  setTimeout(() => {
    document.querySelector(".loading-layer").style.opacity = "0";
  }, 1100);
  setTimeout(() => {
    document.querySelector(".loading-layer").style.display = "none";
  }, 1300);
};
