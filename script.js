
const htmlEl =document.querySelector("html");

const headerEl=document.querySelector(".header");
const navBtn=document.querySelector(".btn-mobile-nav");
const iconClose=document.querySelector(".icon-close");
const iconOpen=document.querySelector(".icon-open");
const nav = document.querySelector(".mian-nav-list");
const nestedList =document.querySelector(".nested-list")

navBtn.addEventListener('click',()=>{

    htmlEl.classList.toggle("nav-overflow");
    iconClose.classList.toggle("hide");
    iconOpen.classList.toggle("hide");
    headerEl.classList.toggle("nav-open");

})



nav.addEventListener("click",(e)=>{
    const target =e.target;


    if(target.classList.contains("icon-arrow")){
    const parent =target.closest(".list-item");
    const nestedList =parent.querySelector(".nested-list");
 if(nestedList){
    nestedList.classList.toggle("hide");
    target.classList.toggle("icon-arrow-active");
 }
   
           
           

    }

});