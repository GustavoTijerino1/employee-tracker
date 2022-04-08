
const inquirer = require('inquirer')
const mysql = require('mysql2');
// const Connection = require('mysql2/typings/mysql/lib/Connection');

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
          db.end()
        break
      }
      
    })
};


const viewDep = () =>{
  db.query('SELECT * FROM department', (err, results) => {
    console.table(results);
    
    db.connect ((err) => {
      if (err) throw err;
      potato()
    })
  });
  

}
const viewRole = () =>{
  db.query('SELECT * FROM role', (err, results) => {
    console.table(results);

    db.connect ((err) => {
      if (err) throw err;
      potato()
    })

  })
}
const viewEmp = () =>{
  db.query('SELECT e.id, concat_ws(" ", e.first_name, e.last_name) as Employee, role.title as Title, concat_ws(" ", m.first_name, m.last_name) as Manager FROM employee e INNER JOIN role ON e.role_id = role.id LEFT JOIN employee m ON  m.id = e.manager_id;', (err, results) => {
    console.table(results);

    db.connect ((err) => {
      if (err) throw err;
      potato()
    })

  })
}
const addDep = async () =>{
  const newDep = await inquirer.prompt ([
    {
      
      type: 'input',
      message: 'What department would you like to add?',
      name: 'newDept',
      validate: newDept => {
        if (newDept) {
            return true;
        } else {
            console.log('Please enter a department');
            return false;
        }
      }
    }
  ])
  .then(answer => {
    const newD = `INSERT INTO department (name)
                VALUES (?)`;
    db.query(newD, answer.newDept, (err, result) => {
      if (err) throw err;
      console.log(`Added  ${answer.newDept}  to departments!`); 

      viewDep();
  });
});
};

const addRole = async () =>{
  const newRole = await inquirer.prompt ([
    {
      
      type: 'input',
      message: 'What role would you like to add?',
      name: 'role',
      validate: role => {
        if (role) {
            return true;
        } else {
            console.log('Please enter a role.');
            return false;
        }
      }
    },
    {
      
      type: 'input',
      message: 'What will be the salary?',
      name: 'newSal',
      validate: newSal => {
        if (newSal) {
            return true;
        } else {
            console.log('Please enter a salary');
            return false;
        }
      }
    },
    { 
      type: 'list',
      message: 'Which Dept id does the role belong to?',
      name: 'deptId',
      choices: ['1', '2', '3']
    }
  ])
  .then(answer => {
    const choices = [answer.role, answer.newSal, answer.deptId];
    const newR = `INSERT INTO role (title, salary , department_id)
      VALUES(?, ?, ?);`

      db.query(newR, choices, (err, result) => {
        if (err) throw err;
      console.log(`Added  ${answer.newRole}  to Role!`); 

      viewRole();
  });
})
};
const addEmp = async () =>{
 
  const newEmp = await inquirer.prompt ([
    {
      
      type: 'input',
      message: "What is the employee's first name?",
      name: 'firstName',
      validate: firstName => {
        if (firstName) {
            return true;
        } else {
            console.log('Please enter a First Name.');
            return false;
        }
      }
    },
    {
      
      type: 'input',
      message:"What is the employee's last name?",
      name: 'lastName',
      validate: lastName => {
        if (lastName) {
            return true;
        } else {
            console.log('Please enter a Last Name');
            return false;
        }
      }
    },
  
    {
      
      type: 'list',
      message: "What is the employee's role id?",
      name: 'roleId',
      choices: ['2', '3', '4']
    },
    {
      
      type: 'list',
      message: "What is the manager id of the employee?",
      name: 'manId',
      choices: ['1', '2', '3']
   
    }
  ])
  .then(answer => {
    const choices = [answer.firstName, answer.lastName, answer.roleId, answer.manId];
    const newE = `INSERT INTO employee (first_name, last_name , role_id, manager_id)
      VALUES(?, ?, ?, ?);`

      db.query(newE, choices, (err, result) => {
        if (err) throw err;
      console.log(`Added  ${answer.newE}  to Role!`); 

      viewEmp();
  });
})
  
}
