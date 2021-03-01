const express = require('express');
const teamModel = require('../model/teamModel');
const { generalResponse, err500 } = require('../vue/allVue')

const getAllTeam = (req, res, next) => {
  teamModel.getAll((err, getAllResults) => {
    if (err) return err500(err, res, getAllResults)
    return generalResponse(err, res, getAllResults)
  })
}

const addTeam = (req, res, next) => {
  const formData = req.body
  teamModel.post(formData, (err, postResults) => {
    if (err) return err500(err, postResults)
    getAllTeam(req, res, next)
  })
}

module.exports = { getAllTeam, addTeam }