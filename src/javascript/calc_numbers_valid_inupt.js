// inputs, textarea
let name_input = document.querySelector("#name");
let email_input = document.querySelector("#email-input");
let textarea = document.querySelector("form textarea");
// spans
let name_length = document.querySelector("#name-length");
let email_length = document.querySelector("#email-length");
let message_length = document.querySelector("#message-length");

email_input.addEventListener("input", (e) => {
  email_length.innerHTML = 40 - email_input.value.length;
});

name_input.addEventListener("input", (e) => {
  name_length.innerHTML = 25 - name_input.value.length;
});

textarea.addEventListener("input", (e) => {
  message_length.innerHTML = 300 - textarea.value.length;
});
