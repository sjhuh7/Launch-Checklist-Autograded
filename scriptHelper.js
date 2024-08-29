// Write your helper functions here!

require('cross-fetch/polyfill');
//updates the HTML
function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    let missionTarget = document.getElementById ("missionTarget");
    missionTarget.innerHTML = `
                 <h2>Mission Destination</h2>
                 <ol>
                     <li>Name:${name} </li>
                     <li>Diameter:${diameter} </li>
                     <li>Star: ${star}</li>
                     <li>Distance from Earth:${distance} </li>
                     <li>Number of Moons:${moons} </li>
                 </ol>
                 <img src="${imageUrl}">`;
    
 }
 //function is used to determine if the inputs are an empty string, not a number, or a number.
 function validateInput(testInput) {
    if (testInput === "") {
        return "Empty";
    } else if (isNaN(testInput)) {
        return "Not a Number";
    } else {
        return "Is a Number"
    }
 }
 
 function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    let pilotStatus = document.getElementById("pilotStatus")
    let copilotStatus = document.getElementById("copilotStatus")
    let fuelLevelStatus = document.getElementById("fuelStatus")
    let cargoLevelStatus = document.getElementById("cargoStatus")
    let launchStatus = document.getElementById("launchStatus")
    let faultyItems = document.getElementById("faultyItems")

    pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch!`
    copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch!`

    // Makes sure fuel level and cargo weight are always numbers
    fuelLevel = Number(fuelLevel)
    cargoLevel = Number(cargoLevel)


//if statements used to give return statement if fuelLevel and cargoLevel are too high or if they are able to launch.

    if (validateInput(pilot) === "Empty" || validateInput(copilot) === "Empty" || validateInput(fuelLevel) === "Empty" || validateInput(cargoLevel) === "Empty") {
        alert("You must fill in all the boxes")
        return;
    }
    
    if (validateInput(pilot) === "This is not a number" || validateInput(copilot) === "This is not a number" || validateInput(fuelLevel) === "Empty" || validateInput(cargoLevel) === "Empty") {
        alert("Pilot and copilot must be names while fuel level and cargo level must be a numerical value")
    }
    let launchStatus2 = true;


        if (fuelLevel < 10000) {
            fuelLevelStatus.innerHTML = "Fuel level too low for launch";
            launchStatus2 = false
        } else {  
            fuelLevelStatus.innerHTML = "Fuel level high enough for launch";
        }
        if (cargoLevel > 10000){
            cargoLevelStatus.innerHTML = "Cargo mass too heavy for launch";
            launchStatus2 = false;
        }else {
            cargoLevelStatus.innerHTML = "Cargo mass low enough for launch"
        }
        if (launchStatus2) {
            list.style.visibility = "visible";
            launchStatus.innerHTML = "Shuttle is Ready for Launch";
            launchStatus.style.color = "green";
            faultyItems.style.visibility = "visible";
         } else {
            list.style.visibility = "hidden";
            launchStatus.innerHTML = "Shuttle Not Ready for Launch";
            launchStatus.style.color = "red";
            faultyItems.style.visibility = "visible";
            
         }
 }
    async function myFetch() {
        let planetsReturned;
        try {
            const response = await fetch("https://handlers.education.launchcode.org/static/planets.json");
            planetsReturned = await response.json();
        } catch (error) {
            console.error("Error fetching planet data:", error);
        }
        return planetsReturned;
    }

//  async function myFetch() {
//      let planetsReturned;
//      try {
//         const
 
//      planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
//         return response.json();
//          });
 
//      return planetsReturned;

//  }
 
 function pickPlanet(planets) {
    let randomPlanet = Math.floor(Math.random() * planets.length)
    return planets[randomPlanet]
 }
 
 module.exports.addDestinationInfo = addDestinationInfo;
 module.exports.validateInput = validateInput;
 module.exports.formSubmission = formSubmission;
 module.exports.pickPlanet = pickPlanet; 
 module.exports.myFetch = myFetch;