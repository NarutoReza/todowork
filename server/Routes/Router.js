const express = require('express')
const router = express.Router()

const { viewData, addData, updateData, deleteData } = require('../Controller/Control')

router.get('/view', viewData)
router.post('/save', addData)
router.patch('/update/:postId', updateData)
router.delete('/delete/:postId', deleteData)

module.exports = router