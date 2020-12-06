const express = require('express')
const routing = express.Router()
const notesController = require('../Controller/myNotes')

/*routing.get('/notes', notesController.getNotes)
routing.post('/notes', notesController.newNotes)
routing.all('*', notesController.invalid)*/

routing.get('/packages', notesController.packages)
routing.get('/online_booking', notesController.online_booking)
routing.get('/media', notesController.media)
routing.get('/contact_us', notesController.contact_us)
routing.get('/login', notesController.login)
routing.get('/admin', notesController.admin)

module.exports = routing