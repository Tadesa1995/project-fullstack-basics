
// let fruits=document.getElementById("fruits")
// for (let i = 0; i < categories.length; i++) {
//     if(categories[i].category== "fruits") {
//        fruits.innerHTML +=`<article>
//        <h1>${categories[i].name}</h1>
//        <p>${categories[i].description}</p>
//        <p>${categories[i].price}₪</p>
//        <img src="${categories[i].img[0]}">
//        <img src="${categories[i].img[1]}">
//       <button class="btn2">Add to cart</button>
//       </article>`}
//     }
//     let btn=document.getElementsByClassName("btn2");
//     let cart=[];
// for (let i=0; i<btn.length;i++) {
//     btn[i].addEventListener("click",function(){
// cart.push((categories[i]));
// console.log(cart);
//     })
// };
function fruitsCategories(products){
    let root = document.getElementById("fruits")
    for (let i = 0; i < products.length; i++) {
        if(products[i].category== "fruits") {
            const article = document.createElement("article");
            article.innerHTML = ` 
            <h1>${products[i].name}</h1>
            <p>${products[i].description}</p>
            <p>${products[i].price}₪</p>
           <div class="img-container"> <img src="${products[i].img[0]}"/></div>`;
            const btn  = document.createElement("button");
            article.appendChild(btn);
            btn.innerText = "Add to cart";
            btn.addEventListener("click",function(){
                console.log("product added to cart",products[i]);
            });
            
            root.appendChild(article);

        }
     
    }
}

axios
.get("shopping/products/")
.then(function (response) {
// handle success 
const products = response.data;

fruitsCategories(products);
console.log(products);


})
.catch(function (error) {

})