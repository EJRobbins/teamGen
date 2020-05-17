const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)
function init {
    function createManager() {
        inquirer.prompt([
            {
                type: "input",
                name: "managerName",
                message: "What is the managers name?"
            },
            {
                type: "input",
                name:"managerId",
                message: "what is the managers ID number"
            },
            {
                type: "input",
                name:"managerEmail",
                message: "what is the managers email number"
            },
            {
                type: "input",
                name:"managerNumber",
                message: "what is the managers office number"
            }
        ]).then((res) => {
            // console.log(responses);
            const manger = new Manager(Res.managerName, res.managerId, res.managerEmail, res.managerNumber);
            // console.log(manager);
            createTeam();
        })
    }

    function createTeam() {
        inquirer.prompt([
            {
                type: "list",
                name: "memberChoice",
                message: "What is the role of the next team member?",
                choices: ["Intern", "Engineer", "None"]
            }
        ]).then((res) => {
            switch (memberChoice) {
                case "Engineer":
                    createEngineer();
                break;
                case "Intern":
                    createIntern();
                break;
                default:
                    buildTeam();
                    break;
            } 
            const team =[];
            const teamMember = res.memberChoice
            team.push(teamMember);
        })
    }

    function createEngineer() {

    }

    functions createIntern() {

    }

    function buildTeam() {
        
    }
    createManager();
    
}
init();