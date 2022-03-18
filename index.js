const name = document.getElementById("name");
const password = document.getElementById("password");
const form = document.getElementById("form");
const button = document.getElementById("submitButton");

password.addEventListener("input", (e) => {
  if (e.target.value !== "") {
    button.style.backgroundColor = "#C23416";
    button.style.cursor = "pointer";
    button.style.border = "";
  } else if (e.target.value === "") {
    button.style.backgroundColor = "";
  }
});
