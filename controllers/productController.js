const Product = require("../models/Product");

module.exports = class ProductController {
  //método que mostra o form de criação
  static createProduct(req, res) {
    res.render("products/create");
  }

  //método que recebe os dados do form e salva no banco de dados
  static async createProductPost(req, res) {
    const product = {
      name: req.body.name,
      description: req.body.description,
      color: req.body.color,
      unit_price: req.body.unit_price,
      stock_amount: req.body.stock_amount,
      total_stock_value: req.body.stock_amount * req.body.unit_price,
    };

    await Product.create(product)
      .then(() => {
        res.redirect("/products");
      })
      .catch((err) => console.log("erro ao cadastrar produto"));
  }

  //método que lista os produtos do banco de dados
  static showProducts(req, res) {
    Product.findAll({ raw: true })
      .then((data) => {
        let noProducts = false;
        if (data.length === 0) {
          noProducts = true;
        }
        res.render("products/all", {
          products: data,
          noProducts,
        });
      })
      .catch((err) => console.log(err));
  }

  //método para excluir um produto do banco de dados
  static async removeProduct(req, res) {
    const id = req.body.id;

    await Product.destroy({ where: { id: id } })
      .then(() => {
        res.redirect("/products");
      })
      .catch((err) => console.log(err));
  }

  //método para apresentar form de alteração do produto
  static updateProduct(req, res) {
    const id = req.params.id;

    Product.findOne({ where: { id: id }, raw: true })
      .then((data) => {
        res.render("products/edit", { product: data });
      })
      .catch((err) => console.log(err));
  }

  //método que recebe os dados alterados do form e faz o update no banco de dados
  static async updateProductPost(req, res) {
    const id = req.body.id;
    const product = {
      name: req.body.name,
      description: req.body.description,
      color: req.body.color,
      unit_price: req.body.unit_price,
      stock_amount: req.body.stock_amount,
      total_stock_value: req.body.stock_amount * req.body.unit_price,
    };

    await Product.update(product, { where: { id: id } })
      .then(() => {
        res.redirect("/products");
      })
      .catch((err) => console.log(err));
  }
};
