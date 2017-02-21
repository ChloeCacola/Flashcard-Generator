var inquirer = require("inquirer");
var cards = [];
var cardCount = 0;
var clozeText

function ClozeCard(text, cloze) {
	this.text = text
	this.cloze = cloze

}

ClozeCard.prototype.full = function() {
	//show sentence with a blank
	clozeDeleted = this.cloze
	clozeText = this.text

	clozeText = clozeText.replace("...", clozeDeleted);

	console.log(clozeText);

}


var card1 = new ClozeCard("Tom turkeys have an average of ... feathers.", "5500");
var card2 = new ClozeCard("Chickens can't see well in the dark because of ... evolution.", "convergent");

cards.push(card1);
cards.push(card2);



function studyCards() {
	//recursion loop to prompt each question individually w/inquirer
	if(cardCount < cards.length) {

				inquirer.prompt([
					{
						name: "partial",
						message: cards[cardCount].text
					}
				]).then(function(answer) {

					if((answer.partial).toLowerCase() === cards[cardCount].cloze) {
						console.log("correct");
						//increase card count per loop
						cardCount ++
						//continue recursion 
						studyCards();
					} 
					else {
						//state back of card
						console.log("incorrect");
						cards[cardCount].full();
						//increase card count per loop
						cardCount ++
						//continue recursion
						studyCards();
					}

				});//then function

	}//recursion if statement


}//studyCards function

studyCards();




