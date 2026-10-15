const loadConsoles = document.getElementById("loadConsoles")
const httpRequest = new XMLHttpRequest()

loadConsoles.addEventListener("click", () => {
    httpRequest.open("GET", "https://ozarktechwebdev.com/api/consoles.json")
    httpRequest.onreadystatechange = function () {
        if (httpRequest.readyState == 4 && httpRequest.status == 200) {
            const consoles = httpRequest.responseText
            const consolesObj = JSON.parse(consoles)
            console.log(consolesObj)
        }
    }
    httpRequest.send()
})