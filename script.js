const body = document.querySelector('body')
const tabs = document.querySelector('.tabs')
const drop = document.querySelector('.drop-down')
const btns = document.querySelectorAll('.btn')
const main = document.querySelector('main')
const title = document.querySelectorAll('.title')
const mobileNav = document.querySelector('.mobile-nav')

title.forEach(tt => {
    tt.addEventListener("click", () => {
        // remember this
        const icon = tt.querySelector('i')
        
        if(icon.classList.contains("fa-chevron-down")){
            icon.classList.replace("fa-chevron-down","fa-chevron-up")
        } else {
            icon.classList.replace("fa-chevron-up","fa-chevron-down")
        }

        tt.nextElementSibling.classList.toggle("toggle")
    })
})

// drop dowm menu

drop.classList.add("toggle")
tabs.addEventListener("click", () => {
    drop.classList.toggle("toggle")
})

main.addEventListener("click", () => {
    drop.classList.add("toggle")
})

// MOBILE NAV 

body.addEventListener("wheel",(e)=>{
    if(e.deltaY < 0){
        console.log(e.deltaY)
        mobileNav.classList.remove("mobile-nav-hide")
    } else if(e.deltaY > 0){
        console.log(e.deltaY)
        mobileNav.classList.add("mobile-nav-hide")
    }
})

















// HEADER STICK DUMP

// const header = document.querySelector('header')
// const fixNav = ()=> {
//     if(window.scrollY > header.offsetHeight){
//         window.scrollY > header.offsetHeight + 150
//         header.classList.add('active')
//     } else {
//         header.classList.remove('active')
//     }
//     nav.classList.add('active')

// }
// window.addEventListener("scroll", fixNav)