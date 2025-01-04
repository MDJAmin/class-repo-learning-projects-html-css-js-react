// "use strict"

// document.querySelector("#loginForm").addEventListener("submit", async function (event) {
//     event.preventDefault()

//     const username = document.querySelector("#username").value
//     const password = document.querySelector("#password").value
//     const massageDive = document.querySelector("#massage")

//     massageDive.textContent = "";

//     try {
//         const response = await fetch("https://fakestoreapi.com/auth/login", {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json",
//             },
//             body: JSON.stringify({
//                 username: username,
//                 password: password
//             }),
//         });
//         if (!response.ok) {
//             throw new Error("Invalid username or password")
//         }
//         const data = await response.json()
//         const token = data.token;

//         localStorage.setItem("token", token)

//         massageDive.textContent = "Login successful! Redirecting..."

//         setTimeout(() => {
//             window.location.href = "../index.html"
//         }, 2000)

//     } catch (error) {
//         massageDive.textContent = error.message
//     }
// })

"use strict";

/* =======================
   Variables Section
========================== */
const loginForm = document.querySelector("#loginForm");
const usernameInput = document.querySelector("#username");
const passwordInput = document.querySelector("#password");
const messageDiv = document.querySelector("#massage");

/* =======================
   Functions Section
========================== */

// Handle login form submission
const handleLoginFormSubmit = async (event) => {
  event.preventDefault();
  messageDiv.textContent = "";

  const username = usernameInput.value;
  const password = passwordInput.value;

  try {
    const response = await fetch("https://fakestoreapi.com/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    });

    if (!response.ok) {
      throw new Error("Invalid username or password");
    }

    const data = await response.json();
    const token = data.token;

    // Store token and provide feedback to the user
    localStorage.setItem("token", token);
    messageDiv.textContent = "Login successful! Redirecting...";

    // Redirect after a delay
    setTimeout(() => {
      window.location.href = "../index.html";
    }, 2000);

  } catch (error) {
    messageDiv.textContent = error.message;
  }
};

/* =======================
   Event Listeners Section
========================== */

loginForm.addEventListener("submit", handleLoginFormSubmit);
