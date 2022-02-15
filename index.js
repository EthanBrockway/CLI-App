const inquirer = require("inquirer");
const fs = require("fs");

const userInput = inquirer
  .prompt([
    {
      name: "Name",
      message: "What is your name?",
    },
    {
      name: "Known languages",
      message: "What languages do you know?",
    },
    {
      name: "Preferred language",
      message: "What is your preferred method of communication?",
    },
  ])
  .then((answers) => {
    console.info("Answer:", answers);
    const data = JSON.stringify(answers, null, "\t");
    fs.writeFile("user.json", data, (err) => {
      if (err) {
        throw err;
      }
      console.log("JSON data saved!!!");
    });
  });
