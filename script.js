// // Write your JavaScript code here!

window.addEventListener("load", function() {
    let listedPlanets;
    let form = document.querySelector("form")

    form.addEventListener("submit", function(event){
        event.preventDefault()
        let pilot = document.querySelector("input[name=pilotName]").value
        let coPilot = document.querySelector("input[name=copilotName]").value
        let fuelLevel = document.querySelector("input[name=fuelLevel]").value;
        let cargoMass = document.querySelector("input[name=cargoMass]").value

        formSubmission(document, document.getElementById("faultyItems"), pilot, coPilot, fuelLevel, cargoMass);
        
        document.querySelector("input[name=pilotName]").value = pilot;
        document.querySelector("input[name=copilotName]").value = coPilot
        document.querySelector("input[name=fuelLevel]").value = fuelLevel
        document.querySelector("input[name=cargoMass]").value = cargoMass;


    })

    

    let listedPlanetsResponse = myFetch();
    
    listedPlanetsResponse.then(function(result) {
        listedPlanets = result;
        console.log(listedPlanets); 
        
    }).then(function() {
        let selectedPlanet = pickPlanet(listedPlanets);

        addDestinationInfo(document, selectedPlanet.name, selectedPlanet.diameter, selectedPlanet.star, selectedPlanet.distance, selectedPlanet.moons, selectedPlanet.image);
    });
});
