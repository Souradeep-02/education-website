burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
navList = document.querySelector('.nav-List')
rightNav = document.querySelector('.rightNav')




burger.addEventListner('click',()=>{
 rightNav.classList.toggle('v-class-resp');
 navList.classList.toggle('v-class-resp');
 navbar.classList.toggle('h-nav-resp');

})