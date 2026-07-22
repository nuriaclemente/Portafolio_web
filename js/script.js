/*=========================
LIGHTBOX
=========================*/

const images = document.querySelectorAll(".gallery img");
const lightbox = document.querySelector(".lightbox");
const lightboxImg = document.querySelector(".lightbox img");
const closeBtn = document.querySelector(".close");

let currentIndex = 0;

function openLightbox(index){

    currentIndex = index;

    lightboxImg.src = images[index].src;

    lightbox.classList.add("active");

    document.body.style.overflow = "hidden";

}

function closeLightbox(){

    lightbox.classList.remove("active");

    document.body.style.overflow = "";

}

function nextImage(){

    currentIndex++;

    if(currentIndex >= images.length){

        currentIndex = 0;

    }

    lightboxImg.src = images[currentIndex].src;

}

function previousImage(){

    currentIndex--;

    if(currentIndex < 0){

        currentIndex = images.length - 1;

    }

    lightboxImg.src = images[currentIndex].src;

}


/*=========================
EVENTOS
=========================*/

images.forEach((image,index)=>{

    image.addEventListener("click",()=>{

        openLightbox(index);

    });

});

closeBtn.addEventListener("click",closeLightbox);

lightbox.addEventListener("click",(e)=>{

    if(e.target===lightbox){

        closeLightbox();

    }

});


document.addEventListener("keydown",(e)=>{

    if(!lightbox.classList.contains("active")) return;

    if(e.key==="Escape"){

        closeLightbox();

    }

    if(e.key==="ArrowRight"){

        nextImage();

    }

    if(e.key==="ArrowLeft"){

        previousImage();

    }

});


/*=========================
FADE AL HACER SCROLL
=========================*/

const items=document.querySelectorAll(".item");

const observer=new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("visible");

        }

    });

},{
    threshold:.15
});

items.forEach(item=>{

    observer.observe(item);

});


/*=========================
HEADER
=========================*/

const header=document.querySelector("header");

let lastScroll=0;

window.addEventListener("scroll",()=>{

    const current=window.pageYOffset;

    if(current>lastScroll && current>100){

        header.style.transform="translateY(-100%)";

    }else{

        header.style.transform="translateY(0)";

    }

    lastScroll=current;

});
