const router = require('express').Router()
const {
    getNotes,
    saveNote,
    deleteNote
} = requier('../../public/assets/js/index')
const { notes } = require('../../db/db.json')

router.get('/notes', (req,res) => {
    let results = notes
    if (req.query) {
        results = filterByQuery(req.query,results)
    }
    res.json(results)
})

router.post('/notes', (req,res) => {
    req.body.id = notes.length.toString();
    res.status(400).send('The note is not properly formatted.')
})

router.delete('/notes', (req,res) => {

})