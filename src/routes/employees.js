const express = require('express');
const router = express.Router();

const mysqlConnection  = require('../database.js');

// 
router.get('/', (req, res) => {
  mysqlConnection.query('SELECT * FROM users', (err, rows, fields) => {
    if(!err) {
      res.json(rows);
    } else {
      console.log(err);
    }
  });  
});

// GET An users
router.get('/:id', (req, res) => {
  const { id } = req.params; 
  console.log(id)
  mysqlConnection.query('SELECT * FROM users WHERE email = ?', [id], (err, rows, fields) => {
    if (!err) {
      res.json(rows[0]);
    } else {
      console.log(err);
    }
  });
});

// DELETE An users
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  mysqlConnection.query('DELETE FROM users WHERE id = ?', [id], (err, rows, fields) => {
    if(!err) {
      res.json({status: 'users Deleted'});
    } else {
      console.log(err);
    }
  });
});

// INSERT An users
router.post('/api', (req, res) => {
  const {name, email, tel} = req.body;
  const busq = 'SELECT * from users WHERE email =' + email
  const sql = 'INSERT INTO users SET ?';
  
  const query ={
    nombre:name,
    email: email,
    tel:tel
  };  
  mysqlConnection.query('SELECT * FROM users WHERE email = ?',[email], (err, rows, fields) => {
    if (rows != 0) {
      res.json({status: 'Usuario existente',rows});      
    } else {
      mysqlConnection.query(sql,query, (err, rows, fields) => {
        if(!err) {
          res.json({status: 'Usuario salvado'});
        } else {
          console.log(err);
        }
      });
    }
  });
  

});

router.put('/:id', (req, res) => {
  const { name, salary } = req.body;
  const { id } = req.params;
  const query = `
    SET @id = ?;
    SET @name = ?;
    SET @salary = ?;
    CALL usersAddOrEdit(@id, @name, @salary);
  `;
  mysqlConnection.query(query, [id, name, salary], (err, rows, fields) => {
    if(!err) {
      res.json({status: 'users Updated'});
    } else {
      console.log(err);
    }
  });
});

module.exports = router;
