/* ==========================================
   APARICIÓN SUAVE DE LOS ELEMENTOS
========================================== */

const elements = document.querySelectorAll(
    ".project, .about, footer"
);

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:0.15
});

elements.forEach(element => {

    observer.observe(element);

});
