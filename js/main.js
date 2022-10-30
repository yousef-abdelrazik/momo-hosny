/*================================== scroll to top======================================= */
window.onscroll = ()=> {
let up = document.querySelector(".fa-up-long");
window.scrollY >= 400 ? up.classList.add("show") : up.classList.remove("show"); 
up.onclick = ()=> {
   window.scrollTo({
    top: 0,
    behavior: "smooth",
   })  
}
/*========================== add calsses to header ===========================*/
const header = document.querySelector("header")
if (window.scrollY >= 100) {
    header.classList.add("blur");
} else {
    header.classList.remove("blur");
}

}


let links = document.querySelectorAll("header .middle-header li a");
links.forEach((e)=>{
  e.addEventListener("click", ()=>{ 
    e.classList.add("active");  
  })
})















/*================================== relode page ======================================= */

window.onload = ()=>{
  let reload = document.querySelector(".reload");
  setTimeout(function(){
    reload.classList.add("remove")
    setTimeout(function(){
      reload.style.display = "none";
    },3000)
  },3000)
}


















/*================================== scroll to down======================================= */
let scrollDown = document.querySelector(".fa-down-long");


// /*========================== remove class active from links ===========================*/
// let links = document.querySelectorAll("header ul li a");
// // console.log(links);
// links.forEach((a)=> {

//    a.addEventListener("click", ()=>{
//      a.classList.add("active")
//    })
// })


// =========================================show small image==========================================//
let mainImage1 = document.querySelector(".main-image1");
let smallImage1 = document.querySelectorAll(".SmImg1");
smallImage1.forEach((e)=>{
  e.addEventListener("click", ()=> {
    mainImage1.src = e.src
  })
})
let mainImage2 = document.querySelector(".main-image2");
let smallImage2 = document.querySelectorAll(".SmImg2");
smallImage2.forEach((e)=>{
  e.addEventListener("click", ()=> {
    mainImage2.src = e.src
  })
})
let mainImage3 = document.querySelector(".main-image3");
let smallImage3 = document.querySelectorAll(".SmImg3");
smallImage3.forEach((e)=>{
  e.addEventListener("click", ()=> {
    mainImage3.src = e.src
  })
})
let mainImage4 = document.querySelector(".main-image4");
let smallImage4 = document.querySelectorAll(".SmImg4");
smallImage4.forEach((e)=>{
  e.addEventListener("click", ()=> {
    mainImage4.src = e.src
  })
})
let mainImage5 = document.querySelector(".main-image5");
let smallImage5 = document.querySelectorAll(".SmImg5");
smallImage5.forEach((e)=>{
  e.addEventListener("click", ()=> {
    mainImage5.src = e.src
  })
})
let mainImage6 = document.querySelector(".main-image6");
let smallImage6 = document.querySelectorAll(".SmImg6");
smallImage6.forEach((e)=>{
  e.addEventListener("click", ()=> {
    mainImage6.src = e.src
  })
})
let mainImage7 = document.querySelector(".main-image7");
let smallImage7 = document.querySelectorAll(".SmImg7");
smallImage7.forEach((e)=>{
  e.addEventListener("click", ()=> {
    mainImage7.src = e.src
  })
})
let mainImage8 = document.querySelector(".main-image8");
let smallImage8 = document.querySelectorAll(".SmImg8");
smallImage8.forEach((e)=>{
  e.addEventListener("click", ()=> {
    mainImage8.src = e.src
  })
})









let headerPhone = document.querySelector(".header-phone");
let openHead = document.querySelector(".fa-bars");
let closeheadPhone = document.querySelector(".fa-xmark");
openHead.onclick = ()=> {
  headerPhone.classList.toggle("heasphoneClick");
}
closeheadPhone.onclick = ()=> {
  headerPhone.classList.remove("heasphoneClick");
}

/*========================== header phone ===========================*/

/*========================== Send Email ===========================*/




























// var modal = document.getElementById("myModal");

// // Get the image and insert it inside the modal - use its "alt" text as a caption
// var img = document.getElementById("myImg");
// var modalImg = document.getElementById("img01");
// var captionText = document.getElementById("caption");
// img.onclick = function(){
//   modal.style.display = "block";
//   modalImg.src = this.src;
//   captionText.innerHTML = this.alt;
// }

// var span = document.getElementsByClassName("close")[0];
// span.onclick = function() {
//   modal.style.display = "none";
// }