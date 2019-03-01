const Slacker = require(`../models/Slacker.js`)

const slackerController = {
    index: (req, res) => {
        //   Slacker.find().then(shops => {
        res.send("testing testing 123")
    },
    new: (req, res) => {
        res.send("testing testing 123")

    },
    create: (req, res) => {
        res.send("i bought a frog")

    },
    show: (req, res) => {
        res.send("i bought a foot")
    },
    edit: (req, res) => {
        res.send("i bought a fool")
    }
}
module.exports = slackerController

