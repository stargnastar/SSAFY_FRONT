const btn=document.querySelector("#goDetail");
btn.addEventListener("click",()=>{
    window.open("reviewDetail.html","_self");
})

const newReview=document.querySelector(".newReview");
newReview.addEventListener("click",()=>{
    window.open("reviewRegister.html","_self");
})