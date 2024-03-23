console.log('Take off!',)

const  hexArray = '0123456789ABCDEF';

// Access each box from HTML
let box1 = document.querySelector('.colour-1')
let box2 = document.querySelector('.colour-2')
let box3 = document.querySelector('.colour-3')
let box4 = document.querySelector('.colour-4')
let box5 = document.querySelector('.colour-5')

const boxesArr = [box1, box2, box3, box4, box5]

// Generate a random colour for each box
const generateColour = () => {
    for (let b = 0; b < boxesArr.length; b++) {
        let newColour = '#';

            for (let i = 0; i < 6; i++) {
                newColour += hexArray[Math.floor(Math.random() * 16)]   
            }

        boxesArr[b].style.backgroundColor = newColour;
        boxesArr[b].innerHTML = newColour;
    }
}

// Set colours on page load
generateColour()

let btn = document.querySelector('.btn-random');
btn.addEventListener('click', generateColour);