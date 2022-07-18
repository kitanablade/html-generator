const inquirer = require('inquirer');
const fs = require('fs');



inquirer
  .prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is your name?',
    },
  ])
  .then((data) => {
    let html = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Hi, my name is ${data.name}</h1>
</body>
</html>`

    fs.writeFile("index.html", html, (err) =>
      err ? console.log(err) : console.log('Success!')
    );
    
  });

  // JSON.stringify(html, null, '\t')