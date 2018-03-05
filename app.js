document.getElementById('qOne').style.display = "block";
document.getElementById('qTwo').style.display = "none";
document.getElementById('qThree').style.display = "none";
document.getElementById('qFour').style.display = "none";
document.getElementById('qFive').style.display = "none";
document.getElementById('qSix').style.display = "none";

document.getElementById('2ndpic').style.display = "none";
document.getElementById('row1col1').style.display = "none";
document.getElementById('row1col2').style.display = "none";
document.getElementById('row1col3').style.display = "none";
document.getElementById('row2col1').style.display = "none";
document.getElementById('row2col2').style.display = "none";
document.getElementById('row2col3').style.display = "none";

var x= "Wrong!";
var y = "Correct!";

/*Question 1*/

const q1Btn = document.getElementById('qOneBtn');
q1Btn.onclick = function() {
	const answer = document.getElementById('lyric1').value;
	const message = document.createElement('p');
	document.body.appendChild(message);

	if (answer == "God's plan by Drake") {
		message.textContent = y ;
		document.getElementById('qOne').style.display = "none";
		document.getElementById('row1col1').style.display = "block";
		document.getElementById('qTwo').style.display = "block";
	} else {
		message.textContent = x;
	}
};


/*Question 2*/ 

const q2Btn = document.getElementById('qTwoBtn');
q2Btn.onclick = function() {
	const answer = document.getElementById('lyric2').value;
	const message = document.createElement('p');
	document.body.appendChild(message);
	
	if (answer == "Perfect by Ed Sheeran") {

		message.textContent = y ;
		document.getElementById('qTwo').style.display = "none";
		document.getElementById('row1col1').style.display = "block";
		document.getElementById('row1col2').style.display = "block";
		document.getElementById('qThree').style.display = "block";	
	}else{
		message.textContent= x ;
		document.getElementById('row1col1').style.display = "block";
	}

};

/*Question 3*/
const q3Btn = document.getElementById('qThreeBtn');
q3Btn.onclick = function() {
	const answer = document.getElementById('lyric3').value;
	const message = document.createElement('p');
	document.body.appendChild(message);
	

	if (answer == "Finesse by Bruno Mars") {

		message.textContent = y ;
		document.getElementById('qThree').style.display = "none";
		document.getElementById('row1col1').style.display = "block";
		document.getElementById('row1col2').style.display = "block";
		document.getElementById('row1col3').style.display = "block";
		document.getElementById('qFour').style.display = "block";	
	}else{
		message.textContent= x ;
		document.getElementById('row1col1').style.display = "block";
		document.getElementById('row1col2').style.display = "block";
	}

};

/* Question 4*/ 
const q4Btn = document.getElementById('qFourBtn');
q4Btn.onclick = function() {
	const answer = document.getElementById('lyric4').value;
	const message = document.createElement('p');
	document.body.appendChild(message);
	
	if (answer == "Havana Camila Cabello") {

		message.textContent = y ;
		document.getElementById('qFour').style.display = "none";
		document.getElementById('row1col1').style.display = "block";
		document.getElementById('row1col2').style.display = "block";
		document.getElementById('row1col3').style.display = "block";
		document.getElementById('row2col1').style.display = "block";
		document.getElementById('qFive').style.display = "block";	
	}else{
		message.textContent= x ;
		document.getElementById('row1col1').style.display = "block";
		document.getElementById('row1col2').style.display = "block";
		document.getElementById('row1col3').style.display = "block";
	}

};

/* Question 5*/ 
const q5Btn = document.getElementById('qFiveBtn');
q5Btn.onclick = function() {
	const answer = document.getElementById('lyric5').value;
	const message = document.createElement('p');
	document.body.appendChild(message);
	
	if (answer == "Rockstar by Post Malone") {

		message.textContent = y ;
		document.getElementById('qFive').style.display = "none";
		document.getElementById('row1col1').style.display = "block";
		document.getElementById('row1col2').style.display = "block";
		document.getElementById('row1col3').style.display = "block";
		document.getElementById('row2col1').style.display = "block";
		document.getElementById('row2col2').style.display = "block";
		document.getElementById('qSix').style.display = "block";	
	}else{
		message.textContent= x ;
		document.getElementById('row1col1').style.display = "block";
		document.getElementById('row1col2').style.display = "block";
		document.getElementById('row1col3').style.display = "block";
		document.getElementById('row2col1').style.display = "block";
	}

};

/*Question 6 */
const q6Btn = document.getElementById('qSixBtn');
q6Btn.onclick = function() {
	const answer = document.getElementById('lyric6').value;
	const message = document.createElement('p');
	document.body.appendChild(message);
	

	if (answer == "Meant To Be by Beba Rexha") {

		message.textContent = y ;
		document.getElementById('qSix').style.display = "none";
		document.getElementById('row1col1').style.display = "block";
		document.getElementById('row1col2').style.display = "block";
		document.getElementById('row1col3').style.display = "block";
		document.getElementById('row2col1').style.display = "block";
		document.getElementById('row2col2').style.display = "block";
		document.getElementById('row2col3').style.display = "block";
			
	}else{
		message.textContent= x ;
		document.getElementById('row1col1').style.display = "block";
		document.getElementById('row1col2').style.display = "block";
		document.getElementById('row1col3').style.display = "block";
		document.getElementById('row2col1').style.display = "block";
		document.getElementById('row2col2').style.display = "block";
	
	}

};

