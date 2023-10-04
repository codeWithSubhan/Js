'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnScrollTo = document.querySelector('.btn--scroll-to');
///////////////////////////////////////
// Modal window

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach((btn => btn.addEventListener('click', openModal)))
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

///////////////////////////////////////
// Button scrolling


// TABE LOGIC...
// const tabs=document.querySelectorAll('.operations__tab')
const tabsContent = document.querySelectorAll('.operations__content');
const tabsContainer = document.querySelector('.operations__tab-container');

// tabs.forEach(t=>t.addEventListener('click',()=>console.log("TABS"))
// it's a bad practice if there are 200 tabs so callback build 300 time and reduce a website

// use your mind and use delegation 
tabsContainer.addEventListener('click', function (e) {
  const checked = e.target.closest('.operations__tab');
  if (!checked) return;

  document.querySelector('.operations__tab--active').classList.remove("operations__tab--active");
  checked.classList.add("operations__tab--active");

  document.querySelector('.operations__content--active').classList.remove('operations__content--active')
  document.querySelector(`.operations__content--${checked.dataset.tab}`).classList.add("operations__content--active")

});



const nav = document.querySelector('.nav');
// header hover effect or fade animation

// It's repeate code 
// nav.addEventListener('mouseover', function (e) {
//   if (e.target.classList.contains('nav__link')) {
//     const link = e.target;
//     const siblings = link.closest('nav').querySelectorAll('.nav__link');
//     const logo = link.closest('.nav').querySelector('.nav__logo')

//     siblings.forEach(el => {
//       if (el !== link) el.style.opacity = 0.5;
//     });
//     logo.style.opacity = 0.5
//   }
// });
// nav.addEventListener('mouseout', function (e) {
//   if (e.target.classList.contains('nav__link')) {
//     const link = e.target;
//     const siblings = link.closest('nav').querySelectorAll('.nav__link');
//     const logo = link.closest('.nav').querySelector('.nav__logo')

//     siblings.forEach(el => {
//       if (el !== link) el.style.opacity = 1;
//     });
//     logo.style.opacity = 1
//   }
// });


// Don't repeat your self
const handleOver = function (e) {
  // console.log(this)
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    const siblings = link.closest('nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('.nav__logo')

    siblings.forEach(el => {
      if (el !== link) el.style.opacity = this;
    });
    logo.style.opacity = this
  }
};

// nav.addEventListener('mouseover', function (e) {
//   handleOver(e, 0.5)
// });
// nav.addEventListener('mouseout', function (e) {
//   handleOver(e, 1)
// });

// more efficient way of doing this 
// bind method return copy of invoke func with it's own this keyword
// and value of this keyword alway same to passing arg in bind method  
// a Event handle function can only take 1 original argument that is e 
// if we want additional argu so use 'this' with array or etc in bind method 
nav.addEventListener('mouseover', handleOver.bind(0.5));
nav.addEventListener('mouseout', handleOver.bind(1));
// console.log(handleOver.bind(0.5))


// nav sticky position 
// const navbar = nav.classList;
// const section1 = document.querySelector('#section--1')
// window.addEventListener('scroll', function () {
//   const coordinat = section1.getBoundingClientRect()
//   window.scrollY > coordinat.top ? navbar.add('sticky') : navbar.remove('sticky')
// });

// now modern trick to do above 
// const obsCallBack = function (entries,observer) {
// entries.forEach(e=>console.log(e));
// };
// const obsOptions = {
//   root: null,
//   thresold:0.1,
//   thresold:[0,1,0.2],
//   // 0% and 100% and 20% visible or unvisible the callBack func will execute each time 
// };
// const observer = new IntersectionObserver(obsCallBack, obsOptions);
// observer.observe(section1);


///////////////////////////////////////
// Sticky navigation: Intersection Observer API

const header = document.querySelector('.header');
const navHeight = nav.getBoundingClientRect().height;

const stickyNav = function (entries) {
  const [entry] = entries;

  if (!entry.isIntersecting) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});

headerObserver.observe(header);
