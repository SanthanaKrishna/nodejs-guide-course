const fs = require('fs');
const path = require('path');

const Cart = require('./cart');


const p = path.join(
    path.dirname(process.mainModule.filename),
    'data',
    'products.json'
);
const getProductsFromFile = (cb) => {
    fs.readFile(p, (err, fileContent) => {
        if (err) {
            cb([]);
        } else {
            cb(JSON.parse(fileContent));
        }
    });
}
// const products = [];

//constructor  class
module.exports = class Product {
    constructor(title, imageURL, description, price) {
        this.title = title;
        this.imageURL = imageURL;
        this.description = description;
        this.price = price
    }

    save() {
        //products.push(this);

        getProductsFromFile((products) => {
            if (this.id) {
                const existingProductIndex = products.findIndex(
                  prod => prod.id === this.id
                );
                const updatedProducts = [...products];
                updatedProducts[existingProductIndex] = this;
                fs.writeFile(p, JSON.stringify(updatedProducts), err => {
                  console.log(err);
                });
              }else{
                  this.id=Math.random().toString();
                products.push(this); //this refer to class
                fs.writeFile(p, JSON.stringify(products), (err) => {
                    console.log(err);
                })
              }            
        });
        // fs.readFile(p, (err, fileContent) => {
        // })
        //fs.createReadStream // to read all file
    }
    
  static deleteById(id) {
    getProductsFromFile(products => {
      const product = products.find(prod => prod.id === id);
      const updatedProducts = products.filter(prod => prod.id !== id);
      fs.writeFile(p, JSON.stringify(updatedProducts), err => {
        if (!err) {
          Cart.deleteProduct(id, product.price);
        }
      });
    });
  }

    //static method directly call class itself
    static fetchAll(cb) {
        getProductsFromFile(cb);
    }

    static findById(id, cb) {
        getProductsFormFile(products => {
            const product = products.find(p => p.id === id);
            cd(product)
        });
    }

}

// //constructor  function
// module.exports = function Product(){

// }