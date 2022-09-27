'use strict';

///////////////////////////////////////
// Modal window


const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');
const header = document.querySelector('.header');
const nav = document.querySelector('.nav');
const slides = document.querySelectorAll('.slide');
const slider = document.querySelector('.slider');
const btnLeft = document.querySelector('.slider__btn--left');
const btnRiight = document.querySelector('.slider__btn--right');
const dotContainer = document.querySelector('.dots');

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


// window.addEventListener('scroll', function(e) {

//   if (window.scrollY > initCoords.top) {
//     nav.classList.add('sticky'); 
//   } else {
//     nav.classList.remove('sticky');
//   }
// })
const obsCallbacks = function(entries) {
  const [entry] = entries;

  if (!entry.isIntersecting) {
    nav.classList.add('sticky');
  } else {
    nav.classList.remove('sticky');
  }
}

const navHeight = nav.getBoundingClientRect().height;
const obsOptions = {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
};

const observer = new IntersectionObserver(obsCallbacks, obsOptions);
observer.observe(header);


// remove hidden
const allSections = document.querySelectorAll('.section');

const revealSection = function(entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) {
    return;
  }
  entry.target.classList.remove('section--hidden');
  observer.unobserve(entry.target);
}

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

allSections.forEach(function(section) {
  sectionObserver.observe(section);
  section.classList.add('section--hidden');
})


// Lazy load image
const loadImg = function(entries, observe) {
  const [entry] = entries;
  if (!entry.isIntersecting) {
    return;
  };

  entry.target.src = entry.target.dataset.src;
  

  entry.target.addEventListener('load', function() {
    entry.target.classList.remove('lazy-img');
  });

  observer.unobserve(entry.target);

}
const imgTargets = document.querySelectorAll('img[data-src]');
const imgObserver = new IntersectionObserver(loadImg, {
  root:null,
  threshold:0,
  rootMargin: '-200px',
});

imgTargets.forEach((img) => imgObserver.observe(img));
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

// slides
let curSlide = 0;
const maxSlide = slides.length;
const createDots = function() {
  slides.forEach(function(_, i) {
    dotContainer.insertAdjacentHTML(
      'beforeend',
      `<button class="dots__dot" data-slide="${i}"></button>`
    );
  })
}
createDots();

const activateDot = function(slide) {
  document.querySelectorAll('.dots__dot').forEach(dot => dot.classList.remove('dots__dot--active'));
  document.querySelector(`.dots__dot[data-slide="${slide}"]`).classList.add('dots__dot--active');
}
// slides.forEach((s, i) => s.style.transform = `translateX(${100 * i}%)`);

// slider.style.transform = 'scale(0) translateX()';
// slider.style.overflow = 'visible';
const goToSlide = function(slide) {
  slides.forEach((s, i) => s.style.transform = `translateX(${100 * (i-slide)}%)`)
  activateDot(slide);
}
goToSlide(0);
const prevSlide = function() {
  (curSlide === 0) ? curSlide = maxSlide - 1 : curSlide--;
  goToSlide(curSlide);
}
const nextSlide = function() {
  (curSlide === maxSlide - 1) ? curSlide = 0 : curSlide++;
  goToSlide(curSlide);
}

btnRiight.addEventListener('click', nextSlide);
btnLeft.addEventListener('click', prevSlide);

document.addEventListener('keydown', function(e) {
  if (e.key === 'ArrowLeft') {
    prevSlide();
  } else if (e.key === 'ArrowRight') {
    nextSlide();
  }
})

dotContainer.addEventListener('click', function(e) {
  if (e.target.classList.contains('dots__dot')) {
    const {slide} = e.target.dataset;
    goToSlide(slide);
  }
})

