const projectOne = document.getElementById("project-1");
const projectTwo = document.getElementById("project-2");
const projectName = document.getElementById("name");

let navLinks = document.getElementById("headerTwo");
let mobileIcon = document.getElementById("homeOne");
let navLink = navLinks.querySelectorAll("li");


mobileIcon.addEventListener("click", () => {
    navLinks.classList.toggle('hide');
})






    
function editProject(){
    projectOne.addEventListener("click",formResponsive);
    // homeMenu.addEventListener("click", formResponsive);
}

function formResponsive(){
    // projectOne.style.backgroundColor = "red"
    projectOne.classList.add("project-hover");
    // homeMenu.cr
    // homeMenu.classList.add("mobile-navigation")
    // projectOne.remove();

}
formResponsive();

