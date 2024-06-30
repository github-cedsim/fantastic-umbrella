const { Tag } = require('../models');

const tagData = [
  {
    tag_name: 'Sale',
  },
  {
    tag_name: 'New Arrival',
  },
  {
    tag_name: 'Best Seller',
  },
  {
    tag_name: 'Clearance',
  },
];

const seedTags = () => Tag.bulkCreate(tagData);

module.exports = seedTags;

