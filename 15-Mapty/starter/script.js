'use strict';

// prettier-ignore
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');

navigator.geolocation.getCurrentPosition(
    function(position) {
        const lat = position.coords.latitude;
        const lng = position.coords.longitude;

        const map = L.map('map').setView([31.23, 121.68], 10);

        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

        L.marker([31.23, 121.68]).addTo(map)
            .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
            .openPopup();

        map.on('click', function(mapEvent) {
            let {lat, lng} = mapEvent.latlng;
            L.marker([lat, lng]).addTo(map)
            .bindPopup(L.popup({maxWidth:250, 
                                minWidth:100, 
                                autoClose:false, 
                                closeOnClick:false, 
                                className: 'running-popup'}))
            .setPopupContent('YEW')
            .openPopup();
        })

    }, 
    function() {
        alert('Could not get your position!')
})
