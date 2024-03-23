console.log('Take off!',)

const  hexArray = '0123456789ABCDEF';

// Access each box from HTML
let clr1 = document.querySelector('.colour-1')
let clr2 = document.querySelector('.colour-2')
let clr3 = document.querySelector('.colour-3')
let clr4 = document.querySelector('.colour-4')
let clr5 = document.querySelector('.colour-5')

const clrArr = [clr1, clr2, clr3, clr4, clr5]

// Generate a random colour for all boxes
const mixAll = () => {
    for (let c = 0; c < clrArr.length; c++) {
        let newColour = '#';

            for (let i = 0; i < 6; i++) {
                newColour += hexArray[Math.floor(Math.random() * 16)]   
            }

        clrArr[c].style.backgroundColor = newColour;
        clrArr[c].innerHTML = newColour;
    }
}

// Set colours on page load
mixAll()

let btnRandom = document.querySelector('.btn-random');
btnRandom.addEventListener('click', mixAll);


const generateOneClr = (e) => {
        let newColour = '#';
        for (let i = 0; i < 6; i++) {
            newColour += hexArray[Math.floor(Math.random() * 16)]   
        }

        e.style.backgroundColor = newColour;
        e.innerHTML = newColour;
}


clr1.addEventListener('click', () => generateOneClr(clr1))
clr2.addEventListener('click', () => generateOneClr(clr2))
clr3.addEventListener('click', () => generateOneClr(clr3))
clr4.addEventListener('click', () => generateOneClr(clr4))
clr5.addEventListener('click', () => generateOneClr(clr5))

