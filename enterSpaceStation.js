import inquirer from "inquirer";
import {
  repairControlPanel,
  repairNavigationSystem,
  repairOxygenLevel,
} from "./repairs.js";

export function enterSpaceStation() {
  console.log("You float into the space station's control room...");

  inquirer
    .prompt([
      {
        type: "list",
        name: "action",
        message: "What would you like to do?",
        choices: [
          "Inspect the control panel",
          "Check the navigation system",
          "Examine the oxygen levels",
        ],
      },
    ])
    .then((answers) => {
      switch (answers.action) {
        case "Inspect the control panel":
          console.log(
            "You approach the control panel and notice several blinking lights and warning messages.",
          );
          console.log("It seems like the control panel is malfunctioning.");
          repairControlPanel();
          break;
        case "Check the navigation system":
          console.log(
            "You check the navigation system, but it appears to be offline.",
          );
          console.log(
            "You'll need to find a way to repair it to plot a course back to Earth.",
          );
          repairNavigationSystem();
          break;
        case "Examine the oxygen levels":
          console.log(
            "You check the oxygen levels and discover they're dangerously low.",
          );
          console.log(
            "You must find a way to restore the oxygen supply before it's too late.",
          );
          repairOxygenLevel();
          break;
      }
    });
}
