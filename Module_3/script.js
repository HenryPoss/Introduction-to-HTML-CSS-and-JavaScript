function temperature() {
    var celsius = document.getElementById("celsius").value
    var fahrenheit = (celsius * 9/5) + 32
    document.getElementById("fahrenheit").value = fahrenheit
}

function weight() {
    var kg = document.getElementById("kilo").value
    var pounds = kg * 2.2
    document.getElementById("pounds").value = pounds
}

function distance() {
    var km = document.getElementById("km").value
    var miles = km * 0.62137
    document.getElementById("miles").value = miles
}