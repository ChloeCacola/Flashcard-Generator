var inquirer = require("inquirer");
var cards = [];
var cardCount = 0;
var clozeText

//text is the question; cloze is the answer
function ClozeCard(text, cloze) {
	this.text = text
	this.cloze = cloze

}

//make the sentence complete 
ClozeCard.prototype.full = function() {
	//show sentence with a blank
	clozeDeleted = this.cloze
	clozeText = this.text

	//replace the incomplete sentence with the answer (cloze)
	clozeText = clozeText.replace("...", clozeDeleted);

	//show answer
	console.log(clozeText);

}


var card1 = new ClozeCard("Tom turkeys have an average of ... feathers.", "5500");
var card2 = new ClozeCard("Chickens can't see well in the dark because of ... evolution.", "convergent");

//push cards into the array
cards.push(card1);
cards.push(card2);



function studyCards() {
	//recursion loop to prompt each question individually w/inquirer (also using cardCount to print each questin by array position)
	if(cardCount < cards.length) {

				inquirer.prompt([
					{
						name: "partial",
						message: cards[cardCount].text
					}
				]).then(function(answer) {

					//if user's answer matches the cloze answer, log Correct, loop back through studyCards.
					if((answer.partial).toLowerCase() === cards[cardCount].cloze) {
						console.log("correct");
						//increase card count per loop
						cardCount ++
						//continue recursion 
						studyCards();
					} 
					else {
						//if user's answer does not match cloze answer, log Incorrect and show the full sentence.  
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




