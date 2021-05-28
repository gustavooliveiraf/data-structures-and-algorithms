const Posts = require('../models/posts');

const postsController = async (req, res) =>  {
  const obj = req.body;

  if (obj.isPublished) {
    obj.publishedDate = Date.now();
  }

  const model = await Posts.create(obj);

  res.status(201).send(model);
}

const getController = async (req, res) =>  {
  const { author, isPublished } = req.query;
  const obj = {}

  if (author) obj.author = author;
  if (isPublished === 'true' || isPublished === 'false') obj.isPublished = isPublished === 'true';

  const model = await Posts.findAll({ where: { ...obj } });

  res.status(200).send(model);
}

const getByIdController = async (req, res) =>  {
  const { id } = req.params;

  const model = await Posts.findByPk(id);

  if (model) res.status(200).send(model);
  else res.status(404).send('ID not found');
}

module.exports = {
  postsController,
  getController,
  getByIdController
};
