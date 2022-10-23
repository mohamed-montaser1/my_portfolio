let email_input = document.querySelector("#email-input");
let submit = document.querySelector("#submit");
let name_input = document.querySelector("#name");
let textarea = document.querySelector("form textarea");

submit.addEventListener("click", (e) => {
  if (!email_input.value) {
    alert("you must fillout the email input!");
    return;
  }
  if (email_input.value.split("").slice(-4).join("") == ".com") {
    alert("you forget to add '.com' in the end of the email input!");
    return;
  }
  if (name_input.value.split("").length > 7) {
    alert("you must type longer name!");
    return;
  }
  console.log(name_input);
});
