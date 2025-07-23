document.addEventListner("DOMContentLoaded",function(){
    const searchInput = document.querySelector(".search-input");
    const categoryfilters = document.querySelector(".categoryfilterinput");
const pricerange = document.querySelector("#pricerange");
const pricevalue = document.querySelector("#pricevalue");
const products = document.querySelector(".product");
pricerange.addEventListener("input",function (){
    pricevalue.textContent = pricerange.pricevalue;
    filterproduct();
})



    const back = document.querySelector(".back");
    .back.addEventListener("click",function (e){
        e.preventDefault();
        window.scrollTo({ top:0;
        });
    });
}
