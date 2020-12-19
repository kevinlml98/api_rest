const express = require('express');
const router = express.Router();

const mysqlConnection  = require('database.js');


// GET An User
router.get('/:id', (req, res) => {
  const { id } = req.params; 
  const query = `
  SET @id = ?;
  CALL showuser(@id);
  `;
  mysqlConnection.query(query, [id], (err, rows, fields) => {
    if (!err) {
      res.json(rows[0]);
    } else {
      console.log(err);
    }
  });
});

// DELETE An User
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  const query = `
    SET @id = ?;
    CALL deleteuser(@id);
  `;
  mysqlConnection.query(query, [id], (err, rows, fields) => {
    if(!err) {
      res.json({status: 'User Deleted'});
    } else {
      console.log(err);
    }
  });
});

// INSERT An User
router.post('/', (req, res) => {
  const {name, password} = req.body;
  console.log(name, password);
  const query = `
    SET @name = ?;
    SET @password = ?;
    CALL adduser(@name, @password);
  `;
  mysqlConnection.query(query, [name, password], (err, rows, fields) => {

    if(!err) {
      res.json({status: 'User Saved'});
    } else {
      console.log(err);
    }
  });

});

// Update an User
router.put('/:id', (req, res) => {
  const { id, password } = req.body;
  const { id } = req.params;
  const query = `
    SET @id = ?;
    SET @password = ?;
    CALL updatepassword(@id, @password);
  `;
  mysqlConnection.query(query, [id, password], (err, rows, fields) => {
    if(!err) {
      res.json({status: 'Password Updated'});
    } else {
      console.log(err);
    }
  });
});

module.exports = api;