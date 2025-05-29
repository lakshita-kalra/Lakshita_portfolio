
document.getElementById("contactForm").addEventListener("submit", async function (e) {
  e.preventDefault();


  const name =   document.getElementById("name")?.value;
  const email =   document.getElementById("email")?.value;
  const message =   document.getElementById("message")?.value;

  console.log(name,email,message);

  const response = await fetch("/contact", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, email, message }),
  });

  const result = await response.text();
  document.getElementById("response").innerText = result;

  // Clear the form
  this.reset();
});