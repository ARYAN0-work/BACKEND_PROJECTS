const express = require('express')
const router = express.Router()

const {getAllTask,createTask,getTask,deletetTask,updateTask,editTask} = require('../controllers/task')

router.route('/').get(getAllTask).post(createTask)
router.route('/:id').get(getTask).patch(updateTask).delete(deletetTask).put(editTask)

module.exports = router