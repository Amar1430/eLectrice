const username1 = document.querySelector("#username1").innerText
const login = document.querySelector("#login")
const profile = document.querySelector("#profile")


if (username1 == "  ") {
    login.classList.remove("hide")
    profile.classList.add("hide")
} else {
    profile.classList.remove("hide")
    login.classList.add("hide")
 
}