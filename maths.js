var answer;
var score = 0;
var backgroundImages = [];

function nextQuestion(){
	const n1 = Math.round(Math.random() * 5);
	document.getElementById('n1').innerHTML = n1;
	
	const n2 = Math.round(Math.random() * 5);
	document.getElementById('n2').innerHTML = n2;
	answer = n1+n2;
}

function checkAnswer(){
	const prediction = predictImage();
	console.log("Answer: " + answer+", prediction: "+prediction);
	
	if (prediction == answer){
      score++;
	  console.log('Score: '+score);
	  if(score <=6){
	  backgroundImages.push('url(images/background'+score+'.svg)');
	  document.body.style.backgroundImage = backgroundImages;
      }else{
		  alert('Well Done! Your Math garden is in full bloom! Want to start again? ');
		  score = 0;
		  backgroundImages = [];
		  document.body.style.backgroundImage = backgroundImages;
	  }
	  
	}else{
		if(score!=0){score--;}
		alert("Oops! You've Answered it Wrong! or Try to Write number properly");
		setTimeout(function(){
			backgroundImages.pop();
			document.body.style.backgroundImage = backgroundImages;
		}, 1000);
		console.log('Score: ', score);
		
		
	}
	
}