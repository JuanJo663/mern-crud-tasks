const { Router } = require('express');
const router = Router();

const {} = require('../controllers/signup.controller');
//métodos adicionales (getNotes, deleteNote, updateNote,getNote) 
router.route('/')
    // .get(getUser)
    // .post(createUser);

// router.route('/:id')
//     .get(getUser)
//     .delete(deleteUser)
//     .put(updateUser);

module.exports = router;