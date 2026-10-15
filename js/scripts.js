const loadConsoles = document.getElementById("loadConsoles")
const message = document.getElementById("message")
const cardsDiv = document.getElementById("cardsDiv")
const summary = document.getElementById("summary")
const httpRequest = new XMLHttpRequest()

loadConsoles.addEventListener("click", () => {
    message.textContent = "Loading..."
    cardsDiv.innerHTML = ""
    summary.textContent = ""

    httpRequest.open("GET", "https://ozarktechwebdev.com/api/consoles.json")
    httpRequest.onreadystatechange = function () {
        if (httpRequest.readyState == 4 && httpRequest.status == 200) {
            const consoles = httpRequest.responseText
            const consolesObj = JSON.parse(consoles)

            message.textContent = ""

            createCards(consolesObj)
            summarize(consolesObj)
        } 
        else {
            message.textContent = `Error loading page. Status code: ${httpRequest.status}`
        }

    }
    httpRequest.send()
})

function createCards(consolesObj) {
    for (const console of consolesObj.consoles) {
        const img = document.createElement("img")
        img.src = console.image
        img.alt = console.name

        const name = document.createElement("h2")
        name.textContent = console.name

        const manufacturer = document.createElement("p")
        manufacturer.textContent = console.manufacturer

        const year = document.createElement("p")
        year.textContent = console.year

        cardsDiv.append(img, name, manufacturer, year)
    }
}

function summarize(data) {
    let oldest = data.consoles[0];
    let newest = data.consoles[0];

    for (let i = 1; i < data.consoles.length; i++) {
        // compare data.consoles[i].year with oldest.year and newest.year
        if (data.consoles[i].year < oldest.year) {
            oldest = data.consoles[i]
        }
        if (data.consoles[i].year > newest.year) {
            newest = data.consoles[i]
        }
    }

    oldest = (`${oldest.name} (${oldest.year})`)
    newest = (`${newest.name} (${newest.year})`)
    summary.textContent = `${data.consoles.length} consoles. Oldest: ${oldest}. Newest: ${newest}`
}