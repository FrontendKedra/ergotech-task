const posts = require("../models/posts.json");

const searchPosts = (req, res) => {
  const { query } = req.query;

  if (!query || query.trim() === "") {
    const results = posts.sort((a, b) => b.title.length - a.title.length);
    res.json(results);
  } else {
    const results = posts
      .filter(({ title }) =>
        title.toLowerCase().includes(query.trim().toLowerCase())
      )
      .sort((a, b) => b.title.length - a.title.length);

    res.json(results);
  }
};

module.exports = searchPosts;
