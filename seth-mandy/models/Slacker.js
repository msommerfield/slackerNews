const mongoose = require('../db/connection.js')
const Schema = mongoose.Schema

const Slack = new Schema({
    url: String,
    title: String,
    description: String,
    date: Date
})

    module.exports = mongoose.model("Slack", Slack)
