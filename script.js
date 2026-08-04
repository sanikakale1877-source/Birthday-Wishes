// ==========================
// LOADING SCREEN
// ==========================

window.onload = function () {

    setTimeout(() => {

        document.getElementById("loader").style.opacity = "0";

        setTimeout(() => {

            document.getElementById("loader").style.display = "none";

            startTyping();

        }, 800);

    }, 3000);

};

// ==========================
// TYPEWRITER
// ==========================

const text = "A Special Surprise For You ❤️";

let index = 0;

function startTyping() {

    let typing = document.getElementById("typing-text");

    typing.innerHTML = "";

    let timer = setInterval(() => {

        typing.innerHTML += text.charAt(index);

        index++;

        if (index >= text.length) {

            clearInterval(timer);

            startCountdown();

        }

    }, 100);

}

// ==========================
// COUNTDOWN
// ==========================

function startCountdown() {

    const countdown = document.getElementById("countdown");

    const count = document.getElementById("count");

    countdown.style.display = "block";

    let number = 3;

    count.innerHTML = number;

    let timer = setInterval(() => {

        number--;

        if (number > 0) {

            count.innerHTML = number;

        } else {

            clearInterval(timer);

            countdown.style.display = "none";

            showBirthday();

        }

    }, 1000);

}

// ==========================
// SHOW BIRTHDAY
// ==========================

function showBirthday() {

    document.getElementById("birthdaySection").style.display = "block";

}

// ==========================
// OPEN GIFT
// ==========================

function openGift() {

    document.getElementById("music").play();

    document.getElementById("surprise").style.display = "block";

    window.scrollTo({

        top: 700,

        behavior: "smooth"

    });

    createConfetti();

    startFireworks();

}

// ==========================
// OPEN LETTER
// ==========================

function openLetter() {

    document.getElementById("letter").style.display = "block";

    document.getElementById("letter").scrollIntoView({

        behavior: "smooth"

    });

}

// ==========================
// HEARTS
// ==========================

function createHeart() {

    const container = document.getElementById("hearts-container");

    const heart = document.createElement("div");

    const emoji = [ "💖"];


    heart.className = "heart";

    heart.innerHTML = emoji[Math.floor(Math.random() * emoji.length)];

    heart.style.left = Math.random() * 100 + "vw";

   heart.style.fontSize = (12 + Math.random() * 10) + "px";

heart.style.animationDuration = (8 + Math.random() * 4) + "s";

    container.appendChild(heart);

    setTimeout(() => {

        heart.remove();

    }, 9000);

}

// Continuous Hearts

setInterval(createHeart, 1000);

// More Hearts While Scrolling

window.addEventListener("scroll", () => {

    for (let i = 0; i < 5; i++) {

        createHeart();

    }

});

// ==========================
// CONFETTI
// ==========================

function createConfetti() {

    const emojis = ["❤️","💖"];

    for(let i=0;i<100;i++){

        let confetti = document.createElement("div");

        confetti.innerHTML =
        emojis[Math.floor(Math.random()*emojis.length)];

        confetti.style.position="fixed";

        confetti.style.left=Math.random()*100+"vw";

        confetti.style.top="-30px";

        confetti.style.fontSize=(15+Math.random()*25)+"px";

        confetti.style.pointerEvents="none";

        confetti.style.zIndex="9999";

        confetti.style.animation=
        "fall "+(3+Math.random()*3)+"s linear forwards";

        document.body.appendChild(confetti);

        setTimeout(()=>{

            confetti.remove();

        },7000);

    }

}

// ==========================
// FIREWORKS
// ==========================

const canvas=document.getElementById("fireworks");

const ctx=canvas.getContext("2d");

canvas.width=window.innerWidth;

canvas.height=window.innerHeight;

window.addEventListener("resize",()=>{

canvas.width=window.innerWidth;

canvas.height=window.innerHeight;

});

let particles=[];

function random(min,max){

return Math.random()*(max-min)+min;

}

function Firework(x,y){

this.x=x;

this.y=y;

this.particles=[];

for(let i=0;i<70;i++){

this.particles.push({

x:x,

y:y,

dx:random(-5,5),

dy:random(-5,5),

life:100

});

}

}

Firework.prototype.update=function(){

this.particles.forEach(p=>{

p.x+=p.dx;

p.y+=p.dy;

p.life--;

});

this.particles=this.particles.filter(p=>p.life>0);

}

Firework.prototype.draw=function(){

this.particles.forEach(p=>{

ctx.beginPath();

ctx.arc(p.x,p.y,2,0,Math.PI*2);

ctx.fillStyle=`hsl(${Math.random()*360},100%,60%)`;

ctx.fill();

});

}

function startFireworks(){

setInterval(()=>{

particles.push(

new Firework(

random(100,canvas.width-100),

random(100,canvas.height/2)

)

);

},700);

}

function animateFireworks(){

ctx.clearRect(0,0,canvas.width,canvas.height);

particles.forEach(f=>{

f.update();

f.draw();

});

particles=particles.filter(f=>f.particles.length>0);

requestAnimationFrame(animateFireworks);

}

animateFireworks();

// ==========================
// END MESSAGE
// ==========================

setTimeout(()=>{

const ending=document.querySelector(".ending");

if(ending){

ending.scrollIntoView({

behavior:"smooth"

});

}

},30000);

// ==========================
// FINAL POPUP
// ==========================

setTimeout(()=>{

alert("❤️ I Hope You Liked It ❤️\n\nHappy Birthday Once Again! 🎂");

},35000);
let currentSlide = 0;

const slides = document.querySelector(".slides");

const totalSlides = document.querySelectorAll(".slide").length;

setInterval(() => {

    currentSlide++;

    if(currentSlide >= totalSlides){

        currentSlide = 0;

    }

    slides.style.transform = `translateX(-${currentSlide * 100}%)`;

},3000);