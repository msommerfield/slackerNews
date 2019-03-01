const mongoose = require("./connection.js");
const Slacker = require("../models/Slacker.js");

const sloth = {
    url: "https://en.wikipedia.org/wiki/Sloth",
    title: "Sloth",
    description: "lazy, sometimes green, clawed beasts",
    date: Date.now()
};

const cat = {
    url: "https://en.wikipedia.org/wiki/Cat",
    title: "Cat",
    description: "Purr, sleepy, yawn",
    date: Date.now()
};

const puppy = {
    url: "https://en.wikipedia.org/wiki/Puppy",
    title: "Dawg",
    description: "Cuteness overload",
    date: Date.now()
};

const slug = {
    url: "https://en.wikipedia.org/wiki/Slug",
    title: "Slug",
    description: "Slimy, slow, and gross",
    date: Date.now()
};

const turtle = {
    url: "https://en.wikipedia.org/wiki/Turtle",
    title: "Turtle",
    description: "Tired Yoshi",
    date: Date.now()
};

Slacker.remove({})
  .then(() => Slacker.create([sloth, cat, puppy, slug, turtle]))
  .then(() => {
    console.log("seeded successfully");
    mongoose.connection.close();
  })
  .catch(err => console.log(err, "error!"));


