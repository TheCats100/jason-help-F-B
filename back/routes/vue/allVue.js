const express = require('express');

const err500 = (err, res) => {
    res.status(500).json({ message: "Internal server error" })
}

const generalResponse = (err, res, results) => {
    res.status(200).json(results)
}

module.exports = { err500, generalResponse }