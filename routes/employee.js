const express = require('express');
const route = express.Router();

const EmployeeController = require('../controller/EmpController')

route.get('/',EmployeeController.index)
route.post('/show',EmployeeController.show)
route.post('/store',EmployeeController.store)
route.post('/update',EmployeeController.update)
route.post('/delete', EmployeeController.destroy)

module.exports = route