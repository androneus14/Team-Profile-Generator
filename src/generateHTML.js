const generateTeam = team => {
    const html = [];
    const generateManager = manager => {
        let managerGenerate = `
        <div class="employee-info">
            <div class="info-header bg-dark text-center text-white">
                <h2 class="employee-name">${manager.name}</h2>
                <p class="employee-role">Manager</p>
            </div>
            <div class="info-body">
                <ol class="employee-information">
                    <li class="list-group-item">ID: ${manager.id}</li>
                    <li class="list-group-item">Email: <span id= "email"><a href="mailto:${manager.email}">${manager.email}</a></li>
                    <li class="list-group-item">Office Number: ${manager.officeNumber}</li>
                </ol>
            </div>
        </div>
        `;
        html.push(managerGenerate);
    }
    const generateEngineer = engineer => {
        let engineerGenerate = `
        <div class="employee-info">
            <div class="info-header bg-dark text-center text-white">
                <h2 class="employee-name">${engineer.name}</h2>
                <p class="employee-role">Engineer</p>
            </div>
            <div class="info-body">
                <ol class="employee-information">
                    <li class="list-group-item">ID: ${engineer.id}</li>
                    <li class="list-group-item">Email: <span id= "email"><a href="mailto:${engineer.email}">${engineer.email}</a></li>
                    <li class="list-group-item">Github: <a target="_blank" href="https://github.com/${engineer.github}">${engineer.github}</a></li>
                </ol>
            </div>
        </div>
        `;
        html.push(engineerGenerate);
    }
    const generateIntern = intern => {
        let internGenerate = `
        <div class="employee-info">
            <div class="info-header bg-dark text-center text-white">
                <h2 class="employee-name">${intern.name}</h2>
                <p class="employee-role">Intern:</p>
            </div>
            <div class="info-body">
                <ol class="employee-information">
                    <li class="list-group-item">ID: ${intern.id}</li>
                    <li class="list-group-item">Email: <span id= "email"><a href="mailto:${intern.email}">${intern.email}</a></li>
                    <li class="list-group-item">School: ${intern.school}</li>
                </ol>
            </div>
        </div>
        `;
        html.push(internGenerate);
    }


    for (let i = 0; i < team.length; i++) {
        if (team[i].getRole() === "Manager") {
            generateManager(team[i]);
        }
        if (team[i].getRole() === "Engineer") {
            generateEngineer(team[i]);
        }
        if (team[i].getRole() === "Intern") {
            generateIntern(team[i]);
        }
    }

    return html.join('');
}


module.exports = team => { 
    return `
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.0.0/css/bootstrap.min.css">
        <title>Team Profile Generator</title>
    </head>
    
    <body>
    <header class="container-fluid col-12 mb-3 bg-primary p-4">
        <h1 class="text-center text-white">Team Profile Generator</h1>
    </header>
    
    <div> ${generateTeam(team)} </div>
    
    </body>
    </html>
    `;
}
