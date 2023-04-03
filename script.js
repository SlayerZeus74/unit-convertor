/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/


const convert = document.getElementById("main-btn")
let inputEl = document.getElementById("input")

let lengthEl = document.getElementById("length-el")
let volumeEl = document.getElementById("volume-el")
let massEl = document.getElementById("mass-el")

const feild = false

const meterToFeet =  3.281
const literToGallon =  0.264
const kiloToPound =  2.204

convert.addEventListener("click", function(){
    let baseValue = inputEl.value

    if (inputEl && inputEl.value) {
        lengthEl.innerHTML = `${baseValue} meters = ${(baseValue*meterToFeet).toFixed(3)} feet | ${baseValue} feet = ${(baseValue/meterToFeet).toFixed(3)} meters`
        volumeEl.innerHTML = `${baseValue} liters = ${(baseValue*literToGallon).toFixed(3)} gallons | ${baseValue} gallons = ${(baseValue/literToGallon).toFixed(3)} liters`
        massEl.innerHTML = `${baseValue} kilo = ${(baseValue*kiloToPound).toFixed(3)} pound | ${baseValue} pound = ${(baseValue/kiloToPound).toFixed(3)} kilo`
    }
    else {
        alert("Please enter a value.")
    }
})