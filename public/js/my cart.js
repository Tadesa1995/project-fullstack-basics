let cart=[{
  id: 1,
  category: "meat",
  price: 120,
  name: "burger",
  description: "yummy meat so much protien",
  img:["images/food_image/meat/burger1.jpg","images/food_image/meat/burger2.jpg"]

},
{
  id: 2,
  category: "meat",
  price: 120,
  name: "cowmeat",
  description: "uniqe iron ",
  img:["images/food_image/meat/cowmeat.jpg","images/food_image/meat/cowmeat1.jpg"]
},
{
  id: 3,
  category: "meat",
  price: 120,
  name: "hotdog",
  description: "wowwow",
  img:["images/food_image/meat/hotdog.jpg","images/food_image/meat/hotdog1.jpg"]

}]
 
  
let tableCart=document.getElementById("tableCart");
function displayCart() {
    for (let i=0; i<cart.length; i++) {
        tableCart.innerHTML+=`<tr>
        <td>${cart[i].category}</td>
        <td>${cart[i].name}</td>
        <td>${cart[i].price}</td>
        <td><button onclick="btnDelete(${cart[i].id})"class="btnRemove">delete</button></td>
       </tr> `
    }}
    
displayCart()
let btnRemove=document.getElementsByClassName("btnRemove");

let th=`
<tr>
<th>category</th>
<th>name</th>
<th>price</th>
<th>remove</th>
</tr>`
console.log(cart);
function btnDelete(productId){
    for (let index = 0; index < cart.length; index++) {
       if (cart[index].id === productId){
           cart.splice(index, 1);
           console.log(cart);
           tableCart.innerHTML=th
           displayCart()
           totalFunction()
       }  
       }
}
let total=document.getElementById("total");
function totalFunction(){
let totalSum=0;
for (let index = 0; index < cart.length; index++) {
    totalSum=totalSum + cart[index].price;
    total.innerHTML=`total:${totalSum}`;
}}
totalFunction()
