const prompt = require('prompt-sync')();
let user_selection_string = " ";

user_selection_string = prompt("Do you want to be Rock, Paper, or Scissors?: ");

let computer_selection_number = Math.floor(Math.random() * 3);

computer_selection_string = " "

if (computer_selection_number == 0)
  {
    computer_selection_string = "Rock";
  }
else if (computer_selection_number == 1)
  {
    computer_selection_string = "Paper";
  }

else if (computer_selection_number == 2)
  {
    computer_selection_string = "Scissors";
  } 


  

if (user_selection_string == "Rock") 
{
  if (computer_selection_string == "Rock")
  {
    console.log("The computer also chose Rock. It's a draw!");
  }
  else if (computer_selection_string == "Paper") 
  {
    console.log("The computer chose Paper. You lose!");
  }
  else if (computer_selection_string == "Scissors")
  {
    console.log ("The computer chose Scissors. You win!!!");
  }
}

else if (user_selection_string == "Paper") 
{
  if (computer_selection_string == "Rock")
  {
    console.log("The computer chose Rock. You win!!!");
  }
  else if (computer_selection_string == "Paper")
  {
    console.log("The computer also chose Paper. It's a draw!");
  }
  else if (computer_selection_string == "Scissors")
  {
    console.log("The computer chose Scissors. You lose!");
  }
}

else if (user_selection_string == "Scissors")
{
  
  if (computer_selection_string == "Rock")
  {
    console.log("The computer chose Rock. You lose!");
  }
  
  else if (computer_selection_string == "Paper")
  {
    console.log("The computer chose Paper. You win!!!");
  }

  else if (computer_selection_string == "Scissors")
  {
    console.log("The computer also chose Scissors. It's a draw!");
  }
}



  console.log(" ");
  console.log (computer_selection_number);
  console.log (computer_selection_string);
  console.log (user_selection_string);
  console.log (" ");