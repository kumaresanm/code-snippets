const request = require("request");

function myFetchCall(url) {
  return new Promise((resolve, reject) => {
    request(url, function (error, response, body) {
      if (error) reject(error);
      else resolve(body);
    });
  });
}

async function getCountryName(code) {
  let totalPages;
  let resp = await myFetchCall(
    "https://jsonmock.hackerrank.com/api/countries?page=1"
  );
  const countriesData = JSON.parse(resp);
  totalPages = countriesData.total_pages;
  const countryName = findCountry(countriesData.data, code);
  if (countryName) console.log(countryName.name);
  for (let i = 2; i <= totalPages; i++) {
    const resp = await myFetchCall(
      `https://jsonmock.hackerrank.com/api/countries?page=${i}`
    );
    const countriesData = JSON.parse(response);
    const countryName = findCountry(countriesData.data, code);
    if (countryName) console.log(countryName.name);
  }
}

function findCountry(countries, code) {
  return countries.find((val) => val["alpha2Code"] === code);
}

async function getCountryName(year, k) {
    let totalPages;
    let countriesArr = {};
    let resp = await myFetchCall(
      `https://jsonmock.hackerrank.com/api/football_matches?competition=UEFA%20Champions%20League&year=${year}&page=1`
    );
    const matchesData = JSON.parse(resp);
    totalPages = matchesData.total_pages;
    pushCountryName(matchesData.data, countriesArr, k);
    for (let i = 2; i <= totalPages; i++) {
      const resp = await myFetchCall(
          `https://jsonmock.hackerrank.com/api/football_matches?competition=UEFA%20Champions%20League&year=${year}&page=${i}`
      );
      const matchesData = JSON.parse(resp);
      pushCountryName(matchesData.data, countriesArr);
    }
    console.log(Object.keys(countriesArr).filter(key => countriesArr[key] === k)).sort();
  }
  
  function pushCountryName(matchDetails, countriesArr, k) {
      matchDetails.forEach(match => {
          if(!countriesArr[match.team1]){
              countriesArr[match.team1] = 1;
          } else{
              countriesArr[match.team1]++;
          }
          if(!countriesArr[match.team2]){
              countriesArr[match.team2] = 1;
          } else{
              countriesArr[match.team2]++;
          }
      });
  }

getCountryName("AF");
