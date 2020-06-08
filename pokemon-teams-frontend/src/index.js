const BASE_URL = "http://localhost:3000"
const TRAINERS_URL = `${BASE_URL}/trainers`
const POKEMONS_URL = `${BASE_URL}/pokemons`


fetch(TRAINERS_URL)
.then(resp => resp.json())
.then(json => console.log(json))
// .catch(error => console.log(error.message));



// function parseJSONIntoJSObject(JSONDataAboutTrainers) {
//     return JSONDataAboutTrainers.json();
//   }

//  function renderTrainers(trainersData) {

//     showTrainers(trainersData);
//   }
//   function handleError(error) {
//     console.error(error);
//     alert('YIKES!');
//   }

//   fetch(TRAINERS_URL)
//     .then(parseJSONIntoJSObject)
//     .then(renderTrainers)
//     .catch(handleError);
