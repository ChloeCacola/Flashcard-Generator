var inquirer = require("inquirer");
var cards = []
var cardCount = 0

function BasicCard(front, back) {
	this.front = front
	this.back = back
}

var card1 = new BasicCard("What is the average number of feathers on a tom turkey?", "5500");
var card2 = new BasicCard("What type of evolution is the reason why chickens can't see well in the dark?", "convergent"); //birds evolved from dinosaurs who never were forced to adapt to nocturnal vision in the same way that mammals were, resulting in fewer cones and greater light sensitivity.

		cards.push(card1);
		cards.push(card2);



function studyCards() {
	//recursion loop to prompt each question individually w/inquirer
	if(cardCount < cards.length) {

		//increase card count per loop
		cardCount ++

		//begin asking each card question
		if (cardCount === 1) {
			inquirer.prompt([
				{
					name: "question",
					message: card1.front
				}
			]).then(function(answer) {
				if (answer.question === card1.back) {
					console.log("correct");
					studyCards();
				}
				else {
					console.log("incorrect");
					studyCards();
				}
			});
		} 
		else if (cardCount === 2) {
			inquirer.prompt([
				{
					name: "question",
					message: card2.front
				}
			]).then(function(answer) {
				if (answer.question === card2.back) {
					console.log("correct");
				}
				else {
					console.log("incorrect");
				}
			});
		}


	}

}

studyCards();