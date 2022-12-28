let sible = document.querySelectorAll('.faq_collapsible');

for(let i = 0; i < sible.length; i++){
    sible[i].addEventListener("click", function () {
       
        this.classList.toggle("active");
       
        let fCont = this.nextElementSibling;

        fCont.classList.toggle("test");
    })
}