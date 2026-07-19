// =====================================
// V5.0 STABLE
// PART 1
// Loader + Password + Hero
// =====================================

// ---------- LOADER ----------

window.addEventListener("load", function () {

    setTimeout(function () {

        document.getElementById("loader").style.display = "none";

        document.getElementById("passwordScreen").style.display = "flex";

    }, 3000);

});

// ---------- PASSWORD ----------

const unlockBtn = document.getElementById("unlockBtn");

unlockBtn.addEventListener("click", function () {

    const password = document.getElementById("passwordInput").value.trim();

    const correctPassword = "20072005";

    if (password === correctPassword) {

        document.getElementById("passwordScreen").style.display = "none";

        const hero = document.getElementById("hero");

        hero.style.display = "flex";

        hero.classList.add("fade-in");

        const music = document.getElementById("bgMusic");

        if (music) {

            music.play().catch(() => {

                console.log("Music autoplay blocked.");

            });

        }

        const musicBtn = document.getElementById("musicBtn");

        if (musicBtn) {

            musicBtn.style.display = "block";

        }

    }

    else {

        document.getElementById("message").innerHTML =
            "❌ Wrong Date Of Birth";

    }

});

// ---------- HERO ----------

const startBtn = document.getElementById("startBtn");

startBtn.addEventListener("click", function () {

    const hero = document.getElementById("hero");

    hero.classList.add("fade-out");

    setTimeout(function () {

        hero.style.display = "none";

        const gallery = document.getElementById("gallery");

        gallery.style.display = "flex";

        gallery.classList.add("fade-in");

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    }, 800);

});

// ---------- MUSIC BUTTON ----------

const musicBtn = document.getElementById("musicBtn");

const bgMusic = document.getElementById("bgMusic");

if (musicBtn && bgMusic) {

    musicBtn.addEventListener("click", function () {

        if (bgMusic.paused) {

            bgMusic.play();

            musicBtn.innerHTML = "🎵";

        }

        else {

            bgMusic.pause();

            musicBtn.innerHTML = "🔇";

        }

    });

}
// =====================================
// V5.0 STABLE
// PART 2
// Gallery Slider
// =====================================

// ---------- PHOTOS ----------

const photos = [
    "images/photo1.jpg",
    "images/photo2.jpg",
    "images/photo3.jpg",
    "images/photo4.jpg",
    "images/photo5.jpg",
    "images/photo6.jpg"
];

const captions = [
    "Every memory with you is special ❤️",
    "Best Friends Forever ❤️",
    "Best Moments Together 💖",
    "Coolest Person 😎",
    "Beautiful Memories ✨",
    "Best Sister ❤️"
];

let currentPhoto = 0;

// ---------- ELEMENTS ----------

const slideImage = document.getElementById("slideImage");
const caption = document.getElementById("caption");
const counter = document.getElementById("counter");

const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");

// ---------- UPDATE ----------

function updateSlide(){

    slideImage.classList.remove("fade-photo");

    void slideImage.offsetWidth;

    slideImage.classList.add("fade-photo");

    slideImage.src = photos[currentPhoto];

    caption.innerHTML = captions[currentPhoto];

    counter.innerHTML =
        (currentPhoto + 1) + " / " + photos.length;

}

// ---------- NEXT ----------

nextBtn.addEventListener("click",function(){

    currentPhoto++;

    if(currentPhoto >= photos.length){

        currentPhoto = 0;

    }

    updateSlide();

});

// ---------- PREVIOUS ----------

prevBtn.addEventListener("click",function(){

    currentPhoto--;

    if(currentPhoto < 0){

        currentPhoto = photos.length - 1;

    }

    updateSlide();

});

// ---------- AUTO SLIDESHOW ----------

setInterval(function(){

    if(document.getElementById("gallery").style.display === "flex"){

        currentPhoto++;

        if(currentPhoto >= photos.length){

            currentPhoto = 0;

        }

        updateSlide();

    }

},5000);

// ---------- KEYBOARD ----------

document.addEventListener("keydown",function(e){

    if(document.getElementById("gallery").style.display !== "flex"){

        return;

    }

    if(e.key==="ArrowRight"){

        nextBtn.click();

    }

    if(e.key==="ArrowLeft"){

        prevBtn.click();

    }

});

// ---------- MOBILE SWIPE ----------

let touchStartX = 0;
let touchEndX = 0;

const gallery = document.getElementById("gallery");

gallery.addEventListener("touchstart",function(e){

    touchStartX = e.changedTouches[0].screenX;

});

gallery.addEventListener("touchend",function(e){

    touchEndX = e.changedTouches[0].screenX;

    if(touchEndX < touchStartX - 50){

        nextBtn.click();

    }

    if(touchEndX > touchStartX + 50){

        prevBtn.click();

    }

});

// ---------- INITIAL ----------

updateSlide();
// =====================================
// V5.0 STABLE
// PART 3
// Letter → Timeline → Gift → Final
// =====================================

// ---------- LETTER MESSAGE ----------

const message = `Dear Bachaaa ❤️,

Sabse pehle...

Happy Birthday!! 🥳🎂

Haan...
Aap kabhi kabhi bahut irritate karti ho 😂

Lekin...

Aap meri sirf Behen nahi...

Aap meri Best Friend bhi ho. ❤️

Thank you har us moment ke liye
jahan aapne support kiya,
hansi di,
aur life ko aur mast banaya.

Meri wish hai...

Is saal aapki life me sirf happiness ho,
success ho,
aur aap hamesha smile karti raho.
(AUR MERA IPHONE CHAHIYE HAI MERKKOO) ✨

Kabhi change mat hona.
AAP JAISE BHI HO NA BEST HO
EK BAAT HUMESHA YAAD RKHNA CHAHE LIFE MEI KITNI BHI PROBLEM AAJAE YA KUCH BHI HOJAE
(I AM ALWAYS THERE FOR YOU!! 💖🧿)

LIFE MEI KABHI BHI KOI BHI KUCH BHI HO NA MEI AAPKE SAATH RHUNGA PROMISE HAIII 

AUR HAA 
JITNA PROUD MUJHE AAJ HAI NA AAPKE UPAR UTNA HI RHEGA HUMESHAA

BAKI AUR JITNA LIKHU UTNA KUM HAI HUMARE BOND KO DESCRIBE KRNE K LIYEE
AUR HUMARA YE BOND MARTE DUM TAK AISE HI RAHE💗💗
(KISI KI NAZAR NA LAGEEEE🧿)

Aap jaise ho na...
mere liye waise hi perfect ho. ❤️

AUR WAISE KUCH ITNE BHI KHAAS NHI AAP 
KI MEI AAPKE LIYE PURA PARAGRAPH LIKH DU..😂

I LOVE YOU SO MUCHHHH 💖

AUR HAA MILNE AAJAO YRR JLDII SE
YAAD AA RHI H AAPKI....

Happy Birthday Once Again.

With Lots Of Love,

Pratyaksh (CHEETAH)❤️`;

let index = 0;

// ---------- TYPEWRITER ----------

function typeLetter(){

    if(index < message.length){

        document.getElementById("letterText").innerHTML +=
            message.charAt(index);

        index++;

        setTimeout(typeLetter,35);

    }

}

// ---------- GALLERY → LETTER ----------

const letterBtn = document.getElementById("letterBtn");

letterBtn.addEventListener("click",function(){

    document.getElementById("gallery").style.display="none";

    document.getElementById("letter").style.display="flex";

    document.getElementById("letter").classList.add("fade-in");

    document.getElementById("letterText").innerHTML="";

    index=0;

    typeLetter();

});

// ---------- LETTER → TIMELINE ----------

const continueBtn=document.getElementById("continueBtn");

continueBtn.addEventListener("click",function(){

    document.getElementById("letter").style.display="none";

    document.getElementById("timeline").style.display="flex";

    document.getElementById("timeline").classList.add("fade-in");

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});

// ---------- TIMELINE → GIFT ----------

const giftBtn=document.getElementById("giftBtn");

giftBtn.addEventListener("click",function(){

    document.getElementById("timeline").style.display="none";

    document.getElementById("giftSection").style.display="flex";

    document.getElementById("giftSection").classList.add("fade-in");

});

// ---------- GIFT → FINAL ----------

const giftBox=document.getElementById("giftBox");

giftBox.addEventListener("click",function(){

    giftBox.style.pointerEvents="none";

    giftBox.innerHTML="💖";

    giftBox.style.transform="scale(2)";

    giftBox.style.transition="0.8s";

    // Fireworks
    if(typeof burst==="function"){

        burst(window.innerWidth/2,window.innerHeight/2);

    }

    // Confetti
    if(typeof createConfetti==="function"){

        createConfetti();

    }

    setTimeout(function(){

        document.getElementById("giftSection").style.display="none";

        document.getElementById("finalMessage").style.display="flex";

        document.getElementById("finalMessage").classList.add("fade-in");

        document.getElementById("footer").style.display="block";

        window.scrollTo({

            top:0,

            behavior:"smooth"

        });

    },1200);

});
// =====================================
// V5.0 STABLE
// PART 4
// Fireworks + Confetti + Sparkles
// =====================================

// ---------- CONFETTI ----------

const confettiCanvas = document.getElementById("confettiCanvas");
const confettiCtx = confettiCanvas.getContext("2d");

confettiCanvas.width = window.innerWidth;
confettiCanvas.height = window.innerHeight;

window.addEventListener("resize",function(){

    confettiCanvas.width = window.innerWidth;
    confettiCanvas.height = window.innerHeight;

});

let confetti = [];

function createConfetti(){

    confetti = [];

    for(let i=0;i<250;i++){

        confetti.push({

            x:Math.random()*confettiCanvas.width,

            y:-20,

            size:Math.random()*8+4,

            speed:Math.random()*4+2,

            color:`hsl(${Math.random()*360},100%,60%)`

        });

    }

}

function animateConfetti(){

    confettiCtx.clearRect(0,0,confettiCanvas.width,confettiCanvas.height);

    confetti.forEach(function(c){

        confettiCtx.fillStyle = c.color;

        confettiCtx.fillRect(c.x,c.y,c.size,c.size);

        c.y += c.speed;

    });

    confetti = confetti.filter(function(c){

        return c.y < confettiCanvas.height+20;

    });

    requestAnimationFrame(animateConfetti);

}

animateConfetti();

// ---------- FIREWORKS ----------

const fireCanvas = document.getElementById("fireworks");
const fireCtx = fireCanvas.getContext("2d");

fireCanvas.width = window.innerWidth;
fireCanvas.height = window.innerHeight;

window.addEventListener("resize",function(){

    fireCanvas.width = window.innerWidth;
    fireCanvas.height = window.innerHeight;

});

let particles = [];

function burst(x,y){

    for(let i=0;i<120;i++){

        particles.push({

            x:x,
            y:y,

            dx:(Math.random()-0.5)*12,

            dy:(Math.random()-0.5)*12,

            life:100,

            color:`hsl(${Math.random()*360},100%,60%)`

        });

    }

}

function animateFireworks(){

    fireCtx.clearRect(0,0,fireCanvas.width,fireCanvas.height);

    particles.forEach(function(p,index){

        fireCtx.beginPath();

        fireCtx.arc(p.x,p.y,3,0,Math.PI*2);

        fireCtx.fillStyle = p.color;

        fireCtx.fill();

        p.x += p.dx;

        p.y += p.dy;

        p.dy += 0.08;

        p.life--;

        if(p.life<=0){

            particles.splice(index,1);

        }

    });

    requestAnimationFrame(animateFireworks);

}

animateFireworks();

// ---------- SPARKLES ----------

const sparkles = document.getElementById("sparkles");

for(let i=0;i<40;i++){

    const star = document.createElement("div");

    star.className = "sparkle";

    star.style.left = Math.random()*100+"%";

    star.style.top = Math.random()*100+"%";

    star.style.animationDelay = Math.random()*5+"s";

    sparkles.appendChild(star);

}

console.log("🎉 Birthday Website V5.0 Loaded Successfully");
// =====================================
// PHOTO MODAL
// =====================================

const photoModal = document.getElementById("photoModal");
const modalImage = document.getElementById("modalImage");
const closeModal = document.getElementById("closeModal");

slideImage.addEventListener("click", function(){

    photoModal.style.display = "flex";

    modalImage.src = slideImage.src;

});

closeModal.addEventListener("click", function(){

    photoModal.style.display = "none";

});

photoModal.addEventListener("click", function(e){

    if(e.target === photoModal){

        photoModal.style.display = "none";

    }

});
// =====================================
// BALLOONS
// =====================================

const balloonContainer = document.getElementById("balloons");

const balloonEmoji = [

"🎈",
"🎈",
"🎈",
"🎈",
"🎈",
"🎈"

];

function createBalloon(){

    const balloon = document.createElement("div");

    balloon.className = "balloon";

    balloon.innerHTML =
        balloonEmoji[Math.floor(Math.random()*balloonEmoji.length)];

    balloon.style.left =
        Math.random()*100 + "%";

    balloon.style.animationDuration =
        (8 + Math.random()*5) + "s";

    balloon.style.fontSize =
        (40 + Math.random()*30) + "px";

    balloonContainer.appendChild(balloon);

    setTimeout(function(){

        balloon.remove();

    },13000);

}

setInterval(createBalloon,800);
// =====================================
// CURSOR SPARKLES
// =====================================

document.addEventListener("mousemove", function(e){

    const sparkle = document.createElement("div");

    sparkle.className = "sparkle-dot";

    sparkle.style.left = e.clientX + "px";
    sparkle.style.top = e.clientY + "px";

    document.body.appendChild(sparkle);

    setTimeout(function(){

        sparkle.remove();

    },800);

});
// =====================================
// MEMORY JAR
// =====================================

const memories = [

"❤️ Thank you for always being there.",

"😂 Remember our stupid fights?",

"🧿 No matter what happens, I'll always stand by you.",

"🌸 Every memory with you is priceless.",

"✨ Best Sister Award goes to YOU.",

"💖 I hope you keep smiling forever.",

"🎂 Happy Birthday once again!",

"🤍 I'm proud of you every single day."

];

const memoryBtn = document.getElementById("memoryBtn");
const memoryJar = document.getElementById("memoryJar");
const memoryText = document.getElementById("memoryText");
const nextMemory = document.getElementById("nextMemory");

memoryBtn.addEventListener("click",function(){

    document.getElementById("finalMessage").style.display="none";

    memoryJar.style.display="flex";

    showMemory();

});

function showMemory(){

    const random = Math.floor(Math.random()*memories.length);

    memoryText.innerHTML = memories[random];

}

nextMemory.addEventListener("click",showMemory);
// =====================================
// ONE LAST SURPRISE
// =====================================

const finalLines =

`Distance may change...

Time may change...

Life may become busy...

But one thing will never change...

You'll always be

my favourite sister. ❤️

Thank you for everything...

Happy Birthday once again.

I LOVE YOU SO MUCH. 💖`;

let finalIndex = 0;

const lastText = document.getElementById("lastText");

function typeFinal(){

    if(finalIndex < finalLines.length){

        lastText.innerHTML += finalLines.charAt(finalIndex);

        finalIndex++;

        setTimeout(typeFinal,50);

    }

    else{

    document.getElementById("theEnd").style.display="block";

    if(typeof burst==="function"){

        burst(window.innerWidth/2,250);

    }

    if(typeof createConfetti==="function"){

        createConfetti();

    }

    // 5 sec baad Cinematic Ending
    setTimeout(function(){

        // Last Surprise hide
        document.getElementById("lastSurprise").style.display="none";

        // Cinematic Ending show
        document.getElementById("cinematicEnding").style.display="flex";

        // Music Fade Out
        const music = document.getElementById("bgMusic");

        if(music){

            let fade = setInterval(function(){

                if(music.volume > 0.05){

                    music.volume -= 0.05;

                }else{

                    music.volume = 0;

                    clearInterval(fade);

                }

            },200);

        }

    },5000);

}

}

const finalButton = document.createElement("button");

finalButton.innerHTML = "✨ One Last Surprise";

finalButton.id = "finalButton";

document.querySelector(".memory-card").appendChild(finalButton);

finalButton.addEventListener("click",function(){

    document.getElementById("memoryJar").style.display="none";

    document.getElementById("lastSurprise").style.display="flex";

    lastText.innerHTML="";

    finalIndex=0;
document.getElementById("theEnd").style.display="none";
    typeFinal();
    

});
// =====================================
// V6.1
// BROWSER TAB ANIMATION
// =====================================

const titles = [

"🎂 Happy Birthday ❤️",

"🎁 Open Your Surprise",

"💖 Someone Loves You",

"✨ Best Sister Ever",

"❤️ Happy Birthday"

];

let titleIndex = 0;

setInterval(function(){

    document.title = titles[titleIndex];

    titleIndex++;

    if(titleIndex >= titles.length){

        titleIndex = 0;

    }

},2000);