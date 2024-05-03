import inquirer from "inquirer";

export class CharacterSelector {
  constructor() {
    this.character = "";
  }

  //A class based on the inquirer prompt
  // the Promise is resolved when the user chooses a character
  //https://www.npmjs.com/package/inquirer#methods
  chooseCharacter() {
    return new Promise((resolve, reject) => {
      inquirer
        .prompt({
          type: "list",
          name: "character",
          message: "Please choose your character: ",
          choices: ["Engineer", "Pilot", "Scientist"],
        })
        .then((answer) => {
          this.character = answer.character;
          resolve(this.character);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }
}
