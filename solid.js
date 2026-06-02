/* ANIMASI SCROLL */

const reveals = document.querySelectorAll(
'.about-image,.about-content,.vision-card'
);

window.addEventListener('scroll',()=>{

reveals.forEach(item=>{

let top = item.getBoundingClientRect().top;
let windowHeight = window.innerHeight;

if(top < windowHeight - 100){
item.classList.add('active');
}

});

});

/* ANIMASI CARD MISI */

const missionCards =
document.querySelectorAll('.mission-card');

missionCards.forEach(card=>{

card.addEventListener('mouseenter',()=>{

card.style.transform =
'translateY(-12px) scale(1.03)';

});

card.addEventListener('mouseleave',()=>{

card.style.transform =
'translateY(0) scale(1)';

});

});

/* =========================
   COUNTER ANIMATION
========================= */

const counters =
document.querySelectorAll('.counter');

counters.forEach(counter=>{

const updateCounter = () => {

const target =
+counter.getAttribute('data-target');

const current =
+counter.innerText;

const increment =
target / 100;

if(current < target){

counter.innerText =
Math.ceil(current + increment);

setTimeout(updateCounter,20);

}else{

counter.innerText = target;

}

};

updateCounter();

});

// FORM

document
.getElementById("contactForm")
.addEventListener("submit",function(e){

e.preventDefault();

alert(
"Terima kasih, pesan Anda berhasil dikirim!"
);

this.reset();

});