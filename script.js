// Write your JavaScript code here!
fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response){
            let index = 0;
            response.json().then(function(json) {
               let formSubmit = document.getElementById("formSubmit");
              
               formSubmit.addEventListener("click", function(){
                  let missionTarget = document.getElementById("missionTarget");
                  missionTarget.innerHTML = `
                  <div>
                     <h2>Mission Destination</h2>
                     <ol>
                        <li>Name: ${json[index].name}</li>
                        <li>Diameter: ${json[index].diameter}</li>
                        <li>Star: ${json[index].star}</li>
                        <li>Distance from Earth: ${json[index].distance}</li>
                        <li>Number of Moons: ${json[index].moons}</li>
                     </ol>
                     <img src=${json[index].image} height=250></img>
                  </div>
                  `;
                  });
            });
        });   


   window.onload=function() {

      let button = document.getElementById("formSubmit");
      // add event handler for when button clicked
      button.addEventListener("click", function(event) {
         event.preventDefault()
         let pilotName = document.getElementById("pilotName");
         let copilotName = document.getElementById("copilotName");
         let fuelLevel = document.getElementById("fuelLevel");
         let cargoMass = document.getElementById("cargoMass");
         
         // now update the value in the input
         if (!validateName(pilotName.value)) {
            event.preventDefault()
            alert("All fields are required!")
            return
         }
         if (!validateName(copilotName.value)) {
            event.preventDefault()
            alert("All fields are required!")
            return
         }
         if(!validateNumber(fuelLevel.value) || !validateFuel(fuelLevel.value)) {
            event.preventDefault()
            let fuelStatus = document.getElementById("fuelStatus")
            fuelStatus.innerHTML = "Fuel level too low for launch."
            let launchStatus = document.getElementById("launchStatus")
            launchStatus.innerHTML = "Shuttle not ready for launch."
            let launchStatusCheck = document.getElementById("launchStatusCheck")
            launchStatusCheck.style.backgroundColor="red"
            alert("Make sure to enter valid information for each item!")
            return
         } 
      
         if(!validateNumber(cargoMass.value) || !validateMass(cargoMass.value)) {
            event.preventDefault()
            let cargoMass = document.getElementById("cargoStatus")
            cargoMass.innerHTML = "Too much mass."
            let launchStatus = document.getElementById("launchStatus")
            launchStatus.innerHTML = "Shuttle not ready for launch."
            let launchStatusCheck = document.getElementById("launchStatusCheck")
            launchStatusCheck.style.backgroundColor="red"
            alert("Make sure to enter valid information for each item!!!")
            return
         } 
         let pilotStatus = document.getElementById("pilotStatus")
             pilotStatus.innerHTML = `Pilot ${pilotName.value} is ready for launch`
          
         let copilotStatus = document.getElementById("copilotStatus")
             copilotStatus.innerHTML = `Co-pilot ${copilotName.value} is ready for launch`

 //        let fuelStatus = document.getElementById("fuelStatus")
  //           fuelStatus.innerHTML = fuelStatus.value  

  //       let cargoStatus = document.getElementById("cargoStatus")
  //           cargoStatus.innerHTML = cargoStatus.value  
      });
      
   }
function validateName(name) {
   if (typeof name !== "string") {
      return false 
   }
   if (name === "" && name.length < 1) {
      return false
   }
   return true;
}
function validateNumber(number) {
   number = parseInt(number)
   if (isNaN(number)) {
      return false
   }
   return true;
}
function validateFuel(value) {
   if (value > 10000) {
      return false
   }
   return true;
}
function validateMass(mass) {
   if (mass > 10000) {
      return false
   }
   return true;
}
