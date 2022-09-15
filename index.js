const inquirer = require("inquirer");
const fs = require("fs");
const employee = require("./lib/employee");
const engineer = require("./lib/engineer");
const intern = require("./lib/intern");
const manager = require("./lib/manager")

const teamMembers = [];



function start() {
    createHTML();
    addEmployee();
}

function addEmployee(){
    inquirer.prompt([{
        message: "What is the new employee's name?",
        name: "name"        
    },

    {
        type: "list",
        name: "role",
        message: "Pick the role of the new employee... ",
        choices: [
            "Intern",
            "Engineer",
            "Manager"
        ]
    },

    {
        message: "What is the new employee's id number?",
        name: "id"
    },

    {
        message: "What is the new employee's email address?",
        name: "email"
    },

])

.then(function({name, role, id, email}) {
    let employeeInfo = "";
    if (role === "Engineer") {
        employeeInfo = "Github Username";
    }else if (role === "Intern") {
        employeeInfo = "School Name";
    } else {
        employeeInfo = "Office Phone Number";
    }

    inquirer.prompt([{
        message: "New Employee's ${employeeInfo}",
        name: "employeeInfo"
    },

    {
        type: "list",
        name: "addMore",
        message: "Do you need to add more new employees?",
        choices: [
            "No",
            "Yes"
        ],
    }
])


.then(function({employeeInfo, addMore}){
    let newEmployee;
    if (role === "Engineer") {
        newEmployee = new engineer(name, id, email, employeeInfo);

    } else if (role === "Intern") {
        newEmployee = new intern(name, id, email, employeeInfo);

    } else {
        newEmployee = new manager(name, id, email, employeeInfo)
    }

    teamMembers.push(newEmployee);
    addHTML(newEmployee)

    .then(function() {
        if (addEmployee === "Yes") {
            addEmployee();
        } else {
            compHTML();
        }
    });
});


});

}

function createHTML() {
    const html = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <title>Team Profile</title>
    </head>
    <body>
        <nav class="navbar navbar-dark bg-dark mb-5">
            <span class="navbar-brand mb-0 h1 w-100 text-center">Team Profile</span>
        </nav>
        <div class="container">
            <div class="row">`;
    fs.writeFile("./src/index.html", html, function(err) {
        if (err) {
            console.log(err);
        }
    });
    console.log("start");
}

function addHTML(employee) {
    return new Promise(function(resolve, reject) {
        const name = employee.getName();
        const role = employee.getRole();
        const id = employee.getId();
        const email = employee.getEmail();

        let data = "";

        if (role === "Engineer") {
            const gitHub = employee.getGithub();
            data = `<div class="col-6">
            <div class="card mx-auto mb-3" style="width: 18rem">
            <h5 class="card-header">${name}<br /><br />Engineer</h5>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${id}</li>
                <li class="list-group-item">Email Address: ${email}</li>
                <li class="list-group-item">GitHub: ${gitHub}</li>
            </ul>
            </div>
        </div>`;
        } else if (role === "Intern") {
            const school = employee.getSchool();
            data = `<div class="col-6">
            <div class="card mx-auto mb-3" style="width: 18rem">
            <h5 class="card-header">${name}<br /><br />Intern</h5>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${id}</li>
                <li class="list-group-item">Email Address: ${email}</li>
                <li class="list-group-item">School: ${school}</li>
            </ul>
            </div>
        </div>`;
        } else {
            const officePhone = employee.getOfficeNumber();
            data = `<div class="col-6">
            <div class="card mx-auto mb-3" style="width: 18rem">
            <h5 class="card-header">${name}<br /><br />Manager</h5>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${id}</li>
                <li class="list-group-item">Email Address: ${email}</li>
                <li class="list-group-item">Office Phone: ${officePhone}</li>
            </ul>
            </div>
        </div>`
        }
        console.log("adding team member");
        fs.appendFile("./src/index.html", data, function(err) {
            if (err) {
                return reject(err);
            };

            return resolve();
        })
    });
}

function compHTML() {
    const html = ` </div>
    </div>
    
</body>
</html>`;

    fs.appendFile("./src/index.html", html, function (err) {
        if (err) {
            console.log(err);
        };
    });
    console.log("end");
}

start();