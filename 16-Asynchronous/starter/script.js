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

// whereAmI(testData1);
// whereAmI(testData2);
// whereAmI(testData3);

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
// console.log('Test start');
// setTimeout(() => console.log(`0 sec timer`), 0);
// Promise.resolve('Resolved promise 1').then(res => console.log(res));

// for (let i = 0; i < 12000000000; i++) {}
// console.log('Test END');

// const lotteryPromise = new Promise(function(resolve, reject) {
//     if(Math.random)
// })

// const lotterPromise = new Promise(function (resolve, reject) {
//   console.log('Lotter draw is happening');
//   setTimeout(function () {
//     if (Math.random() >= 0.5) {
//       resolve('You WIN !');
//     } else {
//       reject(new Error('You lose !'));
//     }
//   }, 2000);
// });

// lotterPromise.then(res => console.log(res)).catch(err => console.error(err));

// Promisifying setTimeout

// wait(2)
//   .then(() => {
//     console.log('2 s pass');
//     return wait(1);
//   })
//   .then(() => console.log('3 s passs'));

// console.log('Getting positon');

// const getPosition = function () {
//   return new Promise(function (resolve, reject) {
//     // navigator.geolocation.getCurrentPosition(
//     //   position => resolve(position),
//     //   err => reject(err)
//     // );
//     navigator.geolocation.getCurrentPosition(resolve, reject);
//   });
// };

// getPosition().then(
//   pos => console.log(pos),
//   err => console.log(err)
// );

// const whereAmI = function () {
//   //     const lat;
//   //   const lng;
//   getPosition()
//     .then(pos => {
//       console.log(pos.coords.latitude);
//       const { latitude: lat, longitude: lng } = pos.coords;
//       const geocodingAPI = '498707668562872975323x55949';
//       const url = `https://geocode.xyz/${lat},${lng}?geoit=json&auth=${geocodingAPI}`;
//       return fetch(url);
//     })

//     .then(response => {
//       if (!response.ok) {
//         throw new Error(`Too Fast ${response.status}`);
//       }

//       return response.json();
//     })
//     .then(data => {
//       console.log(data);
//       console.log(`You are in ${data.city}, ${data.country}`);
//       return data;
//     })
//     .then(function (data) {
//       const countrAb = data.prov;
//       getJSON(`https://restcountries.com/v3.1/alpha/${countrAb}`).then(data => {
//         console.log(data);
//         renderCountry(data[0]);
//       });
//     })
//     .catch(err => console.log(err));
// };

// // whereAmI([59.508, 13.381]);
// // getPosition().then(pos => {
// //   console.log(pos.coords.latitude);
// // });
// whereAmI();

// code challenage 2
// const wait = function (seconds) {
//   return new Promise(function (resolve) {
//     setTimeout(resolve, seconds * 1000);
//   });
// };

// const createImage = function (imgPath) {
//   return new Promise(function (resolve, reject) {
//     const imageContainer = document.querySelector('.images');
//     const imgEL = document.createElement('img');
//     imgEL.src = imgPath;

//     imgEL.addEventListener('load', function () {
//       imageContainer.append(imgEL);
//       resolve(imgEL);
//     });

//     imgEL.addEventListener('error', function () {
//       reject(new Error('Image not found'));
//     });
//   });
// };

// let currentImg;

// createImage('img/img-1.jpg')
//   .then(img => {
//     currentImg = img;
//     return wait(2);
//   })
//   .then(() => {
//     currentImg.style.display = 'none';
//     return createImage('img/img-2.jpg');
//   })
//   .then(img => {
//     currentImg = img;
//     return wait(2);
//   })
//   .then(() => {
//     currentImg.style.display = 'none';
//   })
//   .catch(err => console.error(err));

const getPosition = function () {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

const whereAmI = async function (country) {
  const pos = await getPosition();
  const { latitude: lat, longitude: lng } = pos.coords;
  const geocodingAPI = '498707668562872975323x55949';
  const url = `https://geocode.xyz/${lat},${lng}?geoit=json&auth=${geocodingAPI}`;
  const loc = await fetch(url);
  const dataGeo = await loc.json();
  console.log(dataGeo);
  const res = await fetch(`https://restcountries.com/v3.1/name/${country}`);

  const data = await res.json();
  renderCountry(data[0]);
};
whereAmI(`portugal`);
console.log('FIRST');
