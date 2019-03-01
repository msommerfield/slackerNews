const mongoose = require("./connection.js");
const Slacker = require("../models/Slacker.js");

const sloth = {
    url: "https://en.wikipedia.org/wiki/Sloth",
    title: "title",
    description: "description",
    date: Date.now()
};

const cat = {
    url: "https://en.wikipedia.org/wiki/Cat",
    title: "title",
    description: "description",
    date: Date.now()
};

const puppy = {
    url: "https://en.wikipedia.org/wiki/puppy",
    title: "title",
    description: "description",
    date: Date.now()
};

const slug = {
    url: "https://en.wikipedia.org/wiki/Slug",
    title: "title",
    description: "description",
    date: Date.now()
};

const turtle = {
    url: "https://en.wikipedia.org/wiki/turtle",
    title: "title",
    description: "description",
    date: Date.now()
};

Slacker.remove({})
  .then(() => Slacker.create([sloth, cat, puppy, slug, turtle]))
  .then(() => {
    console.log("seeded successfully");
    mongoose.connection.close();
  })
  .catch(err => console.log(err, "error!"));


