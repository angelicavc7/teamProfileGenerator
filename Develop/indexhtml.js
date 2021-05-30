function managerCard(data) {
    return `<div class="card" style="width: 18rem">
    <div class="card-header p-3 mb-2 bg-primary text-white"><h3>Manager</h3></div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">Name: ${data.name}</li>
          <li class="list-group-item">ID: ${data.id}</li>
          <li class="list-group-item">Email: <a href="mailto:${data.email}">${data.email}</a></li>
          <li class="list-group-item">Office Number: ${data.officeNumber}</li>
        </ul>
      </div>`;
  }
  function engineerCard(data) {
    return `<div class="card" style="width: 18rem">
    <div class="card-header p-3 mb-2 bg-primary text-white"><h3>Engineer</h3></div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">Name: ${data.name}</li>
          <li class="list-group-item">ID: ${data.id}</li>
          <li class="list-group-item">Email: <a href="mailto:${data.email}">${data.email}</a></li>
          <li class="list-group-item">Github: <a href="https://github.com/${data.github}" target="_blank">${data.github}</a></li>
        </ul>
      </div>`;
  }
  function internCard(data) {
    return `<div class="card" style="width: 18rem">
    <div class="card-header  p-3 mb-2 bg-primary text-white"><h3>Intern</h3></div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">Name: ${data.name}</li>
        <li class="list-group-item">ID: ${data.id}</li>
        <li class="list-group-item">Email: <a href="mailto:${data.email}">${data.email}</a></li>
        <li class="list-group-item">School: ${data.school}</li>
      </ul>
    </div>`;
  }
  
  function generateHTML(teamInfo) {
    let cardArr = [];
    for (let i = 0; i < teamInfo.length; i++) {
      if (teamInfo[i].getRole() === "Manager") {
        cardArr.push(managerCard(teamInfo[i]));
      } else if (teamInfo[i].getRole() === "Engineer") {
        cardArr.push(engineerCard(teamInfo[i]));
      } else {
        cardArr.push(internCard(teamInfo[i]));
      }
    }
    return `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6"
        crossorigin="anonymous"
      />
      <link rel="stylesheet" href="./style/style.css" />
      <title>Team Generator</title>
    </head>
    <body>
    <nav class="navbar navbar-dark bg-success"> 
        <h6 class="display-6 text-white text-center">My Team</h6>
      </nav>
      ${cardArr.join("")}
   <footer class="pos-f-t"> 
      <nav class="navbar navbar-light bg-success fixed-bottom justify-content-center">
      </nav>
      </footer>
      <script
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.bundle.min.js"
      integrity="sha384-JEW9xMcG8R+pH31jmWH6WWP0WintQrMb4s7ZOdauHnUtxwoG2vI5DkLtS3qm9Ekf"
      crossorigin="anonymous"
    ></script>
    </body>
  </html>`;
  }

  module.exports = generateHTML;
  