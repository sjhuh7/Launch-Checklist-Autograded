// Write your JavaScript code here!

const { myFetch, addDestinationInfo, pickPlanet } = require("./scriptHelper");

window.addEventListener("load", function() {

    let listedPlanets = myFetch();
    let form = document.querySelector("form")
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse = myFetch();
    listedPlanetsResponse.then(function (result) {
        let listedPlanets = result;
        console.log(listedPlanets);
    }).then(function () {
        console.log(listedPlanets);
        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
        let selectedPlanet = pickPlanet(listedPlanets)
        console.log (selectedPlanet);
        addDestinationInfo(document, selectedPlanet.name, selectedPlanet.diameter, selectedPlanet.star, selectedPlanet.distance, selectedPlanet.moons, selectedPlanet.imageUrl)
    })
    //this listens for the submit event which is when the function is executed
    form.addEventListener("submit", function(event) {
        event.preventDefault();
        //stops refresh
        const pilot =document.getElementById("pilotName").value;
        const copilot =document.getElementById("copilotName").value;
        const fuelLevel= document.getElementById("fuelLevel").value
        const cargoLevel= document.getElementById("cargoMass").value
        formSubmission(document, document.getElementById("faultyItems"), pilot, copilot, fuelLevel, cargoLevel);
        //saves inputs
    });
    
    
 });