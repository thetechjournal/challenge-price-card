const card1 =document.querySelector('.card1')
const card2 = document.querySelector('.card2');
const card3 = document.querySelector('.card3');

const card1Page1 = document.getElementById('card1-p1');
const card1Page2 = document.getElementById('card1-p2');
const card2Page1 = document.getElementById('card2-p1');
const card2Page2 = document.getElementById('card2-p2');
const card3Page1 = document.getElementById('card3-p1');
const card3Page2 = document.getElementById('card3-p2');

const closeOtherCards = (currentCard) => {
    switch (currentCard) {
        case '1':
            card2Page1.classList.remove('flipped');
            card3Page1.classList.remove('flipped');
            card2.classList.remove('invisible');
            card3.classList.remove('invisible');
            break;
        case '2':
            card1Page1.classList.remove('flipped');
            card3Page1.classList.remove('flipped');
            card1.classList.remove('invisible');
            if(card2Page1.classList.contains('flipped')) {
                card1.classList.add('invisible');
            } 
            break; 
        case '3':
            card1Page1.classList.remove('flipped');
            card2Page1.classList.remove('flipped');
            card1.classList.remove('invisible');
            card2.classList.remove('invisible');
            if(card3Page1.classList.contains('flipped')) {
                card2.classList.add('invisible');
            } 
            break;            
        default:
            break;
    }
}

const openCard1 = () => {
    closeOtherCards(currentCard = '1');
    card1Page1.classList.toggle('flipped');
}

const openCard2 = () => {
    card2Page1.classList.toggle('flipped');
    closeOtherCards(currentCard = '2');
}

const openCard3 = () => {
    card3Page1.classList.toggle('flipped');
    closeOtherCards(currentCard = '3');
   
}

card1.addEventListener('click', openCard1);
card2.addEventListener('click', openCard2);
card3.addEventListener('click', openCard3);



