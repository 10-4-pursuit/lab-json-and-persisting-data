// tests/index.test.js
const fs = require('fs');
const {
  generateProduct,
  addProductToFile,
  generateAndSaveProducts,
} = require('../index');

describe('E-commerce App', () => {
  test('generateProduct should return an object with the correct field types', () => {
    const product = generateProduct();

    expect(typeof product.id).toBe('string');
    expect(typeof product.name).toBe('string');
    expect(typeof product.price).toBe('string');
    expect(typeof product.isAvailable).toBe('boolean');
  });

  test('addProductToFile should add a product to the specified file', () => {
    const testFilePath = 'test-products.json';
    const initialProducts = [
      { id: '123', name: 'Test Product', price: '19.99', isAvailable: true },
    ];
    const newProduct = generateProduct();

    fs.writeFileSync(testFilePath, JSON.stringify(initialProducts));

    addProductToFile(newProduct, testFilePath);

    const updatedData = fs.readFileSync(testFilePath, 'utf-8');
    const updatedProducts = JSON.parse(updatedData);

    expect(updatedProducts).toHaveLength(initialProducts.length + 1);

    const addedProduct = updatedProducts.find(
      (product) => product.id === newProduct.id
    );
    expect(addedProduct).toBeDefined();
    expect(addedProduct.name).toBe(newProduct.name);
    expect(addedProduct.price).toBe(newProduct.price);
    expect(addedProduct.isAvailable).toBe(newProduct.isAvailable);
  });

  test('generateAndSaveProducts should generate and save the specified number of products', () => {
    const testFilePath = 'test-products.json';
    const initialProducts = [
      { id: '123', name: 'Test Product', price: '19.99', isAvailable: true },
    ];

    fs.writeFileSync(testFilePath, JSON.stringify(initialProducts));

    const numberOfProducts = 3;
    generateAndSaveProducts(numberOfProducts, testFilePath);

    const updatedData = fs.readFileSync(testFilePath, 'utf-8');
    const updatedProducts = JSON.parse(updatedData);

    expect(updatedProducts).toHaveLength(initialProducts.length + numberOfProducts);
  });
});
