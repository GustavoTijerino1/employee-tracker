
const inquirer = require('inquirer')
const fs = require('fs');
const path = require('path');
const mysql = require('mysql2');




const db = mysql.createConnection(
  {
    host: 'localhost',
    // MySQL username,
      user: 'root',
      // MySQL password
      password: 'potato1',
      database: 'tracker_db'
    },
    console.log(`Connected to the tracker_db database.`)
    );
 
db.connect ((err) => {
  if (err) throw err;
  potato()
})

const potato = () => {
  inquirer.prompt({

    
    type: 'list',
    name: 'start',
    message: "Please choose your option",
    choices: ['View all Departments', 'View all Role', 'View all Employees',
    'Add a Department', 'Add a Role','Add an Employee', 'Update Employee','Exit']
  })
    .then ( (answer)=>{
      switch (answer.start) {
        case 'View all Departments':
          viewDep()
        break
        case 'View all Role':
          viewRole()
        break
        case 'View all Employees':
          viewEmp()
        break
        case 'Add a Department':
          addDep()
        break
        case 'Add a Role':
          addRole()
        break
        case 'Add an Employee':
          addEmp()
        break
        case 'Update Employee':
          upEmp()
        break
        case 'Exit':
          connection.end
        break
      }
      
    })
}


const viewDep = () =>{
  db.query('SELECT * FROM department', (err, results) => {
    console.table(results);
      
  });
  

}
const viewRole = () =>{
  db.query('SELECT * FROM role', (err, results) => {
    console.table(results);

  })
}
const viewEmp = () =>{
  db.query('SELECT * FROM employee', (err, results) => {
    console.table(results);

  })
}
const addDep = () =>{
  db.query('INSERT INTO FROM department', (err, results) => {
 
    console.table(results);
  })
}
const addRole = () =>{
  db.query('INSERT INTO * FROM role', (err, results) => {
    console.table(results);
  })
}
const addEmp= () =>{
  db.query('INSERT INTO * FROM employee', (err, results) => {
    console.table(results);
  })
}
// const upEmp = () =>{
//   db.query('SELECT * FROM employee ', (err, results) => {
    
//     console.table(results);
//   })
// }