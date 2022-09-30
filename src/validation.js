let email_input = document.querySelector("#email-input");
let submit = document.querySelector("#submit");
let all_inputs = Array.from(document.querySelectorAll("form input"));
let textarea = document.querySelectorAll("form textarea");

submit.onclick = function (e) {
  e.preventDefault();
  let dot_com = email_input.value.split("").slice(-4).join("");
  all_inputs.forEach((input) => {
    if (input.value === "") {
      alert("please fill out the inputs");
      return;
    } else if (dot_com !== ".com") {
      alert('Please Type ".com" in the end of email input 🧐');
    }
  });
};
