const { Router } = require('express');
const router = Router();

const {createLogin}  = require('../controllers/login.controller');
//getLogin}
//métodos adicionales (getNotes, deleteNote, updateNote,getNote) 
router.route('/')
    //.get(getLogin)
    .post(createLogin);

// router.route('/:id')
//      .get(getNote)
//      .delete(deleteNote)
//      .put(updateNote);

module.exports = router;