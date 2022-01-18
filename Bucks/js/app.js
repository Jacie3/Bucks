//minutes per game mpg = min
//rebounds per game rpg = reb
//points per game ppg = pts
//assists per game apg = assists
//these all fall under career averages >> player cards >> player feeds
//json/mobile_teams/nba/2015/teams/statistics/bucks/season_averages_fgp.json

let mpgStat = document.querySelector(".stats__item--mpg");       
let rpgStat = document.querySelector(".stats__item--rpg");   
let ppgStat = document.querySelector(".stats__item--ppg");   
let apgStat = document.querySelector(".stats__item--apg");                       
let obj;

fetch('http://data.nba.net/10s/prod/v1/2016/players/203507_profile.json', {
    method: "GET",
    headers: {
        'Content-type': 'application/json'
    }
})
    .then(res => {
        return res.json()
    })
    .then(data => obj = data)
    .then(() => mpgStat.textContent += obj.league.standard.stats.careerSummary.mpg)
    .then(() => rpgStat.textContent += obj.league.standard.stats.careerSummary.rpg)
    .then(() => ppgStat.textContent += obj.league.standard.stats.careerSummary.ppg)
    .then(() => apgStat.textContent += obj.league.standard.stats.careerSummary.apg);
