// getting the stuff from html
const computerChoiceDisplay = document.getElementById('computer-choice');
const userChoiceDisplay = document.getElementById('user-choice');
const resultDisplay = document.getElementById('result');
const possibleChoices = document.querySelectorAll('button');

let userChoice;

// Assigning the choices, essentially the main fucntion
possibleChoices.forEach((possibleChoice) =>
	possibleChoice.addEventListener('click', (e) => {
		userChoice = e.target.innerHTML;
		userChoiceDisplay.innerHTML = userChoice;
		generateComputerChoice();
		getResult();
		// removeClasses();
	})
);

function generateComputerChoice() {
	const randomNumber = Math.floor(Math.random() * 3);
	if (randomNumber === 1) {
		computerChoice = '🪨';
	} else if (randomNumber === 2) {
		computerChoice = '🧻';
	} else {
		computerChoice = '✂️';
	}
	computerChoiceDisplay.innerHTML = computerChoice;
}

function getResult() {
	console;
	if (computerChoice === userChoice) {
		resultDisplay.innerHTML = 'Draw';
		document.getElementById('result').classList.add('just-loaded');
	} else if (computerChoice === '🪨' && userChoice != '🧻') {
		removeClasses();

		resultDisplay.innerHTML = 'You Lose!';
		document.getElementById('result').classList.add('just-loaded');
	} else if (computerChoice === '🧻' && userChoice != '✂️') {
		removeClasses();

		resultDisplay.innerHTML = 'You Lose!';
		document.getElementById('result').classList.add('just-loaded');
	} else if (computerChoice === '✂️' && userChoice != '🪨') {
		removeClasses();

		resultDisplay.innerHTML = 'You Lose!';
		document.getElementById('result').classList.add('just-loaded');
	} else {
		removeClasses();

		resultDisplay.innerHTML = 'You Win!';
		document.getElementById('result').classList.add('just-loaded');
	}
}

function removeClasses() {
	document.getElementById('result').classList.remove('just-loaded');
}
