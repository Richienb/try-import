"use strict"

const niceTry = require("nice-try")

module.exports = (name) => niceTry(() => require(name))
module.exports.resolve = (name) => niceTry(() => require.resolve(name))
