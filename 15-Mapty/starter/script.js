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
// let map;
// let mapEvent;

class App {
    #map;
    #mapEvent;

    constructor() {
        this._getPosition();

        form.addEventListener('submit', this._newWorkout.bind(this));

        inputType.addEventListener('change', this._toggleElevationField);
        
    }

    _getPosition() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                this._loadMap.bind(this),    
                function() {
                    alert('Could not get your position!')
                })
        }

    }

    _loadMap(position) {
        const {latitude, longitude} = position.coords;
        const coords = [latitude, longitude];

        this.#map = L.map('map').setView([latitude, longitude], 10);

        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(this.#map);

        this.#map.on('click', this._showForm.bind(this))

    }

    _showForm(mapE) {
        this.#mapEvent = mapE;
        form.classList.remove('hidden');
        inputDistance.focus();
        
    }

    _toggleElevationField() {
        inputElevation.closest('.form__row').classList.toggle('form__row--hidden');
        inputCadence.closest('.form__row').classList.toggle('form__row--hidden');
    }

    _newWorkout(event) {
        event.preventDefault()
        //display marker
        let {lat, lng} = this.#mapEvent.latlng;
        L.marker([lat, lng]).addTo(this.#map)
        .bindPopup(L.popup({maxWidth:250, 
                            minWidth:100, 
                            autoClose:false, 
                            closeOnClick:false, 
                            className: 'running-popup'}))
        .setPopupContent('YEW')
        .openPopup();
    }


}

const app = new App();
// app._getPosition();
// navigator.geolocation.getCurrentPosition(
//     function(position) {
//         const lat = position.coords.latitude;
//         const lng = position.coords.longitude;

//         map = L.map('map').setView([31.23, 121.68], 10);

//         L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
//             attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//         }).addTo(map);

//         // L.marker([31.23, 121.68]).addTo(map)
//         //     .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
//         //     .openPopup();

//         map.on('click', function(mapE) {
//             form.classList.remove('hidden');
//             inputDistance.focus();
//             mapEvent = mapE;


//         })

//     }, 
//     function() {
//         alert('Could not get your position!')
// });
