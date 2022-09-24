'use strict';

///////////////////////////////////////
// Modal window


const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');
const nav = document.querySelector('.nav');

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


//
// document.querySelectorAll('.nav__links').forEach(function(element) {
//   element.addEventListener('click', function(e) {
//     e.preventDefault();
//     const id = this.getAttribute('href');
//     console.log(id)
//     document.querySelector(id).scrollIntoView({behavior:'smooth'})
//   })
// })

document.querySelector('.nav__links').addEventListener('click', function(e) {
  

  if (e.target.classList.contains('nav__link')) {
    e.preventDefault();
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({behavior: 'smooth'});
  }
})


// Tabbed components
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');

tabsContainer.addEventListener('click', function(e) {


  const clicked = e.target.closest('.operations__tab');

  if (!clicked) return;

  tabs.forEach(function(t) {
    t.classList.remove('operations__tab--active');
  })
  tabsContent.forEach(function(t) {
    t.classList.remove('operations__content--active');
  })
  clicked.classList.add('operations__tab--active');

  //active content
  document.querySelector(`.operations__content--${clicked.dataset.tab}`).classList.add('operations__content--active')
})



//faded nav

const changeOpacity = function(e, opacity) {

  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');

    
    siblings.forEach(el => {
      if (el !== link) {
        el.style.opacity = this;
      }
    })

    logo.style.opacity = this;

  };
};

nav.addEventListener('mouseover', changeOpacity.bind(0.5))

nav.addEventListener('mouseout', changeOpacity.bind(1))

// sticky scroll

const initCoords = section1.getBoundingClientRect();


window.addEventListener('scroll', function(e) {

  if (window.scrollY > initCoords.top) {
    nav.classList.add('sticky'); 
  } else {
    nav.classList.remove('sticky');
  }
})

// random color
// const randomInt = function(min, max) {
//   return Math.floor(Math.random() * (max - min + 1) + min)
// };

// const randomColor = function() {
//   return `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`
// }

// document.querySelector('.nav__link').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();
//   console.log('LINK', e.target, e.currentTarget);
//   console.log(e.currentTarget === this);

//   // Stop propagation
//   // e.stopPropagation();
// });

// document.querySelector('.nav__links').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();
//   console.log('CONTAINER', e.target, e.currentTarget);
// });

// document.querySelector('.nav').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();
//   console.log('NAV', e.target, e.currentTarget);
// }, true);