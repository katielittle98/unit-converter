const length = document.getElementById("length-met")
const volume = document.getElementById("volume-met")
const mass = document.getElementById("mass-met")
const unitConvert = document.getElementById("unitConversion")
const formInput = document.getElementById("form")
let numInput = document.getElementById("convert-num")
let num = 0


unitConvert.addEventListener("click", function() {
    num = numInput.value
    metersConvert()
    litersConvert()
    kiloConvert()
})


function metersConvert() {
    let feet =  (num * 3.28).toFixed(3)
    let meters = (num / 3.28).toFixed(3)
    length.textContent += `${num} meters = ${feet} feet | ${num} feet = ${meters} meters ` 
}

function litersConvert() {
    let liters =  (num * .264).toFixed(3)
    let gallons = (num / .264).toFixed(3)
    volume.textContent += `${num} liters = ${liters} gallons | ${num} gallons = ${gallons} liters ` 
}

function kiloConvert() {
    let kilo =  (num * 2.204).toFixed(3)
    let pounds = (num / 2.204).toFixed(3)
    mass.textContent += `${num} kilo = ${kilo} pounds | ${num} pounds = ${pounds} kilo `  
}

function reset() {
    formInput.reset()
    length.textContent = ""
    volume.textContent = ""
    mass.textContent = ""
}

  


