const express = require('express');
const { getTodayForms,getPendingForms, createOrUpdateForm, getSavedForms } = require('../controllers/formController');

const router = express.Router();

// Route for getting all forms
// router.get('/', getForms);

router.route('/today').get(getTodayForms);
router.route('/pending').get(getPendingForms);
router.route('/saved').get(getSavedForms);
router.route('/').post(createOrUpdateForm);

// Route for creating a new form
// router.post('/', createForm);

// Route for updating a form
// router.put('/:id', updateForm);

// // Route for deleting a form
// router.delete('/:id', deleteForm);

module.exports = router;