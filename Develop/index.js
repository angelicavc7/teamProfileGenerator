const inquirer = require("inquirer"); 
const fs = require("fs");


const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

const generateHTML = require("./indexhtml");
let teamInfo = [];


const menuQuestions = [
    {
      type: "list",
      message: "What would you like to add?",
      choices: ["Engineer", "Intern", "build the team"],
      name: "create",
    },
  ];


  const managerQuestions = [
    {
      type: "input",
      message: "What is the managers name?",
      name: "name",
    },
    {
      type: "input",
      message: "What is the managers ID?",
      name: "ID",
    },
    {
      type: "input",
      message: "What is the manager email?",
      name: "email",
    },
    {
      type: "input",
      message: "What is the office number?",
      name: "officeNumber",
    },
  ];
  const engineerQuestions = [
    {
      type: "input",
      message: "What is the engineers name?",
      name: "name",
    },
    {
      type: "input",
      message: "What is the engineers ID?",
      name: "ID",
    },
    {
      type: "input",
      message: "What is the engineers email?",
      name: "email",
    },
    {
      type: "input",
      message: "What is the engineers Github username?",
      name: "github",
    },
  ];
  const internQuestions = [
    {
      type: "input",
      message: "What is the interns name?",
      name: "name",
    },
    {
      type: "input",
      message: "What is the interns ID?",
      name: "ID",
    },
    {
      type: "input",
      message: "What is the interns email?",
      name: "email",
    },
    {
      type: "input",
      message: "What is the interns school?",
      name: "school",
    },
  ];
  
  function init() {
    inquirer.prompt(managerQuestions).then((answers) => {
      const manager = new Manager(
        answers.name,
        answers.ID,
        answers.email,
        answers.officeNumber
      );
      teamInfo.push(manager);
      menu();
    });
  }
  function menu() {
    inquirer.prompt(menuQuestions).then((answers) => {
      if (answers.create === "Engineer") {
        //add engineer function call back
        engineer();
      } else if (answers.create === "Intern") {
        //add intern function call back
        intern();
      } else {
        //add build team function call back
        buildTeamHtml();
      }
    });
  }
  function engineer() {
    inquirer.prompt(engineerQuestions).then((answers) => {
      const engineer = new Engineer(
        answers.name,
        answers.ID,
        answers.email,
        answers.github
      );
      teamInfo.push(engineer);
      menu();
    });
  }
  function intern() {
    inquirer.prompt(internQuestions).then((answers) => {
      const intern = new Intern(
        answers.name,
        answers.ID,
        answers.email,
        answers.school
      );
      teamInfo.push(intern);
      menu();
    });
  }
  function buildTeamHtml() {
    const htmlPageContent = generateHTML(teamInfo);
  
    fs.writeFile("demo.html", htmlPageContent, (err) =>
      err ? console.log(err) : console.log("Successfully created index.html!")
    );
  }
  init();
  