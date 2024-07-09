module.exports = (sequelize, Sequelize) => {
  const Product = sequelize.define("product", {
    ProductCode: {
      type: Sequelize.STRING
    },
    ProductName: {
      type: Sequelize.STRING
    },
    ProductOriginPrice: {
      type: Sequelize.INTEGER
    },
    Quantity: {
      type: Sequelize.INTEGER
    },
    ProductStoreCode: {
      type: Sequelize.STRING
    }
  });

  return Product;
};
