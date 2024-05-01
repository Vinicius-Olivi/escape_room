import inquirer from "inquirer";

// Function to start the game
function startGame() {
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
    ])
    .then((answers) => {
      if (answers.start) {
        console.log("Great! Let's get started.");
        enterSpaceStation();
      } else {
        console.log("Come back when you're ready. Goodbye!");
      }
    });
}

// Function to enter the space station
function enterSpaceStation() {
  console.log("You float into the space station's control room...");

  // Prompt user to explore the control room
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

// Function to repair the control panel
function repairControlPanel() {
  console.log(
    "You examine the control panel and identify the source of the malfunction.",
  );

  // Prompt user to repair the control panel
  inquirer
    .prompt([
      {
        type: "confirm",
        name: "repair",
        message: "Would you like to attempt to repair the control panel?",
        default: true,
      },
    ])
    .then((answers) => {
      if (answers.repair) {
        console.log(
          "You carefully begin repairing the control panel, reattaching loose wires and resetting circuits.",
        );
        console.log(
          "After a few tense moments, the control panel lights up with a reassuring hum.",
        );
        console.log(
          "Congratulations! You've repaired the control panel and taken the first step towards escaping the space station.",
        );
        console.log("You're back to the Enter.");
        enterSpaceStation();
      } else {
        console.log(
          "You decide not to attempt repairs and continue exploring the space station.",
        );
        enterSpaceStation();
      }
    });
}

function repairNavigationSystem() {
  console.log("You check the navigation system, but it appears to be offline.");

  // Prompt user to repair the control panel
  inquirer
    .prompt([
      {
        type: "confirm",
        name: "repair",
        message:
          "You'll need to find a way to repair it to plot a course back to Earth.",
        default: true,
      },
    ])
    .then((answers) => {
      if (answers.repair) {
        console.log(
          "You carefully begin repairing the control panel, reattaching loose wires and resetting circuits.",
        );
        console.log(
          "After a few tense moments, the control panel lights up with a reassuring hum.",
        );
        console.log(
          "Congratulations! You've repaired the control panel and taken the first step towards escaping the space station.",
        );
        console.log("You're back to the Enter.");
        enterSpaceStation();
      } else {
        console.log(
          "You decide not to attempt repairs and continue exploring the space station.",
        );
        enterSpaceStation();
      }
    });
}

function repairOxygenLevel() {
  console.log(
    "You notice the oxygen levels in the space station are dangerously low.",
  );

  // Prompt user to repair the control panel
  inquirer
    .prompt([
      {
        type: "confirm",
        name: "repair",
        message:
          "You quickly assess the oxygen system, identifying damaged components and leaks.",
        default: true,
      },
    ])
    .then((answers) => {
      if (answers.repair) {
        console.log(
          "With steady hands, you patch up the leaks and replace faulty components.",
        );
        console.log(
          "After a nerve-wracking few minutes, the oxygen levels stabilize, and everyone breathes a sigh of relief.",
        );
        console.log(
          "Congratulations! You've successfully repaired the oxygen system, ensuring the safety of everyone on board and we are going back to the Earth!.",
        );
      } else {
        console.log(
          "You decide not to attempt repairs and the oxygen has run out!",
        );
        console.log("Game Over!.");
      }
    });
}

// Start the game
startGame();
