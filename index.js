const projectOne = document.getElementById("project-1");
const projectTwo = document.getElementById("project-2");
const projectName = document.getElementById("name");

const homeMenu = document.querySelector(".name");

// projectTwo.remove();
// alert("are you sure you want to delete this");
projectName.addEventListener("mouseover",formResponsive );
// projectName.addEventListener("mouseleave",formLeave );

// function formLeave(){
//     projectName.style.left = -75
//     projectName.style.right = - 75
// }



    
function editProject(){
    projectOne.addEventListener("click",formResponsive);
    homeMenu.addEventListener("click", formResponsive);
}

function formResponsive(){
    // projectOne.style.backgroundColor = "red"
    projectOne.classList.add("project-hover");
    homeMenu.cr
    homeMenu.classList.add("mobile-navigation")
    // projectOne.remove();

}
formResponsive();

