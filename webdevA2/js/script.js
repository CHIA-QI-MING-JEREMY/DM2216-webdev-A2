let nav = document.querySelector("#toggle");
let menuIcon = document.querySelector("#menu");

nav.addEventListener("click", ()=>{
    nav.classList.toggle("active");
    let navMenu = nav.nextElementSibling;
    if (navMenu.style.maxHeight)
    {
        navMenu.style.maxHeight = null;
    }
    else
    {
        navMenu.style.maxHeight = navMenu.scrollHeight + "px";
    }
});

let acc = document.querySelectorAll(".accordion");
    for (let i = 0; i < acc.length; i++)
    {
        acc[i].addEventListener("click", ()=>{
            acc[i].classList.toggle("active");
            let panel = acc[i].nextElementSibling;
            if (panel.style.maxHeight)
            {
                panel.style.maxHeight = null;
            }
            else
            {
                panel.style.maxHeight = panel.scrollHeight + "px";
            }
        });
    }