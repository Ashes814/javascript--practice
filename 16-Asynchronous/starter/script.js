'use strict';

const testData1 = [52.508, 13.381];
const testData2 = [19.037, 72.873];
const testData3 = [-33.933, 18.474];

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');
const getJSON = function (url, errorMsg = 'Something went wrong') {
  return fetch(url).then(response => {
    if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);
    return response.json();
  });
};

const renderCountry = function (data, className = '') {
  const html = `<article class="country ${className}">
      <img class="country__img" src="${data.flags.svg}" />
      <div class="country__data">
        <h3 class="country__name">${data.name.common}</h3>
        <h4 class="country__region">${data.region}</h4>
        <p class="country__row"><span>👫</span>${(
          +data.population / 1000000
        ).toFixed(1)} people</p>
        <p class="country__row"><span>🗣️</span>${data.fifa}</p>
        <p class="country__row"><span>💰</span>${data.subregion}</p>
      </div>
    </article>`;

  countriesContainer.insertAdjacentHTML('beforeend', html);
};

const whereAmI = function (coordinate) {
  const lat = String(coordinate[0]);
  const lng = String(coordinate[1]);
  const geocodingAPI = '498707668562872975323x55949';
  const url = `https://geocode.xyz/${lat},${lng}?geoit=json&auth=${geocodingAPI}`;
  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error(`Too Fast ${response.status}`);
      }

      return response.json();
    })
    .then(data => {
      console.log(data);
      console.log(`You are in ${data.city}, ${data.country}`);
      return data;
    })
    .then(function (data) {
      const countrAb = data.prov;
      getJSON(`https://restcountries.com/v3.1/alpha/${countrAb}`).then(data => {
        console.log(data);
        renderCountry(data[0]);
      });
    })
    .catch(err => console.log(err));
};

whereAmI(testData1);
whereAmI(testData2);
whereAmI(testData3);

// ///////////////////////////////////////
// const renderCountry = function (data, className = '') {
//   const html = `<article class="country ${className}">
//       <img class="country__img" src="${data.flags.svg}" />
//       <div class="country__data">
//         <h3 class="country__name">${data.name.common}</h3>
//         <h4 class="country__region">${data.region}</h4>
//         <p class="country__row"><span>👫</span>${(
//           +data.population / 1000000
//         ).toFixed(1)} people</p>
//         <p class="country__row"><span>🗣️</span>${data.fifa}</p>
//         <p class="country__row"><span>💰</span>${data.subregion}</p>
//       </div>
//     </article>`;

//   countriesContainer.insertAdjacentHTML('beforeend', html);
// };

// const getCountryAndNeighbour = function (country) {
//   // AJAX call country 1
//   const request = new XMLHttpRequest();
//   request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
//   request.send();

//   request.addEventListener('load', function () {
//     const [data] = JSON.parse(this.responseText);
//     console.log(data);

//     // Render Counrty 1
//     renderCountry(data);

//     // Get Neighbour country 2
//     const [neighbour] = data.borders;

//     if (!neighbour) {
//       return;
//     }

//     // AJAX call country 2
//     const request2 = new XMLHttpRequest();
//     request2.open('GET', `https://restcountries.com/v3.1/alpha/${neighbour}`);
//     request2.send();
//     request2.addEventListener('load', function () {
//       const [data2] = JSON.parse(this.responseText);
//       console.log(data2);
//       renderCountry(data2, 'neighbour');
//     });
//   });
// };

// // getCountryAndNeighbour('portugal');
// // getCountryData('portugal');
// // getCountryData('korea');

// // const request = fetch(`https://restcountries.com/v3.1/name/portugal`);
// // console.log(request);

//
// const getJSON = function (url, errorMsg = 'Something went wrong') {
//   return fetch(url).then(response => {
//     if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);
//     return response.json();
//   });
// };

// const getCountryData = function (country) {
//   //   fetch(`https://restcountries.com/v3.1/name/${country}`)
//   // .then(response => {
//   //   response.json();

//   //   if (!response.ok) {
//   //     throw new Error(`Country not found (${response.status})`);
//   //   }
//   // })
//   getJSON(`https://restcountries.com/v3.1/name/${country}`, 'Country not found')
//     .then(data => {
//       renderCountry(data[0]);
//       console.log(data);
//       const neighbour = data[0].borders;

//       if (!neighbour) {
//         throw new Error('No neighbour found!');
//       }

//       return getJSON(
//         `https://restcountries.com/v3.1/alpha/${neighbour}`,
//         'Country not found'
//       );
//     })
//     // .then(response => {
//     //   if (!response.ok) {
//     //     throw new Error(`Country not found (${response.status})`);
//     //   }

//     //   return response.json();
//     // })
//     .then(data => {
//       renderCountry(data[0], 'neighbour');
//     })
//     // .catch(err => alert(err))
//     .finally(() => {
//       console.log('finish');
//     });
// };

// btn.addEventListener('click', function () {
//   getCountryData('JAPAN');
// });
