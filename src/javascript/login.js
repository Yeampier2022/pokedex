const loginForm = document.querySelector("#loginForm");
loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = document.querySelector("#email").value;
  const Password = document.querySelector("#password").value;
  const users = JSON.parse(localStorage.getItem("users")) || [];
  const isUserRegistered = users.find(
    (user) => user.email === email && user.Password === Password
  );
  if (!isUserRegistered) {
    return alert("Email or password incorrect");
  }
  alert(`Welcome ${isUserRegistered.name}`);
  localStorage.setItem("currentUser", JSON.stringify(isUserRegistered));
  window.location.href = "./home/pokemon.html";
});


