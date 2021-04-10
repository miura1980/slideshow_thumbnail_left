'use strict';

const mainImg = document.querySelector('.main_img');
const thumbnails = document.querySelectorAll('.thumbnails > li');
const thumImg =  document.querySelectorAll('li > img');

// console.log(mainImg);
// console.log(thumbnails);
// console.log(thumImg);

thumImg.forEach((image, index) => {
  thumbnails[index].addEventListener('click', () =>{
    mainImg.src = thumImg[index].src;
  });
});

const js_nav = document.querySelector('.js_nav');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

prev.addEventListener('click', () =>{
  js_nav.scrollLeft -= 160;
  // console.log('前')
});

next.addEventListener('click', () =>{
  js_nav.scrollLeft += 160;
  // console.log('次')
});

