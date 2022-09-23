'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

btnScrollTo.addEventListener('click', function(e) {
  // const s1coords = section1.getBoundingClientRect()
  
  // window.scrollTo(s1coords.left, s1coords.top);

  section1.scrollIntoView({behavior: 'smooth'});
})


const openModal = function (event) {
  event.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach((btn) => btn.addEventListener('click', openModal));

// for (let i = 0; i < btnsOpenModal.length; i++)
//   btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});


// test
const message = document.createElement('div');
message.classList.add('cookie-message');
message.innerHTML = 'Add coookie. <button class="btn btn--close--cookie">Got it</button>'

document.querySelector('.header').prepend(message);

document.querySelector('.btn--close--cookie').addEventListener('click', function() {
  message.remove();
})

message.style.width = '120%';


// random color
const randomInt = function(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
};

const randomColor = function() {
  return `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`
}

console.log(randomColor());