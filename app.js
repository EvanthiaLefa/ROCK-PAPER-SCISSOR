
function randomChoice() {
   const random = Math.floor(Math.random() * 3 );
   if (random == 0) {
      return 'Rock'
   } else if (random == 1) {
      return 'Paper';
   } else if (random == 2) {
      return 'Scissor'
   }
}

let alertText = document.querySelector("#alert")

const Rock = document.querySelector('#rock');
Rock.addEventListener("click",  () => {
   let computerChoice = randomChoice();
   if (computerChoice == 'Rock') {
      alertText.innerText = `Computer chose ${computerChoice}, Its A Tie!`
      setTimeout(() => {
         alertText.innerText = "Here the winner is shown!";
      }, "2000")
   } else if (computerChoice == 'Scissor') {
      alertText.innerText = `Computer chose ${computerChoice}, You Win!`
      setTimeout(() => {
         alertText.innerText = "Here the winner is shown!";
      }, "2000")
   } else if (computerChoice == 'Paper') {
      alertText.innerText = `Computer chose ${computerChoice}, You Lost :/`
      setTimeout(() => {
         alertText.innerText = "Here the winner is shown!";
      }, "2000")
   }
})

const Paper = document.querySelector('#paper');
Paper.addEventListener("click", function () {
   let computerChoice = randomChoice();
   if (computerChoice == 'Rock') {
      alertText.innerText = `Computer chose ${computerChoice}, You Win!`
      setTimeout(() => {
         alertText.innerText = "Here the winner is shown!";
      }, "2000")
   } else if (computerChoice == 'Scissor') {
      alertText.innerText = `Computer chose ${computerChoice}, You Lost :/`
      setTimeout(() => {
         alertText.innerText = "Here the winner is shown!";
      }, "2000")
   } else if (computerChoice == 'Paper') {
      alertText.innerText = `Computer chose ${computerChoice}, Its A Tie!`
      setTimeout(() => {
         alertText.innerText = "Here the winner is shown!";
      }, "2000")
   }
})

const Scissor = document.querySelector('#scissor');
Scissor.addEventListener("click", function () {
   let computerChoice = randomChoice();
   if (computerChoice == 'Rock') {
      alertText.innerText = `Computer chose ${computerChoice}, You Lost :/`
      setTimeout(() => {
         alertText.innerText = "Here the winner is shown!";
      }, "2000")
   } else if (computerChoice == 'Scissor') {
      alertText.innerText = `Computer chose ${computerChoice}, Its A Tie!`
      setTimeout(() => {
         alertText.innerText = "Here the winner is shown!";
      }, "2000")
   } else if (computerChoice == 'Paper') {
      alertText.innerText = `Computer chose ${computerChoice}, You Win!`
      setTimeout(() => {
         alertText.innerText = "Here the winner is shown!";
      }, "2000")
   }
})
