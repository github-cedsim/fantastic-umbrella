const router = require('express').Router();
const { Category, Product } = require('../../models');

router.get('/:id', async (req, res) => {
  try {
    const category = await Category.findByPk(req.params.id, {
      include: [{ model: Product }],
    });

    if (!category) {
      return res.status(404).json({ message: 'No category found with this id!' });
    }

    res.status(200).json(category);
  } catch (err) {
    console.error(err); // Log the error
    res.status(500).json(err);
  }
});

module.exports = router;
