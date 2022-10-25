'use strict';



const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputName = document.querySelector('.form__input--name');
const inputTime = document.querySelector('.form__input--time');
const inputTitle = document.querySelector('.form__input--title');
const inputElevation = document.querySelector('.form__input--elevation');
const inputMajor = document.querySelector('.form__input--major')
// let map;
// let mapEvent;


class WorkOut {
    date = new Date();
    id = (Date.now() + '').slice(-10);
    // clicks = 0;

    constructor(coords, name, time, title) {
        this.coords = coords;
        this.name = name;
        this.time = time;
        this.title = title;
        
        
    }

    _setDescription() {
        // prettier-ignore
        const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 
        'August', 'September', 'October', 'November', 'December'];

        this.description = `${this.type[0].toUpperCase()}${this.type.slice(1)} on 
        ${months[this.date.getMonth()]} ${this.date.getDate()}`;
    }

    // click() {
    //     this.clicks++;
    // }
}

class Running extends WorkOut {
    type = 'running';

    constructor(coords, name, time, title, cadence) {
        super(coords, name, time, title);
        this.cadence = cadence;
        this.calcPace();
        this._setDescription();
    }

    calcPace() {
        this.pace = this.duration / this.distance;
        return this.pace;
    }
}

class Cycling extends WorkOut {
    type = 'cycling';

    constructor(coords, name, time, title, elevationGain) {
        super(coords, name, time, title);
        this.elevationGain = elevationGain;
        this.calcSpeed();
        this._setDescription();
    }

    // calcSpeed() {
    //     this.speed = this.distance / (this.duration / 60);
    //     return this.speed;
    // }
}

class School extends WorkOut {
    type = 'school';

    constructor(coords, name, time, title, major) {
        super(coords, name, time, title) 
        this.major = major;
        this._setDescription();
    }

}

class App {
    #map;
    #mapZoomLevel = 15;
    #mapEvent;
    #workouts = [];

    constructor() {
        this._getPosition();

        this._getLocalStorage()


        // attach event handler
        
        form.addEventListener('submit', this._newWorkout.bind(this));
        inputType.addEventListener('change', this._toggleElevationField);
        containerWorkouts.addEventListener('click', this._moveToPopup.bind(this));
        
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

        this.#map = L.map('map').setView([latitude, longitude], this.#mapZoomLevel);

        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(this.#map);

        this.#map.on('click', this._showForm.bind(this));

        this.#workouts.forEach(work => {
            this._renderWorkoutMarker(work);
          });

    }

    _showForm(mapE) {
        this.#mapEvent = mapE;
        form.classList.remove('hidden');
        inputName.focus();
        
    }

    _hideForm() {
        inputTitle.value = inputName.value = inputTime.value = inputElevation.value = '';

        form.style.display = 'none';
        form.classList.add('hidden');
        setTimeout(() => form.style.display = 'grid', 1000);
    }

    _toggleElevationField() {
        inputElevation.closest('.form__row').classList.toggle('form__row--hidden');
        // inputCadence.closest('.form__row').classList.toggle('form__row--hidden');
        inputMajor.closest('.form__row').classList.toggle('form__row--hidden');
    }

    _moveToPopup(e) {
        const workoutEl = e.target.closest('.workout');

        if (!workoutEl) return;

        const workout = this.#workouts.find(
            work => work.id === workoutEl.dataset.id
        );

        this.#map.setView(workout.coords, this.#mapZoomLevel, 
            {animate: true,
            pan: {
                duration:1,
                }
            })

        // workout.click();
        // console.log(workout);
    }

    _newWorkout(event) {
        event.preventDefault()
        const validInputs = (...inputs) => inputs.every(inp => Number.isFinite(inp));
        const allPositive = (...inputs) => inputs.every(inp => (inp > 0));
        // get data from form
        const type = inputType.value;
        const name = inputName.value;
        const time = inputTime.value;
        const title = inputTitle.value;
        const major = inputMajor.value;
        const {lat, lng} = this.#mapEvent.latlng;
        let workout;

        // if workout running, create running object
        if (type === 'running') {
            const cadence = +inputCadence.value;

            if (!validInputs(distance, duration, cadence) || 
                !allPositive(distance, duration, cadence)) {
                return alert('Inputs invalid!');
            }

            workout = new Running([lat, lng], distance, duration, cadence);
        }
        // if workout cycling, create cycling object
        if (type === 'cycling') {
            const elevation = +inputElevation.value;

            if (!validInputs(distance, duration, elevation) || 
            !allPositive(distance, duration)) {
                return alert('Inputs invalid!');
            }

            workout = new Cycling([lat, lng], distance, duration, elevation);

        }

        if (type === 'school') {
            // const elevation = +inputElevation.value;

            // if (!validInputs(distance, duration, elevation) || 
            // !allPositive(distance, duration)) {
            //     return alert('Inputs invalid!');
            // }

            workout = new School([lat, lng], name, time, title, major);

        }
        // add new workouts to an array
        this.#workouts.push(workout);
        // render workout on map as a marker
        this._renderWorkoutMarker(workout);
        // render workout on list
        this._renderWorkout(workout);
        // hide form and clear input
        this._hideForm();
        // set local storage to all workouts
        this._setLocalStorage();
       

    }

    _renderWorkoutMarker(workout) {
        L.marker(workout.coords)
          .addTo(this.#map)
          .bindPopup(
            L.popup({
              maxWidth: 250,
              minWidth: 100,
              autoClose: false,
              closeOnClick: false,
              className: `${workout.type}-popup`,
            })
          )
          .setPopupContent(
            `${workout.type === 'school' ? '🏫' : '🚴‍♀️'} ${workout.name},${workout.title},${workout.time}`
          )
          .openPopup();
      }

    _renderWorkout(workout) {
        let html = `
        <li class="workout workout--${workout.type}" data-id="${workout.id}">
            <h2 class="workout__title">${workout.name}, ${workout.time}</h2>
            <div class="workout__details">
                <span class="workout__icon">${(workout.type === 'school') ? '🏫' : '🚴‍♀️'}</span>
                <span class="workout__value">${workout.title}</span>
            </div>
        `

        if (workout.type === 'running') {
            html += `
            <div class="workout__details">
                <span class="workout__icon">⚡️</span>
                <span class="workout__value">${workout.pace.toFixed(1)}</span>
                <span class="workout__unit">min/km</span>
            </div>
            <div class="workout__details">
                <span class="workout__icon">🦶🏼</span>
                <span class="workout__value">${workout.cadence}</span>
                <span class="workout__unit">spm</span>
            </div>
        </li>`
        }

        if (workout.type === 'cycling') {
            html += `
        <div class="workout__details">
            <span class="workout__icon">⚡️</span>
            <span class="workout__value">${workout.speed}</span>
            <span class="workout__unit">km/h</span>
          </div>
          <div class="workout__details">
            <span class="workout__icon">⛰</span>
            <span class="workout__value">${workout.elevationGain}</span>
            <span class="workout__unit">m</span>
          </div>
        </li>`
        }

        if (workout.type === 'school') {
          html += `
        <div class="workout__details">
            <span class="workout__icon">⚡️</span>
            <span class="workout__value">${workout.major}</span>
          </div>
        </li>`
        }

        form.insertAdjacentHTML('afterend', html);
    }

    _setLocalStorage() {
        localStorage.setItem('workouts', JSON.stringify(this.#workouts))
    }

    _getLocalStorage() {
        const data = JSON.parse(localStorage.getItem('workouts'));

        if (!data) return;

        this.#workouts = data;
        this.#workouts.forEach(
            workout => this._renderWorkout(workout)
        )
    }

    reset() {
        localStorage.removeItem('workouts');
        location.reload();
    }

}
// const run1 = new Running([120,31], 5, 10, 4);
// const cyc1 = new Cycling([120,31], 5, 10, 4);
// console.log(run1, cyc1);


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
