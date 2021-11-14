function drawCategories(products){
    let juice=document.getElementById("juice")
    for (let i = 0; i < products.length; i++) {
        if(products[i].category== "juice") {
           juice.innerHTML +=`<article>
           <h1>${products[i].name}</h1>
           <p>${products[i].description}</p>
           <p>${products[i].price}₪</p>
           <img src="${products[i].img[0]}">
         
          <button class="btn2">Add to cart</button>
          </article>`}
        }
    //     let btn=document.getElementsByClassName("btn2");
    //     let cart=[];
    // for (let i=0; i<btn.length;i++) {
    //     btn[i].addEventListener("click",function(){
    // cart.push((categories[i]));
    // console.log(cart);
    //     })
    // };
    }

    function drawCategories2(products){
        let root = document.getElementById("juice")
        for (let i = 0; i < products.length; i++) {
            if(products[i].category== "juice") {
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

  drawCategories2(products);
  console.log(products);


})
.catch(function (error) {

})

