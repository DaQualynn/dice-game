document.querySelector('button').addEventListener('click', function () {
  first_dice = Math.floor(((Math.random() * 6) + 1))
  second_dice = Math.floor(((Math.random() * 6) + 1))
  document.querySelector('#dice1').setAttribute('src', "Dicee Challenge - Starting Files/images/dice" +first_dice+ ".png");
  document.querySelector('#dice2').setAttribute('src', "Dicee Challenge - Starting Files/images/dice" +second_dice+ ".png");

  if(first_dice > second_dice){
    document.querySelector('h1').textContent = "Player one wins";
  }else if(first_dice == second_dice){
    document.querySelector('h1').textContent = 'Players tie';
  }else{
    document.querySelector('h1').textContent = 'Player two wins';
  }
});
