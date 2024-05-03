import inquirer from "inquirer";
import { enterSpaceStation } from "./enterSpaceStation.js";

export function startGame() {
  console.log("Welcome to the Space Station Escape Room!");

  // Introduction
  console.log(
    "You wake up aboard a malfunctioning space station, drifting in the vastness of space.",
  );
  console.log(
    "Your mission is to repair the station's systems and find a way back to Earth.",
  );

  // Prompt user to start the game
  inquirer
    .prompt([
      {
        type: "confirm",
        name: "start",
        message: "Are you ready to begin?",
        default: true,
      },
      {
        type: "list",
        name: "characters",
        message: "Please choose your character",
        choices: ["Engineer", "Pilot", "Scientist"],
      },
    ])
    .then((answers) => {
      if (answers.start) {
        console.log(`Great! Let's get started ${answers.characters}.`);
        enterSpaceStation();
      } else {
        console.log("Come back when you're ready. Goodbye!");
      }
    });
}
