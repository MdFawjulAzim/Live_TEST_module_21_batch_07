const express = require('express');
const StudentController = require('../controllers/StrudentController.js');


const router = express.Router();



// Create a student 
router.post('/CreateStudent',StudentController.CreateStudent);
//Read the data of a single student.
router.get('/SingleReadStudent/:user_id',StudentController.SingleReadStudent);
//Delete a student based on a specific ID
router.get('/SingleStudentDelete/:user_id',StudentController.SingleStudentDelete);
//Update a student based on a specific ID.
router.post('/SingleStudentUpdate/:user_id',StudentController.SingleStudentUpdate);



module.exports = router;