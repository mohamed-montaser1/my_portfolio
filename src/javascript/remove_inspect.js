document.addEventListener("contextmenu", function (e) {
  e.preventDefault();
});

document.addEventListener("contextmenu", function (e) {
  alert(
    "Sorry, we can't display the dev tools to prevent leakage of confidential functions"
  );
  e.preventDefault();
});

document.onkeydown = function (e) {
  if (event.keyCode == 123) {
    alert(
      "Sorry, we can't display the dev tools to prevent leakage of confidential functions"
    );
    return false;
  }
  if (e.ctrlKey && e.shiftKey && e.keyCode == "I".charCodeAt(0)) {
    alert(
      "Sorry, we can't display the dev tools to prevent leakage of confidential functions"
    );
    return false;
  }
  if (e.ctrlKey && e.shiftKey && e.keyCode == "C".charCodeAt(0)) {
    alert(
      "Sorry, we can't display the dev tools to prevent leakage of confidential functions"
    );
    return false;
  }
  if (e.ctrlKey && e.shiftKey && e.keyCode == "J".charCodeAt(0)) {
    alert(
      "Sorry, we can't display the dev tools to prevent leakage of confidential functions"
    );
    return false;
  }
  if (e.ctrlKey && e.keyCode == "U".charCodeAt(0)) {
    alert(
      "Sorry, we can't display the dev tools to prevent leakage of confidential functions"
    );
    return false;
  }
  if (e.ctrlKey && e.keyCode == "S".charCodeAt(0)) {
    alert(
      "Sorry, we can't display the dev tools to prevent leakage of confidential functions"
    );
    return false;
  }
};
