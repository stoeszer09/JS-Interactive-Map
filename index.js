// Get the user coordinates
async function getCoords(){
    pos = await new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject)
    })
    return [pos.coords.latitude, pos.coords.longitude]
}

// Make the map
async function makeMap() {
    coords = await getCoords()

    var map = L.map('map').setView([coords[0], coords[1]], 10);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        minZoom: '15',
    }).addTo(map)

    var marker = L.marker([coords[0], coords[1]]).addTo(map)
    marker.bindPopup("You are here").openPopup()
}
// Made it a function because getting the coordinates needed an await
makeMap()


// Get value from Dropdown menu
let submit = document.querySelector('#submit')

submit.addEventListener('click', function() {
    return document.querySelector('#search-selection').value
})

// Make the map search for locations on Submit

// Set pins for search results