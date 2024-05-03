import inquirer from "inquirer";
import { enterSpaceStation } from "./enterSpaceStation.js";
import { CharacterSelector } from "./character.js";

export async function startGame() {
  console.log("Welcome to the Space Station Escape Room!");

  // Introduction
  console.log(
    "You wake up aboard a malfunctioning space station, drifting in the vastness of space.",
  );
  console.log(
    "Your mission is to repair the station's systems and find a way back to Earth.",
  );

  const nameCharacter = await inquirer.prompt({
    type: "input",
    name: "name",
    message: "What is your name?",
  });

  const characterSelector = new CharacterSelector();

  try {
    const character = await characterSelector.chooseCharacter();
    console.log(
      `Let's started ${nameCharacter.name}, the ${character}. Permission granted.`,
    );
    enterSpaceStation();
  } catch (error) {
    console.log("error", error);
  }
}
