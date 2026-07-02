alert("Mandeha ny JavaScript!");
let bouton = document.getElementById("contact");

bouton.onclick = function(){
    alert("Pour toute collaboration, contactez-moi !");
};
const elements = document.querySelectorAll(".hidden");

window.addEventListener("scroll", () => {

    elements.forEach((element)=>{

        let position = element.getBoundingClientRect().top;

        if(position < window.innerHeight - 100){
            element.classList.add("show");
        }

    });

});
let boutonDark = document.getElementById("dark");

boutonDark.onclick = function(){

    document.body.classList.toggle("dark-mode");

};