const menuIcon=document.querySelector('.menu-icon');
const navbar=document.querySelector('.navbar');
const nav=document.querySelector('nav');
window.addEventListener('scroll',function(){
    nav.classList.toggle('sticky',window.scrollY>0);
})
menuIcon.onclick=function(){
    navbar.classList.toggle('active');
    menuIcon.classList.toggle('close');
}