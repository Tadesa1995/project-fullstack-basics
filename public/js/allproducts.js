function allProducts(products){
    let root = document.getElementById("juice")
    for (let i = 0; i < products.length; i++) {
       
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


axios
.get("/shopping/products/")
.then(function (response) {
// handle success 
const products = response.data;

allProducts(products);
console.log(products);


})
.catch(function (error) {

})
