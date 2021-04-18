    const generateManager = manager => {
        return `
        <div class="card employee-card">
        <div class="card-header">
            <h2 class="card-title">${manager.getName()}</h2>
            <h3 class="card-title"><i class fas fa mug hot mr-2"></i>${manager.getRole()}</h3>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item"> ID: ${manager.getId()}</li>
                <li class="list-group-item"> Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
                <li class="list-group-item"> Office Number: ${manager.getOfficeNumber()}</li>
            </ul>
        </div>
    </div>
        `;
    };

    const generateEngineer = engineer => {
        return `
        <div class="card employee-card">
        <div class="card-header">
            <h2 class="card-title">${engineer.getName()}</h2>
            <h3 class="card-title"><i class fas fa mug hot mr-2"></i>${engineer.getRole()}</h3>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item"> ID: ${engineer.getId()}</li>
                <li class="list-group-item"> Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
                <li class="list-group-item"> Github username: ${engineer.getGithub()}</li>
            </ul>
        </div>
    </div>
        `;
    }

    const generateIntern = intern => {
        return `
        <div class="card employee-card">
        <div class="card-header">
            <h2 class="card-title">${intern.getName()}</h2>
            <h3 class="card-title"><i class fas fa mug hot mr-2"></i>${intern.getRole()}</h3>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item"> ID: ${intern.getId()}</li>
                <li class="list-group-item"> Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
                <li class="list-group-item"> School: ${intern.getInternSchool()}</li>
            </ul>
        </div>
    </div>
        `;
    }

const generateTeam = employees => {
    let cards = '';
    for (let i = 0; i < employees.length; i++) {
        switch (employees[i].getRole()) {
            case "Manager":
                cards.concat(generateManager(employees[i]));
                break;
            case "Engineer":
                cards.concat(generateEngineer(employees[i]));
                break;
            case "Intern": 
                cards.concat(generateIntern(employees[i]));
                break;
        }
    }
    return cards;
}

const generateHTML = function html(employees) {
    return `
    <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- CSS only -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossorigin="anonymous">
    <link href="output/style.css" rel="stylesheet" media="screen">
    <title>My Team</title>
</head>

<body>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container">
            <a class="navbar-brand" href="#">My Team</a>
        </div>
    </nav>
    <div class="row">
    ${generateTeam(employees)}
    </div>
</body>

</html>
`};
module.exports = generateHTML;