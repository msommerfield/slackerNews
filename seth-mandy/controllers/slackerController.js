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

}
}
module.exports = slackerController

