
import inquirer from "inquirer";
import chalk from "chalk";

let score = 0;
let totalQuestions = 4;

console.log(chalk.bold.blue("\t\tWelcome to Quiz System"));
console.log("=".repeat(60))

async function AskQuestion() {
  const answers = await inquirer.prompt([
    {
      type: "list",
      name: "Question1",
      choices: ["Amazon", "Microsoft", "Orcale", "Typescript"],
      message: (chalk.bold.grey("Which company developed typescript ?")),
    },
    {
      type: "list",
      name: "Question2",
      choices: ["Gradual", "Duck", "Dynamic", "All of the above"],
      message: (chalk.bold.grey("What is the typing principle of typescript ?")),
    },
    {
      type: "list",
      name: "Question3",
      choices: [".tt", ".tsx", ".nod", ".ts"],
      message:
        (chalk.bold.grey("Which of the following filenames is the extension for typescript ?")),
    },
    {
      type: "list",
      name: "Question4",
      choices: ["Javascript", "C#", "Java", "All of the above"],
      message:
        (chalk.bold.grey("Which of the computer programming languages below has influenced the creation of typescript ?")),
    },
  ]);

  const marks = 10;
  const fail = 0;
  if (answers.Question1 === "Microsoft") {
    console.log(chalk.bold.bgGreen("Answer is correct\n"));
    score++;
  } else
    {
      console.log(chalk.bold.bgRed("Answer is not correct\n"));
    };
  if (answers.Question2 === "Dynamic") {
    console.log(chalk.bold.bgGreen("Answer is correct\n"));
    score++;
  } else
    {
      console.log(chalk.bold.bgRed("Answer is not correct\n"));
    };
  if (answers.Question3 === ".ts") {
    console.log(chalk.bold.bgGreen("Answer is correct\n"));
    score++;
  } else
 {
      console.log(chalk.bold.bgRed("Answer is not correct\n"));
    };
  if (answers.Question4 === "Javascript") {
    console.log(chalk.bold.bgGreen("Answer is correct\n"));
    score++;
  } else
     {
      console.log(chalk.bold.bgRed("Answer is not correct\n"));
    };

    const percentageScore = (score / totalQuestions) * 100
    console.log(chalk.bold.green("Your total score : ",score + "\n" ));
    console.log(chalk.bold.green("Your percentage : "+ percentageScore +" %\n"));

}

AskQuestion()
