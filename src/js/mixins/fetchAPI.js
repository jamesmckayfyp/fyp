// fetch("https://api-football-v1.p.rapidapi.com/v3/leagues?id=39", {
// 	"method": "GET",
// 	"headers": {
// 		"x-rapidapi-key": "f788e186d6msh24423fc06a170e2p1b1d5ejsn3d54d568313f",
// 		"x-rapidapi-host": "api-football-v1.p.rapidapi.com"
// 	}
// })
// .then(response => {
// 	console.log(response);
// })
// .catch(err => {
// 	console.error(err);
// });


// var leagueIdsForStandings = [] // array containing the list of league_id with at least one match on that day

// fetch("https://api-football-v1.p.rapidapi.com/v2/fixtures/date/2020-07-22", {
//     "method": "GET",
//     "headers": {
//         "x-rapidapi-host": "api-football-v1.p.rapidapi.com",
//         "x-rapidapi-key": "f788e186d6msh24423fc06a170e2p1b1d5ejsn3d54d568313f"
//     }
// })
// .then((response) => response.json())
// .then(function(response) {

//     response.api.fixtures.forEach(function(fixture) {

//         // we fill in our array only if the league_id is not present in leagueIdsForStandings[]
//         // This saves us from calling the leaguetable endpoint several times for a competition if it has several fixtures that day
//         if (leagueIdsForStandings.indexOf(fixture.league_id) == '-1') {

//             leagueIdsForStandings.push(fixture.league_id)
//         }
//     });

//     leagueIdsForStandings.forEach(function(league_id) {

//         getStandingsByLeague(league_id)
//     })
// })

// function getStandingsByLeague(league_id) {

//     fetch("https://api-football-v1.p.rapidapi.com/v2/leagueTable/"+league_id, {
//         "method": "GET",
//         "headers": {
//             "x-rapidapi-host": "api-football-v1.p.rapidapi.com",
//             "x-rapidapi-key": "YourApiKeyHere"
//         }
//     })
//     .then((response) => response.json())
//     .then(function(response) {

//         console.log(response)
//     })

// }