INSERT INTO department (name)
VALUES ("Sales"),
       ("Engineering"),
       ("Finance");
       
    

INSERT INTO role (title, salary , department_id)
VALUES ("Sales Lead", 100, 1),
       ("Salesperson", 90, 1),
       ("Senior Enginner",1000000, 2),
       ("Junior Enginner", 9000, 2),
       ("Acount Manager",50, 3),
       ("Accountant", 30, 3);

INSERT INTO employee (first_name, last_name , role_id, manager_id)
VALUES
       ("Broly", "Lopez" , 1, NULL),
       ("Son", "Goku", 2, 1),
       ("Naruto", "Uzumaki", 3, NULL),
       ("Sasuke", "Uchiha", 4, 3),
       ("Jiren","The Grey", 5, NULL),
       ("Prince","Vegeta", 6, 5);

       