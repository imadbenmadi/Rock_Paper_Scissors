let choises = ['Rock', 'Paper' , 'Scissors'] ;

function getComputerChoice(){
    let r = Math.floor(Math.random() * 3);
    let random_choise = choises[r];
    return random_choise;
}

function playRound(playerSelection , computerSelection){
    if (playerSelection == computerSelection)
        return 0;
    else if ((playerSelection == choises[0] && computerSelection == choises[1]) || (playerSelection == choises[1] && computerSelection == choises[2]) || (playerSelection == choises[2] && computerSelection == choises[0]))
        return -1;
    else 
        return 1;
}

function game(){
    let user_score = 0;
    let computer_score = 0;
    let Draw_score = 0;

    
    let counter = 0;
    while (counter < 5 ){
        // let user_input = parseInt(prompt("'Rock' \n 'Paper' \n 'Scissors' : "))
        // let user_choise = choises[user_input]
        let user_choise = "Rock"
        let computer_choise = getComputerChoice()



        // console.log(playRound(user_choise,computer_choise));
        if (playRound(user_choise,computer_choise) == 1 )
            user_score++;
        else if (playRound(user_choise,computer_choise) ==  -1 )
            computer_score++;
        else 
            Draw_score++;

        







        counter++;
    }



    let maxScore = Math.max(user_score, computer_score, Draw_score);

    if (maxScore === user_score) {
        console.log(`You win !  \nyour score is = ${user_score} \nComputer score is = ${computer_score} \nDraw times = ${Draw_score}`);
    } else if (maxScore === computer_score) {
        console.log(`You Lost !  \nyour score is = ${user_score} \nComputer score is = ${computer_score} \nDraw times = ${Draw_score}`);
    } else {
        console.log(`Draw ! \nyour score is = ${user_score} \nComputer score is = ${computer_score} \nDraw times = ${Draw_score}`);
    }

}

game();