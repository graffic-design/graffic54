document.addEventListener("DOMContentLoaded", () => {
  const emailIcon = document.getElementById("email-icon");
  const emailText = document.getElementById("email-text");

  emailIcon.addEventListener("click", (event) => {
    event.preventDefault();
    emailText.style.display =
      emailText.style.display === "none" ? "block" : "none";
  });

  document.addEventListener("click", (event) => {
    // Verifica si el clic fue fuera del contenedor
    if (
      !emailIcon.contains(event.target) &&
      !emailText.contains(event.target)
    ) {
      emailText.style.display = "none";
    }
  });
});
