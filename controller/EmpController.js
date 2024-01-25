const { response } = require('express')
const Employee = require('../model/Employee')

// Show the list of Employees
const index = (req,res,next) => {
    Employee.find()
    .then(response => {
        res.json({
            response
        })
    })
    .catch(error => {
        res.json({
            message: 'An error Occured!'
        })
    })
}

//Show Single Employee Data
const show = (req, res, next) => {
    let employeeID = req.body.employeeID
    Employee.findById(employeeID)
    .then(response => {
        res.json({
            response
        })
    })
    .catch(error => {
          res.json({
            message: 'An error Occured!'
          })
    })
}
// Add New EMployee
const store = (req,res, next) =>{
    let employee = new Employee({
        name: req.body.name,
        designation: req.body.designation,
        email: req.body.email,
        phone: req.body.phone,
        age : req.body.age
    })
    employee.save()
    .then(response =>{
        res.json({
            message: 'Employee Added Successfully!'
        })
    })
    .catch(error =>{
        res.json({
            message: 'An error Occured in insertion!'
        })
    })
}

// update an Employee
const update = (req, res, next) => {
    let employeeID = req.body.employeeID

    let updateData = {
        name: req.body.name,
        designation: req.body.designation,
        email: req.body.email,
        phone: req.body.phone,
        age: req.body.age
    }

    Employee.findByIdAndUpdate(employeeID, {$set: updateData})
    .then(() => {
        res.json({
            message: 'Employee updated Successfully'
        })
    })
    .catch(error => {
        res.json({
            message: 'An Error Occured!'
        })
    })
}

// delete an employee
const destroy = (req,res,next) => {
    let employeeID = req.body.employeeID
    Employee.findByIdAndRemove(employeeID)
    .then(() => {
        req.json({
            message: 'Employee deleted Successfully!'
        })
    })
    .catch(error =>{
        req.json({
            message: 'An error Occured in deletion!'
        })
    })
}

module.exports = {
    index, show , store , update, destroy
}