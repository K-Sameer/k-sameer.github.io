"use strict";
// меню
var toggleMenuBtn = document.querySelector(".controls-box__icon--menu");
var navMenu = document.querySelector(".site-header__menu");

toggleMenuBtn.addEventListener('click', function(){
	navMenu.classList.toggle("visible");
});

//поиск
var toggleSearch = document.querySelector(".controls-box__icon--magnifier");
var search = document.querySelector(".controls-box__search");

toggleSearch.addEventListener('click', function(){
  search.classList.toggle("visible");
});

