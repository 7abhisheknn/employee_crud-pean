const express = require('express')
const db = require('../db')

const router = express.Router()

router.get('/', (req, res) => {
    db.any('SELECT * FROM employee').then((data) => {
        res.json(data)
        console.log(data)
    }).catch((err) => {
        console.log(err)
    })
})

router.get('/:e_id', (req, res) => {
    db.one('SELECT * FROM employee WHERE e_id=${e_id}', req.params).then((data) => {
        res.json(data)
        console.log(data)
    }).catch((err) => {
        console.log(err)
        res.status(404).json({
            error: 'Record not found with e_id: ' + req.params.e_id
        })
    })
})


router.post('/', (req, res) => {
    db.one("INSERT INTO employee (e_name,e_position,e_location,e_salary) \
            VALUES (${e_name},${e_position},${e_location},${e_salary}) RETURNING *", req.body).then((data) => {
        res.status(201).json(data)
        console.log(data)
    }).catch((err) => {
        console.log(err)
        res.status(400).json({
            error: "Insert failed!"
        })
    })
})

router.put('/:e_id', (req, res) => {
    db.one("UPDATE employee SET e_name=${e_name},e_position=${e_position},e_location=${e_location},e_salary=${e_salary} WHERE e_id=${e_id} RETURNING *", req.body).then((data) => {
        res.json(data)
        console.log(data)
    }).catch((err) => {
        console.log(err)
        res.status(400).json({
            error: "Update failed with e_id: " + req.params.e_id
        })
    })
})

router.delete('/:e_id', (req, res) => {
    db.one('DELETE FROM employee WHERE e_id=${e_id} RETURNING *', req.params).then((data) => {
        res.json(data)
        console.log(data)
    }).catch((err) => {
        console.log(err)
        res.status(400).json({
            error: "Delete failed with e_id: " + req.params.e_id
        })
    })
})

module.exports = router