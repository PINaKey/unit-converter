/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
const userInputEl = document.getElementById("user-inp");
const convertBtn = document.getElementById("convert-btn");
const lengthResultEl = document.getElementById("length-result");
const volumeResultEl = document.getElementById("volume-result");
const massResultEl = document.getElementById("mass-result");

function convertUnits(value) {
    return {
        length: {
            metersToFeet: (value * 3.281).toFixed(3),
            feetToMeters: (value / 3.281).toFixed(3),
        },
        volume: {
            litersToGallons: (value * 0.264).toFixed(3),
            gallonsToLitters: (value / 0.264).toFixed(3),
        },
        mass: {
            kilosToPounds: (value * 2.204).toFixed(3),
            poundsToKilos: (value / 2.204).toFixed(3),
        },
    };
}

function renderResult(value, result) {
    lengthResultEl.textContent = `${value} meters = ${result.length.metersToFeet} feet | ${value} feet = ${result.length.feetToMeters} meters`;
    volumeResultEl.textContent = `${value} liters = ${result.volume.litersToGallons} gallons | ${value} gallons = ${result.volume.gallonsToLitters} liters`;
    massResultEl.textContent = `${value} kilos = ${result.mass.kilosToPounds} pounds | ${value} pounds = ${result.mass.poundsToKilos} kilos`;
}

convertUnits(0);
renderResult(0, convertUnits(0));

convertBtn.addEventListener("click", () => {
    if (isNaN(userInputEl.value)) {
        alert("Must input numbers");
    } else {
        const value = Number(userInputEl.value);
        const result = convertUnits(value);
        renderResult(value, result);
    }
});
