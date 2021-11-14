
const productsCollection = "products";
const mongodb = require("mongodb");
const axios = require("axios")
const MongoClient = mongodb.MongoClient;
const url = "mongodb://localhost:27017/";
const dbName="shoppingDB";
const cartCollection="shopping-cart"
const InquiriesCollection="userInquiries";
function getProduct(req, res) {
  MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    const id = req.params.id;
    console.log(id);
   const dbo = db.db(dbName);
    dbo
      .collection(productsCollection)
      .findOne({ _id: mongodb.ObjectId(id) }, function (err, docs) {
        if (err) throw err;
        if (docs) {
          res.send(docs);
        } else {
          res.sendStatus(404);
        }

        db.close();
      });
  });
}

function addProduct(req, res) {
  MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    const dbo = db.db(dbName);
    let newProduct = req.body;

     

    // check validation
    if (!newProduct.name || newProduct.name.trim().length < 3 ) {
      return res.sendStatus(400);
    }

    // check validation
    if (!newProduct.description || newProduct.description.trim().length < 3 ) {
      return res.sendStatus(400);
    }

    // check validation
    if (!newProduct.category || newProduct.category.trim().length < 3 ) {
      return res.sendStatus(400);
    }


    // check validation
    if (isNaN(newProduct.price) ||  newProduct.price.trim().length < 1 ) {
      return res.sendStatus(400);
    }

    if (!Array.isArray(newProduct.img) || newProduct.img.length ==0   ) {
      return res.sendStatus(400);
    }

     
 
 
 

    dbo
      .collection(productsCollection)
      .insertOne(newProduct, function (err, resDbInsert) {
        console.log(resDbInsert);
        if (err) throw err;
        res.sendStatus(200);
        db.close();
      });
  });
}

function updateProduct(req, res) {
  MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    const dbo = db.db(dbName);
    const productToUpdate = req.body;
    const id = req.params.id;

    dbo
      .collection(productsCollection)
      .findOneAndUpdate(
        { _id: mongodb.ObjectId(id) },
        { $set: productToUpdate },
        function (err, resUpdated) {
          if (err) throw err;

          // --- validate that string are not empty
          if (
            todoToUpdate.title == undefined ||
            todoToUpdate.title.length == 0
          ) {
            return res.sendStatus(400);
          }

          if (resUpdated.value) {
            res.sendStatus(200);
          } else {
            res.sendStatus(404);
          }

          db.close();
        }
      );
  });
}

function getProducts(req, res) {
  MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    const dbo = db.db(dbName);
    dbo
      .collection(productsCollection)
      .find({})
      .toArray(function (err, products) {
        if (err) throw err;
        res.send(products);
        db.close();
      });
  });
}
// 
function deleteProducts(req, res) {
  MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    const id = req.params.id;
    console.log(id);
    var dbo = db.db(dbName);
    dbo
      .collection(productsCollection)
      .findOneAndDelete(
        { _id: mongodb.ObjectId(id) },
        function (err, deletedDoc) {
          if (err) throw err;
          console.log(deletedDoc.value);
          if (deletedDoc.value) {
            res.sendStatus(200);
          } else {
            res.sendStatus(404);
          }
          db.close();
        }
      );
  });
}
// cart function
// post
function createCart(req, res) {
  MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    const dbo = db.db(dbName);
    let newCart = req.body;

    if (!Number(newCart.userId) || !Number(newCart.id)) {
      return res.sendStatus(400);
    }
    // check validation
    if (newCart.title == undefined || newCart.title.length == 0) {
      return res.sendStatus(400);
    }
    dbo
      .collection(cartCollection)
      .insertOne(newCart, function (err, resDbInsert) {
        console.log(resDbInsert);
        if (err) throw err;
        res.sendStatus(201);
        db.close();
      });
  });
}
// get
function getCart(req, res) {
  MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    const id = req.params.id;
    console.log(id);
   const dbo = db.db(dbName);
    dbo
      .collection(cartCollection)
      .findOne({ _id: mongodb.ObjectId(id) }, function (err, docs) {
        if (err) throw err;
        if (docs) {
          res.send(docs);
        } else {
          res.sendStatus(404);
        }
        db.close();
      });
  });
}
// patch/add
function updateCart(req, res) {
  MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    const dbo = db.db(dbName);
    const cartToUpdate = req.body;
    const id = req.params.id;
    dbo
      .collection(cartCollection)
      .findOneAndUpdate(
        { _id: mongodb.ObjectId(id) },
        { $push:{cartCollection:cartToUpdate}},
        function (err, resUpdated) {
          if (err) throw err;

          // --- validate that string are not empty
          if (
            cartToUpdate.title == undefined ||
           cartToUpdate.title.length == 0
          ) {
            return res.sendStatus(400);
          }

          if (resUpdated.value) {
            res.sendStatus(200);
          } else {
            res.sendStatus(404);
          }

          db.close();
        }
      );
  });
}
// patch/delete
function deleteFromCart(req, res) {
  MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    const id = req.params.id;
    console.log(id);
    var dbo = db.db(dbName);
    dbo
      .collection(cartCollection)
      .findOneAndUpdate(
        { _id: mongodb.ObjectId(id) },
        { $pull:{cartCollection:cartToUpdate}},
        function (err, resUpdated) {
          if (err) throw err;

          // --- validate that string are not empty
          if (
            productToUpdate.title == undefined ||
            productToUpdate.title.length == 0
          ) {
            return res.sendStatus(400);
          }

          if (resUpdated.value) {
            res.sendStatus(200);
          } else {
            res.sendStatus(404);
          }

          db.close();
        }
      );
  });
}
// contact
function getUserInquiries(req, res) {
  MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    const id = req.params.id;
    console.log(id);
   const dbo = db.db(dbName);
    dbo
      .collection(InquiriesCollection)
      .findOne({ _id: mongodb.ObjectId(id) }, function (err, docs) {
        if (err) throw err;
        if (docs) {
          res.send(docs);
        } else {
          res.sendStatus(404);
        }
        db.close();
      });
  });
}
module.exports = { getProducts, addProduct, getProduct, deleteProducts, updateProduct,getCart,createCart,updateCart,deleteFromCart,getUserInquiries,};
