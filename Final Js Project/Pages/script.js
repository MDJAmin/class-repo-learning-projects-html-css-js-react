"use strict"

document.querySelector("#loginForm").addEventListener("submit", async function (event) {
    event.preventDefault()

    const username = document.querySelector("#username").value
    const password = document.querySelector("#password").value
    const massageDive = document.querySelector("#massage")

    massageDive.textContent = "";

    try {
        const response = await fetch("https://fakestoreapi.com/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username: username,
                password: password
            }),
        });
        if (!response.ok) {
            throw new Error("Invalid username or password")
        }
        const data = await response.json()
        const token = data.token;

        localStorage.setItem("token", token)

        massageDive.textContent = "Login successful! Redirecting..."

        setTimeout(() => {
            window.location.href = "../index.html"
        }, 2000)

    } catch (error) {
        massageDive.textContent = error.message
    }
})