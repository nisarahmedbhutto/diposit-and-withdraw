#! /usr/bin/env node

import inquirer from "inquirer";
async function transaction() {
  const user = await inquirer.prompt([
    {
      message: "please enter your account number ",
      type: "number",
      name: "accountNumber",
    },
    { message: "please enter your pin code", type: "number", name: "pinCode" },
  ]);

  if (user.accountNumber && user.pinCode) {
    const transaction = await inquirer.prompt([
      { message: "diposit your ammount", type: "number", name: "diposit" },
      { message: "withdraw your ammount", type: "number", name: "withdraw" },
    ]);
    const { diposit, withdraw } = transaction;
    let remainingBalance = diposit - withdraw;
    console.log(remainingBalance);
  } else {
    console.log("please enter valid informition");
  }
}

transaction();
