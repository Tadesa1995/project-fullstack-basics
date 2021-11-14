const express = require('express');
const { Db } = require('mongodb');
const app = express();
const path = require('path');
const { deleteProducts } = require('./server');
const publicPath = path.join(__dirname, 'public')
 PORT = 8080,
{getProducts , addProduct , getProduct , deleteProduct , updateProduct,getCart,createCart,updateCart} = require("./server"),
// juice = "/shopping/products/juice",
// meat="shoppingdb/products/meat",
// fruit="shoppingdb/products/fruits",
// vegtables="shoppingdb/products/vegtables"
// baseRoute="shopping/products/"
defaultRoute="/",
cartRoute = "/shoppingDB/cart",
contactRoute="/shoppingDB/contact";
app.use(express.static('./../public')),


// --- prepare for json in body (POST)
app.use(express.json());
// static files

app.get("/shopping/products/:id", (req, res) => {
  // res.send(getProduct())
  getProduct(req, res);
});

app.delete("/shopping/products/:id", (req, res) => {
  deleteProducts(req, res);
});

app.patch("/shopping/products/:id", (req, res) => {
  updateProduct(req, res);
});

app.post("/shopping/products/",(req,res)=>{
  addProduct(req,res)
})
app.get("/shopping/products/", (req, res) => {
  getProducts(req, res);
});
//cart route
app.get(`${cartRoute}`, (req, res) => {
  getCart(req, res);
})
app.get(`${cartRoute}/:id`, (req, res) => {
  getCart(req, res);
});

app.patch(`${cartRoute}/Add/:id`, (req, res) => {
  updateCart(req, res);
});
app.patch(`${cartRoute}/delete/:id`, (req, res) => {
  deleteFromCart(req, res);
});

app.post(`${cartRoute}`,(req,res)=>{
 createCart(req,res)
 
})

// contact route
app.post(`${contactRoute}`),(req, res)=>{
  createUserInquiries(req,res)
}
app.get(`${contactRoute}`),(req, res)=>{
  getUserInquiries(req, res)
}

app.listen(PORT, () => {
console.log(`app listens on port : ${PORT}`);
});


  


// 
// 

