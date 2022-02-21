const productContainers = [...document.querySelectorAll('.product-container')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];


productContainers.forEach((item, i) => {
    let containerWidth = document.querySelector(".product-card").clientWidth;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth + 3;

    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth + 3;

    })
})

AOS.init({
    offset: 100,
    duration: 1500
});






const butoni = document.querySelectorAll(".btn");
const dyqaniproduktet = document.querySelectorAll(".gal");

for (i = 0; i < butoni.length; i++) {
    butoni[i].addEventListener("click", (e) => {
        e.preventDefault()

        const filter = e.target.dataset.filter;
        console.log(filter);

        dyqaniproduktet.forEach((product) => {
            if (filter === "tegjitha") {
                product.style.display = "block";
            } else {
                if (product.classList.contains(filter)) {
                    product.style.display = "block";
                } else {
                    product.style.display = "none";
                }
            }
        });
    });
};




//Pjesa kur behet aktive Front-End dhe ndryshon permbajtja
function frontend() {
    document.getElementById("active_front").style.backgroundColor = 'teal';
    document.getElementById("active_dizajn").style.color = 'white';
    document.getElementById("active_dizajn").style.backgroundColor = "white";
    document.getElementById("titulli_1").innerHTML = "Front-End";
    document.getElementById("paragrafi_1").innerHTML = "Frontend mbulon gjithçka që përdoruesi i një softueri ose uebsajti mund të shohë, prekë dhe përjetojë. Në faqet e internetit, pjesa e përparme përfshin përmbajtje, dizajnin dhe navigimin.";
    document.getElementById("paragrafi_2").innerHTML = "Dallimi i frontendit nga pjesa e pasme Backend i referohet gjithçkaje që përdoruesit e një softueri ose uebsajti nuk mund ta shohin. Kjo përfshin, për shembull, serverët që presin faqet e internetit";
    document.getElementById("f1").innerHTML = "Html";
    document.getElementById("f2").innerHTML = "CSS";
    document.getElementById("f3").innerHTML = "JavaScript";
    document.getElementById("f4").innerHTML = "Bootstrap";
    document.getElementById("f5").innerHTML = "React js";
    document.getElementById("f6").innerHTML = "Vue js";
    document.getElementById("frontend-img").src = "Foto/frontend.png";
}
function dizajn() {
    document.getElementById("active_dizajn").style.backgroundColor = 'teal';
    document.getElementById("active_dizajn").style.color = 'white';
    document.getElementById("active_front").style.backgroundColor = "white";
    document.getElementById("titulli_1").innerHTML = "Dizajn Grafik";
    document.getElementById("paragrafi_1").innerHTML = "Dizajneret grafik krijojne dhe kombinojne simbolet, imazhet dhe tekstet per te formuar perfaqesime vizuale të ideve dhe mesazheve.";
    document.getElementById("paragrafi_2").innerHTML = "Qellimi i ketij trajnimi eshte aftesimi i studenteve ne perdorimin e programeve te dizajnit grafik,duke fillar te marrin njohuri me veglat me bazike pastaj me kuptimin e koncepteve themelore ne web dizajn. Programet qe do te mesojme me teper jane Photoshop dhe Ilustrator.";
    document.getElementById("f1").innerHTML = "Adobe Photoshop";
    document.getElementById("f2").innerHTML = "Adobe Xd";
    document.getElementById("f3").innerHTML = "Adobe Ilustrator";
    document.getElementById("f4").innerHTML = "Adobe Premiere";
    document.getElementById("f5").innerHTML = "Adobe Premiere Pro";
    document.getElementById("f6").innerHTML = "CorelDRAW";
    document.getElementById("frontend-img").src = "Foto/dizajn1.png";
}





var slides = document.querySelector('.slider-items').children;
var nextSlide = document.querySelector(".right-slide");
var prevSlide = document.querySelector(".left-slide");
var totalSlides = slides.length;
var index = 0;

nextSlide.onclick = function () {
    next("next");
}
prevSlide.onclick = function () {
    next("prev");
}

function next(direction) {

    if (direction == "next") {
        index++;
        if (index == totalSlides) {
            index = 0;
        }
    }
    else {
        if (index == 0) {
            index = totalSlides - 1;
        }
        else {
            index--;
        }
    }

    for (i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active");
    }
    slides[index].classList.add("active");

}

//Navbar
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})
document, querySelectorAll(".nav-link").foreach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}))
