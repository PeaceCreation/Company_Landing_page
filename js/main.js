// Navbar change active
let links = document.querySelectorAll(".links li");
// console.log(links);
links.forEach( link =>{
    link.addEventListener("click",changeA);
});
// Select Links From Our Practice 
let linkcat = document.querySelectorAll(".navs li");
// Add Event To linkcat 
linkcat.forEach( link =>{
    link.addEventListener("click",changeA)
});

// footer link 
let lin = document.querySelectorAll(".lin li");
lin.forEach( link =>{
    link.addEventListener("click", changeA);
});
// navbar toggler 
    function changeA(e){
        e.target.parentElement.querySelectorAll(".active").forEach( li =>{
            // console.log(li)
            li.classList.remove("active");
    });
    e.target.classList.add("active");
    }

let menu = document.querySelector(".fa-bars");
let navbar = document.querySelector(".links");
 menu.onclick = function(){
     navbar.classList.toggle("hide");
 }

 // Slider images
 let slider = document.querySelector(".slider");
 let imaArr = ["im1.jpg","im2.jpg","im3.jpg","im4.jpg","im5.jpg","im5.jpg"];
setInterval( ( )=>{
    
 let  randomImg = Math.floor(Math.random(imaArr) * imaArr.length);
// console.log(imaArr[randomImg]);

slider.style.backgroundImage="url('images/"+imaArr[randomImg]+"')";
}, 5000);
// Scrolling To Clicked Section
 let home =document.querySelector(".home")
links.forEach( link =>{
    link.addEventListener("click", (e) =>{
        window.scrollTo({
            top: document.querySelector(e.target.dataset.scroll).offsetTop,
            behavior : "smooth"
        });
   });
});


let linkks = document.querySelectorAll(".navs li");
// Chose a product
let all = document.querySelectorAll(".products .all");
// Hide  all Products 
linkks.forEach( link =>{
    link.addEventListener("click", (e) =>{
        all.forEach(el =>{
            el.style.display = "none"
        });
        document.querySelectorAll(e.target.dataset.teach).forEach( product =>{
            product.style.display = "block";
        });
        document.querySelectorAll(e.target.dataset.type).forEach( products =>{
            products.style.display = "block";
        });
    });
});






