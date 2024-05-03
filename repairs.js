import inquirer from "inquirer";
import { enterSpaceStation } from "./enterSpaceStation.js";
import chalk from "chalk";

export function repairControlPanel() {
  console.log(
    chalk.bgGray(
      "You examine the control panel and identify the source of the malfunction.",
    ),
  );

  inquirer
    .prompt([
      {
        type: "confirm",
        name: "repair",
        message: chalk.yellow(
          "Would you like to attempt to repair the control panel?",
        ),
        default: true,
      },
    ])
    .then((answers) => {
      if (answers.repair) {
        console.log(
          chalk.bgGray(
            "You carefully begin repairing the control panel, reattaching loose wires and resetting circuits.",
          ),
        );
        console.log(
          chalk.green(
            "After a few tense moments, the control panel lights up with a reassuring hum.",
          ),
        );
        console.log(
          chalk.blue.bold(
            "Congratulations! You've repaired the control panel and taken the first step towards escaping the space station.",
          ),
        );
        console.log("You're back to the Enter.");
        enterSpaceStation();
      } else {
        console.log(
          chalk.bgRedBright(
            "You decide not to attempt repairs and continue exploring the space station.",
          ),
        );
        enterSpaceStation();
      }
    });
}

// Function to repair the Navigation System

export function repairNavigationSystem() {
  console.log(
    chalk.bgGray(
      "You check the navigation system, but it appears to be offline.",
    ),
  );

  inquirer
    .prompt([
      {
        type: "confirm",
        name: "repair",
        message: chalk.yellow(
          "You'll need to find a way to repair it to plot a course back to Earth.",
        ),
        default: true,
      },
    ])
    .then((answers) => {
      if (answers.repair) {
        console.log(
          chalk.bold(
            "You carefully begin repairing the control panel, reattaching loose wires and resetting circuits.",
          ),
        );
        console.log(
          chalk.bold(
            chalk.green(
              "After a few tense moments, the control panel lights up with a reassuring hum.",
            ),
          ),
        );
        console.log(
          chalk.blue.bold(
            "Congratulations! You've repaired the control panel and taken the first step towards escaping the space station.",
          ),
        );
        console.log("You're back to the Enter.");
        enterSpaceStation();
      } else {
        console.log(
          chalk.magenta(
            "You decide not to attempt repairs and continue exploring the space station.",
          ),
        );
        enterSpaceStation();
      }
    });
}

export function repairOxygenLevel() {
  console.log(
    chalk.red(
      "You notice the oxygen levels in the space station are dangerously low.",
    ),
  );

  inquirer
    .prompt([
      {
        type: "confirm",
        name: "repair",
        message: chalk.yellow(
          "You quickly assess the oxygen system, identifying damaged components and leaks." +
            " You have 5 seconds to fix it!",
        ),
        default: true,
      },
    ])
    .then((answers) => {
      setTimeout(function () {
        if (answers.repair) {
          console.log(
            chalk.bold(
              "With steady hands, you patch up the leaks and replace faulty components.",
            ),
          );
          console.log(
            chalk.blue.bold(
              "After a nerve-wracking few seconds, the oxygen levels stabilize, and everyone breathes a sigh of relief.",
            ),
          );
          console.log(
            chalk.bgGreen(
              "Congratulations! You've successfully repaired the oxygen system, ensuring the safety of everyone on board and we are going back to the Earth!.",
            ),
          );
        } else {
          console.log(
            chalk.bgRed(
              "You decide not to attempt repairs and the oxygen has run out!",
            ),
          );
          console.log(chalk.red.bold("Game over!"));
        }
      }, 5000);
    });
}
