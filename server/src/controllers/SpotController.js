const Spot = require("../models/Spot");
const User = require("../models/User");

module.exports = {
  async index(req, res) {
    const { desc } = req.query;

    const spots = await Spot.find({
      description: desc,
    });

    return res.json(spots);
  },
  async store(req, res) {
    const { title, description, price } = req.body;

    const { filename } = req.file;
    const { user_id } = req.headers;

    const user = await User.findById(user_id);

    if (!user) {
      return res.status(400).json({
        error: "User does not exists",
      });
    }

    const spot = await Spot.create({
      user: user_id,
      thumbnail: filename,
      title,
      description: description
      .split
      .map((desc) => desc.trim()),
      price,
    });

    return res.json(spot);
  },
};
