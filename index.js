// index.js
const fs = require('fs');
const faker = require('faker');

// Function to generate fake product data
const generateProduct = () => {
  const id = faker.datatype.uuid();
  const name = faker.commerce.productName();
  const price = faker.commerce.price();
  const isAvailable = faker.datatype.boolean();

  return {
    id,
    name,
    price,
    isAvailable,
  };
};

// Function to add product to a JSON file
const addProductToFile = (product, filePath) => {
  let products = [];

  if (fs.existsSync(filePath)) {
    const data = fs.readFileSync(filePath, 'utf-8');
    products = JSON.parse(data);
  }

  products.push(product);

  fs.writeFileSync(filePath, JSON.stringify(products, null, 2));
};

// Function to generate and save multiple products
const generateAndSaveProducts = (count, filePath) => {
  for (let i = 0; i < count; i++) {
    const product = generateProduct();
    addProductToFile(product, filePath);
  }
};

// Example: Generate and save 5 products to 'products.json'
generateAndSaveProducts(5, 'products.json');

module.exports = { generateProduct, addProductToFile, generateAndSaveProducts };
