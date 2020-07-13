function rollDice() {
    return Math.ceil(Math.random()*6)
}

var dice1 = rollDice()
var dice2 = rollDice()

document.querySelector('.img1').setAttribute('src','images/dice'+dice1+'.png')
document.querySelector('.img2').setAttribute('src','images/dice'+dice2+'.png')

if(dice1 > dice2) {
    document.querySelector('h1').textContent = '🚩Player 1 Wins!'
}

else if(dice1 < dice2) {
    document.querySelector('h1').textContent = 'Player 2 Wins!🚩'
}

else {
    document.querySelector('h1').textContent = 'Draw!'
}