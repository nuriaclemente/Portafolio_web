const images=document.querySelectorAll(".project img");

const lightbox=document.getElementById("lightbox");

const lightboxImg=document.getElementById("lightbox-img");

const close=document.getElementById("close");

images.forEach(image=>{

image.addEventListener("click",()=>{

lightbox.classList.add("active");

lightboxImg.src=image.src;

});

});

close.addEventListener("click",()=>{

lightbox.classList.remove("active");

});

lightbox.addEventListener("click",(e)=>{

if(e.target===lightbox){

lightbox.classList.remove("active");

}

});
