const router = require('express').Router();
const { Product, Category, Tag, ProductTag } = require('../../models');

router.get('/:id', async (req, res) => {
  try {
    const product = await Product.findByPk(req.params.id, {
      include: [{ model: Category }, { model: Tag, through: ProductTag }],
    });

    if (!product) {
      return res.status(404).json({ message: 'No product found with this id!' });
    }

    res.status(200).json(product);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
