var result = document.getElementById("result");
var choices_obj = {
    'rock' : {
        'rock' : 'draw',
        'scissor' : 'win',
        'paper' : 'lose'
    },

    'scissor' : {
        'rock' : 'lose',
        'scissor' : 'draw',
        'paper' : 'win'
    },

    'paper' : {
        'rock' : 'win',
        'scissor' : 'lose',
        'paper' : 'draw'
    }
}

var [computer_score , user_score] = [0,0];

function cheacker(input){
    var choices = ["rock" , "paper" , "scissor"];
    var nums = Math.floor(Math.random() * 3);

    document.getElementById("comp_choice").innerHTML =  `Computer choice  <span>${choices[nums].toUpperCase()}</span>`;
    document.getElementById("user_choice").innerHTML =  `Your choice  <span>${input.toUpperCase()}</span>`;

    var computer_choices = choices[nums];
     
    switch (choices_obj[input][computer_choices])
     {
         case 'win':
             result.style = "background-color:#cefdce ; color : #689f38"
             result.innerHTML = "You Win";
             user_score++;
             break;
         case 'lose':
            result.style = "background-color:#ffdde0 ; color : #d32f2f "
            result.innerHTML = "You Lose";
            computer_score++;
            break;
         default :
            result.style = "background-color:#e5e5e5 ; color : #808080"
            result.innerHTML = "Draw";
            break;
     }
     document.getElementById("comp_score").innerHTML = computer_score;
     document.getElementById("user_score").innerHTML = user_score;
}
