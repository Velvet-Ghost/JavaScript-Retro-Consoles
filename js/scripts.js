const loadConsoles = document.getElementById("loadConsoles")
const httpRequest = new XMLHttpRequest()

loadConsoles.addEventListener("click", () => {
    httpRequest.open("GET", "https://ozarktechwebdev.com/api/consoles.json")
    httpRequest.onreadystatechange = function () {
        if (httpRequest.readyState == 4 && httpRequest.status == 200) {
            const consoles = httpRequest.responseText
            const consolesObj = JSON.parse(consoles)
            createCards(consolesObj)
            summarize(consolesObj)
        }
    }
    httpRequest.send()
})

const cardsDiv = document.getElementById("cardsDiv")
function createCards(consolesObj) {
    cardsDiv.innerHTML = ""

    for (const console of consolesObj.consoles) {
        const img = document.createElement("img")
        img.src = console.image
        img.alt = console.name

        const name = document.createElement("h2")
        name.innerText = console.name

        const manufacturer = document.createElement("p")
        manufacturer.innerText = console.manufacturer

        const year = document.createElement("p")
        year.innerText = console.year

        cardsDiv.append(img, name, manufacturer, year)
    }
}

const summary = document.getElementById("summary")
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