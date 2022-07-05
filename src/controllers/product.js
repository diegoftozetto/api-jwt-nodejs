class ProductController {
  findAll(req, res) {
    res.status(200).json({ message: 'Acesso realizado a um endpoint autenticado.' });
  }
}

module.exports = new ProductController();
