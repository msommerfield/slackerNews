const Slacker = require(`../models/Slacker.js`)

const slackerController = {
    index: (req, res) => {
        Slacker.find().then(slacks => {
            res.render('index', {slacks})
          })
    },
    new: (req, res) => {
        res.render(`new`)
    },
    create: (req, res) => {
        Slacker.create(req.body).then(slack => {
            res.redirect('/')
          })
        },
    show: (req, res) => {
        Slacker.findById(req.params.slackId).then(slack => {
            res.render('show', {slack})
          })
        },
    edit: (req, res) => {
        Slacker.findById(req.params.slackId).then(slack => {
            res.render('edit', {slack})
          })
        },
    update: (req, res) => {
        Slacker.findByIdAndUpdate(req.params.slackId, req.body, {new: true}).then(() => {
            res.redirect(`/${req.params.slackId}`)
          })
        },
    delete: (req, res) => {
        Slacker.findByIdAndDelete(req.params.slackId).then(() => {
            console.log(`Deleted slack with the id of ${req.params.slackId}`)
            res.redirect(`/`)
          })
        }
      }
module.exports = slackerController

