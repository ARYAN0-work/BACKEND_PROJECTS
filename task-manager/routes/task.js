const express = require('express')
const router = express.Router()

const {getAllTask,createTask,getTask,deletetTask,updateTask} = require('../controllers/task')

router.route('/').get(getAllTask).post(createTask)
router.route('/:id').get(getTask).put(updateTask).patch(deletetTask)

module.exports = router