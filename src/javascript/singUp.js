const signForm = document.querySelector("#signUpForm");
signForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.querySelector("#name").value;
  const email = document.querySelector("#email").value;
  const Password = document.querySelector("#password").value;

  const users = JSON.parse(localStorage.getItem("users")) || [];
  const isUserRegistered = users.find((user) => user.email === email);
  if (isUserRegistered) {
    return alert("Email already registered");
  }

  users.push({
    name: name,
    email: email,
    Password: Password,
  });
  localStorage.setItem("users", JSON.stringify(users));
  alert("User registered successfully");
  window.location.href = "../index.html";
});
