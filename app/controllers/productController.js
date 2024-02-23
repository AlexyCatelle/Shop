import Product from "../models/Product.js";

const productController = {

  async list(req, res) {
    try {
      // on passe par une méthode statique de la classe pour trouver ici la liste de tous les produits
      const products = await Product.findAll();
      // ensuite on peut dynamiser notre vue à partir des données trouvées
      res.render('list', {
        products: products,
      });
      //  comme une promesse peut toujours tomber dans un cas d'erreur il est bon de le prévoir
    } catch (error) {
      console.error(error);
      res.status(500).render('error');
    }
  },

  async details(req, res) {
    try {
      const product = await Product.findByPk(req.params.id);
      res.render('details', { product: product });
    }
    catch (error) {
      console.error(error);
      res.status(500).render('error');
    }
  },

};

export default productController;
