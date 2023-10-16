const user = JSON.parse(localStorage.getItem("currentUser")) || false;

if (!user) {
  window.location.href = "../index.html";
}

const logout = document.querySelector("#logout");

logout.addEventListener("click", () => {
  alert("You have been logged out");
  localStorage.removeItem("currentUser");
  window.location.href = "../index.html";
} );
