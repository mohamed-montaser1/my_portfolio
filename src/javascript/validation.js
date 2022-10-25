let email_input = document.querySelector("#email-input");
let submit = document.querySelector("#submit");
let name_input = document.querySelector("#name");
let textarea = document.querySelector("form textarea");
let all_inputs = document.querySelectorAll(".contact input");

submit.addEventListener("click", (e) => {
  e.preventDefault();
  check_value_not_equal_to_empty_string();
  check_email_is_valid(email_input);
  check_the_message_dont_have_any_bad_words(textarea);
});

function check_value_not_equal_to_empty_string() {
  for (let i = 0; i < all_inputs.length; i++) {
    if (all_inputs[i].value == "") {
      alert(`you must fill the ${all_inputs[i].id} input`);
    }
  }
  if (textarea.value == "") {
    alert(`you must fill the message input`);
  }
}

function check_email_is_valid(input) {
  input = Array.from(input.value);
  if (input.length > 0) {
    if (!input.includes("@")) {
      alert(`you must add "@" in your email`);
    }
  }
}

function check_the_message_dont_have_any_bad_words(textarea) {
  textarea = textarea.value.split(" ");
  let bad_words = "fuck motherfucker sonofbitch bitch shit".split(" ");
  for (let i = 0; i < textarea.length; i++) {
    bad_words.forEach((bad_word) => {
      if (textarea[i] == bad_word) {
        alert(`Why You Say Bad Words To Me 😟`[i]);
        return;
      }
    });
  }
}
